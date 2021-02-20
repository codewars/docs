---
kind: tutorial
---

# HOWTO Work with Floating-Point Numbers


This article attempts to explain to kata authors what the most common problems and pitfalls encountered when creating kata are when working with floating-point numbers, and how to avoid them.
Many freshly published kata turn out to have problems with handling precision of calculations, using incorrect assertions, or trying to work around the problems in an incorrect manner. This often causes many valid solutions to fail the tests. Errors related to floating-point values are often difficult to reproduce, so whenever an issue is reported, authors immediately close it as _"works for me, you are doing something wrong"_. Incorrectly handled floating-point numbers can also cause confusing errors and assertion messages.

The article is not meant to be a comprehensive guide explaining what floating-point numbers are in general, how they are represented, how they work internally, etc. It's meant to be targeted mostly to authors of Codewars kata to help them create content of better quality and avoid traps and pitfalls leading to problems with precision loss, comparisons, etc.


## What are floating-point numbers?

Floating-point numbers come in many different shapes and colors, but one (or, if you prefer, two) of them is the most widespread, the most common, and, at the same time, the most problematic for newbies (and not only). Whenever you see or use anything called _"float"_, _"double"_, _"single-"_ or _"double-precision floating point number"_, _"IEEE-754 number"_, you need to be careful, because things can often turn out surprising and not as easy as one might think. Through the rest of the article, the term _"floating-point numbers"_ will refer specifically to **IEEE-754 double-precision values**, unless explicitly stated otherwise.

Floating-point numbers are usually not specific to any particular language, system, or architecture. IEEE-754 numbers are widely adopted and used across many platforms, languages, and compilers. With some small exceptions, anything written in this article applies in the same way to Python, C, JavaScript, or Haskell.


## Strange things about floating-point values

:::note
This part is meant as an educational explanation to _why_ some constructs can be problematic and attempts to provide some background and information so the article is not just a set of guidelines, but additionaly presents some examples and has some informational value. However such section turned out to be very long and probably distracting, that's why I am not sure whether it should be here.
Let me know what you think, should I finish it and leave it here, move it to some different sub-page, or get rid of it completely.
:::

Floating-point numbers are useful, because they have capabilities not available to other simple types available in the majority of languages:

- They can hold fractional values, like 25.5 or -7.125. Fractions can be as small as ~1.7\*10<sup>-308</sup>
- They have a much wider range than integral types of the same size. Signed 64-bit integer data type can hold values up to ~9\*10<sup>18</sup>, while 64-bit floating-point value can go up to ~1.7\*10<sup>308</sup>.

However, to achieve these goals, floating-point values trade off their _precision_, which more or less means that there are some values which cannot be represented exactly. They are capable of storing up to 53 bits, or approximately 15 decimal digits, and anything beyond this is lost. Values which would require better precision are internally rounded and stored just as approximations. This leads to many problems which often can come up as surprising.

### Representability

As it was already mentioned, precision of a floating-point value is limited to 53 bits, or approx. 15 decimal digits. This means that some values simply cannot be stored in a floating-point variable. For example, value 10000000000000000 (or 1*10<sup>16</sup>) can be represented exactly, but there's no 10000000000000001! What do you think the following code will print?

```javascript
let a = 10000000000000000;
let b = 10000000000000001;    //tricky part!

console.info("Are they equal? ");
console.info(a === b ? "Yes" : "No");   //prints: Yes
```

Another surprising thing is that many values which appear to have a valid number of digits also do not fit into a floating-point value! For example, 1.1 has only two significant digits, so it's well below the limit of 15 digits. However, as it turns out, after conversion to binary it becomes a recurring fraction! Just as 1/6 is represented in base 10 as 0.166(6)..., 11/10 when converted to binary becomes 1.00011(0011)..., which, in turn, when stuffed on  53 bits, truncated, and rounded, becomes  1.100000000000000088817841970012523233890533447265625. There's no 1.1 in binary, and there's no floating-point value equal to 1.1! Just see:

```javascript
let a = 1.1; //tricky part! Variable a is not equal to 'real' 1.1
let area = a * a;

console.info("Is the area equal to 1.21? ");
console.info(area === 1.21 ? "Yes" : "No, it's " + area);
```

The program above prints:

```text
Is the area equal to 1.21? 
No, it's 1.2100000000000002
```

That's because variable `a` has never been equal to 1.1 to begin with! When you look at the code it might look like that, but the compiler silently converted the literal value `1.1` to the nearest representable floating-point value and stored 1.100000000000000088817841970012523233890533447265625 in variable `a`.

But wait, things get worse.


### String representation

Things can get even weirder when you convert floating-point values to or from strings. The way how floating-point values are formatted is not unified between all languages, and often it's not specified at all. For example, the C setup on Codewars uses by default 6 digits of precision when converting `double` variables to string, and this can cause some really confusing effects:

```c
double a = 1.1;
double area = a * a;

puts("Is area equal to 1.21?");

if(area == 1.21) {
    puts("Yes!");
} else {
    printf("No! It's %f\n", area); //tricky part!
}
```

The following program prints:

```text
Is area equal to 1.21?
No! It's 1.210000
```

So, how is that 1.210000 is not equal to 1.21? The answer is: because `a` is not equal to 1.210000. It's equal to 1.2100000000000002, but the `printf` function by default formats `double` values with 6 decimal places, leaving out the rest. That's why you cannot see the whole value. The fractional tail is not displayed, but it's still there in the variable.


### Arithmetic

We are used to thinking of some arithmetic operations as associative, reversible, or having some other properties which do not hold when applied to floating-point numbers. For example, operations like multiplication or division are not guaranteed to be associative. When performing a non-trivial sequence of arithmetic operations, it can turn out that the final result depends on the order the operations, even if it would not matter from a mathematical point of view!

```javascript
//a couple of functions which convert between Fahrenheit and Celsius
const f2c_1 = f => (f - 32) * 5 / 9;
const f2c_2 = f => 5 / 9 * (f - 32);
const f2c_3 = f => (f - 32) * (5 / 9);
const f2c_4 = f => (f - 32) / 1.8;

console.info("Human body:")
let degrees = 100;
console.info(`f2c_1: ${f2c_1(degrees)}`);
console.info(`f2c_2: ${f2c_2(degrees)}`);
console.info(`f2c_3: ${f2c_3(degrees)}`);
console.info(`f2c_4: ${f2c_4(degrees)}`);

console.info("Steel melting point:")
degrees = 2700; 
console.info(`f2c_1: ${f2c_1(degrees)}`);
console.info(`f2c_2: ${f2c_2(degrees)}`);
console.info(`f2c_3: ${f2c_3(degrees)}`);
console.info(`f2c_4: ${f2c_4(degrees)}`);
```

The above program prints:

```test
Human body:
f2c_1: 37.77777777777778
f2c_2: 37.77777777777778
f2c_3: 37.77777777777778
f2c_4: 37.77777777777778
Steel melting point:
f2c_1: 1482.2222222222222
f2c_2: 1482.2222222222224
f2c_3: 1482.2222222222224
f2c_4: 1482.2222222222222
```

Note how all functions converting between Fahrenheit and Celsius are equivalent from a mathematical point of view, the only difference between them is the order of operations. However, they can, but do not have to, return different results for the same inputs. It's an extremely important point and a cause of serious bugs in many kata, which often reject valid solutions only because they used a different formula or order of operations.

### Conversions

_TBD_

### Rounding

_TBD_

#### Rounding to integer

_TBD_

#### Rounding to n decimal places

_TBD_



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

Sometimes authors try to work around the problems with floating-point comparisons by converting the result of calculations to integer, or rounding to some _n_ decimal places, hoping that inaccurate part of calculations will be trucated, lost, or somehow neutralized. Sometimes authors require conversion of floating-point values to string with some amount of decimal digits. However such workarounds are a bad thing, they usually do not work as intended, and they only make things worse. No matter if you want to round to an integer or to some amount _n_ of decimal places, and what type of rounding (i.e. a _rounding mode_) you want to use: ceiling, flooring, truncating, to nearest, or to nearest even, each of them has a set of values for which it will fail.

For example, let's assume that your kata would require rounding to a nearest integer. When tests are run, one of random tests might generate an input which after all calculations would conclude with a result of 13.5, and tests would expect a rounded answer of 14. Now, depending on details of implementations like exact formula, order of operations, used functions and libraries, user ___A___ comes up with the result of 13.50000000001, and user ___B___ arrives to 13.499999999999. Both answers are correct and valid from technical point of view, but after rounding to 14, user ___A___ gets their answer accepted, and the rounded answer of 13 from user ___B___ gets (incorrectly) rejected. Now user ___B___ creates an issue for your kata and complains that their valid solution does not pass tests. You verify tests with your reference solution, see no error, and resolve the issue as _"cannot reproduce"_. A couple of weeks later another user who happened to use the same formula as user ___B___ comes, does not pass the tests, and creates another issue, and so on... There's quite a number of kata on Codewars affected by similar issue, and half of the users attemting them might like them, and another half probably hates them.

Conversions by flooring, ceiling, or truncating are affected by the same issue, just for another category of values. User ___A___ might come up with the result of 12.999999999999 before rounding, and user ___B___ with value 13.000000000001, and if tests expect a floored, ceiled, or truncated value, the answer from one user will be accepted, and from the other one - rejected.

There are cases when rounding  or conversion to string are OK, but using them just to "fix" problems with precision of calculations only makes things worse. The easiest way to get things right is to require no rounding, and use proper assertions with tolerance (see below).


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
Some testing frameworks used on Codewars unfortunately lack proper assertions. This is the case for example for Ruby. In such case, a function for fuzzy comparisons has to be provided. It's a difficult task to do it correctly though, so don't try to create one on your own. Request missing functionality on [Codewars code runner](https://github.com/codewars/runner/issues) board and necessary packages or functions will be added.


### Know how floating-point values and operations work in your language

Some languages, especially dynamically typed ones, are particularly susceptible to problems related to floating-point values. For example, JavaScript does not use integers at all, and all arithmetic calculations operate on floating-point numbers. Everything should be good as long as input, output, and intermediate values stay accurate or do not exceed the value of `Number.MAX_SAFE_INTEGER`, but due to some bug this can happen, and when it happens, it can be difficult to spot.

#### Overflow

One such problem is overflow in JavaScript. For example, consider a kata with the following task: _"Given two natural numbers `a` and `b`, calculate and return their least common multiple."_ Random tests are careful enough to generate such values of `a` and `b` which should always give a resulting LCM less than `Number.MAX_SAFE_INTEGER`. However, the reference solution uses following implementation:

```javascript
function lcm(a, b) {
    return a * b / gcd(a, b); //gcd is a helper function to calculate greatest common divisor
}
```

Can you see where the problem is? Even though `a`, `b`, and final result are guaranteed to be less than `Number.MAX_SAFE_INTEGER`, the intermediate value of `a * b` can overflow, resulting in an incorrect result being returned. Now the reference solution has a bug!

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
- If domain of your kata is limited to rational numbers, storing values as a pair of integers (numerator, denominator) can help. Python provides a `fractions` module which offers such types out of the box, and Haskell has `Rational`.


## Further reading

- [THE FLOATING-POINT GUIDE: What Every Programmer Should Know About Floating-Point Arithmetic or Why don’t my numbers add up?](https://floating-point-gui.de/)
