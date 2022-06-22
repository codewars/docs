---
title: Working with Floating-Point Numbers
tags: [tutorial]
---

This article attempts to explain to kata authors what the most common problems and pitfalls encountered when creating kata are when working with floating-point numbers, and how to avoid them.
Many freshly published kata turn out to have problems with handling precision of calculations, using incorrect assertions, or trying to work around the problems in an incorrect manner. This often causes many valid solutions to fail the tests. Errors related to floating-point values are often difficult to reproduce, so whenever an issue is reported, authors immediately close it as _"works for me, you are doing something wrong"_. Incorrectly handled floating-point numbers can also cause confusing errors and assertion messages.

The article is not meant to be a comprehensive guide explaining what floating-point numbers are in general, how they are represented, how they work internally, etc. It's meant to be targeted mostly to authors of Codewars kata to help them create content of better quality and avoid traps and pitfalls leading to problems with precision loss, comparisons, etc.


## What are floating-point numbers?

Floating-point numbers come in many different shapes and colors, but one (or, if you prefer, two) of them is the most widespread, the most common, and, at the same time, the most problematic for newbies (and not only). Whenever you see or use anything called _"float"_, _"double"_, _"single-"_ or _"double-precision floating point number"_, _"IEEE-754 number"_, you need to be careful, because things can often turn out surprising and not as easy as one might think. Through the rest of the article, the term _"floating-point numbers"_ will refer specifically to **IEEE-754 double-precision values**, unless explicitly stated otherwise.

Floating-point numbers are usually not specific to any particular language, system, or architecture. IEEE-754 numbers are widely adopted and used across many platforms, languages, and compilers. With some small exceptions, anything written in this article applies in the same way to Python, C, JavaScript, or Haskell.


## Why are floating-point numbers problematic?

Technical details related to the inner representation of floating-point values and how they work are out of scope of this article, but the main problem with floating-point numbers in the context of Codewars kata boils down to the fact that calculations which are equivalent from a mathematical point of view, but implemented differently, can give slightly different results for the same inputs, and all of them are considered correct even if they are not equal to each other.

We are used to thinking of some arithmetic operations as associative, reversible, or having some other properties which do not hold when applied to floating-point numbers. For example, operations like multiplication or division are not guaranteed to be associative. When performing a non-trivial sequence of arithmetic operations, it can turn out that the final result depends on the order the operations, even if it would not matter from a mathematical point of view. For example:

```javascript
//a couple of functions which convert between Fahrenheit and Celsius
const toCelsius_1 = f => (f - 32) * 5 / 9;
const toCelsius_2 = f => 5 / 9 * (f - 32);
const toCelsius_3 = f => (f - 32) * (5 / 9);
const toCelsius_4 = f => (f - 32) / 1.8;

console.info("Human body:")
let degrees = 100;
console.info(`toCelsius_1: ${toCelsius_1(degrees)}`);
console.info(`toCelsius_2: ${toCelsius_2(degrees)}`);
console.info(`toCelsius_3: ${toCelsius_3(degrees)}`);
console.info(`toCelsius_4: ${toCelsius_4(degrees)}`);

console.info("Steel melting point:")
degrees = 2700; 
console.info(`toCelsius_1: ${toCelsius_1(degrees)}`);
console.info(`toCelsius_2: ${toCelsius_2(degrees)}`);
console.info(`toCelsius_3: ${toCelsius_3(degrees)}`);
console.info(`toCelsius_4: ${toCelsius_4(degrees)}`);
```

The above program prints:

```text
Human body:
toCelsius_1: 37.77777777777778
toCelsius_2: 37.77777777777778
toCelsius_3: 37.77777777777778
toCelsius_4: 37.77777777777778
Steel melting point:
toCelsius_1: 1482.2222222222222
toCelsius_2: 1482.2222222222224
toCelsius_3: 1482.2222222222224
toCelsius_4: 1482.2222222222222
```

Note how all functions converting between Fahrenheit and Celsius are equivalent from a mathematical point of view, the only difference between them is the order of operations. However, they can (but do not have to) return different results for the same inputs. It's an extremely important point and a cause of serious bugs in many kata, which often reject valid solutions only because they used a different formula or order of operations.


## How to avoid problems with floating-point numbers?

Below you can find some guidelines which will help you to get rid of floating-point problems from your kata. Generally, such problems can be split into two categories:
- Design problems, where just the fact that floating point numbers are a part of the task requires some special approach for writing tests
- Bugs in implementation, when for example a reference solution handles floating-point values incorrectly

However you need to realize that some related issues are not easy to resolve, and may require some trade-offs, redesign, or changing the idea of your kata.


### Only use floating-point numbers when necessary

For many kata, floating-point numbers are simply not necessary and they are added by authors just for fun, or because they think this way their kata will be cooler or more interesting. When issues first start to appear, things quickly prove otherwise. That's why it's recommended to simply not use floating-point numbers when they are not necessary, or do not add any special value to the task of the kata.
For example, kata which could look like _"return sum of an array"_ would work perfectly if all elements of the array were integers. Looping through the array and adding up its elements might appear trivial, but when elements of the array are floating-point values, things suddenly get surprisingly complicated. You cannot use strict equality anymore, and `assertEqual` becomes useless.


### Perform precise calculations

Some kata accept integers as inputs, but to perform all needed calculation steps and get the final answer, their reference solution needs to use intermediate floating-point values. As it turns out, it's not always necessary. There are types of kata which in the beginning may seem to require intermediate floating-point operations, but after some analysis it turns out that the stated problem can be solved with integers, without the risk of introducing floating-point inaccuracies through the course of calculations. For example, problems related to time: given an input of 20 minutes, the reference solution might use an intermediate step which converts it to 0.333333333333333 of an hour, losing some precision in the process. But if it chose to represent all intermediate values in **seconds** instead, and store the value of 20 minutes as 1200 seconds, no precision would be lost.
It's not always possible, and not always easy, but some categories of problems can be solved in a way which does not introduce intermediate inaccuracies. Staying away from floating-point values is usually a good way to solve problems related to time units (hours, minutes, seconds), angles (expressed as degrees, angle minutes, and angle seconds), monetary values (dollars and cents), or any other mixed units of different magnitudes (for example meters and centimeters).


### Do not use rounding (or stringification) to work around problems with precision

Sometimes authors try to work around the problems with floating-point comparisons by converting the result of calculations to integer, or rounding to some _n_ decimal places, hoping that inaccurate part of calculations will be trucated, lost, or somehow neutralized. Sometimes authors require conversion of floating-point values to string with some amount of decimal digits. Such workarounds are a bad thing, they usually do not work as intended, and they only make things worse. No matter if you want to round to an integer or to some amount _n_ of decimal places, and what type of rounding (i.e. a _rounding mode_) you want to use: ceiling, flooring, truncating, to nearest, or to nearest even, each of them has a set of values for which it will fail.

For example, let's assume that your kata would require rounding to the nearest integer. When tests are run, a random test might generate an input which after all calculations would conclude with a result of 13.5, and tests would expect a rounded answer of 14. Now, depending on details of implementation like the exact formula, order of operations, used functions and libraries, user ___A___ comes up with the result of 13.50000000001, and user ___B___ arrives to 13.499999999999. Both answers are correct and valid from a technical point of view, but after rounding to 14, user ___A___ gets their answer accepted, and the rounded answer of 13 from user ___B___ gets (incorrectly) rejected. Now user ___B___ creates an issue for your kata and complains that their valid solution does not pass tests. You verify the tests with your reference solution, see no error, and resolve the issue as _"irreproducible"_. A couple of weeks later another user who happened to use the same formula as user ___B___ comes, does not pass the tests, and creates another issue, and so on... There's quite a number of kata on Codewars affected by a similar issue, and half of the users attempting them might like them, while the other half probably hate them.

Conversions by flooring, ceiling, or truncating are affected by the same issue, just for another category of values. User ___A___ might come up with the result of 12.999999999999 before rounding, and user ___B___ with value 13.000000000001, and if tests expect a floored, ceiled, or truncated value, the answer from one user will be accepted, and from the other one rejected.

There are cases when rounding  or conversion to string are OK, but using them just to "fix" problems with precision of calculations is not such, and only makes things worse. The easiest way to get things right is to require no rounding, and use proper assertions with tolerance (see below).


### Use relative comparisons and avoid strict equality

Have you ever encountered a problem that some solution does not pass because tests expect a slightly different value, even though you used the right formula?

```text
Test Results:
convert_temperature
    given 2700 (steel melting point)
        expected 1482.2222222222224 to equal 1482.2222222222222
```

This usually happens when tests use an incorrect assertion method and do not account for the fact that the user's solution can return a correct answer which is not identical to the one produced by the reference solution.

To correctly test for floating-point values, tests should use _"approximate equality tests"_, _"fuzzy equality"_, or _"comparison with tolerance"_. Basically it boils down to using a dedicated assertion provided by the majority of popular testing frameworks or assertion libraries. Such assertions usually take as parameters the expected value, actual value, and a value of tolerance which the tests agree on. The assertion accepts all answers which are equal to the expected result, or do not differ from it beyond the provided tolerance.
To find out what assertions are appropriate for floating-point comparisons in your language you should go through the documentation of the testing framework you use. For example, for JavaScript it's `chai.assert.closeTo`, and for Python it's `codewars_test.assert_approx_equals`.  
Some testing frameworks used on Codewars unfortunately lack proper assertions. This is the case for example for Ruby. In such case, a function for fuzzy comparisons has to be provided. It's a difficult task to do it correctly though, so don't try to create one on your own. Request missing functionality on the [Codewars code runner](https://github.com/codewars/runner/issues) board and necessary packages or functions will be added.


### Know how floating-point values and operations work in your language

Some languages, especially dynamically typed ones, are particularly susceptible to problems related to floating-point values. For example, JavaScript does not use integers at all, and all arithmetic calculations operate on floating-point numbers. Everything should be good as long as input, output, and intermediate values stay accurate or do not exceed the value of `Number.MAX_SAFE_INTEGER`, but due to some bug this can happen, and when it happens, it can be difficult to spot.

#### Overflow

One such problem is overflow in JavaScript. For example, consider a kata with the following task: _"Given two natural numbers `a` and `b`, calculate and return their least common multiple."_ Random tests are careful enough to generate such values of `a` and `b` which should always give a resulting LCM less than `Number.MAX_SAFE_INTEGER`. However, the reference solution uses the following implementation:

```javascript
function lcm(a, b) {
    return a * b / gcd(a, b); //gcd is a helper function to calculate greatest common divisor
}
```

Can you see where the problem is? Even though `a`, `b`, and the final result are guaranteed to be less than `Number.MAX_SAFE_INTEGER`, the intermediate value of `a * b` can overflow, resulting in an incorrect result being returned. Now the reference solution has a bug!

You need to make sure that your reference solution is correct and can handle all test inputs which will be generated and fed to it. Otherwise, the correctness of tests depends on the random number generator, and some valid solutions may fail the tests in an unpredictable manner.

#### Division

In languages like JavaScript or Python, floating-point values can be introduced by mistake when performing division. JavaScript has no integer division operator, so `a / b` always results in a floating-point value. If you are interested in integer division, you need to remember to convert the result to an integer by yourself. Python has two division operators: `a // b` for integer division (or, "real floor division"), and `a / b` for "real" division. Both operators can be easily confused, and `/` will convert integers to floats and return a float.


### Be careful when formatting

Some existing kata can issue such a very confusing assertion message:

```c
Test(sample_test, test_basic) {
  double actual = squareArea(1.1);
  double expected = 1.21;
  cr_assert_float_eq(actual, expected, 1e-9, "Expected %f +/- 1e-9, but was %f", expected, actual);
}
```

```text
Test Results:
sample_test
    test_basic
        Expected 1.210000 +/- 1e-9, but was 1.210000
```

This issue is not limited only to C, other languages are also affected. 

So... what's wrong? Why do the tests fail if the expected value and actual values are both 1.210000?
Most probably, two things are wrong:
- The user's solution returned an invalid answer outside of the required tolerance, and
- The tests display the assertion message incorrectly, truncating some meaningful digits.

Actually, both numbers are different, and the actual answer differs from the expected value by an amount greater than the allowed tolerance. But when formatting floating-point values, most languages only display the first few digits. When you fix the formatting of the message, you get better feedback:

```c
//note %.9f as format specifiers
cr_assert_float_eq(actual, expected, 1e-9, "Expected %.9f +/- 1e-9, but was %.9f", expected, actual);
```

```text
Test Results:
sample_test
    test_basic
        Expected 1.210000000 +/- 1e-9, but was 1.210000343
```

You need to remember that whenever you print or format floating-point values as strings, they should always be formatted with at least as many significant digits as the tolerance used for comparisons.


### Use alternatives

There are some ways to mitigate some issues related to floating-point numbers by using some other means, language constructs, classes, libraries, etc. Unfortunately, they are usually language-specific and can turn out to be problematic in kata, because translating kata between languages can become difficult. However, some possibilities are:

- If the kata task is related to decimal numbers (for example monetary values), you can use decimal types, for example `java.math.BigDecimal` in Java, `decimal` in C#, `decimal` module in Python, etc.
- If the domain of your kata is limited to rational numbers, storing values as a pair of integers (numerator, denominator) can help. Python provides a `fractions` module which offers such types out of the box, and Haskell has `Rational`.

You should always consult the documentation for your [language](/languages/) and available libraries to know the possible options available.

## Further reading

- [THE FLOATING-POINT GUIDE: What Every Programmer Should Know About Floating-Point Arithmetic or Why don’t my numbers add up?](https://floating-point-gui.de/)
