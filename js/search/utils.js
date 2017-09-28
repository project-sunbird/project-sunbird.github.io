var fs = require('fs'),
	cheerio = require('cheerio'),
	path = require('path');

var utils = {};

var excludes = require('./excluded_pages');

function excluder(path, excluded) {
    var i = 0;
    while (i < excluded.length) {
        if (path.indexOf(excluded[i]) > -1) {
            return true;
        }
        else {
            i++;
        }
    }
}

// Traverses a directory looking for index.html files
utils.walk = function(directoryPath) {
	var to_check = [],
		final_indexes = [];
	if (to_check.length < 1) { to_check = to_check.concat(fs.readdirSync(directoryPath)); }
	if (to_check.indexOf('index.html') > -1) {
            if (excluder(path.basename(directoryPath), excludes) == true) {
                console.log('Excluded page: ' + path.basename(directoryPath));
            }
            else {
                var subsections = utils.convertSubsectionsToJSON(directoryPath + '/index.html');
                if (path.basename(directoryPath) == 'ios') {
                    utils.addPlatform(subsections, 'ios');
                    final_indexes = final_indexes.concat(subsections);
                }
                else if (path.basename(directoryPath) == 'android') {
                    utils.addPlatform(subsections, 'android');
                    final_indexes = final_indexes.concat(subsections); }
                else {
                    utils.addPlatform(subsections, 'default');
                    final_indexes = final_indexes.concat(subsections); }
            }
	}
	for (var i = 0; i < to_check.length; i++) {
		if (fs.lstatSync(directoryPath + '/' + to_check[i]).isDirectory()) {
			final_indexes = final_indexes.concat(utils.walk(directoryPath + '/' + to_check[i]));
		}
	}
	to_check = to_check.shift();
	return final_indexes;
};

// Reads files and parses by h2/h3/h4 into JSON objects
// title: text inside of <a> tag with href="#...", excluding link icons
// body: all text between headers excluding tags
// url: og:url + href
// 1. Read file 2. Split by header tag 3. Grab title information/href 4. Split by other header tag 5. Remove tags and add information to body
var id_counter = 0;
utils.convertSubsectionsToJSON = function(filePath) {
    var JSON_data = [];//    for (var i = 0; i < excludes.length; i++) {
        if (excluder(filePath, excludes) == true) {
//            console.log('Excluded subpage: ' + filePath);
        }
        else {
            var data = fs.readFileSync(filePath);
            var $ = cheerio.load(data.toString());
            $('h2, h3').each(function() {
                var og_url = $('meta[property="og:url"]').attr('content');
                var url = ($(this).children('a[href^="#"]').attr('href')) ? '' + og_url + $(this).children('a[href^="#"]').attr('href') : '' + og_url;
                var JSON_obj = {
                    title: $(this).contents().eq(1).contents().eq(1).text(),
                    id: id_counter++,
                    // Gets all elements between each header and outputs their text
                    body: $(this).nextUntil('h2, h3').not('script').text(),
                    url: url,
                    origin: $('.inner__content').find('h1').first().text()
                };
                JSON_data.push(JSON_obj);
            });
            $('h1').each(function() {
                var og_url = $('meta[property="og:url"]').attr('content');
                var url = ($(this).children('a[href^="#"]').attr('href')) ? '' + og_url + $(this).children('a[href^="#"]').attr('href') : '' + og_url;
                var JSON_obj = {
                    title: $(this).text(),
                    id: id_counter++,
                    // Gets all elements between each header and outputs their text
                    body: $(this).nextUntil('h2, h3').not('script').text(),
                    url: url,
                    origin: utils.getOrigin(url)
                };
                JSON_data.push(JSON_obj);
            });
        }
    return JSON_data;
};

utils.firstWord = function(query) {
	return query.split(' ')[0];
};

utils.isSubstringArray = function(arr, term) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].toLowerCase().indexOf(term) > -1) {
			return arr[i];
		}
	}
	return null;
};

// Taken from http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
utils.mode = function(arr) {
    if (arr.length == 0) { return null; }
    var modeMap = {};
    var maxEl = arr[0], maxCount = 1;
    for (var i = 0; i < arr.length; i++) {
		var el = arr[i];
		if (modeMap[el] == null) { modeMap[el] = 1; }
		else { modeMap[el]++; }
		if (modeMap[el] > maxCount) {
			maxEl = el;
			maxCount = modeMap[el];
		}
    }
    return maxEl;
};

utils.removeAllFromArray = function(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == val) {
			arr.splice(i, 1);
			i--;
		}
	}
	return arr;
};

// Gives the title of the page that the result is on
utils.getOrigin = function(url) {
    var origin = path.basename(path.dirname(url));
    if (origin == 'ios' || origin == 'android' || origin == 'xamarin' || origin == 'unity' || origin == 'cordova' || origin == 'adobe' || origin == 'titanium' || origin == 'react') {
        origin = path.basename(path.dirname(path.dirname(path.dirname(url))));
    }
    else if (origin == 'overview' || origin == 'guide' || origin == 'advanced' || origin == 'support') {
        origin = path.basename(path.dirname(path.dirname(url)));
    }
    var parts = origin.replace(/_/g, ' ');
    parts = parts.replace(/-/g, ' ');

    return parts.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

utils.addPlatform = function(subsections, platform) {
	for (var i = 0; i < subsections.length; i++) {
		subsections[i].os = platform;
	}
	return subsections;
};

module.exports = utils;
