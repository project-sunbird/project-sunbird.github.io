var React = require('react'),
	R = require('ramda'),
	utils = require('../support/utils');
var cx = utils.cx;

var PlatformStore = require('../stores/PlatformStore'),
	PlatformActions = require('../actions/PlatformActions');

function getStateFromStore() {
	return PlatformStore.getState();
}

var PlatformSelector = React.createClass({
	getInitialState: function() {
		return getStateFromStore();
	},

	componentDidMount: function() {
		PlatformStore.listen(this._onChange);
	},
	componentWillUnmount: function() {
		PlatformStore.unlisten(this._onChange);
	},
	_onChange: function() {
		this.setState(getStateFromStore());
	},
	_handleClick: function(key) {
		return function() { PlatformActions.updatePlatform(key); }
	},
	render: function() {
		var self = this;
		var platforms = R.map(function(platform) {

			classes = {
				'btn btn-default': true,
				'btn-inactive': self.props.url_platform != platform.key
			}
			var platform_path = utils.pageHasPlatform(self.props.site_map, self.props.current_path, platform.key) ? platform.key : '';
			return (
				<a
					className={ cx(classes) }
					key={ platform.key }
          url_platform={ self.props.url_platform }
					href={ '/' + self.props.current_path + '/' + self.props.url_section + '/' + platform_path }
					onClick={ self._handleClick(platform.key) }>
					{ platform.name }
				</a>);
		});

		return (
			<div id="platform-selector" className="platform-selector">
				<div className="btn-group">
					{ platforms(this.props.platforms) }
				</div>
			</div>);
	}
});

module.exports = PlatformSelector;
