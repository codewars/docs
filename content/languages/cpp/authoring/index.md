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

Some concepts don't always translate well to or from C++. C++ allows for a variety of paradigms and techniques, and many of them are not widely spread across other languages. Because of this, some constructs should be avoided and some translations just shouldn't be done.
- C++ is statically typed, so any task that depends on dynamic typing can be difficult to translate into C++, and attempts of forcing a C++ kata to reflect a dynamically typed interface can lead to ideas that enforce a really bad design.
- There are just a few additional libraries available for the C++ runner, so kata that take advantage of additional, specialized packages installed for other languages become much more difficult in C++.
- Many features of C++ do not have direct equivalents in other popular languages: mixture of allowed paradigms, template meta-programming, unmanaged memory backed by RAII, native access to the platform and runtime, and many others. C++ kata which rely on them can be difficult to translate to other languages.


## Kata snippets and template

Due to complicated compilation model of C++ code, paired with the fact that Codewars strictly enforces names of source files, their amount, and meaning, code runner uses a `[template]()` (TODO: document C++ runner template) to concatenate all kata snippets into a single translation unit. This fact has various consequences on the code, some positive, and some negative: namespace pollution, symbols introduced by one snippet being visible in other snippets, etc. However, in the majority of cases, it does not affect kata in any way, and whenever possible, this behavior should be treated as implementation detail of C++ code runner. Kata snippets should be treated as separate source files, if possible.

One consequence of using the template is that signature of solution function can be modified by the user in a way which can affect tests. To avoid possibility of users tampering with prototype of solution function, it's recommended to re-declare it in the tests snippet.


## Coding

### Code style

C++ programmers have many sets of naming conventions or code style guides. Some of them can be found for example [here](https://isocpp.org/wiki/faq/coding-standards), or [here](https://google.github.io/styleguide/cppguide.html). Codewars does not strictly enforce any of them, just use whatever set of guidelines you like, but when you do, use it consistently. 

There's a few C++ coding guidelines which are violated by kata authors and translatiors particularly often:
- Arguments which are not cheap to copy should be passed by const reference, and not by value.
- Appropriate containers should be used, _especially_ when used as input arguments or return values:
  - C-style raw arrays and pointers to arrays need to be avoided
  - `std::array`, `std::pair`, or `std::tuple` should be used for data of known size. Avoid representing 2D points or pairs with `std::vector`.
  - `std::vector` should be used for arrays of varying size
  - `std::string` should be used instead of C-strings


### Header files

C++ authors often forget to include required header files, or just leave them out deliberately because "it works" even when some files are not included. It happens mostly due to the following reasons:
- C++ setup used by Codewars runner uses somewhat specific way to prepare and run kata snippets (TODO: describe C++ template). The structure of concatenated file which is compiled by the runner causes that some header files are included always, or that some files included in one kata snippet are automatically available in some other kata snippet. However, this behavior should not be relied on if not necessary, and every snippet should include all header files required by code it contains. 
- Some header files include other header files indirectly, for example, file `foo.h` contains line `#include <bar.h>`, which might appear to make the explicit include for `bar.h` unnecessary. It's not true though, because the file `foo.h` might change one day, or might depend on some compiler settings or command line options, and after some changes to the configuration of the C++ runner, the `bar.h` might be not included there anymore.


### Compilation warnings

Compiler options related to warnings used by the C++ runner are somewhat strict and require some discipline to get the code to compile cleanly. `-Wall` and `-Wextra` may cause numerous warnings and some of them are very pedantic. However, code of C++ kata should still compile cleanly, without any warnings logged to the console. Even when a warning does not cause any problem with tests, users get distracted by them and blame them for failing tests.


### Avoiding C

Sometimes authors consider C++ just "a C, but with classes". While C and C++ are still compatible in many ways, such perception is wrong and incorrect use of C features in C++ code leads to bad code at best, to undefined behavior and difficult to diagnose errors in more extreme cases. Features and idioms from C language should be replaced with their equivalents from modern C++:

- C features must not be used where they do not have well-defined behavior in C++. For example, memory management generally should not be done with `malloc`/`free` or similar, or VLAs should be replaced with `std::array` or `std::vector`.
- C++ features should be preferred to ones inherited from C, for example:
  - C-style casts should be replaced with their C++ equivalents.
  - Functions originating from C should be replaced with related C++ functionalities: `<random>` instead of `rand`, `<iostream>` instead of `stdio.h`, etc.
- C++ header files should not be confused with their C equivalents. For example, `cmath` or `cctype` should be used instead of `math.h` or `ctype.h`.
- Proper C++ data types should be used instead of their C "equivalents", especially when used as elements of solution interface (input parameters and return value). C-strings should be replaced with `std::string` (or `std::string_view`), raw C-style arrays should be replaced with `std::array`, `std::vector`, or other containers, C++ pointer wrappers should be considered instead of raw pointers, etc.


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


### Random utilities

Until C++11, the most common way of producing random values was `rand` function. However, it has a set of problems: it needs to be properly seeded, and it's difficult to produce values outside `0...RAND_MAX` range. Since C++11, standard library offers a set of functionalities which are designed to produce random values of different types, from various ranges, and with better distribution when compared to `rand`. Unfortunately, API presented in `random` header seems to be confusing and difficult to use and accompanied by amount of misconceptions, and authors either use it incorrectly, or resort to (not) good, old `rand`. However, working with `random` turns out to be not that difficult:

```cpp
//use random_device only as a seed
std::random_device seed;

//create one PRNG which will be used to pick values
//from (potentially many) distributions
std::mt19937 engine{ seed() };

//a set of distributions for every type or range you are going to need in your tests
std::uniform_int_distribution<    int> rand_number     {  1,  100 };
std::uniform_int_distribution< size_t> rand_length     { 20,  100 };
std::uniform_real_distribution<double> rand_coefficient{ -1,    1 };
std::uniform_int_distribution<   char> rand_letter     { 'a', 'z' };
std::uniform_int_distribution<   char> rand_bool       {   0,   1 };
//etc.

//for convenience, distributions can be bound with PRNG
auto gen_length = std::bind(rand_length, engine);
auto gen_letter = std::bind(rand_letter, engine);

std::string input;
//input string generator: string of random length, composed of random letters
size_t input_length = gen_length(); //use length generator
for(int i=0; i<input_length; ++i) {  
  //string generation logic...
  input.push_back(gen_letter()); //use generator of random letters
}

//... testing logic    
```


_TODO: `sample`, `shuffle`_


### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), or some kind of reference data like precalculated arrays, etc., it must not be possible for the user to call it, redefine, overwrite, or directly access its contents. To prevent this, reference data can be made a private member of `Describe` structure. Reference solution can be either a private member of `Describe`, or a lambda-initialized local variable of an `It` block. See `[Example test suite](#example_test_suite)` for some examples.

The reference solution or data ___must not___ be defined in the [Preloaded code](/authoring/guidelines/preloaded/).


### Input mutation

General guidelines for submission tests contain a section related to [input mutation](/authoring/guidelines/submission-tests/#input-mutation) and how to prevent users from abusing it to work around kata requirements. It's usually not a problem in "real world" C++ programming, but on Codewars, users can take advantage of vulnerable test suites and modify their behavior. Constness of a function argument can be forcefully cast away by a user, or they can change the function signature and remove `const` qualifier from input parameter(s).  After calling a user solution, tests should not rely on the state of such values, and they should consider them as potentially modified by a user.


### Calling assertions

Criterion provides a set of useful [assertions](/languages/c/criterion/#assertions), but when used incorrectly, they can cause a series of problems:
- Stacktraces of a crashing user solution can reveal details that should not be visible,
- Use of an assertion not suitable for the given case may lead to incorrect test results,
- Incorrectly used assertions may produce confusing or unhelpful messages.

To avoid the above problems, calls to assertion functions should respect the following rules:
- The expected value should be calculated _before_ invoking an assertion. The `expected` parameter passed to the assertion should not be a function call expression, but a value calculated directly beforehand.
- Appropriate assertion functions should be used for each given test. `AssertEquals` is not the only option, and Snowhouse provides a selection of constraints and expressions suitable for many scenarios: `EqualsWithDelta` for floating point comparisons, `EqualsContainer ` to compare containers with a predicate, etc.
- `Assert::That(bool)` should not be used, because it generates poor feedback on failure. The overload `Assert::That(bool_value, Equals(expected_value), message_supplier)` should be used instead.
- Overloads of `Assert::That` which accept `message_supplier` should be preferred. Assertion message should provide meaningful details on the cause of failure, like test input, etc.
- Some additional attention should be paid to the order of parameters passed to `Assert::That`. It differs between various assertion libraries, and it happens to be quite often confused by authors, mixing up `actual` and `expected` in assertion messages. For the C++ testing framework, the order is `(actual, SomeConstraint(expected))`.
- To avoid unexpected crashes in tests, it's recommended to perform some additional assertions before assuming that the answer returned by the user solution has some particular form, or size. For example, if the solution returns a pointer, an explicit assertion should be added to check whether the returned pointer is valid, and not, for example, `nullptr`; the size of the returned container should be verified before accessing an element which could turn out to be located out of its bounds.


### Testability

In C++, not everything can be easily tested. It's not possible to reliably verify the validity of a returned pointer. It's difficult to test for conditions which result in a crash or undefined behavior. Sometimes the only way is to skip some checks or crash the tests.


## Preloaded

C++ sometimes requires some boilerplate code to implement non-trivial tests, checks, and assertions. It can be tempting to put some code that would be common to sample tests and submission tests in the Preloaded snippet, but this approach sometimes proves to be problematic (see [here](/authoring/guidelines/preloaded/#accessibility-of-preloaded-code) why), and can cause some headaches for users who are interested in training on the kata locally, or checking how the user solution is called, etc. It's strongly discouraged to use preloaded code to make the code common for test snippets if it would hide some information or implementation details interesting to the user. 


## Example test suite

Below you can find an example test suite that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.

_TODO: create example test suite_

<!--
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
    
    //since original array is not used after tests, it's enough to create only one copy
    memcpy(reference, array, sizeof(double) * array_size);
    
    square_every_item_ref(reference, array_size);
    square_every_item(array, array_size);
    
    //assertion uses custom message
    cr_assert_arr_eq_cmp(array, reference, array_size, cmp_double_fuzzy_equal, "Invalid answer for arrays of size %zu", array_size);
  }
}
```

-->
