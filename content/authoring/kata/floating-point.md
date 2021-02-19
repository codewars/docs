---
kind: tutorial
---

# HOWTO Work with Floating-Point Numbers


This article attempts to explain to kata authors what are the most common problems and pitfalls encountered when creating kata working with floating-point numbers, and how to avoid them.  
Many freshly published kata turn out to have problems with handling precision of calculations, use incorrect assertions, or try to work around the problems in not totally correct way. This often causes that many valid solutions cannot pass the tests or pass tests inconsistently. Errors related to floating-point values are often difficult to reproduce, so whenever an issue is reported, authors immediately close it as _"works for me, you are doing something wrong"_. Incorrectly handled floating-point numbers can also cause confusing errors and assertion messages.

The article is not meant to be a comprehensive guide explainign what are floating-point numbers in general, how they are represented, how they work internally, etc. It's meant to be targeted mostly to authors of Codewars kata to help them create content of better quality and avoid traps and pitfalls leading to problems with precision loss, comparisons, etc.


## What are floating-point numbers?

Floating-point numbers come in many different shapes and colors, but one (or, if you prefer, two) of them is the most widespread, the most common, and, at the same time, the most problematic for newbies (and not only). Whenever you see or use anything called _"float"_, _"double"_, _"single-"_ or _"double-precision floating point number"_, _"IEEE-754 number"_, you need to be careful, because things can often turn out surprising and not as easy as one might think. Through the rest of the article, the term _"floating-point numbers"_ will refer specifically to **IEEE-754 double-precision values**, unless explicitly stated otherwise.

Floating-point numbers are usually not specific to any particular language, system, or architecture. IEEE-754 numbers are widely adopted and used across many platforms, languages, and compilers. With some small exceptions, anything written in this article applies in the same way to Python, C, JavaScript, or Haskell.

<details>

<summary>"Why"</summary>

## Strange things about floating-point values

Floating-point numbers are useful, because they have capabilities not available to other simple types available in majority of languages:

- They can hold fractional values, like `25.5` or `-7.125`. Fractions can be as small as ~1.7\*10<sup>-308</sup>
- They have much wider range than integral types of the same size. Signed 64-bit integer data type can hold values up to ~9\*10<sup>18</sup>, while 64-bit floating-point value can go up to ~1.7\*10<sup>308</sup>.

However, to achieve these goals, floating-point values trade off their _precision_, what more or less means that there are some values which cannot be represent exactly. They are capable of storing up to 52 bits, or approximately 15 decimal digits, and anything beyond this is lost. Values which would require better precision are internally rounded and stored just as approximations. And this leads to many problems which often can come up as surprising.

### Representability

As it was already mentioned, precision of a floating-point value is limited to 52 bits, or approx. 15 decimal digits. This means that some values simply cannot be stored in a floating-point variable. For example, value `10000000000000000` (or 1*10<sup>16</sup>) can be represented exactly, but there's no `10000000000000001`! How do you think, what will following code print?

```javascript
let a = 10000000000000000;
let b = a + 1;    //tricky part! b is equal to 10000000000000000, and not 10000000000000001

console.info("Are they equal? ");
console.info(a === b ? "Yes" : "No");   //prints: Yes
```

Another surprising thing is that many values which have seemingly valid amount of digits also do not fit into a floating-point value! For example, `1.1`: it has only two significant digits, so it's well below the limit of 15. However, as it turns out, after converion to binary it becomes an infinite, repeatable fraction! just as `1/6` is represented in base 10 as 0.166(6)..., 11/10 when converted to binary becomes `1.00011(0011)...`, which, in turn, when stuffed on  52 bits, truncated, and rounded, becomes  `1.100000000000000088817841970012523233890533447265625`. There's no `1.1` in binary, and there's no floating-point value equal to `1.1`! Just see:

```javascript
let a = 1.1; //tricky part! Variable a is not equal to 'real' 1.1
let area = a * a;

console.info("Is the area equal to 1.21? ");
console.info(area === 1.21 ? "Yes" : "No, it's " + area);
```

Above program prints:

```text
Is the area equal to 1.21? 
No, it's 1.2100000000000002
```

That's because variable `a` has never been equal to `1.1` to begin with! When you look at the code it might look like that, but compiler silently converted literal value `1.1` to the nearest representable floating-point value and stored `1.100000000000000088817841970012523233890533447265625` in variable `a`.

But wait, things get worse.


### String representation

Things can get even weirder when you convert floating-point values to or from string. The way how floating-point values are formatted is not unified between all languages, and often it's not specified at all. For example, C setup on Codewars uses by default 6 digits of precision when converting `double` variables to string, and this can cause some really confusing effects:

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

Following program prints:

```text
Is area equal to 1.21?
No! It's 1.210000
```

So, how is that 1.210000 is not equal to 1.21? The answer is: because `a` is not equal `1.210000`. It's equal to `1.2100000000000002`, but `printf` function by default formats `double` values with 6 decimal places, leaving out the rest. That's why you cannot see the whole value. Fractional tail is not displayed, but it's still there in the variable.


### Arithmetic

We are used to think about some arithmetic operations as associative, reversible, or having some other properties which do not hold when applied to floating-point numbers. For example, operations like multiplication or division are not guaranteed to be associative. When performing non-trivial sequence of arithmetic operations, it can turn out that final result depends on the order the operations were carried out, even if it would not matter from mathematical point of view!

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

Above program prints:

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

Note how all functions converting between Fahrenheit and Celsius are equivalent from mathematical point of view, the only difference between them is the order of operations. However, they can, but do not have to, return different results for the same inputs. It's extremelly important point and a cause of serious bugs in many kata, which often reject valid solutions only because they used different formula or another order of operations.

### Conversions


### Rounding

#### Rounding to integer

#### Rounding to n decimal places

</details>

## How to avoid problems with floating-point numbers?

Below you can find some guidelines which will help you to get rid of floating-point problems from your kata. Generally, such problems can be split into two categories:
- Design problems, where just the fact that floating point numbers are a part of the task requires some special approach for writing tests
- Bugs in implementation, when for example a reference solution handles floating-point values incorrectly
However you need to realize that some related issues are not easy to resolve, and may require some trade-offs, redesign, or changing the idea of your kata.


### Do not use floating-point numbers if not necessary

For many kata, floating-point numbers are simply not necessary and they are added by authors just for fun, or because they think this way their kata will be cooler or more interesting. When first issues start to appear, things quickly prove otherwise. That's why it's recommended to simply not use floating-point numbers when they are not necessary, or do not add any special value to the task of the kata.  
For example, kata which could look like _"return sum of an array"_ would work perfectly if all elements of the array were integers. Looping through the array and adding up its elements might seem to be trivial task, but when elements of the array are floating-point values, things suddenly get surprisingly complicated. You cannot use strict equality anymore, and `assertEqual` becomes useless.


### Perform precise calculations

Some kata accept integers as inputs, but to perform all needed calculation steps and get the final answer, their reference solution needs to use intermediate floating-point values. As it turns out, it's not always necessary. There are types of kata which in the begining might seem as requiring intermediate floating-point operations, but after some analysis it turns out that stated problem can be solved with integers, without risk of introducing floating-point inaccuracies through the course of calculations. For example, problems related to time: given an input of 20 minutes, reference solution might use an intermediate step which converts it to 0.333333333333333 of an hour, loosing some precision in the process. But if it choose representing all intermediate values in **seconds** instead, and store the value of 20 minutes as 1200 seconds, no precision would be lost, and it's highly probable that whole process would be affected by a smaller (or no) error.  
It's not always possible, and not always easy, but some categories of problems can be solved in a way which does not introduce intermediate inaccuracies. Staying away from floating-point values is usually a good way to solve problems related to time units (hours, minutes, seconds), angles (expressed as degrees, angle minutes, and angle seconds), monetary values (dollars and cents), or any other mixed units of different magnitudes (for example meters and centimeters).


### Know how floating-point values and operations work in your language

Some languages, expecially dynamically typed ones, are particularly susceptible to problems related to floating-point values. For example, JavaScript does not use integers at all, and all arithemtic calculations operate on floating-point numbers. Everything should be good as long as input, output, and intermediate, values stay accurate or do not exceed the value of `Number.MAX_SAFE_INTEGER`, but due to some bug this can happen, and when it happens, it can be difficult to spot.

#### Overflow

One of such problems is overflow in Javascript. For example, consider a kata with following task: _"Given two natural numbers `a` and `b`, calculate and return their least common multiple."_ Random tests are careful enough to generate such values of `a` and `b`, which always should give the resulting LCM as less than `Number.MAX_SAFE_INTEGER`. However, the reference solution uses following implementation:

```javascript
function lcm(a, b) {
    return a * b / gcd(a, b); //gcd is a helper function to calculate greatest common divisor
}
```

Can you see where potential problem is? Even though `a`, `b`, and final result are guaranteed to be less than `Number.MAX_SAFE_INTEGER`, intermediate value of `a * b` can overflow, resulting in incorrect result being returned. Now reference solution has a bug!

You need to make sure that your reference solution is correct and can handle all test inputs which will be generated and fed to it. Otherwise, correctness of tests depends on the favor of random number generator, and some valid solutions might fail the tests in an unpredictable, and difficult to debug way.

#### Division

In languages like JavaScript or Python, floating-point values can be introduced by mistake when performing division. JavaScript has no integer division operator, and operation of `a / b` always results in floating-point values. If you are interested in integer division, you need to remember to convert the result to integer by yourself. Python has two division operators: `a // b` for integer division (or, "real floor division"), and `a / b` for "real" division. Both operators can be easily confused, and `/` will convert integers to floats and return a float.


### Use relative comparisons and avoid strict equality

Have you ever encountered a problem that some solution does not pass because tests expect a slightly different value, even though you used right formula?

```text
Test Results:
convert_temperature
    given 2700 (steel melting point)
        expected 1482.2222222222224 to equal 1482.2222222222222
```

This usually happens when tests use incorrect assertion and do not account for the fact that user's solution can return values which are not exactly the same as the ones produced by a reference solution, but still correct.

To correctly test for floating-point values, tests should use a thing called _"approximate equality tests"_, _"fuzzy equality"_, or _"comparison with tolerance"_. Basically it boils down to using a dedicated assertion provided by a majority of popular testing frameworks or assertion libraries. Such asertions usually take as parameters an expected value, actual value, and a value of tolerance which tests agree on. Assertion accepts all answers which are equal to the expected result, or do not differ from it more than allowed.  
To find out what assertions are appropriate for floating-point comparisons in your language you should go through the documentation of the testing framework you use. For example, for JavaScript it's `chai.assert.closeTo`, and for Python it's `codewars_test.assert_approx_equals`.  
Some testing frameworks used on Codewars unfortunately lack proper assertions. This is the case for example for C++, or Ruby. In such case, you need to provide your own fuzzy comparison function. It's a difficult task to do it correctly though, so don't try to create one on your own. There's plenty of materials on Internet which will help you with this task, for example [this great guide](https://floating-point-gui.de/) and [its page](https://floating-point-gui.de/errors/comparison/) dedicated strictly for floating point comparisons.


#### Rounding does not help

Sometimes authors try to work around the problems with floating-point comparisons in some strange ways, like rounding, stringification, or even other, worse things. However such workarounds are a bad thing and they only make things worse. Concept of _"rounding to n decimal places"_ is not well defined for floating-point numbers, and it does not always work as expected. Rounding to an integer value, be it floor, ceil, round to nearest, or truncation, also is not guaranteed to work and often leads to errors. Do not do this, or you will only make things worse. The easies way to get things right is to require no rounding, and use proper assertions with tolerance.


### Be careful when formatting



### Use alternatives


