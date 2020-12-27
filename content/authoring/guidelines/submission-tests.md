---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/sample-tests/
next: /authoring/guidelines/preloaded/
---

# Writing Submission Tests

This article contains a set of guidelines for kata authors or translators to create good test suites for their kata. They were collected to help ensure that kata, translations and their test suites are of sufficient quality so that users' experience with tests will be as good as possible.

NOTE: There are many kinds of kata, and some guidelines might simply not apply to some of them (puzzles, hack-mes, kata which mess with internals of the language runtime, and some types of challenges that require special ways of testing). But still, the present guidelines apply at least to some extent for the vast majority of kata, and if they are followed, kata authors can be sure that their tests will be clear, efficient, reliable, and easy to debug and maintain.


## General Guidelines

- **Conform to [General Coding Guidelines][authoring-guidelines-general-coding]**: tests are code too and as such should keep up to code quality standards.
- **Be familiar with the testing framework used by Codewars for your [language][languages].** Some languages use traditional, widely known testing frameworks, like `JUnit` (for Java) or `chai` (for JavaScript), and some others may use frameworks dedicated specifically for use by Codewars (for example Python). Know what kind of assertions are available, how to test objects, types, collections, etc. Know techniques provided by the framework (test case generators, parameterized test cases, etc.) and assertion libraries. You can visit the [reference page for your language][languages] to find more detailed information.
- **The test suite should be organized**, splitting the tests into different groups and subgroups. Each test framework provides tools to do that, generally with a possibility to give names to each (sub)group. Meaningful names are helpful to the user when there are a lot of tests. For example `test arrays of odd length`, `test arrays of even length`, `test arrays of negative numbers` are informative while `test batch 1`,`test batch 2`, `test batch 3` are not.
- **Know your language**, what can be tested, and what cannot. Know how to test floating-point values, equalities, equivalences, and such.
- **Keep the amount of entries in test reports reasonably small.** Some test frameworks produce one report entry (green or red line) per test case, while some emit one entry per successful/failed assertion. The test output panel performs some DOM manipulation on the entries in the client's browser, and when there are a lot of them, browsers may experience performance problems. A hundred lines is usually OK, a thousand should be bearable, but a couple of thousands would probably be too much and freeze the browser for some time. If you need to perform that many assertions, you should limit the amount of feedback by collecting the result of a couple of conditions in one boolean variable for a complete batch of tests and then check the value of this variable in a dedicated assertion at the end.
- **Make assertion messages clear.** Some testing frameworks are notorious for creating extremely unhelpful assertion messages. `Not what was expected` is one example of such a message, and when the user encounters it, it's difficult for him to tell why the test failed. Check what messages are produced by your tests (especially failed ones) and make sure they are clear enough for users attempting the kata. Failed test cases should ideally present the input along with expected and actual values to the user. For example, for a prime testing kata, it could be something like `27: Expected False, but was True` which is much more informative. Most testing frameworks have assertion mechanics that already provide actual and expected results, and the input can generally be added using an optional assertion message.
- **Tests should handle unexpected answers gracefully.** Tests should not crash, and should present meaningful error messages when an unexpected answer is returned by the user's solution, e.g. `null` references when none is expected or an object of the incorrect type.
- **Tests should not print excessively to standard output.** Console output is limited to 1.5 MB and when the limit is reached, the test suite is aborted by the runner and marked as failed. Users sometimes debug their solutions by printing to stdout, and when the test suite itself uses up a significant fraction of the buffer, users may not have enough left for debugging. This especially applies to kata which output HTML to create some visualizations: such HTML uses up a lot of the buffer space allowed for stdout. Ideally, the test suite should give detailed output **only when a test fails**. Successful tests should be as quiet as possible. Also keep in mind that some test frameworks are printing the inputs in the assertion message even for successful tests. In some data-heavy kata, that may cause trouble too so, again, know the test framework you're using and how it works.
- **Provide both [fixed](#fixed-tests) and [random](#random-tests) tests** for the submission tests. Some test frameworks offer features like test case generators (`QuickCheck`, `ScalaCheck`), and when used, authors can choose different structures for their test suite, but they should still create test specifications covering all possible scenarios. See specific sections below for more details.
- **Assertions should be placed near invocations of the user's solution, preferably immediately following them**. When several results are computed calling the user's function but the related assertions are only done further, what is printed to the console by the user isn't close to the related assertion in the output panel anymore. Debugging becomes difficult for the user and that makes the experience unpleasant.
- **The test suite should not take a long time to run.** For kata which are not performance-oriented, the test suite should complete well below the time limit, ideally within 3 seconds. There's a time limit of 12 seconds (16 or 20 seconds for a few languages) for every attempt, but the generation and execution of test cases, including any calls to the user and reference solutions, should run well below this limit. Otherwise, there is a risk that tests will inconsistently time out, or some valid, but not optimally performant solutions will be rejected.
- **Test cases should be independent**, they should not rely on any state passed from one test case to another.


## Reference Solution

Some test suites require a reference solution to generate the expected value(s) and compare them to what the user's solution is returning. While such practice is common and sometimes necessary, there are things which have to be handled carefully:

- **Avoid using a reference solution at all if possible.** Sometimes there's no other way, but quite often a reference solution is simply not necessary and this can avoid a lot of trouble. Test cases can effectively be generated with the answer known upfront, which eliminates an entire class of potential problems associated with the use of reference solutions, like the following:
  - Extra time spent on running a reference solution.
  - Reference solution being accessible to users by mistake.
  - Input mutation by the user solution which can affect the input passed to the reference solution, or make assertion messages confusing.
  - Incorrect implementation of the reference solution leading to the rejection of valid users' solutions.
- **The reference solution should not be revealed to the user.** When an assertion fails or the test suite crashes, some testing frameworks print fragments of source code which caused the failure to the console. It may happen that such printed failure messages or stack traces expose information about the solution which should not be revealed, so the place where the expected solution is computed is not a trivial choice at all.
- **The reference solution shouldn't be accessible to the user solution.** It should not be possible to call the reference solution directly, or implement the user solution as an alias or wrapper around the reference solution. The reference solution should be completely inaccessible outside the submit tests. In particular, it should not be a global and/or public function. Check the [reference page for your language][languages] to see how to prevent this problem in your tests.


## Input mutation

Issues caused by input mutation are particularly difficult to deal with, because it can lead to bugs that are very subtle, confusing, and difficult to diagnose. When the input is mutated in an uncontrolled way, tests may sometimes appear to randomly crash, give incorrect results, or produce confusing logs and assertion messages. To avoid problematic situations, the following precautions should be taken:

- **Tests should not be susceptible to input mutation.** It should not be possible for the user's code to modify its input in a way which would influence the execution, result, or output of a test. It is **not** a good practice to shoot user issues down with the explanation that _"tests act weird because your solution mutates input, stop doing that and tests will be OK"_. Tests which are affected by input modification should be fixed.
- Ideally, **inputs should be immutable** (if it's possible, and if kata task allows it). Otherwise,
- **Requirements on the mutation of input should always be specified in the description _and properly enforced_.** If the received data should not be modified by the user solution, there should be an assertion for that.
- If the reference solution is known to not modify its input, it should be called before the user solution.
- If the reference solution modifies its input, it _must_ receive a (deep) copy of it. Data mutated by the reference solution _must not_ be used in any way afterwards (as an input for user solution, or to compose logs or diagnostic messages, etc).
- **Input which could be potentially modified by a user solution _must not_ be used afterwards.** It must not be used as an input for the reference solution, to compose diagnostic messages, or anything else. If necessary, a (deep) copy should be created and passed to the user solution.


## Fixed Tests

Fixed tests are tests with predetermined inputs and outputs, and do not change between test runs.

- **Each described requirement should have a corresponding fixed test.** Every aspect of the specification in the kata description should be explicitly tested with at least one, possibly more, dedicated and properly labeled assertion(s). Fixed tests are usually easier to debug, so ideally a fixed test should fail before the corresponding scenario is tested with random tests.
- **Tests should check the solution with edge cases and cases that require special handling within the context of the task.** For example, unless the kata description _explicitly_ states that such inputs do not need to be considered, empty arrays should be tested for problems involving arrays, arrays of lengths 0 and 1 for problems seeking pairs of values in arrays and empty strings for problems involving strings, etc.


## Random Tests

Random tests are uncommon in "real life" coding and are somewhat specific to Codewars. They are required to reject invalid approaches based on input probing, hard-coding, and other workarounds. The goal of random tests is to make the inputs unpredictable so that only solutions that are actually solving the task may pass.

- **Random tests should generate test cases for all scenarios** which cannot be completely tested with fixed tests. If necessary, build different kinds of random input generators. If a specific kind of input has a very low chance of occurring purely at random (e.g. generating a palindrome), it's better to build a specific random generator that can enforce this kind of input rather than rely on 1000 random tests and just pray for the specific case to come up. Sometimes it can be a good idea to keep one fully random generator, because it may generate cases you didn't think about.
- **Random tests should ensure that it's infeasible to pass tests by counting test cases.** Cases shouldn't be grouped by output type or behavior, especially if the expected output is a boolean variable (e.g. checking that some input satisfies some criteria), or when it comes to error checking (solution throwing an exception in some specific situations). The order of tested scenarios should be unpredictable. One possible way to achieve this is to generate and collect a set of random inputs for all required scenarios and shuffle them before the actual testing. If there are some fixed tests for particularly tricky scenarios which can be skipped by counting, they should be shuffled into the set of random inputs.
- **Keep the amount of random tests reasonable if random tests are not used to verify the performance of the user's solution.** Keep their amount as small as possible as long as a good coverage is still guaranteed: in some situations, only a bunch of inputs are actually testable, so no need to tests each of them 10 times - use randomized testing instead. Otherwise, 100 random tests are generally enough, or maybe less, depending on the task/situation.
- Under some rare circumstances, it is allowed to use so-called [**randomized tests**][randomized-tests] instead of fully random ones. For some types of problems (for example, kata simulating chess, or problems with a small set of possible inputs) it may be too complex or infeasible to generate inputs randomly. In such rare cases, it may be acceptable to use a predefined, hard-coded set of inputs (possibly with expected outputs too). Before the tests are run, the set of inputs should be shuffled or randomly sampled at each run to make the hard-coding of results more tedious for the user. If possible, some additional transformations can be randomly applied to the inputs if it can be easily accounted for in the result of the test (for example arrays can be reversed, game boards can be rotated, sides can be flipped, etc.)
- **Random tests should be run after fixed tests.** Not all testing frameworks allow for easy ordering of tests, but fixed tests should run, and eventually fail, before random tests.
- **Use appropriate random utilities available in your language**. Know how to use random number generators, how to randomly generate types of inputs you need, be it numbers in a range, large numbers, strings, big integers, floating-point values, collections, etc. Know how to do random sampling of collections, how to shuffle them, how to avoid duplicates. See this [obligatory XKCD comic](https://xkcd.com/221/) for how NOT to do random tests.
- **Difficulty should be consistent between test runs.** When ranges of random inputs are very large, it becomes possible for some users to receive many small, easy inputs while other users receive the exact opposite. Make sure that your random tests are built in a way that minimizes the chances for such a situation to occur. If you want to test difficult inputs, split the test cases into a set of easy ones and a set of difficult ones, and test them separately.
- **Make debugging of random tests easy if you need to rely on them to extensively check the correctness of the user's solution**, if it's not possible to build fixed tests in a way they'd be able to catch most of the holes in the logic of the user. Sometimes, when random tests fail, they are very difficult to debug because the input is very large and cannot be easily read. If necessary, split your random tests into two batches: one with small, debuggable inputs, and the other one with proper, large input values. Note that both parts should still contain all applicable scenarios.

## Performance Tests

Some kata require solutions to be fast enough. For example, the author may only wish to accept solutions completing in (sub-)linear time. Building such test suites is not an easy task!

- **Performance tests can be implemented in terms of random tests, by testing with large random inputs.** However, to make debugging easier, it can be worth having a separate set of random tests with small inputs first.
- If the difficulty of a kata is roughly proportional to the size of the input, it's usually **better to have a few tests with large input rather than many with medium-sized inputs.** For example, 100 tests with huge numbers or arrays is usually better than 1000 tests with moderately large arrays/numbers (but see remarks on size of inputs above and the problem below about building the inputs too).
- **The difference between accepted and rejected solutions should be easy to spot.** Ideally, accepted solutions should complete well under the time limit, while rejected solutions should time out consistently. Otherwise, you risk that solutions with valid complexity characteristics will time out, and users will be frustrated looking for micro-optimizations. Achieving this generally calls for very large inputs, so be careful!
- **Performance tests should be consistent between runs.** It should not happen that one and the same solution sometimes passes, and sometimes fails, depending on randomized inputs.
- **The reference solution, if used, does not have to be the same as the one in the "Reference Solution" snippet.** While the "Reference Solution" snippet serves its specific purpose and is [controlled by its own set of quality guidelines][authoring-guidelines-reference-solution], the reference solution used by performance tests can use a different, more efficient approach, to make sure that it does not consume too much of a time limit available for the user solution.
- **Make sure that what you measure is what you want**, when solutions are to be rejected based on their performance. With huge inputs, the random generation of the inputs may be more time-consuming than the computation of the expected result. Hence the overall timing indication in the output panel is generally useless to ensure that the performance tests are actually discriminating the different kinds of solutions as expected. The evaluation of the time actually used by the user's solution should be done (and compared to the reference solution if any) excluding the input generation time.
- When maintaining a kata with performance requirements, it can be useful to have access to a solution whose time complexity is supposed to be rejected. It can be used by maintainers to gauge the size of inputs for performance tests, to make sure they consistently fail. Storing it, properly commented, in the test suite, can be very helpful.

## Tests with Additional Restrictions

Some kata may impose additional restrictions on submitted solutions unrelated to its extensional behavior. For example, code golf kata usually require submitted solutions to be shorter than X characters, while others may require the task to be realized without a certain library or language feature. Every such requirement must be tested explicitly, but authors should be aware that it is difficult (or even infeasible) to do so _in a proper manner_:

- If the user solution should be inspected as source code, it can be found in `/workspace/solution.txt`.
- **Every additional restriction should be tested.** It's **not enough** just to say _"Do not use BigInteger"_, or _"You have to use recursion."_ , it has to be actually verified (but see below).
- Restrictions of the form "do not use X" or "you must use Y" are seldom a good idea since they are extremely difficult (or downright infeasible) to reliably enforce. See [this article (TODO: write the article)]() for details.


[authoring-guidelines-general-coding]: /authoring/guidelines/coding/
[authoring-guidelines-reference-solution]: /authoring/guidelines/reference-solution/
[languages]: /languages/
[randomized-tests]: /glossary/#randomized-tests
