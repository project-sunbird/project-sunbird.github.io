var React = require('react'),
	R = require('ramda'),
	cx = require('../support/utils').cx;

var Breadcrumb = React.createClass({
	render: function() {
		if (!this.props.href) {
			return (<li>{ this.props.label }</li>);
		}
		else if (this.props.href == '#') {
			return (<li>{ this.props.label }<i className="material-icons">chevron_right</i></li>);
		}
		else {
			return (<li><a href={ this.props.href }>{ this.props.label }</a><i className="material-icons">chevron_right</i></li>);
			// return (<li>{ this.props.label }<i className="fa fa-chevron-right"></i></li>);
		}
	}
});

var Breadcrumbs = React.createClass({
	extractPath: function(tree, str) {
		if (tree === str) {
			return [ str ];
		}
		var result = null;
		if (tree.children) {
			tree.children.forEach(function(value) {
				var extractRes = this.extractPath(value, str);
				if (extractRes !== null) {
					extractRes.push(tree.title);
					result = extractRes;
				}
			}.bind(this));
		}
		return result;
	},
	render: function() {
		var path = this.props.current_path.split('/'),
			currentPage = path[path.length - 1],
			layout = this.props.layout;

		var links = [],
			breadcrumbs;
		R.map(function(tree) {
			var extract = this.extractPath(tree, currentPage);
			if (extract !== null) {
				breadcrumbs = extract;
			}
		}.bind(this))(layout);

		if (breadcrumbs) {
			breadcrumbs = breadcrumbs.reverse();
			var breadcrumbsCount =  breadcrumbs.length;
			var page_title = this.props.page_title;
			var current_path = this.props.current_path.split('/')[0];
			breadcrumbs.forEach(function(link, index) {
				if (index == breadcrumbsCount - 1) {
					links.push(<Breadcrumb label={ page_title } />);
				}
				else if (index == 0) {
					links.push(<Breadcrumb label={ link } href={ '/' + current_path } />);
				}
				else {
					links.push(<Breadcrumb label={ link } href='#' />);
				}
			});
		}

		return (<ul className="breadcrumbs">
			{ links }
		</ul>);
	}
});

module.exports = Breadcrumbs;
