---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/description/
next: /authoring/guidelines/sample-tests/
---

# General Kata Coding Guidelines

Coding guidelines are usually a very big topic for programmers. Programmers like them, and programmers hate them. Programmers fight for them, and they fight against them. Coding guidelines can be very helpful, but can be also very difficult to define, establish, follow, and enforce.

Kata are 90% code [citation needed]. But this code is not only compiled, run, and used to verify correctness of user solutions by the automatic runner. Just as every code, it also needs to be debugged, fixed, updated, and maintained. Even if you write the most perfect code in the world, sooner or later it will be read by someone. Someone will want to learn from it, or someone will want to update it when some incompatible change will be introduced to the runner. Or there will be a bug which has to be handled. But even if your code is written perfectly and has no bugs, sooner or later it will have to be maintained in some way. And it's your responsibility to make it as easy as possible. Otherwise, users won't want to fix kata and improve their quality, because no one wants to work with a bad code.

To make kata maintenance not a terrible experience, kata code has to follow guidelines collected below.

:::note
There are no guidelines which are applicable always and in every case. Some of them have exceptions, or can be not applicable to every kind of task. Some tasks violate them on purpose, like debugging kata or code golf exercises. Sometimes guidelines are difficult to enforce, for example on a code which has been already written and poses big effort to fix. In justified cases, some or all coding guidelines can be omitted, but when it happens, the reason for that should be clearly visible. 
:::

- All code components should follow general [Content Quality Gudelines](/recipes/authoring/).
- Once again, **write maintainable code.** Remeber that you do not write code for yourself, or for the code runner, but for other users. When writing code, don't play smart, don't be funny.
- **Every code snippet being a part of a kata should follow the coding guidelines.** The fact that some snippets are not directly visible to the user is not a reason to treat it without appropriate attention.
- **Stick to rules commonly recognized for your [language](/languages/)**. Know and follow its naming conventions, coding rules, and best practices.
- **Respect widely recognized standards and conventions related to software design and programming.** Avoid antipatterns and bad practices.
- **Be familiar with concepts you want to handle and know how to work with them.**
  - When writing tests, know how unit testing is done, or how to generate random numbers.
  - Be aware of common pitfalls, like floating point values and comparisons, overflow of arithmetic operations, concatenation of immutable strings, etc.
  - When your task deals with some specific concepts like concurrency, cryptography, etc. know how they work and how to use them properly.
- **Write comments** where you think they can be helpful. Put the name of algorithm used by your reference solution. Explain the structure of tests. Describe your generators of random inputs. This will help maintainers and translators to understand and stick to original idea of your code.