var alt = require('../support/alt');

var PlatformActions = function() {
	return {
		updatePlatform: function(selected_platform) { this.dispatch(selected_platform); },
		loadDefaulted: function(data) { this.dispatch(data); }
	};
};

module.exports = alt.createActions(PlatformActions());
