# Before You Read This Page

This page documents [new version of Python Test Framework (a.k.a. `cw-2.py`)](https://github.com/Codewars/python-test-framework). This version was released to Codewars in early April 2018, and moved to its own repository in Feb 2019. It extends the [V1 framework](https://github.com/Codewars/codewars.com/wiki/Codewars-Python-Test-Framework), so you are able to use both along side each other.

---

# Basic Setup

```python
@test.describe('Example Tests')
def example_tests():
    @test.it('Example Test Case')
    def example_test_case():
        test.assert_equals(add(1, 1), 2, 'Optional Message on Failure')
```

## Test Grouping

```python
@test.describe(test_name)
@test.it(test_case_name)
```

Creates a `describe` or `it` block respectively. The decorators are designed so that the inner functions are run immediately without having to call them yourself. Both print elapsed time of the block at the end, and `describe`s can be nested.

There was an important design decision behind choosing decorators over `with` blocks. In Python, the functions are the only thing that has its own scope, and in order to support random tests, the only foolproof way was to put the reference solution inside a function scope (you can see related code blocks under "Best Practices" at the bottom of this page).

# Available Assertions

## Equality Test

```python
test.assert_equals(actual, expected) # default message: <actual> should equal <expected>
test.assert_equals(actual, expected, message)
```

Checks that the actual value equals the expected value. This function is usually the main building block of a Kata's test cases.  
Note that, since Python's equality operator checks for deep equality by default, you don't have to compare the individual contents yourself when you want to compare with a list, tuple, set, etc.

## Non-equality Test

```python
test.assert_not_equals(actual, unexpected) # default message: <actual> should not equal <expected>
test.assert_not_equals(actual, unexpected, message)
```

Checks that the actual value does not equal the (un)expected value.

## Approximate Equality Test

```python
test.assert_approx_equals(actual, expected, margin=1e-9, message=None)
# default message: <actual> should be close to <expected> with absolute or relative margin of <margin>
```

Checks if the actual value is sufficiently close to the expected. If the expected value is a float, some amount of floating-point error is always expected during the calculation. In this case, **you're strongly advised to use this function to check the value instead of `assert_equals`**.


## Pass and Fail

```python
test.pass_()
test.fail(message)
```

Simply generate a passed test, or a failed test with a message. If your test method is very complicated or you need a special procedure to test something, these functions are probably a good choice.

## Truthness Test

```python
test.expect(boolean) # default message: Value is not what was expected
test.expect(boolean, message)
```

Checks if the passed value is truthy. This function can be helpful when you test something which cannot be tested using other functions. However, since this function's default failure message is not helpful at all, **you're strongly advised to provide your own helpful message**.

## Error Test

```python
test.expect_error(message, function, exception=Exception)
```

Checks that invoking `function` throws an exception of type `exception`.

* `Exception` is a catch-all type. You can check *if a function throws anything* by calling without `exception` argument.
* `exception` argument can be a tuple of multiple exception types. Throwing any one of the specified types will pass the test.

Examples:

```python
# Raises Exception >> LookupError >> KeyError
def f(): return {}[0]
test.expect_error(msg, f) # Pass
test.expect_error(msg, f, LookupError) # Pass
test.expect_error(msg, f, OSError) # Fail
test.expect_error(msg, f, (LookupError, OSError)) # Pass
```

## No-error Test

```python
test.expect_no_error(message, function, exception=BaseException)
```

Checks that invoking `function` does not throw an exception of type `exception`.

* As in `expect_error`, `exception` parameter can be a tuple of multiple exception types.
* If an exception *not* of type `exception` is thrown, it is silently caught and the test is considered a pass.

# Utilities

## Timeout Utility

```python
@test.timeout(sec)
def some_function():
    do_some_computation()
    test_something_with_it()
```

Runs the function within the time limit. Generates a failed assertion when the function fails to complete in time, and its execution is terminated immediately. The time limit (in seconds) can be a float.

Due to the issue of being impossible to catch exceptions thrown from a child process, [the patch (Feb 2019)](https://github.com/Codewars/python-test-framework/pull/1) enforces that **the function does not throw *any* exceptions.** This is done by wrapping the inner function with `expect_no_error`; as a side effect, you get one extra "test passed" for a collection of tests run inside a timeout wrapper.

# Test Suite Best Practices

## Example Test Fixture

```python
@describe('Fixed Tests')
def fixed_tests():

    # Basic Tests: Test the basic behavior (basic understanding of the task).
    @it('Basic Test Cases')
    def basic_tests():
        test.assert_equals(two_oldest_ages([2, 4, 6, 9, 12, 14]), [12, 14])

    # Edge Cases: Test the edge cases, which are not common but hard to correctly solve.
    # These are needed because "rare but hard cases" are not well-covered by random tests only.
    @it('Edge Cases')
    def edge_case_tests():
        test.assert_equals(two_oldest_ages([0, 0, 0, 0, 0, 0]), [0, 0])

# Random tests: Test the behavior against your reference solution.
# This is mainly to prevent the warrior passing the tests by hardcoding the fixed cases.
# The functions `random`, `randint`, `choice`, `shuffle`, and `sample` inside Python's `random` module will be helpful.
@describe('Random Tests')
def random_tests():

    # The reference solution should be placed here, in order to prevent the warrior from abusing your reference solution
    def _reference(ages):
        ...

    # When running a random test, you need to make sure that the expected value is computed first.
    # If the warrior's solution is run first, it may mutate the input list and thus easily bypass them.
    # Also, take extra care on your own reference solution to not mutate the input :)
    def _do_one_test():
        ages = generate_random_case()
        expected = _reference(ages)
        test.assert_equals(two_oldest_ages(ages), expected)
        # test.assert_equals(two_oldest_ages(ages), _reference(ages))

    # The number of random tests must be enough to test every possible aspects of the input.
    # The rule of thumb is 100 tests, but you have to think carefully according to the requirements of your Kata.
    @it('Random Test Cases')
    def random_test_cases():
        for _ in range(100):
            _do_one_test()
```