var lunr = require('lunr');

var alt = require('../support/alt'),
	utils = require('../search/utils'),
	SearchActions = require('../actions/SearchActions');

// Take in the form data and returns whether any of the words are ios/android specific to choose which index to search
function platformFromQuery(query, data) {
	var words = query.split(' ');
	for (var i = 0; i < words.length; i++) {
		if (data.platform_terms.ios.indexOf(words[i]) > -1) {
			return 'ios';
		}
		else if (data.platform_terms.android.indexOf(words[i]) > -1) {
			return 'android';
		}
	}
	return 'none';
}

// Returns whether the current query is platform specific
function indexSource(term, data) {
	if (platformFromQuery(term, data) == 'ios') {
		return 'ios';
	}
	else if (platformFromQuery(term, data) == 'android') {
		return 'android';
	}
}

function search(term, data) {
	var dump = data.indexes;
	var index = lunr.Index.load(dump);
	var subsections = data.JSON_data.map(function(raw) {
		return {
			id: raw.id,
			title: raw.title,
			body: raw.body,
			url: raw.url,
			origin: raw.origin,
			os: raw.os
		};
	});

	var results = index.search(term).map(function(result) {
		return subsections.filter(function(q) { return q.id == result.ref; })[0];
	});

	return results;
}

// Returns the top 5 results of search
function getTop5Results(term, data) {
	var results = search(term, data);

	var top5_results = [];
	var top5_titles = [];
	var i = 0;

	while (top5_results.length < 5 && results[0] && i < 20) {
		if (results[0].os == indexSource(term, data) || results[0].os == 'default') {
			if (top5_titles.indexOf(results[0].title) == -1) {
				results[0].context = getContext(results[0], 7, term);
				top5_results.push(results[0]);
				top5_titles.push(results[0].title);
			}
		}
		results.shift();
		i++;
	}
	return top5_results;
}

// Gives a context to the first search term within the result
function getContext(result, accuracy, query) {
	var term = utils.firstWord(query);
	var body = result.title.split(' ').concat(result.body.split(' '));
	var index_term = body.indexOf(term);
	var pre_context = [],
		post_context = [],
		word = ' ';
	if (index_term == -1) {
		term = utils.isSubstringArray(body, term);
		index_term = body.indexOf(term);
	}
	for (var i = 0; i < accuracy; i++) {
		if (body[index_term - (accuracy - i)]) { word = body[index_term - (accuracy - i)]; }
		if (word.length > 20) { word = word.substring(0, 20) + '...'; }
		pre_context.push(word);
	}
	for (var j = 0; j < accuracy; j++) {
		if (body[index_term + j + 1]) { word = body[index_term + j + 1]; }
		if (word.length > 20) { word = word.substring(0, 20) + '...'; }
		post_context.push(word);
	}
	return [ pre_context.toString().replace(/,/g, ' ') + ' ', term, ' ' + post_context.toString().replace(/,/g, ' ') ];
}
var SearchStore = function() {
	return {
		displayName: 'SearchStore',
		bindListeners: {
			onIndexLoad: SearchActions.loadIndex,
			onLoading: SearchActions.loading,
			onSearch: SearchActions.search
		},

		state: {
			results: [],
			indexes: {},
			isLoading: false,
			isLoaded: false
		},

		onIndexLoad: function(index) {
			this.state.indexes = index;
			this.state.isLoaded = true;
		},

		onLoading: function() {
			this.state.isLoading = true;
		},

		onSearch: function(query) {
			// Checks if the query is empty
			if (!query.length) {
				this.state.results = [];
			}
			// Makes sure results stay showing if the next letter added/removed from the query doesn't turn up any search results
			else {
				var results = getTop5Results(query, this.state.indexes);
				if (results.length) {
					this.state.results = results;
				}
			}
		}
	};
};

module.exports = alt.createStore(SearchStore());
