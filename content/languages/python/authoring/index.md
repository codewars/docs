---
kind: recipe
languages: [python]
sidebar: "language:python"
---

# Creating Python Kata

This article is meant as help for kata authors and translators who would like to create new content in Python programming language. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), what are the most common pitfalls, and how to avoid them.

This article is not a standalone tutorial on creating a kata or translation. It's meant to be a complementary, Python-specific part to more general set of HOWTOs and guidelines related to [content authoring](/authoring/). 


## General info

Any help related to Python in context of Codewars can be found on [Python reference](/languages/python/) page.


## Description

Python code blocks can be inserted with following Markdown:

~~~
```python

...your code here...

```
~~~

Python-specific paragraphs can be inserted with following Markdown:

```
~~~if:python

...text visible only for Python description...

~~~

~~~if-not:python

...text not visible in Python description...

~~~
```

For details, see reference pages on [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks) and [language conditional rendering](/references/markdown/extensions/#conditional-rendering).


## Tasks and Requirements

Some concepts available in Python do not translate well into other languages, and should be avoided if possible:
- Mixed return types (_"Return result, or string 'Error' if no result can be found."_).

Some kata should not be translated into Python, because it can be difficult to keep their initial idea:
- Python standard library is very rich and has many utilities available  (for example, `itertools`, combinatorics functions, `numpy`), so some requirements become very easy,
- Python supports big integers natively, so kata which rely on implementation of arbitrary precision integer arithmetic become trivial in Python.


## Coding

Python code should stick to generally recognized Python conventions, with [PEP-8](https://www.python.org/dev/peps/pep-0008/) being most widely accepted.


## Tests

### Testing framework

Python kata use [Codewars Python testing framework](/languages/python/codewars-test/) to implement and execute tests. You should read its reference page to find out how to use `describe` and `it` blocks for [organization and grouping](/languages/python/codewars-test/#grouping-tests), what are available [assertions](/languages/python/codewars-test/#assertions), etc. 

You should notice that Python testing framework produces one test output entry per assertion, so test output panel can get very noisy.

### Random utilities

Python has a rich [random library](https://docs.python.org/3.8/library/random.html), which can be used to easily generate random integers in requested ranges, generate floating point numbers, or sample and shuffle collections. Functions available there allow for very convenient construction of various random input generators.

### Input mutation

Issues caused by input mutation are particularly difficult to deal with, because it can lead to bugs which are very subtle, confusing, and difficult to diagnose. When the input is mutated in uncontrolled way, tests may sometimes appear to randomly crash, give incorrect results, or produce confusing logs and assertion messages. Unfortunately, instances of many commonly used data types and classes, are mutable. To avoid problematic situations, following precautions should be taken:
- Ideally, inputs should be immutable (but it's unfortunately not always possible). Otherwise,
- Requirements on the mutation of input should be always specified in description _and enforced_. If user solution is required to not modify the received data, there should be a dedicated test case or assertion for that. 
- If input mutation is allowed for user solutions, reference solution (if used) should not modify it anyway. If it does, it _must_ receive a (deep) copy of the input. Data which was mutated by a reference solution _must not_ be used in any way afterwards (as an input for user solution, or to compose logs or diagnostic messages, etc).
- Input which could be potentially modified by a user solution _must not_ be used afterwards. It must not be used as an input for the reference solution, to compose diagnostic messages, or anything else. If necessary, a (deep) copy should be created and passed to the user solution.

### Reference solution

If the test suite happens to use a reference solution to calculate expected values (what [should be avoided](/authoring/guidelines/submission-tests/#reference-solution), but is not always possible), or some kind of reference data, precalculated arrays, etc., it can be redefined, overwritten, or accessed directly by user solution. To avoid this, it should be defined in a non-global scope, local to the testing function, `it` block, or `describe` block. The reference solution or data _must not_ be defined in [Preloaded code](/authoring/guidelines/preloaded/).

### Calling assertions

Python testing framework provides a set of useful [assertions](/languages/python/codewars-test/#assertions), but when used incorrectly, they can cause a series of problems:
- Stacktraces of a crashing user solution can reveal details which should not be visible,
- Reference soluton and user solution called in wrong order can mutate input in undesirable way allowing for abuse or leading to bugs,
- Use of an assertion not suitable for given case can cause incorrect test results,
- Incorrectly used assertion can produce confusing or unhelpful messages.

To avoid above problems, calls to assertion functions should respect some rules:
- Expected and actual values should be calculated _before_ a call to assertion method. Parameters passed to the assertion should not be function call expressions, but values calculated directly before.
- If a reference solution is used to calculate expected value, it _must_ be either called _before_ user solution, or receive a (deep) copy of input data.
- Assertion message _must not_ be composed from a mutable data which could be potentially modified by a user or reference soltion.  
- Appropriate assertion function should be used for a given test. `assert_equals` is not suitable in all situations. Use `assert_approx_equals` for floating point comparisons, `expect` for tests on boolean values, `expect_error` to test error handling.


## Additional restrictions

### Accessing solution file

Some kata (for example, code golf challenges or anti-cheat tests) would like to access and read user solution file as text. It's possible and can be done by reading a file located at `/workspace/solution.txt`.

### Blocking modules

_TBD_


## Example test suite

Below you can find an example test suite which covers most common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use different structure, as long as they keep to established conventions and do not violate authoring guidelines.


```python
@describe('Fixed tests')
def fixed_tests():

    @it('Regular cases')
    def regular_cases():
        test.assert_equals(6, sum_array([1, 2, 3]))
        test.assert_equals(5, sum_array([2, 3]))

    @it('Edge cases')
    def edge_cases():
        test.assert_equals(0, sum_array([]), "Invalid answer for empty array")
        test.assert_equals(2, sum_array([2]), "Invalid answer for one element array")

@describe('Random tests')
def random_tests():

    #non-global reference solution
    def reference_sum_array(arr):
        return sum(arr)

    #generate data for test cases with small inputs
    def generate_small_test_cases():    
        test_cases = []
        
        #first type of input: regular array of small inputs (many of them)
        for _ in range(50):
            test_cases.append(generate_small_test_case())

        #second type of input: edge case of single element array (a few of them)
        for _ in range(10):
            test_cases.append(generate_single_element_edge_case())

        #third type of input: edge case of empty array (one is usually enough)
        test_cases.append([])

        #randomly shuffle test cases to make their order unpredictable
        random.shuffle(test_cases)

        return test_cases

    def generate_large_cases():
        #... actual implementation
        pass

    @it('Small inputs')
    def small_inputs():
        
        inputs = generate_small_inputs()
        for input in inputs:

            #call reference solution first.
            #we know it does not mutate the array, so no copy is needed
            expected = reference_sum_array(input)

            #call user solution and get actual answer.
            #since the input is used after this call, a copy is passed
            actual = sum_array(input[:])
            
            #call assertion function. Assertion message uses original,
            #non-modified input.
            test.assert_equals(actual, expected, f'Input: {input}')

    @it('Large random tests')
    def large_random_tests():
        
        large_inputs = generate_large_cases()
        
        for input in large_inputs:
            
            #expected answer calculated first
            expected = reference_sum_array(input)
            
            #actual answer calculated second.
            #no copy is made because input is not used anymore
            actual = sum_array(input)
            
            test.assert_equals(actual, expected)

```