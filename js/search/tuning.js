/* Used to find list of most common words in docs
 * Run `node tuning.js` to log the 100 most common words */

var fs = require('fs');

var utils = require('./utils');

function findAllWords() {
	var data = fs.readFileSync('./index_default.json');
	var raw = JSON.parse(data).documentStore.store;
	var words = [];
	for (var key in raw) {
		words = words.concat(raw[key]);
	}
	return words;
}

function findStopWords() {
	var words = findAllWords();
	if (words.length < 100) {
		throw new Error('Less than 100 words to check for stop words');
	}
	var stop_words = [];
	var mode = '';
	for (var i = 0; i < 100; i++) {
		mode = utils.mode(words);
		stop_words.push(mode);
		words = utils.removeAllFromArray(words, mode);
	}
	return stop_words;
}

console.log(findStopWords());
