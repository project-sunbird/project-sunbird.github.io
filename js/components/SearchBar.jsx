var React = require('react'),
	R = require('ramda'),
	lunr = require('lunr');

var SearchStore = require('../stores/SearchStore'),
	SearchActions = require('../actions/SearchActions'),
	customSWF = require('../search/custom_stop_word_filter'),
	utils = require('../search/utils');

function getStateFromStore() {
	return SearchStore.getState();
}

var SearchBar = React.createClass({
	getInitialState: function() {
		return R.merge({ field: '', resultsClass: 'search-results', iconClass: 'material-icons', iconContent: 'search' }, SearchStore.getState());
	},
	componentDidMount: function() {
		lunr.Pipeline.registerFunction(customSWF, 'customSWF');
		SearchStore.listen(this._onChange);
	},
	componentWillUnmount: function() {
		SearchStore.unlisten(this._onChange);
	},
	_onChange: function() {
		this.setState(getStateFromStore());
	},

	inputChanged: function(event) {
		this.setState({ field: event.target.value }, function(err) {
			var term = this.state.field;

			if (err) { throw err; }
			if (!this.state.isLoaded) { return; }

			SearchActions.search(this.state.field, this.state.indexes);
			if (this.state.field.length == 0) {
				this.setState({
				  iconClass: 'material-icons',
				  iconContent: 'search',
				  resultsClass: 'search-results'
				});
			}
			else if (this.state.field.length) {
				this.setState({
				  iconClass: 'material-icons icon-close',
				  iconContent: 'close',
				  resultsClass: 'search-results results-open'
				});
				if (this.timeout) { clearTimeout(this.timeout); }
				this.timeout = setTimeout(function() {
					mixpanel.track("Typed in Search Term", { "Search Term": term, "Section": "Search" });
				}, 500);
			}
		});
	},
	handleClose: function() {
		this.setState({
		  resultsClass: 'search-results',
			field: '',
		  iconClass: 'material-icons',
		  iconContent: 'search'
		});
	},
	startSearch: function() {
		if (!this.state.isLoaded && !this.state.isLoading) { SearchActions.loadIndex(); }
	},
	render: function() {
		var field = this.state.field;
		if (this.state.results.length) {
			var self = this;
			var results = R.map(function(result) {
				return (
					<SearchResult
						title={result.title}
						link={result.url}
						origin={result.origin}
						context={result.context}
						key={result.id}
						term={field} />);
			}, this.state.results);
		}
		return (
			<div className="search">
				<div className="search-icon">
					<i className={this.state.iconClass} onClick={this.handleClose}>{this.state.iconContent}</i>
				</div>
				<div className="search-bar">
					<form>
						<input
							type="text"
							name="search"
							className=""
							autoComplete="off"
							placeholder="Search"
							onChange={this.inputChanged}
							onFocus={this.startSearch}
							value={this.state.field} />
					</form>
				</div>
				<div className={this.state.resultsClass}>
					{results}
				</div>
			</div>
		);
	}
});

var SearchResult = React.createClass({
	_onClick: function() {
		mixpanel.track("Clicked Search Result", { "Link": this.props.link, "Search Term": this.props.term, "Section": "Search" });
		window.location = this.props.link;
	},
	render: function() {
		return (
			<div className="search-results__result" onClick={this._onClick}>
				<a href={this.props.link} className="search-results__result__link">{this.props.title}
					<span className="search-results__result_span"></span>
				</a>
				<span className="search-results__result__origin">{this.props.origin}</span>
				<span className="search-results__result__context">{this.props.context[0]}<strong>{this.props.context[1]}</strong>{this.props.context[2]}</span>
			</div>);
	}
});

module.exports = SearchBar;
