# UnitKit

A minimalistic unit test framework [UnitKit](https://github.com/etoile/UnitKit) can be used to test Objective-C code.

## Basic Setup


```objc
@implementation TestSuite
// add tests here
// test methods must start with `test`
- (void)testAdd
{
  // add assertions here
  UKIntsEqual(2, add(1, 1));
}
@end
```

## Assertions

> source: [UKTest.h](https://github.com/etoile/UnitKit/blob/master/FrameworkSource/UKTest.h)

### `UKPass()`

Reports a success.

### `UKFail()`

Reports a failure.

### `UKTrue(condition)`

Tests that an expression is `true`.


### `UKFalse(condition)`

Tests that an expression is `false`.

### `UKNil(ref)`

Tests that `ref == nil`.


### `UKNotNil(ref)`

Tests that `ref != nil`.


### `UKIntsEqual(a, b)`

Tests that two primitive integers are equal.

`a` is the expected value and `b` the tested value.

Don’t pass `unsigned long long` integers that cannot safely casted to `long long`.


### `UKIntsNotEqual(a, b)`

Tests that two primitive integers are not equal.

`a` is the non-expected value and `b` the tested value.

Don’t pass `unsigned long long` integers that cannot safely casted to `long long`.


### `UKFloatsEqual(a, b, d)`

Tests that two primitive floats are equal or almost equal, `fabs(a - b) <= d`.

`d` is the error margin.

`a` is the expected value and `b` the tested value.

### `UKFloatsNotEqual(a, b, d)`

Tests that two primitive floats are not equal, `fabs(a - b) > d`.

`d` is the error margin.

`a` is the non-expected value and `b` the tested value.

### `UKObjectKindOf(a, b)`

Tests that `a` is a subclass of `b`.


### `UKObjectsEqual(a, b)`

Tests that `[a isEqual: b]`.

`a` is the expected value and `b` the tested value.


### `UKObjectsNotEqual(a, b)`

Tests that `![a isEqual: b]`.

`a` is the non-expected value and `b` the tested value.

### `UKObjectsSame(a, b)`

Tests that the objects are identical with `a == b`.

`a` is the expected value and `b` the tested value.

### `UKObjectsNotSame(a, b)`

Tests that the objects are not identical with `a != b`.

`a` is the non-expected value and `b` the tested value.

### `UKStringsEqual(a, b)`

Tests that `[a isEqual: b]`.

`a` is the expected value and `b` the tested value.

### `UKStringsNotEqual(a, b)`

Tests that `![a isEqual: b]`.

`a` is the non-expected value and `b` the tested value.

### `UKStringContains(a, b)`

Tests that `b` is a substring of `a`.

### `UKStringDoesNotContain(a, b)`

Tests that `b` is not a substring of `a`.

### `UKRaisesException(a)`

Tests that the code piece raises an exception.


### `UKDoesNotRaiseException(a)`

Tests that the code piece raises no exception.


### `UKRaisesExceptionNamed(a, b)`

Tests that the code piece raises an exception of the name `b`.


### `UKRaisesExceptionClass(a, b)`

Tests that the code piece raises an exception of the class name `b`.