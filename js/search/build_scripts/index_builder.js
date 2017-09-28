/* Creates a master file including the
 * 1. JSON_data - aggregate data of all subsections of pages
 * 2. Index - search index
 * 3. Platform Terms - platform specific terms */

var lunr = require('lunr'),
	fs = require('fs'),
	path = require('path'),
	R = require('ramda');

var utils = require('../utils'),
	customSWF = require('../custom_stop_word_filter');

var __dirname;

var directoryPaths = [ path.resolve(__dirname, '../../../architecture'), path.resolve(__dirname, '../../../features')];

// Creates an object of three different arrays of objects for default, ios, and android
// directories: the directories to gather JSON data from, defaults to recipes, references, and overviews
function outPutJSONData(directories) {
	var JSON_data = [];
	for (var i = 0; i < directories.length; i++) {
		JSON_data = JSON_data.concat(utils.walk(directories[i]));
	}
	console.log('1. JSON data stored.');
	return JSON_data;
}

// Create the index
// output: the file to put the index into
// ind: the key of JSON data to use {default, ios, android}
function buildIndex(JSON_data) {
	lunr.Pipeline.registerFunction(customSWF, 'customSWF');
	var index = lunr(function() {
		this.ref('id');
		// boost increases the importance of words found in this field

		this.field('title', { boost: 10 });
		this.field('origin', { boost: 10 });
		this.field('body');
		this.field('url');

		this.pipeline.add(customSWF);
	});

	var raw = JSON_data;

	raw.forEach(function(section) {
		index.add(section);
	});
	console.log('2. Index created');
	return index;
}

// Scrapes the words used on the pages for a platform from its index
function getPlatformTerms(JSON_data, platform) {
	var terms = [];
	for (var k = 0; k < JSON_data.length; k++) {
		if (JSON_data[k].os == platform) {
			var keywords = JSON_data[k].body.split(/[\s\n.:()@,\"\/;<>\'“"\[\]^!]/);
			for (var j = 0; j < keywords.length; j++) {
				if (terms.indexOf(keywords[j]) == -1) {
					terms.push(keywords[j]);
				}
			}
		}
	}
	return terms;
}

// Compares the words used between platforms and find the platform specific terms
function comparePlatformTerms(JSON_data) {
	var ios_terms = getPlatformTerms(JSON_data, 'ios').sort();
	var android_terms = getPlatformTerms(JSON_data, 'android').sort();
	var results = { 'ios': R.difference(ios_terms, android_terms), 'android': R.difference(android_terms, ios_terms) };
	console.log('3. Platform terms created');
	return results;
}

function build() {
	var masterFile = {};
	masterFile.JSON_data = outPutJSONData(directoryPaths);
	masterFile.indexes = buildIndex(masterFile.JSON_data);
	masterFile.platform_terms = comparePlatformTerms(masterFile.JSON_data);
	fs.writeFile(path.resolve(__dirname, '../master_data.json'), JSON.stringify(masterFile), 'utf-8', function(err) {
		if (err) { throw err; }
		console.log('New master written.');
	});
}

build();
