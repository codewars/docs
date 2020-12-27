---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/submission-tests/
next: /authoring/guidelines/reference-solution/
---

# Writing Preloaded Code

The preloaded code snippet, created by the kata author or translator, can be used to reduce boilerplate code, but can cause problems when used incorrectly. To ensure the quality of the kata, it should conform to a set of guidelines presented below.

This article contains a set of guidelines for kata authors and translators to create good code snippets for their kata. They were collected to help ensure that kata and translations are of sufficient quality and kata maintenance will be as easy as possible.

## Accessibility of Preloaded Code

- The preloaded code snippet is code, and, as such, should conform to [Codewars General Coding Guidelines][authoring-guidelines-general].
- **Do not put any code in preloaded which should not be called by the submitted solution.** Code placed in this snippet can be called (and for some languages even modified or redefined) by the submitted solution, and any data stored here can be read or modified programmatically. It should not contain anything critical used by tests to validate the correctness of the solution.
- **Be aware that the user solution can read the preloaded code snippet**. It should not contain any information which would reveal details of the solution or tests.
- **Do not hide useful information in the preloaded code snippet.** The preloaded code snippet can be used to reduce boilerplate, and its code is available to all other parts of the solution. It may be tempting to put data or types in preloaded code which should be shared among the user solution, sample tests, and submission tests. However, since the contents of the preloaded code are not displayed anywhere in the user interface, important information needed to solve the challenge may be hidden from the user. This is especially problematic for users who would like to work on the kata in their local IDE, but now are missing some pieces necessary to set up their local environment. If you use the preloaded code snippet to reduce boilerplate code, consider adding necessary information to the kata description as well, preferably in a [language conditional block][markdown-extensions].


[authoring-guidelines-general]: /authoring/guidelines/
[markdown-extensions]: /references/markdown/extensions/
