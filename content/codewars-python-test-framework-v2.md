# Python test framework for Codewars (v2)
(upgrade by [@Bubbler-4](https://github.com/Bubbler-4), Feb 2019)

<br>
<br>

You may find here the detailed information about the [test framework](https://github.com/codewars/python-test-framework/blob/master/codewars_test/test_framework.py) designed for CodeWars. The present version is extending the first one, so old katas are still compatible, but the use of the v2 is required for newly created katas or translations.

_Note: the test module is aliased with `test`, so you can call every tool provided with it using either `Test.method` or `test.method`._

<br>
<br>

---

## Overview

The test framework allowes to write named groups of tests holding other named groups of tests, containing themselves assertions.

* Assertions (using the methods detailed below) can actually be used at any level in the groups, or even outise of them (but you're advised to avoid that).
* Note that the code executed inside on group isn't stopped at the first failed assertion (unlees you use `allow_raise`. See below), so the full test suite is executed each time.

The basic setup for the tests follow this example:

```python
@Test.describe('Fixed Tests')
def example_tests():

    @Test.it('Example Test Case')
    def example_test_case():
        test.assert_equals(add(1, 1), 2, 'Optional Message on Failure')
    
    @Test.it("More tests")
    def more():
        for a,b,exp in [(-2,30,28), (42,0,42)]:
            Test.assert_equals(add(a,b), exp)
            
    @Test.it("Pair tests")
    def more():
        for v in range(10):
            Test.assert_equals(add(v,v), 2*v)
```

Here is the result visible by the user in the output panel:

`TODO: add the image: "docs/content/PythonTestFrameWorkExample.png"  => how?`



<br>
<br>




## Tests grouping (blocks)

The groups are created using the following decorators:

```python
@Test.describe(test_name)
def _():

    @Test.it(test_case_name)
    def _():
        ...
         
    @Test.describe(subgroup_name)
    def _():
      ...

        @Test.it(test_case_subgroup_name)
        def _():
            ...
```

Those decorators automatically run the decorated function to launch the tests. Both print elapsed time of the block at the end, and `describe`s can be nested.


* `describe` blocks:

Those blocks always stay depolyed whatever the results of the tests are, menaing that if you put assertions directly in them, they will be visible in the output, as well as any other `it` block(s) it could contain. They are the basic block inwhich you can insert `it` blocks or other nested `describe` blocks if you need to create subdivisions in your test suite.

* `it` blocks:

On the contrary of the `describe` blocks, the `it` blocks are deployed in the output panel only when they contain failed assertions. Oterwise they are shrinked and only the name of the block and the number of assertions are visible.

Note that you _cannot nest_ the `it` blocks.



<br>
<br>



---


# Tests interruption

Some of the functions below can accept a named argument `allow_raise=False`.

If you change its value to `True`, the tests contained inside the current block will be interrupted at the first failed test. The executions are then going back to the parent block if it exists and the next part is executed.
On some computation-wise intensive katas, this may be a good idea to use this feature so that the user doesn't have to wait a long time before getting feedback (or possibly befor etiming out and in that cas, he might never get ny feedback at all, which may be cumbersome).




<br>
<br>




---

# Available assertion methods

## Equality tests

```python
Test.assert_equals(actual, expected)                        # default message: <actual> should equal <expected>
Test.assert_equals(actual, expected, message)
Test.assert_equals(actual, expected, message=None, allow_raise=False)         
```

Checks that the actual value equals the expected value. Note that, since Python's equality operator checks for deep equality by default, you don't have to compare the individual contents yourself when you want to compare with a list, tuple, set, etc.

This function is usually the main building block of a Kata's test cases.  
 


<br>




## Non-equality tests

```python
Test.assert_not_equals(actual, unexpected)                  # default message: <actual> should not equal <expected>
Test.assert_not_equals(actual, unexpected, message)
Test.assert_not_equals(actual, expected, message=None, allow_raise=False)   
```

Checks that the actual value does not equal the (un)expected value.



<br>




## Approximate equality tests (handling floats and floating point errors)

If the computations of the tests imply some floats, the exact value returned by the user may depend on the order of the different computations and he might end up with a value considered correct but not strictly equal to the expected one. For example:

```pyhton
a,b = 170*115/100, 170*(115/100)
Test.assert_equals(a,b)             #   ->    195.5 should equal 195.49999999999997
```
So, in this case, **you need to use this function to check the value instead of `assert_equals`**.


```python
Test.assert_approx_equals(actual, expected)
Test.assert_approx_equals(actual, expected, margin=1e-9, message=None, allow_raise=False)

# default message: <actual> should be close to <expected> with absolute or relative margin of <margin>
```

Checks if the actual value is close enough to the expected one, with a default relative or absolute value of `1e-9`.

The comparison is done this way:

```python
div = max(abs(actual), abs(expected), 1)
is_good = abs((actual - expected) / div) < margin
```
So you can compare either big or small float values without problems.



<br>



## Truthness tests

```python
Test.expect(bool)                            # default message: Value is not what was expected
Test.expect(bool, message)
```

Checks if the passed value is truthy. This function can be helpful when you test something which cannot be tested using other functions. However, since this function's default failure message is not helpful at all, **you're strongly advised to provide your own helpful message, or even to _not_ use** `Test.expect`. If you need to build custom assertion functions, you could/should use the two following ones instead.



<br>



## Pass and fail

```python
test.pass_()
test.fail(message)
```

Simply generates a passed or a failed test with a message.
If your test method is very complicated or you need a special procedure to test something, these functions are probably a good choice.



<br>




## Error tests

```python
Test.expect_error(message, function)
Test.expect_error(message, function, exception=Exception)
```

Checks that invoking `function` throws an exception.
If the argument `exception` is used, the raised exception must be an instance of that exception to pass the test.

* _Catching any exception:_ `Exception` is a catch-all type. So you can check *if a function throws anything* doing the call without the `exception` argument.
* _Catching specific exceptions:_ the `exception` argument can be a tuple of multiple exception types. The user throwing anyone of the specified exceptions will pass the test.

Examples:

```python
f=lambda: {}[0]      # Raises Exception >> LookupError >> KeyError

Test.expect_error(msg, f)                      # Pass
Test.expect_error(msg, f, LookupError)         # Pass
Test.expect_error(msg, f, OSError)             # Fail
Test.expect_error(msg, f, (OSError, KeyError)) # Pass
```



<br>



## No-error tests

```python
Test.expect_no_error(message, function)
Test.expect_no_error(message, function, exception=BaseException)
```

Checks this time that invoking `function` does ___not___ throw an exception of type `exception`.

* Just like in `expect_error`, the `exception` parameter can be a tuple of multiple exception types or can be left unspecified.
* If during the execution of `function` an exception is raised that does *not* match with the parameter `exception`, it is silently caught and the test is considered a pass.


```python
f=lambda: {}[0]      # Raises Exception >> LookupError >> KeyError

Test.expect_no_error(msg, f)                   # Fail
Test.expect_no_error(msg, f, LookupError)      # Fail
Test.expect_no_error(msg, f, OSError)          # Pass
```




<br>
<br>




## Timeout Utility

```python
@test.timeout(sec)              # default message: Exceeded time limit of <sec> seconds
def some_function():
    #do_some_computation heavy tests here
    ...
    Test.assert_equals(atoms_in_universe(), expected)
```

Runs the decorated function within the time limit (expressed in seconds, the value can be a float or an integer).
Generates a failed assertion when the function fails to complete in time, and its execution is terminated immediately. 

Note: using the timeout utility, you will get an extra asssertion due to the issue of being impossible to catch exceptions thrown from a child process. [The patch (Feb 2019)](https://github.com/Codewars/python-test-framework/pull/1) used to resolve this enforces that **the function does not throw *any* exceptions.** This is done by wrapping the inner function with `expect_no_error`; as a side effect, you get that one extra "test passed" for a collection of tests run inside a timeout wrapper.
_Corollary:_ don't forget to write assertions in a timed tests, otherwise a that "test" will be considered a pass even if the function of the user is returning the wrong value.

If the code of the user raises an exception during the executions, the error message becomes ` Should not throw any exceptions inside timeout: <Exception()>`.
