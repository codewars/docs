module.exports = {
  rules: {
    "common-misspellings": true,
    diacritics: true,
    "en-capitalization": {
      severity: "warning",
      // Check Header
      allowHeading: true,
      // Check Image alt
      allowFigures: false,
      // Check ListItem
      allowLists: false,
    },
    "stop-words": {
      severity: "warning",
    },
    "write-good": {
      severity: "warning",
    },
    terminology: {
      // Load default terms
      defaultTerms: true,
      // Additional terms
      terms: [],
      // Excludeded terms
      exclude: [],
    },
  },
  filters: {
    // For <!-- textlint-disable -->
    comments: true,
  },
};
