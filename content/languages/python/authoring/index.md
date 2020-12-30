---
kind: tutorial
languages: [python]
sidebar: "language:python"
prev: /languages/python/codewars-test/
---

# Python: creating and translating a kata

This article is meant as help for kata authors and translators who would like to create new content in Python. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, Python-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a Python translation, or a new Python kata from scratch, please make yourself familiar with the aforementioned documents related to authoring in general first. 


## General info

Any technical information related to the Python setup on Codewars can be found on the [Python reference](/languages/python/) page (language versions, available modules, and setup of the code runner).


## Description

Python code blocks can be inserted with Python-specific part in [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks):

~~~
```python

...your code here...

```
~~~

Python-specific paragraphs can be inserted with [language conditional rendering](/references/markdown/extensions/#conditional-rendering):

```
~~~if:python

...text visible only for Python description...

~~~

~~~if-not:python

...text not visible in Python description...

~~~
```

## Tasks and Requirements

Some concepts don't always translate well to or from Python. Because of this, some constructs should be avoided and some translations just shouldn't be done.
- Avoid returning different data types depending on the situation (_"Return the result, or the string 'Error' if no result can be found..."_). Python is dynamically typed which is not be the case for some other languages. Returning `None` might be appropriate in some situations, but raising an exception might be better in others.

Some kata just should not be translated into Python because it can be difficult to keep their initial idea:
- The Python standard library is very rich and has many utilities available (e.g. `itertools`, combinatorics functions), so some nontrivial requirements in other languages could become trivial in Python,
- Python supports big integers natively, so kata that rely on the implementation of arbitrary precision integer arithmetic would become trivial in Python.
- The Codewars runner provides a set of preinstalled packages which are available for users solving the kata. They can be a real game-changer when it comes to the difficulty of a Python translation. For example, `numpy` can make many matrix manipulation kata much easier.

## Coding


### Code style

Python code should stick to generally recognized Python conventions, with [PEP-8](https://www.python.org/dev/peps/pep-0008/) being most widely accepted.


### Imports

For further compatibility reasons, it is strongly recommended to import solution modules explicitly.  
Available modules in the context of Codewars are:
- `solution`, containing the user's submitted solution,
- `preloaded`, containing preloaded code,
- `codewars_test`, containing the [Codewars Python testing framework](/languages/python/codewars-test/).

When any of these imports are missing, then, for compatibility reasons, it will be automatically added by Codewars' preprocessor when the solution is built. However, relying on this behavior is discouraged as it's deprecated and subject to change in the future.

If a user solution is expected to use functions or classes from the `preloaded` module, it's recommended to add required imports to the "initial solution" code snippet.

:::note
For simplicity, through the rest of this article it's assumed that the `codewars_test` module is imported and aliased as `test` with the following statement:

```python
import codewars_test as test
```

This is a convention used in many Python kata, but it's not a requirement, and authors can choose to import the module in any way they find suitable for them.
:::

## Tests

### Testing framework

Python kata use the [Codewars Python testing framework](/languages/python/codewars-test/) to implement and execute tests. You should read its reference page to find out how to use `describe` and `it` blocks for [organization and grouping](/languages/python/codewars-test/#organization-of-tests), what [assertions](/languages/python/codewars-test/#assertions-1) are available, etc.

#### Dynamically generated test cases

It's possible to put functions decorated with `@test.it` in a loop and use them as a construct similar to parametrized test cases known from other testing frameworks, for example:

```python
@test.describe("Generated test cases")
def tests_with_generated_test_cases()
    test_cases = generate_test_cases()
    for msg, input, expected in test_case:
        @test.it(msg)
        def _():
            actual = user_solution(input)
            test.assert_equals(actual, expected)

```

This technique is liked by authors familiar with testing frameworks that provide parametrized or generated test cases out of the box, like NUnit, or JUnit. However, some caution is needed when this approach is used. Test suites organized like this can become large and can flood the test output panel with many entries, making it unreadable or causing performance problems in client browsers.

#### Decorated functions

To create and present test output, the Python testing framework uses parameters of `@test.describe` and `@test.it` decorators, and ignores actual names of decorated functions. Since the names are often redundant with titles of `describe` or `it` sections, they can be replaced with some placeholder name, for example, `_`:

```python
@test.describe('Fixed tests')
def _():

    @test.it('Odd numbers'):
    def _():
        ...some assertions...

    @test.it('Even numbers'):
    def _():
        ...some assertions...

@test.describe('Random tests')
def _():

    @test.it('Small inputs'):
    def _():
        ...some assertions...

    @test.it('Large inputs'):
    def _():
        ...some assertions...        
```

#### Test feedback

You should notice that the Python testing framework produces one test output entry per assertion (or even more in [some special situations](/languages/python/codewars-test/#timeout-utility)), so the test output panel can get very noisy.

### Random utilities

Python has a rich [random library](https://docs.python.org/3.8/library/random.html), which can be used to easily generate random integers in requested ranges, generate floating-point numbers, or sample and shuffle collections. Functions available there allow for very convenient construction of various random input generators.

Some useful functions include:
- [`random.randrange(stop)`](https://docs.python.org/3.8/library/random.html#random.randrange) - returns a randomly selected element from range `[0, stop)`.
- [`random.randrange(start, stop[, step])`](https://docs.python.org/3.8/library/random.html#random.randrange) - returns a randomly selected element from a range equivalent to `range(start, stop, step)`.
- [`random.randint(a, b)`](https://docs.python.org/3.8/library/random.html#random.randint) - returns a random integer `N` such that `a <= N <= b`.
- [`random.random()`](https://docs.python.org/3.8/library/random.html#random.random) - returns the next random floating-point number in the range `[0.0, 1.0)`.
- [`random.shuffle(x[, random])`](https://docs.python.org/3.8/library/random.html#random.shuffle) - shuffles the sequence `x` in place.
- [`random.sample(population, k)`](https://docs.python.org/3.8/library/random.html#random.sample) - returns a `k` length list of unique elements chosen from the `population` sequence or set.
- [`random.choices(population[, ...], k=1)`](https://docs.python.org/3.8/library/random.html#random.choices) - extracts `k` elements of the `population` (possibly outputting the same element several times).

:::warning
The Python runner is currently affected by a performance issue (reported as [codewars/runner#58](https://github.com/codewars/runner/issues/58)) which sometimes causes the generation of large amounts of random numbers to be noticeably slower. The majority of kata should not be affected by it in any significant way, but it can sometimes be a problem for performance tests generating large, random sets of data.
See the linked issue for details and possible workarounds.
:::

### Additional packages

The Codewars runner provides a set of preinstalled packages, which are available not only for users solving a kata, but can be also used by authors to build tests and generators of test cases. For example, `numpy` can be used to make the generation of matrices easier.

### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), or some kind of reference data like precalculated arrays, etc., it must not be possible for the user to redefine, overwrite or directly access its contents. To prevent this, it should be defined in a scope local to the testing function, a `it` or a `describe` block.

The reference solution or data ___must not___ be defined in the top-level scope of the test suite or in the [Preloaded code](/authoring/guidelines/preloaded/).

### Calling assertions

The Python testing framework provides a set of useful [assertions](/languages/python/codewars-test/#assertions-1), but when used incorrectly, they can cause a series of problems:
- Stacktraces of a crashing user solution can reveal details that should not be visible,
- Use of an assertion not suitable for the given case may lead to incorrect test results,
- Incorrectly used assertions may produce confusing or unhelpful messages.

To avoid the above problems, calls to assertion functions should respect the following rules:
- The expected value should be calculated _before_ invoking an assertion. The `expected` parameter passed to the assertion should not be a function call expression, but a value calculated directly beforehand.
- Appropriate assertion functions should be used for each given test. `test.assert_equals` is not suitable in all situations. Use `test.assert_approx_equals` for floating point comparisons, `test.expect` for tests on boolean values, `test.expect_error` to test error handling.
- Some additional attention should be paid to the order of parameters passed to assertion functions. It differs between various assertion libraries, and it happens to be quite often confused by authors, mixing up `actual` and `expected` in assertion messages. For the Python testing framework, the order is `(actual, expected)`.
- One somewhat distinctive feature of Python assertions is that by default, a failed assertion does not cause a test case to fail early. It can lead to unexpected crashes when an actual value had already been asserted to be invalid, but the execution of the current test case was not stopped and following assertions continue to refer to it. This behavior can be overridden by passing the `allow_raise=True` argument to the assertion functions that support it.
- To avoid unexpected crashes in tests, it's recommended to perform some additional assertions before assuming that the answer returned by the user solution has some particular type, form, or value. For example, if the test suite sorts the returned list to verify its correctness, an explicit assertion should be added to check whether the returned object is actually a list, and not, for example, `None`.


## Example test suite

Below you can find an example test suite that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.


```python

#import modules explicitly
import codewars_test as test
import preloaded
from solution import user_solution

@test.describe('Fixed tests')
def fixed_tests():

    @test.it('Regular cases')
    def regular_cases():
        test.assert_equals(6, user_solution([1, 2, 3]))
        test.assert_equals(5, user_solution([2, 3]))

    @test.it('Edge cases')
    def edge_cases():
        test.assert_equals(0, user_solution([]), "Invalid answer for empty array")
        test.assert_equals(2, user_solution([2]), "Invalid answer for one element array")

    @test.it('Input should not be modified')
    def do_not_mutate_input():
        arr = list(range(100))
        random.shuffle(arr)
        arr_copy = arr[:]
        #call user solution and ignore the result
        user_solution(arr_copy)
        #arr_copy should not be modified
        test.assert_equals(arr_copy, arr, 'Input array was modified')


@test.describe('Random tests')
def random_tests():

    #non-global reference solution
    def reference_solution(arr):
        # calculate and return reference answer

    #generate data for test cases with small inputs
    #this test case generator combines a few types of input
    #in one collection
    def generate_small_inputs():    
        test_cases = []
        
        #first type of input: regular array of small inputs (many of them)
        for _ in range(50):
            test_cases.append(generate_small_test_case())
        
        #another type of input: array with potentially tricky numbers
        #(possibly many of them)
        for _ in range(50):
            test_cases.append(generate_small_tricky_test_case())

        #potential edge case of single element array (a few of them)
        for _ in range(10):
            test_cases.append(generate_single_element_edge_case())

        #another edge case: empty array
        #Not always necessary, usually fixed test is enough.
        #If present, there's no need for more than one.
        test_cases.append([])

        #randomly shuffle test cases to make their order unpredictable
        random.shuffle(test_cases)

        return test_cases

    #Generator for large test cases, can be used for performance tests.
    #Can generate structure and types of test cases similar to the
    #generate_small_test_cases, but can also add more tricky cases,
    #or skip on edge cases if they were sufficiently tested in the smaller set.
    def generate_large_cases():
        #... actual implementation

    @test.it('Small inputs')
    def small_inputs():
        
        inputs = generate_small_inputs()
        for input in inputs:

            #call reference solution first, in separate statement.
            #we know it does not mutate the array, so no copy is needed
            expected = reference_solution(input)

            #call user solution and get actual answer.
            #since the input is used after this call to compose
            #the assertion message, a copy is passed
            actual = user_solution(input[:])
            
            #Call assertion function.
            #Custom assertion message is used to help users with diagnosing failures.
            #Assertion message uses original, non-modified input.
            test.assert_equals(actual, expected, f'Input: {input}')

    @test.it('Large random tests')
    def large_random_tests():
        
        large_inputs = generate_large_cases()
        
        for input in large_inputs:
            
            #expected answer calculated first, on separate line
            expected = reference_solution(input)
            
            #assertion message composed before the user solution has a chance
            #to mutate the input array
            message = f'Invalid answer for array of length {len(input)}'

            #actual answer calculated as second.
            #no copy is made because input is not used anymore
            test.assert_equals(user_solution(input), expected, message)
```
