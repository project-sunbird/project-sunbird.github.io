var alt = require('../support/alt'),
  SectionActions = require('../actions/SectionActions');

function getSectionState() {
  var section;
  if (typeof localStorage !== 'undefined') {
    section = localStorage.getItem('section');
  }
  return section || 'guide';
}

var SectionStore = function() {
  return {
    displayName: 'SectionStore',
    bindListeners: {
      onUpdateSection: SectionActions.updateSection,
      onLoadDefaulted: SectionActions.loadDefaulted
    },

    state: {
      section: getSectionState(),
      defaulted: false
    },

    onUpdateSection: function(section) {
      localStorage.setItem('section', section);
      this.state.section = section;
    },
    onLoadDefaulted: function(data) {
      this.state.defaulted = data.defaulted;
      if (!data.defaulted) {
        this.onUpdateSection(data.current_section);
      }
    }
  };
};

module.exports = alt.createStore(SectionStore());
