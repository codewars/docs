---
kind: recipe
---

# Creating a translation

_TBD: this page was imported from old CW wiki and needs to be reviewied/redacted._

TODO: this page would relate to creating both initial langiuage version, as well as new translation
- snippets
- tests (sample, random)
- consistency between versions

## Remarks on translating

### Avoid creativity

A translation is essentially just a "port" of the original kata to a new language. Every aspect of the original kata should be retained.

The original kata sensei has probably invested a lot of time to make the kata in the first place.

Homogeneity across all languages is key to a good kata, and a kata "satisfaction rating" can easily be impacted by the quality of a translation, so it is the responsibility of the translator to maintain every intent of the original kata sensei.

Specifically

- do not change the kata description unless it is wrong or incomplete and the kata author cannot improve it themselves
- do not change the original kata input or output unless the translation language has more fitting data types the usage of which would conform to the language's best practices
- do not change any test cases, or refactor any of them to be grouped differently unless the kata introduces various limitatations (e.g. performance requirements or maximum allowed code length) which are usually language-specific
- do not add your own "cute" comments in the code
- do not make any of your own "improvements" without informing the kata sensei why they were required

The one notable exception to the last bullet point above is with regards to random tests. It is not uncommon for katas (published in the earlier years of Codewars) to lack random tests. In such cases, translations are still expected to include random tests, except in rare instances where random tests are simply not applicable.

### Consider relevance

Not all kata can be translated to all languages.

For example, if the kata is of a "Bugfix" type, the problem may not be applicable to other languages. If it feels like you are jamming a square peg into a round hole to create the translation then do not do it.

Another example would be when there is a disparity in difficulty between a translation and the original kata. For instance, a language that requires a user to write out an entire algorithm will require a great deal more legwork versus a language which provides the same algorithm as a built-in or importable module (e.g. Python, known for being "batteries included"). In short, if the translation (or the bulk of it) can be solved with a simple import and that option is not available in the original kata, that translation may not be suitable for publishing.

### Language conventions

The translation must use the naming, language, and syntax conventions of the language it is translated to.

### Shared Descriptions

Please note, the description is shared among all kata languages. Do not add or remove anything specific to your language unless absolutely necessary. In that case use [sequenced code blocks](https://github.com/Codewars/codewars.com/wiki/Markdown-Formatting#sequenced-code-blocks) and [optional section formatting](https://github.com/Codewars/codewars.com/wiki/Markdown-Formatting#optional-section-formatting) - add a new block using the formatter for your language and it will be displayed only when that particular language is selected in the kata overview, solutions page, discourse, and trainer.

## How to announce your translation

When you publish your translation the original kata sensei will be automatically notified that your effort is pending their approval. But it is also good practice to write a comment in the kata "Discourse" to announce what you have done. This way, if the original author has been absent from Codewars for a prolonged period of time, another qualified user can review and approve in their place.

Tip: marking that comment as a `suggestion` will also help your translation from being accidentally overlooked.