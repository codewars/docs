---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata-snippets/sample-tests/
next: /recipes/authoring/kata-snippets/preloaded/
---

# Writing Submit Tests

This article contains a set of guidelines for kata authors to create good test suites for their kata. They were collected to help ensure that kata, translations and their test suites are of sufficient quality and users' experience with tests will be as good as possible.

The guidelines should be used by kata authors, translators and reviewers to verify whether new content about to be introduced to Codewars is of sufficient quality. Conformance with them should be verified before a kata or translation is published by its author and approved by a reviewer.

Failure to comply with the below guidelines should be considered an issue to be addressed and reported as such. In case of severe violations, the affected kata or translation may be retired, moved back to beta or rejected.

NOTE: There are many kinds of kata, and some guidelines might simply not apply to some of them. There are puzzles, hackmes, kata which mess with internals of the language runtime, and some types of challenges require special ways of testing. But still, the guidelines found below apply to the majority of kata to some extent, and when used, kata authors can be sure that their tests will be clear, efficient, reliable, and easy to debug.


## General Guidelines

- **Conform to [General Coding Guidelines](/recipes/authoring/kata-snippets/coding-general/)**: tests are code too, and, as such, should keep up to code quality standards.
- **Be familiar with the testing framework used by Codewars for your [language](/languages/).** Some languages use traditional, widely known testing frameworks, like `JUnit` for Java or `chai` for JavaScript. Some use frameworks dedicated specifically for use by Codewars (for example Python). Know what assertions are there, how to test objects, types, collections, etc. Know techniques provided by the framework (test case generators, parametrized test cases, etc.) and assertion libraries. You can visit the [reference page for your language](/languages/) to find more detailed information.
- **The test suite should be organized** by utilizing APIs provided by your testing framework. Frameworks use `Describe` blocks, test fixtures, categories, or other means to group test cases into manageable blocks, label them, etc.
- **Know your language**, what can be tested, and what cannot. Know how to test floating point values, equalities, equivalences, and such.
- **Keep the amount of entries in tests reports reasonably small.** Some test frameworks produce one report entry (green or red line) per test case, while some emit one entry per successful/failed assertion.  
The test output panel performs some DOM manipulation on the entries in the client's browser, and when there's a lot of them, browsers may experience performance problems. A hundred lines is usually OK, a thousand should be bearable, but a couple of thousands would probably be too much. If you need to perform that many assertions and they produce more green lines a browser can handle, you can collect a result of a couple of conditions in one boolean variable and check the value of this variable in a dedicated assertion.
- **Make assertion messages clear.** Some testing frameworks are notorious for creating extremely unhelpful assertion messages. `Test failed: True should equal False`  is one example of such a message, and when the user encounters it, it's difficult for them to tell why the test failed. Check what messages are produced by your tests (especially failed ones) and make sure they are clear for users attempting the kata, and use assertions which allow for custom messages. Failed test cases should ideally present the input along with expected and actual values to the user. For example, for a prime testing kata, it could be something like `27: Expected False, but was True` which is much more informative.
- **Tests should handle unexpected answers gracefully.** Tests should not crash, and should present meaningful error messages when an unexpected answer is returned by the user's solution, e.g. `null` references when none is expected or an object of the incorrect type.
- **Tests should not print excessively to standard output.** Console output is limited to 1.5 MB and when the limit is exceeded, the test suite is marked as failed and aborted by the runner. Users sometimes debug their solutions by printing to stdout, and when the test suite itself uses up a significant fraction of the limit, users may have not enough left for debugging. This applies especially to kata which output HTML to create some visualizations: such HTML uses up the buffer space allowed for stdout output. Ideally, the test suite should give detailed output **only when a test fails**. Successful tests should be as quiet as possible.
- **Provide both [fixed](#fixed-tests) and [random](#random-tests) tests** for the submit tests. Some test frameworks offer features like test case generators (`QuickCheck`, `ScalaCheck`), and when used, authors can choose different structures for their test suite, but still they should create test specifications covering all possible scenarios. See specific sections below for more details.
- **Tests should not be susceptible to input mutation.** It should not be possible for the user solution to modify its input in a way which would influence the execution, result, or output of a test. If a reference solution is used, it should be called first, and the user solution should be called afterwards with the same input. Potentially mutated input should not be used to compose any information presented to the user.
- **Assertions should be placed near invocations of the user's solution**, preferably immediately following it. Debugging becomes difficult for the user when a significant amount of post-processing occurs between the result returned by the user's solution and the corresponding assertion(s).
- **The test suite should not take a long time to run.** For kata which are not performance-oriented, the test suite should complete well below the time limit, ideally within 3 seconds. There's a time limit of 12 seconds (16 or 20 seconds for a few languages) for every attempt, but the generation and execution of test cases including any calls to the user (and reference) solution should run well below this limit. Otherwise, there's a risk that tests will inconsistently time out, or some valid, but not optimally performant solutions will be rejected.


## Reference Solution

Some test suites require a reference solution to generate the expected value(s) and compare them to those returned by the user solution. While such practice is common and sometimes necessary, there are things which have to be handled carefully:

- **Avoid using a reference solution if at all possible.** Sometimes there's no other way, but quite often a reference solution is simply not necessary. Most of the time, test cases can be generated with the answer known upfront which eliminates an entire class of potential problems associated with reference solutions:
  - Extra time spent on running a reference solution
  - Reference solution being accessible to users by mistake
  - Input mutation by the user solution affecting the input passed to the reference solution
  - Incorrect implementation of the reference solution leading to rejection of valid user solutions
- **Reference solution should not be revealed to the user.** When an assertion fails or the test suite crashes, some testing frameworks print fragments of source code which caused the failure to the console. It may happen that such printed failure messages or stack traces expose information about the solution which should not be revealed.
- **Reference solution shouldn't be accessible to user solution.** It should not be possible to implement the user solution as an alias or wrapper around the reference solution. The reference solution should be completely inaccessible outside the submit tests. In particular, it should not be a global function.
Chek the [reference page for your language](/languages/) to see how to prevent this problem in your tests.


## Fixed Tests

Fixed tests are tests with predetermined inputs, and do not change between test runs.

- **Each requirement should have a corresponding fixed test.** Every requirement in the kata description should be explicitly tested with at least one, possibly more, dedicated and properly labeled assertion(s).
- **Tests should check not only valid inputs but also invalid inputs and edge cases** (if the problem allows them). `null` inputs, empty arrays, empty strings, etc. should all be tested with fixed tests, unless the kata description _explicitly_ states that such inputs need not be considered. Random tests are not a replacement for carefully designed assertions for edge cases.
- If your test suite uses random tests (and it usually should, see below), then make sure that every test scenario generated there has its equivalent fixed test. Fixed tests are usually easier to debug, so ideally a fixed test should fail before the corresponding scenario is tested with random tests.


## Random Tests

Random tests are uncommon in "real life" coding and are somewhat specific to Codewars. They are required by many kata to reject solutions based on input probing, hard-coding, and other workarounds. The goal of random tests is to make the inputs unpredictable so that only proper solutions may pass.

- **Each requirement should have at least one (preferably more) corresponding random test case.** Basically, randomly generated scenarios should correspond to the set of fixed tests. You should not rely on luck and hope that random tests will generate invalid inputs and edge conditions by chance.
- **Random inputs should be _truly_ (pseudo-)random**, i.e. they should be _dynamically_ generated on every run with the help of suitable library functions such as `Math.random()` in JavaScript or `rand()` in C. See this [obligatory XKCD comic](https://xkcd.com/221/) for how NOT to do random tests.
- In some languages such as C/C++, **make sure that the RNGs are properly seeded with the current time at the beginning** using `srand(time(NULL))` or equivalent; otherwise, the same pseudorandom sequence will be generated on every run and your "random" inputs will devolve into fixed ones.
- **The order of random tests should be non-deterministic** especially if the expected output is a boolean variable (e.g. checking that some input satisfies some criteria). Not only should inputs be randomized, but their order as well. It should not be the case that, for example, 10 valid, random inputs are tested in the first step followed by 10 invalid ones. The order of tested scenarios should be unpredictable too, and one possible technique is to generate and collect a set of random inputs for all required scenarios and shuffle them.
- Under some rare circumstances, it's allowed to use so called **randomized tests** instead of fully random ones. For some types of problems (for example, kata related to chess, or problems with small set of possible inputs) it's too complex or infeasible to generate inputs randomly. In such rare cases, it's accepted to use a predefined, hard-coded set of inputs (and possibly expected outputs too), and shuffle them before the tests are run. If possible, some additional transformation can be applied randomly (for example array can be reversed, game board can be rotated, sides can be flipped) if it can be easily accounted for in the result of the test.
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

- If the user solution should be inspected as source code, it can be found in `/workspace/solution.txt`.
- **Every additional restriction should be tested.** It's **not enough** just to say _"Do not use BigInteger"_, or _"You have to use recursion."_ , it has to be actually verified (but see below).
- Restrictions of the form "do not use X" or "you must use Y" are seldom a good idea since they are extremely difficult (or downright infeasible) to reliably enforce. See [this article (TODO: write the article)]() for details.
