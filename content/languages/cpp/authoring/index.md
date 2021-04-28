---
title: Authoring C++ Content
kind: tutorial
sidebar_position: 0
slug: /languages/cpp/authoring
---

This article is meant for kata authors and translators who would like to create new content in C++. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, C++-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a C++ translation, or a new C++ kata from scratch, please make yourself familiar with the aforementioned documents related to authoring in general first. 

## General info

Any technical information related to the C++ setup on Codewars can be found on the [C++ reference](/languages/cpp/) page (language versions, available libraries, and setup of the code runner).


## Description

C++ code blocks can be inserted with C++-specific part in [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks):

~~~
```cpp

...your code here...

```
~~~

C++-specific paragraphs can be inserted with [language conditional rendering](/references/markdown/extensions/#conditional-rendering):

```
~~~if:cpp

...text visible only for C++ description...

~~~

~~~if-not:cpp

...text not visible in C++ description...

~~~
```

## Tasks and Requirements

Some concepts don't always translate well to or from C++. C++ allows for a variety of paradigms and techniques, and many of them are not widely spread accross other languages. Because of this, some constructs should be avoided and some translations just shouldn't be done.
- C++ is statically typed, so any task that depends on dynamic typing can be difficult to translate into C++, and attempts of forcing a C++ kata to reflect a dynamically typed interface can lead to ideas that enforce a really bad design.
- There are just a few additional libraries available for the C++ runner, so kata that take advantage of additional, specialized packages installed for other languages become much more difficult in C++.
- Many features of C++ do not have direct equivalents in other popular languages: mixture of allowed paradigms, template meta-programming, unmanaged memory backed by RAII, native access to the platform and runtime, and many others. C++ kata which rely on them can be difficult to translate to other languages.


## Coding

### Code style

C++ programmers have many sets of naming conventions or code style guides. Some of them can be found for example [here](https://isocpp.org/wiki/faq/coding-standards), or [here](https://google.github.io/styleguide/cppguide.html). Codewars does not strictly enforce any of them, just use whatever set of guidelines you like, but when you do, use it consistently. 


### Header files

C++ authors often forget to include required header files, or just leave them out deliberately because "it works" even when some of the files are not included. It happens mostly due to the following reasons:
- C++ setup used by Codewars runner uses somewhat specific way to prepare and run kata snippets (TODO: describe C++ template). The structure of concatenated file which is compiled by the runner causes that some header files are included always, or that some files included in one kata snippet are automatically available in some other kata snippet. However, this behavior should not be relied on if not necessary, and every snippet should include all header files required by code it contains. 
- Some header files include other header files indirectly, for example, file `foo.h` contains line `#include <bar.h>`, which might appear to make the explicit include for `bar.h` unnecessary. It's not true though, because the file `foo.h` might change one day, or might depend on some compiler settings or command line options, and after some changes to the configuration of the C++ runner, the `bar.h` might be not included there anymore.


### Compilation warnings

Compiler options related to warnings used by the C++ runner are somewhat strict and require some discipline to get the code to compile cleanly. `-Wall` and `-Wextra` may cause numerous warnings and some of them are very pedantic. However, code of C++ kata should still compile cleanly, without any warnings logged to the console. Even when a warning does not cause any problem with tests, users get distracted by them and blame them for failing tests.


### Avoiding C

Sometimes authors consider C++ just "a C, but with classes". While C and C++ are still compatible in many ways, such perception is wrong and incorrect use of C features in C++ code leads to bad code at best, to undefined behavior and difficult to diagnose errors in more extreme cases. Features and idioms from C language should be replaced with their equivalents from modern C++:

- C features must not be used where they do not have well-defined behavior in C++. For example, memory management must not be done with `malloc`/`free` or similar, or VLAs should be replaced with `std::array` or `std::vector`.
- C++ features should be preferred to ones inherited from C, for example:
  - C-style casts should be replaced with their C++ equivalents.
  - Functions originating from C should be replaced with related C++ functionalities: `<random>` instead of `rand`, `<iostream>` instead of `stdio.h`, etc.
- C++ header files should not be confused with their C equivalents. For example, `cmath` or `cctype` should be used instead of `math.h` or `ctype.h`.
- Proper C++ data types should be used instead of their C "equivalents". C-strings should be replaced with `std::string`, raw C-style arrays should be replaced with `std::array`, `std::vector`, or other containers, etc.


## Tests

### Testing framework

C++ kata use the [modified version](https://github.com/codewars/igloo) of [Igloo](https://github.com/joakimkarlsson/igloo) testing framework, along with [modified version](https://github.com/codewars/snowhouse) of [Snowhouse](https://github.com/banditcpp/snowhouse) assertion library. Codewars modified both libraries to adapt them to code runner environment and make them more useful for kata authors.

#### Custom assertion messages

Drawback of the original version of Snowhouse assertion library is that neither its `AssertThat` macro, nor `Assert::That` function, accepts a custom assertion message which could be used by authors to provide detailed information on the cause of failure. To support authors with possibility to provide useful feedback, Codewars provides a set of overloads for `Assert::That`, which accept additional message supplier:

```cpp
template<typename ActualType, typename ConstraintListType, typename MessageSupplierType>
static void That(const ActualType& actual, ExpressionBuilder<ConstraintListType> expression, const MessageSupplierType& message_supplier, const char* file_name = "", int line_number = 0);

template<typename ConstraintListType, typename MessageSupplierType>
static void That(const char* actual, ExpressionBuilder<ConstraintListType> expression, const MessageSupplierType& message_supplier, const char* file_name = "", int line_number = 0)
    
template<typename ActualType, typename ExpressionType, typename MessageSupplierType>
static void That(const ActualType& actual, const ExpressionType& expression, const MessageSupplierType& message_supplier, const char* file_name = "", int line_number = 0);

template<typename ExpressionType, typename MessageSupplierType>
static void That(const char* actual, const ExpressionType& expression, const MessageSupplierType& message_supplier, const char* file_name = "", int line_number = 0);
```

`message_supplier` is a callable compatible with a function accepting no arguments and returning `std::string`. It can be a function, a functor, a lambda expression, or an instance of any type supporting above requirements.

For more details and examples of custom assertion messages, see `[Example test suite](#example_test_suite)` below, or `[Snowhouse reference](/languages/cpp/snowhouse/)` page.

#### Stringizers

In its default configuration, Snowhouse can produce confusing assertion messages, when `expected` and `actual` values are of type it cannot stringify:

```text
  does_not_pretty_print_type_without_stringizer
    Expected: equal to [ [unsupported type], [unsupported type] ]
    Actual: [ [unsupported type], [unsupported type] ]
```

To rectify such issue in your tests, you can make such types suitable for stringification in a way described in dedicated documentation article on [custom Snowhouse stringizers](/languages/cpp/igloo/stringizers/).

--------

_TODO:_

- random utilities
- input and output values: const ref vs value, replacements for arrays and `std::vector`
- input modification, changing the signature of solution function 



### Random utilities

Unlike some other languages, C does not provide too many means of generating random numbers which could be used to build random tests. `stdlib.h` header provides the `rand` function which, while being quite simple, satisfies the majority of needs, but sometimes can be tricky to be used correctly.

Before `rand` is called for the first time, it must be seeded with `srand`. A call to `srand` should be performed only once, in the setup phase of the random tests. `srand` usually uses the current time as a seed, so authors need to include `time.h` before using the `time` function.

`rand` can return integers only up to `RAND_MAX`. There's no standard-compliant way to generate random values of types `unsigned int`, `long`, or `double`. Authors who would like to generate random values out of the domain of `rand` have to craft them manually. _(TODO: create article with snippets with RNGs for types other than `int`)_

Additionally, the value of `RAND_MAX` might differ on different platforms, or even change. For the current Codewars setup it's `2^31-1`, but there are some common platforms with `RAND_MAX` being as small as `2^15-1`. This makes the code using `rand` even less portable, and while portability might not be a big concern for Codewars kata, it could turn out to be an issue for users trying to reproduce random tests locally.

An alternative to `rand` could be using random devices, like `/dev/urandom`. This way of generating random numbers could partially alleviate the issue of the `rand` being capped at `RAND_MAX`, but also could inflate the amount of the boilerplate code and could cause additional problems with portability.


### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), or some kind of reference data like precalculated arrays, etc., it must not be possible for the user to call it, redefine, overwrite or directly access its contents. To prevent this, it should be defined as `static` in the tests implementation file.

The reference solution or data ___must not___ be defined in the [Preloaded code](/authoring/guidelines/preloaded/).


### Input mutation

General guidelines for submission tests contain a section related to [input mutation](/authoring/guidelines/submission-tests/#input-mutation) and how to prevent users from abusing it to work around kata requirements. Since C does not have reference semantics, it might appear that C kata are not affected by this problem, but it's not completely true. While data is passed to the user solution by value, it indeed cannot be easily modified by the user solution. However, when data is passed indirectly, by a pointer, or as an array, it can be modified _even when it's marked as `const`_. Constness of a function argument can be forcefully cast away by a user and then they would be able to modify values passed as `const T*` or as elements of `const T[]`. It's usually not a problem in "real world" C programming, but on Codewars, users can take advantage of vulnerable test suites and modify their behavior this way. After calling a user solution, tests should not rely on the state of such values and they should consider them as potentially modified by a user.


### Calling assertions

Criterion provides a set of useful [assertions](/languages/c/criterion/#assertions), but when used incorrectly, they can cause a series of problems:
- Stacktraces of a crashing user solution can reveal details that should not be visible,
- Use of an assertion not suitable for the given case may lead to incorrect test results,
- Incorrectly used assertions may produce confusing or unhelpful messages.

To avoid the above problems, calls to assertion functions should respect the following rules:
- The expected value should be calculated _before_ invoking an assertion. The `expected` parameter passed to the assertion should not be a function call expression, but a value calculated directly beforehand.
- Appropriate assertion functions should be used for each given test. `cr_assert_eq` is not suitable in all situations. Use `cr_assert_float_eq` for floating point comparisons, `cr_assert` for tests on boolean values, `cr_assert_str_*` to test strings and `cr_assert_arr_*` to test arrays.
- Some additional attention should be paid to the order of parameters passed to assertion macros. It differs between various assertion libraries, and it happens to be quite often confused by authors, mixing up `actual` and `expected` in assertion messages. For the C testing framework, the order is `(actual, expected)`.
- To avoid unexpected crashes in tests, it's recommended to perform some additional assertions before assuming that the answer returned by the user solution has some particular form, or size. For example, if the solution returns a pointer (possibly pointing to an array), an explicit assertion should be added to check whether the returned pointer is valid, and not, for example, `NULL`; the size of the returned array, potentially reported by an output parameter, should be verified before accessing an element which could turn out to be located outside of its bounds.
- Default messages produced by assertion macros are confusing, so authors should provide custom messages for failed assertions.


### Testability

In C, not everything can be easily tested. It's not possible to reliably verify the size or bounds of a returned buffer, or the validity of a returned pointer. It's difficult to test for conditions which result in a crash or undefined behavior. It cannot be reliably verified whether there's no memory leaks and if all allocated memory were correctly released. Sometimes the only way is to skip some checks or crash the tests.

<!--

## Preloaded

As C is a quite low-level language, it often requires some boilerplate code to implement non-trivial tests, checks, and assertions. It can be tempting to put some code that would be common to sample tests and submission tests in the Preloaded snippet, but this approach sometimes proves to be problematic (see [here](/authoring/guidelines/preloaded/#accessibility-of-preloaded-code) why), and can cause some headaches for users who are interested in training on the kata locally, or checking how the user solution is called, etc. It's strongly discouraged to use preloaded code to make the code common for test snippets if it would hide some information or implementation details interesting to the user. 


## Example test suite

Below you can find an example test suite that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.

```c
//include headers for Criterion
#include <criterion/criterion.h>

//include all required headers
#include <math.h>
#include <time.h>
#include <stdlib.h>
#include <stddef.h>
#include <stdint.h>

//redeclare the user solution
void square_every_item(double items[], size_t size);

//reference solution defined as static
static void square_every_item_ref(double items[], size_t size)
{
    for(size_t i = 0; i<size; ++i)
    {
      items[i] *= items[i];
    }
}

//custom comparer for floating-point values
static int cmp_double_fuzzy_equal(double* a, double* b) {
  double diff = *a - *b;
  return fabs(diff) < 1e-10 ? 0 : diff;
}

//random test case generator
static void fill_random_array(double array[], size_t size) {  
  for(size_t i=0; i<size; ++i) {
    //use rand to generate doubles
    array[i] = (double)rand() / RAND_MAX * 100;
  }
}

//helper function
static size_t get_mismatch_position(double actual[], double reference[], size_t size) {
  for(size_t i=0; i<size; ++i) {
    if(cmp_double_fuzzy_equal(actual+i, reference+i))
      return i;
  }
  return SIZE_MAX;
}

//setup function, called by test suite setup macro below
void setup_random_tests(void) {
  srand(time(NULL));
}

//a test case of fixed_tests suite for primary scenario
Test(fixed_tests, example_array) {
  
  double items[5]    = { 0.0, 1.1,  2.2,  3.3,   4.4 };  
  double expected[5] = { 0.0, 1.21, 4.84, 10.89, 19.36 };
    
  square_every_item(items, 5);
  
  //assertion macro suitable for arrays of doubles
  cr_assert_arr_eq_cmp(items, expected, 5, cmp_double_fuzzy_equal);
}

//a test case of fixed_tests suite for potential edge case
Test(fixed_tests, empty_array) {
  
  const double dummy = 42.5;
  double items[1] = { dummy };
  
  square_every_item(items, 0);
  cr_assert_eq(items[0], dummy, "Empty array should not be tampered with.");
}

//setup of the test suite, if necessary
TestSuite(random_tests, .init=setup_random_tests);

//a set of small random tests, with verbose debugging messages
Test(random_tests, small_arrays) {
  
  double input[10];
  double actual[10];  
  double reference[10];
  
  for(int i=0; i<10; ++i) {
    
    //generate test case
    size_t array_size = rand() % 10 + 1;
    fill_random_array(input, array_size);
    
    //kata requires the input to be mutated, so tests need to copy it, because
    //input array is used after calling user and reference solution
    memcpy(reference, input, sizeof(double) * array_size);
    square_every_item_ref(reference, array_size);
    
    //copy is made from original input, and not from an array fed to
    //the reference solution
    memcpy(actual, input, sizeof(double) * array_size);    
    square_every_item(actual, array_size);

    //assertion uses custom message to avoid confusing test output
    //it also uses data from original, non-mutated input array
    size_t invalid_position = get_mismatch_position(actual, reference, array_size);
    cr_assert_arr_eq_cmp(actual, reference, array_size, cmp_double_fuzzy_equal,
                         "Invalid answer at position %zu for input value %f, expected %f but got %f",
                         invalid_position, 
                         input[invalid_position], 
                         reference[invalid_position], 
                         actual[invalid_position]);
  }
}

//a set of large random tests, with not so detailed debugging messages
Test(random_tests, large_arrays) {
  
  double array[1000];     //small enough to be allocated on the stack,
  double reference[1000]; //but you can use dynamic memory if necessary.
  
  for(int i=0; i<10; ++i) {
    
    //generate test cases
    size_t array_size = rand() % 200 + 801;
    fill_random_array(array, array_size);
    
    //since original array is no used after tests, it's enough to create only one copy
    memcpy(reference, array, sizeof(double) * array_size);
    
    square_every_item_ref(reference, array_size);
    square_every_item(array, array_size);
    
    //assertion uses custom message
    cr_assert_arr_eq_cmp(array, reference, array_size, cmp_double_fuzzy_equal, "Invalid answer for arrays of size %zu", array_size);
  }
}
```

-->