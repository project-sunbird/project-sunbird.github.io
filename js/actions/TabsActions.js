var alt = require('../support/alt');

var TabsActions = function() {
	return {
		update: function(i, options) { this.dispatch({ i: i, options: options }); }
	};
};

module.exports = alt.createActions(TabsActions());
