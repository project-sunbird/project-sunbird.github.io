var alt = require('../support/alt');

var SectionActions = function() {
  return {
    updateSection: function(selected_section) { this.dispatch(selected_section); },
    loadDefaulted: function(data) { this.dispatch(data); }
  };
};

module.exports = alt.createActions(SectionActions());
