var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var TabsStore = require('../stores/TabsStore'),
	TabsActions = require('../actions/TabsActions');

var getOptionsFromChildren = R.map(R.path([ 'props', 'name' ]));

function getState(options) {
	return { active: TabsStore.getActive(options), options: options };
}

var Tabs = React.createClass({
	getInitialState: function() {
		var options = getOptionsFromChildren(this.props.children);
		return getState(options);
	},
	componentDidMount: function() {
		TabsStore.listen(this._onChange);
	},
	componentWillUnmount: function() {
		TabsStore.unlisten(this._onChange);
	},
	_onChange: function() {
		this.setState(getState(this.state.options));
	},
	_toggleTab: function(i) {
		return function() {
			TabsActions.update(i, this.state.options);
			this.setState({ active: i });
		}.bind(this);
	},
	render: function() {
		var self = this;

		var optionButtons = R.mapIndexed(function(val, i) {
			var classes = {
				'btn': true,
				'btn-inactive': i != self.state.active
			};
			return (<a key={ i } className={ cx(classes) } onClick={ self._toggleTab(i) }>{ val }</a>);
		});

		return (
			<div className="tabs">
				<div>
					{ this.props.children[this.state.active] }
				</div>
				<div className="switcher">
					<div className="text-right btn-group">
						{ optionButtons(this.state.options) }
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Tabs;
