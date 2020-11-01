---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata-snippets/sample-tests/
next: /recipes/authoring/kata-snippets/preloaded/
---

# Writing Full Test Suite

_This page is a stub._

## General Guidelines

- Tests are code, and as such, they should **conform to [General Coding Guidelines](/recipes/authoring/kata-snippets/coding-general/)**.
- **Be familiar with testing framework used by Codewards for your language.** Some languages use traditional, widely known testing frameworks, like `JUnit` for Java or `chai` for JavaScript. Some use frameworks dedicated specifically for use by Codewars (for example Python). Know techniques provided by the framework (test cases generators, parametrized test cases, etc.) and assertion libraries. You can visit [reference page for your language](/languages/) to find more detailed information. 
- **Keep amount of entries in tests report reasonably small.** Some test frameworks produce one report entry (green or red line) per test case, while some emit one entry per successful/failed assertion. Test output panel performs some DOM manipulation on the entries in client browser, and when there's a lot of them, browsers may experience performance problems. A hundred lines is usually OK, a thousand should be bearable, but a couple of thousands would be probably too much. If you need to perform many assertions and they produce more green lines a browser can handle, you can collect a result of a couple of conditions in one boolean variable and check value of this variable in a dedicated assertion.
- **Make assertion messages clear.** Some testing frameworks are notorious in creating extremely unhelpful assertion messages. `Test failed: True should equal False`  is one example of such message, and when user encounters it, it's difficult for them to tell why the test failed. Check what messages are produced by your tests (especially failed ones) and make sure they are clear for users attempting the kata, and use assertions which allow for custom messages. Something like `27 is not prime, but your solution returned true` is much better.
- **Tests should not print excessively to standard output.** Console output is limited to 1.5 MB and when the limit is exceeded, test suite is aborted by the runner. Users sometimes debug their solutions by printing to stdout, and when test suite itself uses up some of the limit, users might have not enough left for debugging. This applies especially to kata which output HTML to create some visualizations: such HTML uses up the buffer space allowed for stdout output.

- Usually full test suite should contain **fixed tests**, and **random tests**. For more details, see paragraphs below.

## Fixed Tests

## Random Tests

## Performance Tests

## Tests of Additional Restrictions