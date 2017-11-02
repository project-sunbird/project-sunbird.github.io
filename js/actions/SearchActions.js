var superagent = require('superagent');

var alt = require('../support/alt');

var SearchActions = function() {
	return {
		loading: function() {
			this.dispatch();
		},

		loadIndex: function() {
			var self = this;
			this.actions.loading();
			superagent.get('/js/search/master_data.json').end(function(err, res) {
				if (err) { throw err; }
				self.dispatch(JSON.parse(res.text));
			});
		},

		search: function(query) {
			this.dispatch(query);
		}
	};
};

module.exports = alt.createActions(SearchActions());
