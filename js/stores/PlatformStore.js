var alt = require('../support/alt'),
	PlatformActions = require('../actions/PlatformActions');

function getPlatformState() {
	var platform;
	if (typeof localStorage !== 'undefined') {
		platform = localStorage.getItem('platform');
	}
	return platform || 'ios';
}

var PlatformStore = function() {
	return {
		displayName: 'PlatformStore',
		bindListeners: {
			onUpdatePlatform: PlatformActions.updatePlatform,
			onLoadDefaulted: PlatformActions.loadDefaulted
		},

		state: {
			platform: getPlatformState(),
			defaulted: false
		},

		onUpdatePlatform: function(platform) {
			localStorage.setItem('platform', platform);
			this.state.platform = platform;
		},
		onLoadDefaulted: function(data) {
			this.state.defaulted = data.defaulted;
			if (!data.defaulted) {
				this.onUpdatePlatform(data.current_platform);
			}
		}
	};
};

module.exports = alt.createStore(PlatformStore());
