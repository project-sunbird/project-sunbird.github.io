var React = require('react'),
  R = require('ramda'),
  utils = require('../support/utils');
var cx = utils.cx;

var SectionStore = require('../stores/SectionStore'),
  SectionActions = require('../actions/SectionActions');

var PlatformStore = require('../stores/PlatformStore'),
  PlatformActions = require('../actions/PlatformActions');

function getSectionStateFromStore() {
  return SectionStore.getState();
}

function getStateFromStore() {
  return PlatformStore.getState();
}

var SectionSelector = React.createClass({
  getInitialState: function() {
    return getStateFromStore();
  },

  componentDidMount: function() {
    SectionStore.listen(this._onChange);
  },
  componentWillUnmount: function() {
    SectionStore.unlisten(this._onChange);
  },
  _onChange: function() {
    return;
  },
  _handleClick: function(key) {
    return;
  },
  render: function() {
    var self = this;
    var sections = R.map(function(section) {
      classes = {
        'section': true,
        'section-inactive': self.props.url_section != section.key
      }

      platform = self.state.platform;
      var section_path = utils.pageHasSection(self.props.site_map, self.props.current_path, section.key) ? section.key : '';
      var platform_path = utils.pageHasPlatform(self.props.site_map, self.props.current_path, platform) ? platform : '';

      if (section.key == 'overview') {
        platform_path = '';
      }
      else {
        platform_path = '/' + platform_path;
      }

      return (
        <a
          className={ cx(classes) }
          key={ section.key }
          url_section={ self.props.url_section }
          href={ '/' + self.props.current_path + '/' + section_path + platform_path }
          onClick={ self._handleClick(section.key) }>
          { section.name }
        </a>);
    });

    return (
      <div className="section-selector">
        <div className="section-group">
          { sections(this.props.sections) }
        </div>
      </div>);
  }
});

module.exports = SectionSelector;
