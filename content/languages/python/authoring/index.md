---
kind: tutorial
languages: [python]
sidebar: "language:python"
---

# Python: creating and translating a kata

This article is meant as help for kata authors and translators who would like to create new content in Python. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, Python-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/) explaining how to create a Python version of a kata in a way which conforms to authoring guidelines and best practices. If you are going to create a Python translation of a kata, or a new kata in Python from scratch, please make yourself familiar with the aforementioned documents related to authoring in general. 


## General info

Any information related to the Python setup on Codewars, language version, available modules, and setup of the code runner can be found on the [Python reference](/languages/python/) page.


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

Some language constructs and features available in Python do not translate well into other languages, and should be avoided if possible:
- Abuse of dynamic typing, e.g. mixed return types (_"Return the result, or the string 'Error' if no result can be found."_).

Some kata should not be translated into Python, because it can be difficult to keep their initial idea:
- The Python standard library is very rich and has many utilities available (e.g. `itertools`, combinatorics functions), so some nontrivial requirements in other languages become trivial in Python,
- Python supports big integers natively, so kata that rely on the implementation of arbitrary precision integer arithmetic become trivial in Python.
- The Codewars runner provides a set of preinstalled packages which are available for users solving the kata. They can be a real game-changer when it comes to the difficulty of a Python translation. For example, `numpy` can make many matrix manipulation kata much easier.

## Coding


### Code style

Python code should stick to generally recognized Python conventions, with [PEP-8](https://www.python.org/dev/peps/pep-0008/) being most widely accepted.


### Imports

It is strongly recommended to import solution modules explicitly. Possible modules are:
- `solution`, containing user's submitted solution,
- `preloaded`, containing preloaded code,
- `codewars_test`, containing [Codewars Python testing framework](/languages/python/codewars-test/).

When any of these imports is missing, then, for compatibility reasons, it will be automatically added by Codewars preprocessor when solution is built. However, relying on this behavior is discouraged, as it's considered deprecated and might change in the future.

If a user solution is expected to use functions or classes from `preloaded` module, it's recommended to add required imports to "initial solution" code snippet.


## Tests

### Testing framework

Python kata use the [Codewars Python testing framework](/languages/python/codewars-test/) to implement and execute tests. You should read its reference page to find out how to use `describe` and `it` blocks for [organization and grouping](/languages/python/codewars-test/#grouping-tests), what [assertions](/languages/python/codewars-test/#assertions) are available, etc.

You should notice that the Python testing framework produces one test output entry per assertion, so the test output panel can get very noisy.

### Random utilities

Python has a rich [random library](https://docs.python.org/3.8/library/random.html), which can be used to easily generate random integers in requested ranges, generate floating point numbers, or sample and shuffle collections. Functions available there allow for very convenient construction of various random input generators.

Some useful functions include:
- [`random.randrange(stop)`](https://docs.python.org/3.8/library/random.html#random.randrange) - returns a randomly selected element from range `[0, stop)`.
- [`random.randrange(start, stop[, step])`](https://docs.python.org/3.8/library/random.html#random.randrange) - returns a randomly selected element from a range equivalent to `range(start, stop, step)`.
- [`random.randint(a, b)`](https://docs.python.org/3.8/library/random.html#random.randint) - returns a random integer `N` such that `a <= N <= b`.
- [`random.shuffle(x[, random])`](https://docs.python.org/3.8/library/random.html#random.shuffle) - shuffles the sequence `x` in place.
- [`random.sample(population, k)`](https://docs.python.org/3.8/library/random.html#random.sample) - returns a `k` length list of unique elements chosen from the `population` sequence or set.
- [`random.random()`](https://docs.python.org/3.8/library/random.html#random.random) - returns the next random floating point number in the range `[0.0, 1.0)`.

:::warning
The Python runner is currently affected by a performance issue (reported as [codewars/runner#58](https://github.com/codewars/runner/issues/58)) which sometimes causes the generation of large amounts of random numbers to be noticeably slower. The majority of kata should not be affected by it in any significant way, but it can sometimes be a problem for performance tests generating large, random sets of data.
See the linked issue for details and possible workarounds.
:::

### Additional packages

The Codewars runner provides a set of preinstalled packages, which are available not only for users solving a kata, but can be also used by authors to build tests and generators of test cases. For example, `numpy` can be used to make the generation of matrices easier.

### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution), but is not always possible), or some kind of reference data, precalculated arrays, etc., it can be redefined, overwritten, or accessed directly by the user solution. To avoid this, it should be defined in a scope local to the testing function, `it` block, or `describe` block. The reference solution or data _must not_ be defined in top-level scope of test suite, nor in [Preloaded code](/authoring/guidelines/preloaded/).

### Calling assertions

The Python testing framework provides a set of useful [assertions](/languages/python/codewars-test/#assertions), but when used incorrectly, they can cause a series of problems:
- Stacktraces of a crashing user solution can reveal details which should not be visible,
- Use of an assertion not suitable for the given case may lead to incorrect test results,
- Incorrectly used assertions may produce confusing or unhelpful messages.

To avoid the above problems, calls to assertion functions should respect the following rules:
- The expected value should be calculated _before_ invoking an assertion. The `expected` parameter passed to the assertion should not be a function call expression, but a value calculated directly beforehand.
- Appropriate assertion functions should be used for each given test. `assert_equals` is not suitable in all situations. Use `assert_approx_equals` for floating point comparisons, `expect` for tests on boolean values, `expect_error` to test error handling.
- Some additional attention should be paid to the order of parameters passed to assertion functions. It differs between various assertion libraries, and it happens to be quite often confused by authors, mixing up `actual` and `expected` in assertion messages. For the Python testing framework, the order is `(actual, expected)`.
- One somewhat distinctive feature of Python assertions is that by default, a failed assertion does not cause a test case to fail early. It can lead to unexpected crashes when an actual value had already been asserted to be invalid, but the execution of the current test case was not stopped and following assertions continue to refer to it. This behavior can be overridden by passing the `allow_raise=True` argument to the assertion functions which support it.
- To avoid unexpected crashes in tests, it's recommended to perform some additional assertions before assuming that the answer returned by the user solution has some particular type, form, or value. For example, if the test suite sorts the returned list to verify its correctness, an explicit assertion should be added to check whether the returned object is actually a list, and not, for example, `None`.


## Additional restrictions

### Accessing the solution file

Some kata (for example, code-golf challenges or anti-cheat tests) would like to access and read the user solution file as text. It's possible and can be done by reading a file located at `/workspace/solution.txt`.

### Blocking modules

_TBD_


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
    def ():    
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
