---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata/
next: /recipes/authoring/kumite/
---

# Creating a Translation

This article contains a set of guidelines, which can be used by translators to create good translations to existing kata. They were collected to help ensure that translations are of sufficient quality and users' experience will be as good as possible.

The guidelines should be used by translators and reviewers to verify whether translations about to be introduced into Codewars are of sufficient quality. Conformance with them should be verified before the translation is published and before it's approved.

Failure to comply with the below guidelines is considered an issue and should be reported as such. In case of severe violations, the affected translation can be rejected or even deleted.

## General translation guidelines

- **Respect the [General Content Guidelines](/recipes/authoring/general/).**
- **Translations should improve the overall quality of the kata.** The sub-optimal quality of existing, approved translations should not be used as an excuse for authoring a low-quality translation. In particular:
  - The description can be clarified if necessary.
  - The test suite may employ a different structure from that of other translations. **The [sample](/recipes/authoring/kata-snippets/sample-tests/) and [submission](/recipes/authoring/kata-snippets/full-tests/) tests (including [random tests](/recipes/authoring/kata-snippets/full-tests/#random-tests)) should conform to Codewars quality guidelines.**
  - If serious issues with other language versions are uncovered in the course of authoring a translation, they should be fixed or raised as appropriate issues in the kata discourse.


## Conformance to overall kata idea

A translation should not substantially change the overall idea of the kata. It should be as consistent as possible with the original version in terms of difficulty, required performance, and overall composition. In particular:

- **Respect the performance requirements of the kata.** If, for example, it's agreed that the kata should accept only (sub)linear solutions, make sure that the translated tests reject solutions of higher computational complexity. Languages and runtimes differ in terms of performance, so increase/decrease the amount of test cases and input ranges accordingly.
- If possible, your translation should hold to the **original author's idea**. In case of doubts, you can always ask them for opinions, or use the initial language version as a baseline. However, especially for older kata, it may happen that the initial version (and other older versions) are outdated, and the concept of the kata evolved. You can ask kata contributors or other users for opinion and ideas on how to proceed.
- **Avoid translations to languages which cannot support the idea of the kata.** For example, there's no use in translating a big integer arithmetic kata to Python, which supports arbitrary precision integers natively. Do not translate kata into languages where the difficulty would significantly differ: from high level languages to NASM or BF, or into languages where the kata becomes much easier because it can be solved with easy to use, advanced features of the standard library (or other available libraries).


## Description

- **Respect guidelines for [Writing a Kata Description](/recipes/authoring/kata-snippets/description/).**
- **Use [Codewars Markdown Extensions](/references/markdown/extensions/#sequential-code-blocks)** to organize language specific parts of the description, if present. Add sections specific to your language if necessary.
- If possible, **avoid displaying many language variants to the user**. Use conditional paragraphs to display information revelant to the currently viewed language.
- If the language version can pass tests successfuly only when run with some specific language runtime, it should be specified in the description.


## Code components

- **Respect the [General Coding Guidelines](/recipes/authoring/kata-snippets/coding-general/), any conventions imposed by your [language](/languages/) and guidelines specific to each component of the kata**, e.g. the [preloaded](/recipes/authoring/kata-snippets/preloaded/) section, [reference solution](/recipes/authoring/kata-snippets/reference-solution/), [sample tests](/recipes/authoring/kata-snippets/sample-tests/) and [submission tests](/recipes/authoring/kata-snippets/full-tests/).
- If possible, **sample tests and fixed tests should remain consistent between translations.** It may not always be feasible due to inherent differences in programming languages, but doing so can save follow-up questions on the language a user is attempting the kata in when a question on failing tests is raised in the kata discourse.
- Sometimes, the description is not the best place to put some language specific information. For example, the translator may wish to add some information on arguments, data formats, memory management, etc. and keep the description language-agnostic at the same time. In such cases, it's allowed to put such information as an explanatory comment in the solution setup.


## Review process

- **The translation must be reviewed before it's approved.** If the reviewer is not familiar with the language of the translation, they should ask other users for help.
- **Any issues found during review should be posted** as translation comments.
- Unfortunately, the approval of a translation cannot be easily blocked by raising issues. If a translation has many issues, cannot be easily fixed, and there's justified concern that it could be approved prematurely while not keeping up to quality standards, **it should be rejected**.
- After a translation is approved, it becomes **the responsibility of all parties involved: the user who approved the translation, the translator, and the kata author** (in this order) to fix any potential issues which might come up later when users attempt to submit their solutions.
