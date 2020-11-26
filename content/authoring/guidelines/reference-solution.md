---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/preloaded/
next: /authoring/guidelines/translation/
---

# Writing a Reference Solution

The reference solution snippet, created by the kata author or translator, is a snippet which might appear as not very relevant, but when prepared incorrectly, it still can incur some additional, unnecessary maintenance cost. It might appear that the reference solution is just a solution like every other submitted by a user, and that the only important thing is to pass the tests. However, it's something more: the reference solution is run every time a kata or translation is republished, and it should be prepared in a way which would prevent the publication from failing in an unexpected way.

For the above reasons, this snippet **should conform to [General Coding Guidelines][authoring-guidelines-general-coding]**: the reference solution is code too, and, as such, should keep up to code quality standards. It will make maintenance of the kata much easier, and the readability of the reference solution can be very helpful for future maintainers and translators.

[authoring-guidelines-general-coding]: /authoring/guidelines/coding/
