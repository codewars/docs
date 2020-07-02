module.exports = {
  rules: {
    "common-misspellings": true,
    diacritics: true,
    "en-capitalization": {
      // Allow lower-case words in Header
      allowHeading: true,
      // Allow lower-case words in Image alt
      allowFigures: true,
      // Allow lower-case words in ListItem
      allowLists: true,
      // Allowlist
      allowWords: [],
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
