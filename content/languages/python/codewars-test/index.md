---
kind: reference
languages: [python]
tags:
  - testing
sidebar: "language:python"
prev: /languages/python/
next: /languages/python/authoring/
---

# Python Codewars Test Framework

To run Python tests, Codewars currently uses a custom test framework, published and available in [this GitHub repository][test-framework-repo].

## Overview

The test framework provides facilities to create named, hierarchical groups of tests, as well as individual test cases.

Additionally, the framework provides a set of functions performing assertions on various conditions: equality, error handling, truthness, etc.


## `codewars_test` module

All functions, decorators, and assertions provided by the framework are defined in `codewars_test` Python module.

:::warning Deprecation
Python runner for verions prior to Python 3.8 does not contain the `codewars_test` module. The testing framework is imported implicitly and aliased as `test` and `Test`. This behavior is deprecated and for the Python 3.8 kata the explicit import is required.
:::

## Organization of tests

Tests in Python testing framework are composed from functions decorated with a set of Python decorators. All such functions are automatically discovered and run. The final result for every test block is determined by contained assertions, and reported along with its measured execution time.


### `@describe` - test groups

Functions decorated with `@describe` represent a group of logically related test cases.

`@describe` functions can contain another, nested test groups (functions decorated with `@describe`), or individual test cases (functions decorated with `@it`, see below).

Test groups cannot contain assertions.


### `@it` - test cases

Functions decorated with `@it` represent a single test case. They can be defined inside of a function decorated with `@describe`, or can be top level functions.

`@it` functions can contain only assertions, and cannot nest another test cases nor test groups.


### Assertions

Assertions can be located only inside of a test case (a function decorated with `@it`). They must not be located directly under a test group (a function decorated with `@describe`), or in the top level of test.

Note that failed assertions do not stop the execution of the enclosing test case by default. See [Failing Early](#failing-early) on how to control this behavior.


### Example

The basic setup for the tests follows this example:

```python
import codewars_test as test

@test.describe('Fixed Tests')
def example_tests():

    @test.it('Example Test Case')
    def example_test_case():
        test.assert_equals(add(1, 1), 2, 'Optional Message on Failure')

    @test.it("More tests")
    def more():
        for a,b,exp in [(-2,30,28), (42,0,42)]:
            test.assert_equals(add(a,b), exp)

    @test.it("Reduced group")
    def more():
        for v in range(10):
            test.assert_equals(add(v,v), 2*v)

@test.describe('Random Tests')
def rnd_tests():
    ...
```

The above produces an output similar to the following:

<div class="block dark:hidden">

![Output window example](./img/python-test-framework-example-light.png)

</div>
<div class="hidden dark:block">

![Output window example](./img/python-test-framework-example-dark.png)

</div>


## Failing Early

Some of the functions below can accept a named argument `allow_raise=False`.

If you change its value to `True`, the tests contained inside the current block will be interrupted at the first failed test. The executions are then going back to the parent block if it exists and the next part is executed.
On some computation-heavy Kata, it may be a good idea to use this feature so that the user has not to wait a long time before getting feedback (or possibly before timing out, and in that case, they might never get any feedback at all, which may be cumbersome).


## Assertions

### Equality tests

```python
test.assert_equals(actual, expected, message=None, allow_raise=False)
```

Checks that the actual value equals the expected value.  

Note that because Python's equality operator checks for deep equality by default, you don't have to compare the contents of the array element by element yourself when you want to compare values as lists, tuples, sets, etc.

Default message is _"<actual> should equal <expected>"_.

This function is usually the main building block of a Kata's test cases.

### Non-equality tests

```python
test.assert_not_equals(actual, expected, message=None, allow_raise=False)
```

Checks that the actual value does not equal the (un)expected value.
Default message is _"<actual> should not equal <expected>"_.

### Approximate equality tests

```python
test.assert_approx_equals(actual, expected, margin=1e-9, message=None, allow_raise=False)
```

Checks if the actual value is close enough to the expected one, with a default relative or absolute value of `margin`. The comparison is performed in following way:

```python
div = max(abs(actual), abs(expected), 1)
is_good = abs((actual - expected) / div) < margin
```

So you can compare either big or small floating-point values without problems.

Default message is _"<actual> should be close to <expected> with absolute or relative margin of <margin>"_.

### Truthness tests

```python
test.expect(expected, message=None)
```

Checks if the passed value is truthy. This function can be helpful when you test something which cannot be tested using other assertion functions.  

However, since this function's default failure message is not very helpful, **you're strongly advised to provide your own helpful message**.

Default message: _"Value is not what was expected"_.


### Pass and fail

```python
test.pass_()
test.fail(message)
```

Simply generates a passed or a failed test with a message.
If your test method is very complicated or you need a special procedure to test something, these functions are probably a good choice.

### Error tests

```python
test.expect_error(message, function)
test.expect_error(message, function, exception=Exception)
```

Checks that invoking `function` throws an exception.
If the argument `exception` is used, the raised exception must be an instance of that exception to consider the test as passed.

- _Catching any exception:_ `Exception` is a catch-all type. So you can check _if a function throws anything_ doing the call without the `exception` argument.
- _Catching specific exception(s):_ the `exception` argument can be a specific kind of exception class or even a tuple of multiple exception classes. The user throwing anyone of the specified exceptions will pass the test.

Examples:

```python
f=lambda: {}[0]      # Raises Exception >> LookupError >> KeyError

test.expect_error(msg, f)                      # Pass
test.expect_error(msg, f, LookupError)         # Pass
test.expect_error(msg, f, OSError)             # Fail
test.expect_error(msg, f, (OSError, KeyError)) # Pass
```

### No-error tests

```python
test.expect_no_error(message, function)
test.expect_no_error(message, function, exception=BaseException)
```

Checks this time that invoking `function` does **_not_** throw an exception of type `exception`.

- Just like in `expect_error`, the `exception` parameter can be a tuple of multiple exception types or can be left unspecified too.
- If during the execution of `function` an exception is raised that does _not_ match with the parameter `exception`, it is silently caught and the test is considered a pass.

```python
f=lambda: {}[0]      # Raises Exception >> LookupError >> KeyError

test.expect_no_error(msg, f)                   # Fail
test.expect_no_error(msg, f, LookupError)      # Fail
test.expect_no_error(msg, f, OSError)          # Pass
```

## Timeout Utility

```python
@test.timeout(sec)                      # default message: Exceeded time limit of <sec> seconds
def some_function():
    #do some heavy tests here...
    for _ in ad_nauseam():
        test.assert_equals(count_atoms_in_universe(), expected)
```

Runs the decorated function within the time limit.  
`sec` is the amount of time allowed. It is expressed in seconds and can be given as an integer or float.  
Generates a failed assertion when the function fails to complete in time, and its execution is terminated immediately.

If the code of the user raises an exception during the executions, the error message becomes `Should not throw any exceptions inside timeout: <Exception()>`.

Note:  
Using the timeout utility, you will get an extra assertion due to the issue of being impossible to catch exceptions thrown from a child process.  
[The patch (Feb 2019)](https://github.com/Codewars/python-test-framework/pull/1) used to resolve this enforces that **the function does not throw _any_ exceptions.** This is done by wrapping the inner function with `expect_no_error`; as a side effect, you get that one extra "test passed" for a collection of tests run inside a timeout wrapper.
_Corollary:_ don't forget to write assertions in timed tests, otherwise that "test" will be considered a pass even if the function of the user is returning the wrong value.

## Acknowledgements

`v2` to support grouping tests with decorators was contributed by [@Bubbler-4](https://github.com/Bubbler-4).

[test-framework-repo]: https://github.com/codewars/python-test-framework
