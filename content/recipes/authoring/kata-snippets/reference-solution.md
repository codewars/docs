---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata-snippets/preloaded/
---

# Writing Reference Solution

The role of Reference Solution snippet, created by kata athor or translator, has a very important role in kata maintenance process. To help keep kata quality good, it should conform to a set of guidelines presented below. 

This article contains a set of guidelines for kata authors and translators to create good code snippets for their kata. They were collected to help ensure that kata and translations are of sufficient quality and kata maintenance will be as easy as possible.

The guidelines should be used by kata authors, translators and reviewers to verify whether new content about to be introduced to Codewars is of sufficient quality. Conformance with them should be verified before a kata or translation is published by its author and approved by a reviewer.

Failure to comply with the below guidelines should be considered an issue to be addressed and reported as such. In case of severe violations, the affected kata or translation may be retired, moved back to beta or rejected.

## General Guidelines

- **Conform to [General Coding Guidelines](/recipes/authoring/kata-snippets/coding-general/)**: reference solution is code too, and, as such, should keep up to code quality standards. It will make maintenance of the kata much easier, and readability of reference solution can be very helpful for future maintainers and translators. Reference solution is not for you to write, but for others to read.
- When creating a new kata, especially performance oriented one, reference solution should reflect **minimal solution intended by the kata author to pass**. Sometimes maintainers and translators are not sure what was author's original intention behind the kata, what is their idea for difficulty, edge cases, or additional restrictions. Reference solution of initial language version can be used then as a kind of reference or baseline for other translations. 
- For the above reason, when kata is translated, **the meaning of reference solution from initial version should be kept**. It's especially important for performance oriented kata. Reference solution of a translation should not significantly stand out from the original one. They do not have to be totally equivalent, and they can use different techniques, but they should correspond in terms of performance, handling of edge cases and invalid inputs, etc. Reference solution of a translation should not be significantly better, or significantly worse, than original one.
