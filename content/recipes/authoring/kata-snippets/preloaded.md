---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata-snippets/full-tests/
next: /recipes/authoring/kata-snippets/reference-solution/
---

# Writing Preloaded Code

The preloaded code snippet, created by the kata author or translator, can be used to reduce boilerplate code, but when used incorrectly, it can cause lots of problems. To ensure the quality of the kata, it should conform to a set of guidelines presented below.

This article contains a set of guidelines for kata authors and translators to create good code snippets for their kata. They were collected to help ensure that kata and translations are of sufficient quality and kata maintenance will be as easy as possible.

The guidelines should be used by kata authors, translators and reviewers to verify whether new content about to be introduced to Codewars is of sufficient quality. Conformance with them should be verified before a kata or translation is published by its author and approved by a reviewer.

Failure to comply with the below guidelines should be considered an issue to be addressed and reported as such. In case of severe violations, the affected kata or translation may be retired, moved back to beta or rejected.


## Accessibility of Preloaded Code

- The "Preloaded Code" snippet is code, and, as such, should conform to [Codewars General Coding Guidelines](/recipes/authoring/general/).
- **Do not put in preloaded any code which should not be called by the submitted solution.** Code placed in this snippet can be called (and for some languages even modified or redefined) by the submitted solution, and any data stored here can be read or modified programmatically. It should not contain anything critical used by tests to validate the correctness of the solution.
- **Be aware that the user solution is able to read the "Preloaded Code" snippet**. It should not contain any information which would reveal details of the solution or tests.
- **Do not hide useful information in the "Preloaded Code" snippet.** The "Preloaded Code" snippet can be used to reduce boilerplate, and its code is available to all other parts of the solution. It can be tempting to put there some data or types which should be shared among the user solution, sample tests, and submission tests. But remember that the contents of the "Preloaded Code" snippet are not displayed anywhere in the user interface and users cannot see it. This is especially problematic for users who would like to work on the kata in their local IDE, but now are missing some pieces necessary to set up their local environment. If you use the "Preloaded Code" snippet to reduce boilerplate code, consider adding necessary information to the kata description as well, preferably in a [language conditional block](/references/markdown/extensions/).
