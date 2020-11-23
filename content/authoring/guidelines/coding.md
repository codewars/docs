---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/description/
next: /authoring/guidelines/sample-tests/
---

# General Kata Coding Guidelines

Coding guidelines can be a controversial topic for programmers. Programmers like them, and programmers hate them. Programmers fight for them, and they fight against them. Coding guidelines can be very helpful, but can be also very difficult to define, establish, follow, and enforce.

Kata code is not only used to verify the correctness of user solutions by the code runner; it also needs to be usable, understandable and maintainable by other users in the Codewars community. As such, all code in a kata, whether visible or invisible to the user, should adhere to a high standard of quality to ensure it can support these goals.

To ensure kata maintenance is possible and pleasant, kata code must follow the guidelines below.

:::note
There are no code quality guidelines which are applicable to every scenario. Some kata styles such as debugging kata or code golf exercises may involve breaching a commonly-held guideline. Sometimes guidelines are difficult to enforce, for example on code which has already been written and poses a big effort to fix. In justified cases, some coding guidelines may be omitted.
:::

- All code components should follow general [Content Quality Guidelines](/authoring/guidelines/).
- Once again, **write maintainable code.** Remember that you do not write code for yourself, or for the code runner, but for other users. When writing code, don't play smart and don't be funny.
- **Every code snippet in a kata should follow the coding guidelines.** The fact that some snippets are not directly visible to the user is not a reason to treat it without appropriate attention.
- **Stick to rules commonly recognized for your [language](/languages/)**. Know and follow its naming conventions, coding rules, and best practices.
- **Respect widely-recognized standards and conventions related to software design and programming.** Avoid antipatterns and bad practices.
- **Be familiar with concepts you want to handle and know how to work with them.**
  - When writing tests, know how unit testing is done, or how to generate random numbers.
  - Be aware of common pitfalls, like floating point values and comparisons, overflow of arithmetic operations, concatenation of immutable strings, undefined behavior, race conditions, etc.
  - When your task deals with specific concepts such as concurrency or cryptography, know how they work and how to use them properly.
- **Write comments** where you think they can be helpful. For example, you might include a name, explanation or references for the algorithm used by your reference solution. Explain the structure of tests. Describe your generators of random inputs. This will help maintainers and translators understand and stick to the original idea of your code.
