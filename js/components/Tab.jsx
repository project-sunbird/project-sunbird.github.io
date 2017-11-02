var React = require('react');

var Tab = React.createClass({
	render: function() {
		return (
			<div className="tab">
				{ this.props.children }
			</div>);
	}
});

module.exports = Tab;
