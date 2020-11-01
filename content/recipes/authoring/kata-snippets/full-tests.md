---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata-snippets/sample-tests/
next: /recipes/authoring/kata-snippets/preloaded/
---

# Writing Full Test Suite

## General Guidelines

- Tests are code, and as such, they should **conform to [General Coding Guidelines](/recipes/authoring/kata-snippets/coding-general/)**.
- **Be familiar with the testing framework used by Codewars for your language.** Some languages use traditional, widely known testing frameworks, like `JUnit` for Java or `chai` for JavaScript. Some use frameworks dedicated specifically for use by Codewars (for example Python). Know techniques provided by the framework (test case generators, parametrized test cases, etc.) and assertion libraries. You can visit the [reference page for your language](/languages/) to find more detailed information. 
- **Keep the amount of entries in tests reports reasonably small.** Some test frameworks produce one report entry (green or red line) per test case, while some emit one entry per successful/failed assertion. The test output panel performs some DOM manipulation on the entries in the client's browser, and when there's a lot of them, browsers may experience performance problems. A hundred lines is usually OK, a thousand should be bearable, but a couple of thousands would probably be too much. If you need to perform many assertions and they produce more green lines a browser can handle, you can collect a result of a couple of conditions in one boolean variable and check the value of this variable in a dedicated assertion.
- **Make assertion messages clear.** Some testing frameworks are notorious for creating extremely unhelpful assertion messages. `Test failed: True should equal False`  is one example of such a message, and when the user encounters it, it's difficult for them to tell why the test failed. Check what messages are produced by your tests (especially failed ones) and make sure they are clear for users attempting the kata, and use assertions which allow for custom messages. Failed test cases should ideally present tested input to the user. Something like `27 is not prime, but your solution returned true` is much more helpful.
- **Tests should handle unexpected answers gracefully.** Tests should not crash, and should present meaningful error message, when some completely unexpected answer is returned by user solution: `null` reference, empty or too small array, object instance of unexpected type, etc.
- **Tests should not print excessively to standard output.** Console output is limited to 1.5 MB and when the limit is exceeded, the test suite is aborted by the runner. Users sometimes debug their solutions by printing to stdout, and when the test suite itself uses up a significant fraction of the limit, users may have not enough left for debugging. This applies especially to kata which output HTML to create some visualizations: such HTML uses up the buffer space allowed for stdout output. Ideally, test suite should give detailed output **only when test fails**. Successful tests should be as quiet as possible.
- Usually the full test suite should contain **[fixed tests](#fixed-tests)**, and **[random tests](#random-tests)**. See specific sections below for more details.
- **Tests should not be susceptible to input mutation.** It should not be possible for user solution to modify test input in a way which would influence execution and result of the test. If reference solution is used, it should be called first, and user solution should be called afterwards with the same input.
- **Reference solution should not be revealed to user.** When assertion fails or test crashes, some test frameworks print fragment of source code which caused failure to the console. It may happen that such printed failure message or stack trace exposes information about solution which should not be revealed.

## Fixed Tests

Fixed tests are tests with predetermined inputs, and do not change between test runs.

- **Test suite should be organized** by utilizing API of your testing framework. Frameworks use `Describe` blocks, test fixtures, categories, or other means, to collect test cases into manageable blocks, label them, etc.
- **Each requirement should have corresponding fixed test.** Every requirement of the kata described in the description should be explicitly tested by at least one (possibly more) dedicated, properly labeled test case(s).


## Random Tests

Random tests are not common testing practice and are somewhat specific to Codewars. They are required by many kata to reject solutions based on input probing, hardcoding, and other workarounds. Goal of random tests is to make input of test cases unpredictable, so only solutions which actually solve the problem can pass. Random tests are necessary especialy for difficult, highly rewarding kata, but Codewars testing guidelines require them for every kata they are applicable for.

- **Each requirement should have at least one (preferrably more) corresponding random test case generated.** Basically, randomly generated scenarios should correspond to the set of fixed tests.
- **Order of random tests should be non-deterministic.** Not only inputs should be randomized, but their order too. One possible technique is to generate and collect a set of random inputs for all required scenarios, and shuffle them.
- If possible, **reference solution should not be used**. Sometimes there's no other way, but quite often reference solution is simply not necessary. Test cases can be generated with the answer known upfront, and it can save time which would be spent on running the reference solution.
- **Assertions should be close to the calls of tested solution**, preferrably immediatelly following it. Debugging becomes difficult if invalid answer is verified long after it's returned.

## Performance Tests

## Tests of Additional Restrictions


------

## To be added:

- consistent difficulty of random tests
- performances oriented katas: when the random tests use inputs/outputs that are very hard to debug (strings of hundreds of characters or more, huge arrays, multidimensionnal arrays, ... anything that akes the assertion message unreadable!), split the random tests in 2 sections or more, with a first batch of small random inputs. (error256)
- fail fixed tests, not random tests
- quickcheck
