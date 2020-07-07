### Basic Setup

```python
test.describe("Example Tests")
test.it("Example Test Case")
test.assert_equals(add(1, 1), 2, "Optional Message")
print("<COMPLETEDIN::>")
print("<COMPLETEDIN::>")
```

### Available assertions

#### `test.assert_equals(actual, expected)`
#### `test.assert_equals(actual, expected, message)`
* Checks that the actual value equals the expected value.

#### `test.assert_not_equals(actual, unexpected)`
#### `test.assert_not_equals(actual, unexpected, message)`
* Checks that the actual value does not equal the expected value.

#### `test.expect_error(message, function)`
* Checks that `function` throws something.

#### `test.expect(passed)`
#### `test.expect(passed, message)`
#### `test.expect(passed, message, allow_raise=True)`
#### `test.expect(passed, allow_raise=True)`
* Checks that `passed` is truthy. Note that the test suite will continue its execution if the keyword `allow_raise` isn't manually set to `True`.
* You should absolutely avoid the call to `test.expect` without the message argument because it won't give any feedback about the reason why the assertion failed.
* So, provide an useful `message`!


### Test suite good practices

1. Fixed tests first.
1. Use all your `example tests` at the beginning of the `test cases`.
1. Create enough fixed tests so that it would be "more boring" to store/hardcode the results than to implement the needed code.
1. Implement random tests
1. Never define utility methods (such as your internal solution!) at the beginning of the test cases: this way it's easy for the warrior to find it and to use it to complete your kata without implementing anything.
1. Even if not absolutely necessary, it's a good idea to wrap your random tests and the related methods in a function and then call to this function to execute them. This way:
   - it's more difficult for a cheater to access to them
   - it may avoid some scope problems (see below)
```python
def random_tests():
    """
    Put here all the stuff you need which the warrior shouldn't have access to:
    import, constants, classes, functions, assertions, ... 
    ...
    """

random_tests()   # This will execute your random tests
```
7. __NEVER__ put your internal solution or objects/structures that contain critical information about it in the preloaded part! (all the things in there are completely accessible to the warriors)

### Scope problems and usual mistakes

Be aware that when the test suite is executed, all the preloaded part, the warrior's code and the test cases/sample tests are merged together before their execution. So a global scope exists, which may lead to possible troubles:
* Check that you didn't forget the imports needed for the internal solution in the test cases: they are already in your own solution so your test suite will work even if you forget those in the test cases. 
But if a warrior does not use the same imports, the test suite will fail.
* Do not use simple names for your variables/methods that are defined in the global scope: `is_prime` as an utility method is the worst choice you could make because it has 90% chances to override the one of the warrior! => `is_prime_34s35fh3s5g42dfhg` is better. Same for variables of course (`x` => bad!). Using a wrapper function is especially efficient to get rid of this kind of problems.
* Last but not least, think about the problems that could appear if a warrior mutates your input during the random tests (if you pass lists, dictionaries,...). Two ways to avoid problems:
  - compute the expected result first, before passing the input to the warrior
  - or pass a copy of the input to the warrior (use `copy.deepcopy` if needed)

```python
test.assert_equals(user_func(input), ref_func(input))
```
=>   very bad!! (user_func(input) is executed before your internal solution)
```python
test.assert_equals(user_func(input[:]), ref_func(input))
```
=>   OK for list of depth one only (input = [1,2,3])
```python
from copy import deepcopy
test.assert_equals(user_func(deepcopy(input)), ref_func(input))
```
=>   OK whatever the input is (almost)
```python
expected = ref_func(input)
test.assert_equals(user_func(input), expected)
```
=>   OK ! (unless your internal solution mutate the input!)



### `Test.describe`, `Test.it` and the `print("<COMPLETEDIN::>")` things:

The `Test.describe` and `Test.it` blocks allow you to structure the display of your test suite.
Note that the statements in `Test.it` won't show up in the console if they are not followed by an assertion test at any point.

In Python, the `Test.describe` and `Test.it` will concatenate themselves if you do not use `print("<COMPLETEDIN::>")` to close each block. Note that the statement will not show up in the console.

```python
Test.describe("1")
Test.it("A")
Test.describe("2")
Test.it("B")
Test.it("C")

Leads to:

1
  A
    2
      B
      C


Test.describe("1")
Test.it("A")
print("<COMPLETEDIN::>")          #  <-  close it
print("<COMPLETEDIN::>")          #  <-  close describe
Test.describe("2")
Test.it("B")
print("<COMPLETEDIN::>")          #  <-  close it
Test.it("C")
print("<COMPLETEDIN::>")          #  <-  close it
print("<COMPLETEDIN::>")          #  <-  close describe

Leads to:

1
  A
2
  B
  C
```