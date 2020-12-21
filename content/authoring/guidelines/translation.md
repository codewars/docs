---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/reference-solution/
next: /authoring/guidelines/kata/
---

# Translation Authoring Guidelines

This article contains a set of guidelines, which can be used by translators to create good translations to existing kata. They were collected to help ensure that translations are of sufficient quality and users' experience will be as good as possible.

## General translation guidelines

- **Respect the [General Content Guidelines][authoring-guidelines-general].**
- **Translations should improve the overall quality of the kata.** The sub-optimal quality of existing, approved translations should not be used as an excuse for authoring a low-quality translation. In particular:
  - The description can be clarified if necessary.
  - The test suite may employ a different structure from that of other translations. **The [sample][authoring-guidelines-sample-tests] and [submission][authoring-guidelines-submission-tests] tests (including [random tests][authoring-guidelines-submission-tests-random]) should conform to Codewars quality guidelines.**
  - If serious issues with other language versions are uncovered while translating, they should be fixed in the translation and appropriate issues should be raised about all other concerned languages in the kata discourse.


## Conformity to overall kata idea

A translation should substantially change neither the overall idea nor the requirements of the kata. It should be as consistent as possible with the original version in terms of difficulty, required performance, and overall composition. In particular:

- **Respect the performance requirements of the kata.** If, for example, it's agreed that the kata should accept only (sub)linear solutions, make sure that the translated tests reject solutions of higher computational complexity. Languages and runtimes differ in terms of performance, so increase/decrease the amount of test cases and input ranges accordingly.
- If possible, your translation should hold to the **original author's idea**. In case of doubts, you can always ask them for opinions, or use the initial language version as a baseline. However, especially for older kata, it may happen that the initial version (and other older versions) are outdated, and the concept of the kata evolved. You can ask kata contributors or other users for opinion and ideas on how to proceed.
- **Avoid translations to languages which cannot support the idea of the kata.** For example, there's no use in translating a big integer arithmetic kata to Python, which supports arbitrary precision integers natively. Do not translate kata into languages where the difficulty would significantly differ: from high level languages to NASM or BF, or into languages where the kata becomes much easier because it can be solved with easy to use, advanced features of the standard library (or other available libraries).


## Description

- **Respect guidelines for [Writing a Kata Description][authoring-guidelines-description].**
- **Use [Codewars Markdown Extensions][markdown-extensions]** to organize language specific parts of the description, if present. Add sections specific to your language if necessary.
- If possible, **avoid displaying many language variants to the user**. Use [conditional paragraphs][markdown-extension-conditional-rendering] to display information revelant to the currently viewed language.
- If a translation can pass tests only when run with some specific language runtime, it should be specified in the description.


## Code components

- **Respect the [General Coding Guidelines][authoring-guidelines-general-coding], any conventions imposed by your [language][languages] and guidelines specific to each component of the kata**:
  - [preloaded code][authoring-guidelines-preloaded],
  - [reference solution][authoring-guidelines-reference-solution],
  - [sample tests][authoring-guidelines-sample-tests],
  - [submission tests][authoring-guidelines-submission-tests].
- **Sample tests and fixed tests should remain consistent between translations**, except in some rare cases when it's not feasible due to inherent differences in programming languages. It can save follow-up questions on the language a user is attempting the kata in when a question on failing tests is raised in the kata discourse.
- Sometimes, the description is not the best place to put some language specific information. For example, the translator may wish to add some information on arguments, data formats, memory management, etc. and keep the description language-agnostic at the same time. In such cases, it's allowed to put such information as an explanatory comment in the solution setup.


## Maintenance

- **You are responsible for your translations.** As long as you're an active Codewars user, you should address quality issues in translations you authored: fix issues, consider suggestions, and answer questions, which might come up later when users attempt to submit their solutions. See [translation curation guidelines][translation-curation-guidelines] for more guidelines on maintenance of translations.

[translation-curation-guidelines]: /curating/guidelines/translation/
[authoring-guidelines-description]: /authoring/guidelines/description/
[authoring-guidelines-general-coding]: /authoring/guidelines/coding/
[authoring-guidelines-general]: /authoring/guidelines/
[authoring-guidelines-preloaded]: /authoring/guidelines/preloaded/
[authoring-guidelines-reference-solution]: /authoring/guidelines/reference-solution/
[authoring-guidelines-sample-tests]: /authoring/guidelines/sample-tests/
[authoring-guidelines-submission-tests-random]: /authoring/guidelines/submission-tests/#random-tests
[authoring-guidelines-submission-tests]: /authoring/guidelines/submission-tests/
[languages]: /languages/
[markdown-extensions]: /references/markdown/extensions/
[markdown-extension-conditional-rendering]: /references/markdown/extensions/#conditional-rendering
