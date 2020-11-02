---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata-snippets/sample-tests/
next: /recipes/authoring/kata-snippets/preloaded/
---

# Writing a Full Test Suite

This article contains a set of guidelines, which can be used by kata authors to create good test suites for their kata. They were collected to help ensure that kata, translations, and their test suites are of sufficient quality and users' experience with tests will be as good as possible. Failing to comply with the below guidelines should be reported as an issue requesting for a fix, preferably during a review before the content gets approved. In case of severe violations, affected kata or translation can be retired, moved back to beta state, or rejected.

NOTE: There are many kinds of kata, and some guidelines might simply not apply to some of them. There are puzzles, hackmes, kata which mess with internals of the language runtime, and some types of challenges require special ways of testing. But still, the guidelines found below apply to the majority of kata to some extent, and when used, kata authors can be sure that their tests will be clear, efficient, reliable, and easy to debug.


## General Guidelines

- **Conform to [General Coding Guidelines](/recipes/authoring/kata-snippets/coding-general/)**: tests are code too, and, as such, should keep up to code quality standards.
- **Be familiar with the testing framework used by Codewars for your [language](/languages/).** Some languages use traditional, widely known testing frameworks, like `JUnit` for Java or `chai` for JavaScript. Some use frameworks dedicated specifically for use by Codewars (for example Python). Know what assertions are there, how to test objects, types, collections, etc. Know techniques provided by the framework (test case generators, parametrized test cases, etc.) and assertion libraries. You can visit the [reference page for your language](/languages/) to find more detailed information.
- **The test suite should be organized** by utilizing APIs provided by your testing framework. Frameworks use `Describe` blocks, test fixtures, categories, or other means to group test cases into manageable blocks, label them, etc.
- **Know your language**, what can be tested, and what cannot. Know how to test floating point values, equalities, equivalences, and such.
- **Keep the amount of entries in tests reports reasonably small.** Some test frameworks produce one report entry (green or red line) per test case, while some emit one entry per successful/failed assertion.  
The test output panel performs some DOM manipulation on the entries in the client's browser, and when there's a lot of them, browsers may experience performance problems. A hundred lines is usually OK, a thousand should be bearable, but a couple of thousands would probably be too much. If you need to perform that many assertions and they produce more green lines a browser can handle, you can collect a result of a couple of conditions in one boolean variable and check the value of this variable in a dedicated assertion.
- **Make assertion messages clear.** Some testing frameworks are notorious for creating extremely unhelpful assertion messages. `Test failed: True should equal False`  is one example of such a message, and when the user encounters it, it's difficult for them to tell why the test failed. Check what messages are produced by your tests (especially failed ones) and make sure they are clear for users attempting the kata, and use assertions which allow for custom messages. Failed test cases should ideally present tested input, expected result, and actual answer, to the user. For example, for a orime testing kata, it could be something like `27: Expected False, but was True` is much more helpful.
- **Tests should handle unexpected answers gracefully.** Tests should not crash, and should present meaningful error messages when an unexpected answer is returned by the user's solution, e.g. `null` references when none is expected or an object of the incorrect type.
- **Tests should not print excessively to standard output.** Console output is limited to 1.5 MB and when the limit is exceeded, the test suite is marked as failed and aborted by the runner. Users sometimes debug their solutions by printing to stdout, and when the test suite itself uses up a significant fraction of the limit, users may have not enough left for debugging. This applies especially to kata which output HTML to create some visualizations: such HTML uses up the buffer space allowed for stdout output. Ideally, test suite should give detailed output **only when test fails**. Successful tests should be as quiet as possible.
- **Provide [fixed tests](#fixed-tests) as well as [random tests](#random-tests)** for the full test suite. Some test frameworks offer features like test case generators (`QuickCheck`, `ScalaCheck`), and when used, authors can choose different structures for their test suite, but still they should create test specifications covering all possible scenarios. See specific sections below for more details.
- **Tests should not be susceptible to input mutation.** It should not be possible for user solution to modify test input in a way which would influence execution, result, or output of the test. If reference solution is used, it should be called first, and user solution should be called afterwards with the same input. Potentially mutated input should not be used to compose any information presented to the user.
- **Assertions should be placed near invocations of the user's solution**, preferably immediately following it. Debugging becomes difficult for the user when a significant amount of post-processing occurs between the result returned by the user's solution and the corresponding assertion(s).
- **Test suite should not take long time to run.** For kata which are not performance oriented, size of the test suite should allow it to be completed in just a few (ideally 2-3) seconds. There's a time limit for every run (for some language  it is 12 seconds, for others it's 16 seconds), but generation of test cases, invovations of user's solution and calls to reference solution (when used) should run well below this limit. Otherwise there's a risk that tests will inconsistently time out, or some valid, but not optimally performant solutions will be rejected.


## Reference Solution

Some test suites need to use reference solution to generate a correct answer, and compare it with the one returned by user's solution. While such practice is common and sometimes necessary, there are things which have to be handled carefully:

- If possible, **reference solution should not be used**. Sometimes there's no other way, but quite often reference solution is simply not necessary. Test cases can be generated with the answer known upfront, and when there's no reference solution to be run, it can save a lot of kinds of problems: time which would be used for running it is saved, you do not have to worry about it being accessible to users, or that it could be affected by mutation of the input. Sometimes, reference solutions happen to be bugged and tests fail even if user's solution is correct.
- **Reference solution should not be revealed to the user.** When an assertion fails or the test suite crashes, some testing frameworks print fragments of source code which caused the failure to the console. It may happen that such printed failure messages or stack traces expose information about the solution which should not be revealed.
- **Reference solution shouldn't be accessible to user solution.** It should not be possible to implement user solution as an alias or wrapper around reference solution used by tests. Reference solution should not be possible to be called by any other part of the kata other than the tests. In particular, it should not be a global function.  
Chek the [reference page for your language](/languages/) to see how to prevent this problem in your tests.


## Fixed Tests

Fixed tests are tests with predetermined inputs, and do not change between test runs.

- **Each requirement should have a corresponding fixed test.** Every requirement in the kata description should be explicitly tested with at least one, possibly more, dedicated and properly labeled assertion(s).
- Tests should check not only valid inputs, but **invalid inputs and edge conditions should be tested too** (if problem allows them). `null` inputs, empty arrays, empty strings, etc. all should be tested with fixed tests, unless kata description explicitly says that such inputs won't be provided and don't have to be handled by a solution. Random tests are not a replacement for carefully designed assertions for edge cases.
- If your test suite uses random tests (and it usually should, see below), then make sure that every test scenario generated there has its equivalent fixed test. Fixed tests are usually easier to debug, so ideally a fixed test should fail before corresponding scenario is tested with random tests.


## Random Tests

Random tests are not common testing practice in "real life" coding, and are somewhat specific to Codewars. They are required by many kata to reject solutions based on input probing, hardcoding, and other workarounds. Goal of random tests is to make input of test cases unpredictable, so only solutions which actually solve the problem can pass.

- **Each requirement should have at least one (preferrably more) corresponding random test case generated.** Basically, randomly generated scenarios should correspond to the set of fixed tests. You should not rely on luck and hope that random tests will generate invalid inputs and edge conditions by a chance.
- **Randomly generated inputs should be different every time the test suite is run** (with some exceptions, see below). Be sure to seed your RNGs appropriately, and use your random functions correctly, so values used to test user solution are unpredictable. See this [obligatory XKCD comic](https://xkcd.com/221/) for how NOT to do random tests.
- **Order of random tests should be non-deterministic.** Not only inputs should be randomized, but their order too. It should not be the case that, for example, 10 valid, random inputs is tested as the first step, and after that, tests generate and verify 10 invalid inputs. Order of tested scenarios should be unpredictable too, and one possible technique is to generate and collect a set of random inputs for all required scenarios, and shuffle them.
- Under some rare circumstances, it's allowed to use so called **randomized tests** instead of fully random ones. For some types of problems (for example, kata related to chess, or problems with small set of possible inputs) it's too complex or infeasible to generate inputs randomly. In such rare cases, it's accepted to use predefined, hardcoded set of inputs (and possibly expected outputs too), and before tests are run, shuffle them. If possible, some additional transformation can be applied randomly (for example array can be reversed, game board can be rotated, sides can be flipped) if it can be easily accounted for the result of the test.
- **Random tests should be run after fixed tests.** Not all testing frameworks allow for easy ordering of tests, but fixed tests should run, and eventually fail, before random tests.
- **Difficulty should be consistent between test runs.** When randomized ranges are very large, it becomes possible for some users to receive many small, easy inputs while other users receive the exact opposite. Make sure that your random tests are built in a way which minimizes the chances for such a situation to occur. If you want to test difficult inputs, split the test cases into a set of easy ones and a set of difficult ones, and test them separately.
- **Make debugging of random tests easy.** Sometimes, when random tests fail, they are very difficult to debug because input is very large and cannot be easily printed. If necessary, split your random tests into two batches: one with small, debuggable inputs, and the other one with proper, large input values. Note that both parts should still contain all applicable scenarios.

## Performance Tests

Some kata require solutions to be fast, or to fall into some performance category. For example, the author may only wish to accept solutions completing in (sub-)linear time. Building such test suites is not an easy task!

- **Performance tests can be implemented in terms of random tests.** Usually, it's not reqired to have separate sections for random tests and performance tests. Testing of performance can be driven by size of random inputs. But still, to make debugging easier, it can be worth in some cases to have a set of separate random tests with small inputs.
- If the difficulty of a kata is roughly proportional to the size of the input, it's usually **better to have a few tests with large input rather than many with small inputs.** For example, 200 tests with huge numbers or arrays is usually better than 10,000 tests with small ones (but see remarks on size of inputs above).
- **The difference between accepted and rejected solutions should be easy to spot.** Ideally, accepted solutions should complete well under the time limit, while rejected solutions should time out consistently. Otherwise, you risk that solutions with valid complexity characteristics will time out, and users will be frustrated looking for micro-optimizations. This approach usually calls for very large inputs, so be careful!
- **Performance tests should be consistent between runs.** It should not happen that one and the same solution sometimes passes, and sometimes fails, depending on randomized inputs.
- When you are going to reject solutions based on their performance, **make sure that what you measure is what you want**. It's possible that most of the available time will be consumed not by user solution, but, for example, by your input generators, or reference solution. Make sure that poor performance of your test suite does not affect the final decision whether the submitted solution is performant enough or not!

## Tests with Additional Restrictions

Some kata may impose additional restrictions on submitted solutions unrelated to its extensional behavior. For example, code golf kata usually require submitted solutions to be shorter than X characters, while others may require the task to be realized without a certain library or language feature. Every such requirement must be tested explicitly, but authors should be aware that it is difficult (or even infeasible) to do so _in a proper manner_:

- If the user solution should be inspected as source code, it can be found in `/home/codewarrior/solution.txt`.
- **Every additional restriction should be tested.** It's **not enough** just to say _"Do not use BigInteger"_, or _"You have to use recursion."_ , it has to be actually verified (but see below).
- Restrictions of the form "do not use X" or "you must use Y" are seldom a good idea since they are extremely difficult (or downright infeasible) to reliably enforce. See [this article (TODO: write the article)]() for details.
