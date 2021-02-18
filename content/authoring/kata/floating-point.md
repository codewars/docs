---
kind: tutorial
---

# HOWTO Work with Floating-Point Numbers


This article attempts to explain to kata authors what are the most common problems and pitfalls encountered when creating kata working with floating-point numbers, and how to avoid them.  
Many freshly published kata turn out to have problems with handling precision of calculations, use incorrect assertions, or try to work around the problems in not totally correct way. This often causes that many valid solutions cannot pass the tests or pass tests inconsistently. Errors related to floating-point values are often difficult to reproduce, so whenever an issue is reported, authors immediately close it as _"works for me, you are doing something wrong"_. Incorrectly handled floating-point numbers can also cause confusing errors and assertion messages.

The article is not meant to be a comprehensive guide explainign what are floating-point numbers in general, how they are represented, how they work internally, etc. It's meant to be targeted mostly to authors of Codewars kata to help them create content of better quality and avoid traps and pitfalls leading to problems with precision loss, comparisons, etc.


## What are floating-point numbers?

Floating-point numbers come in many different shapes and colors, but one (or, if you prefer, two) of them is the most widespread, the most common, and, at the same time, the most problematic for newbies (and not only). Whenever you see or use anything called `float`, `double`, `single-` or `double-precision floating point number`, `IEEE-754 number`, you need to be careful, because things can often turn out surprising and not as easy as one might think. Through the rest of the article, the term _"floating-point numbers"_ will refer specifically to **IEEE-754 double-precision values**, unless explicitly stated otherwise.

Floating-point numbers are usually not specific to any particular language, system, or architecture. IEEE-754 numbers are widely adopted and used across many platforms, languages, and compilers. With some small exceptions, anything written in this article applies in the same way to Python, C, JavaScript, or Haskell.

Floating-point numbers are useful, because they have capabilities not available to other simple types available in majority of languages:

- They can hold fractional values, like `25.5` or `-7.125`. Fractions can be as small as ~1.7\*10<sup>-308</sup>
- They have much wider range than integral types of the same size. Signed 64-bit integer data type can hold values up to ~9\*10<sup>18</sup>, while 64-bit floating-point value can go up to ~1.7\*10<sup>308</sup>.

However, to achieve these goals, floating-point values trade off their _precision_, what more or less means that there are some values which cannot be represent exactly. They are capable of storing up to 52 bits, or approximately 15 decimal digits, and anything beyond this is lost. Values which would require better precision are internally rounded and stored just as approximations. And this leads to many problems which often can come up as surprising.


## Strange things about floating-point values


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


-----

TBD:
- precision loss, non-associativity, conversions
- comparison, assertions
- formatting (also in assertion messages)
- special values (inf, nan, -0.0)
- alternatives
- rounding, and why not rounding. Rounding modes
