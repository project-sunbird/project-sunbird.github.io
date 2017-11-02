var alt = require('../support/alt'),
	TabsActions = require('../actions/TabsActions');

var serialize = function(options) { return options.sort().join(','); };

function getActiveState(options) {
	var active_tab;
	if (typeof localStorage !== 'undefined') {
		active_tab = localStorage.getItem(serialize(options));
	}
	return active_tab || 0;
}

var TabsStore = function() {
	return {
		displayName: 'TabsStore',
		bindListeners: {
			onUpdate: TabsActions.update
		},

		state: {
			active_tabs: {}
		},

		publicMethods: {
			getActive: function(options) {
				return this.getState().active_tabs[serialize(options)] || getActiveState(options);
			}
		},

		onUpdate: function(data) {
			localStorage.setItem(serialize(data.options), data.i);
			this.state.active_tabs[serialize(data.options)] = data.i;
		}
	};
};

module.exports = alt.createStore(TabsStore());
