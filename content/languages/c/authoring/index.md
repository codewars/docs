---
kind: tutorial
languages: [c]
sidebar: "language:c"
---

# C: creating and translating a kata

This article is meant for kata authors and translators who would like to create new content in C. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, C-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a C translation, or a new C kata from scratch, please make yourself familiar with the aforementioned documents related to authoring in general first. 

## General info

Any technical information related to the C setup on Codewars can be found on the [C reference](/languages/c/) page (language versions, available libraries, and setup of the code runner).


## Description

C code blocks can be inserted with C-specific part in [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks):

~~~
```c

...your code here...

```
~~~

C-specific paragraphs can be inserted with [language conditional rendering](/references/markdown/extensions/#conditional-rendering):

```
~~~if:c

...text visible only for C description...

~~~

~~~if-not:c

...text not visible in C description...

~~~
```

## Tasks and Requirements

Some concepts don't always translate well to or from C. Because of this, some constructs should be avoided and some translations just shouldn't be done. Some high-level languages, like Python or JavaScript, reside on the exact opposite end of the spectrum than C, and translating kata between them and C can result in significant differences in difficulty, requirements, and design of the solution.
- C is much lower-level than many other popular languages available on Codewars. For this reason, many kata, even if their task can be translated to C directly, can turn out much harder in C than in the original language. There are many kata that were originally created as very easy and beginner-friendly (for example 8 kyu). But after translating into C, and adding aspects like memory management, or two dimensional C arrays, etc. they are not so easy anymore, and newbies complain that kata ranked 8 kyu is too difficult for them while it should be an entry-level task.
- C is statically typed, so any task that depends on dynamic typing can be difficult to translate into C, and attempts of forcing a C kata to reflect a dynamically typed interface can lead to ideas that enforce a really bad design.
- There are just a few additional libraries available for the C runner, so almost everything has to be implemented manually by the author or the user. Kata that take advantage of additional packages installed for other languages become much more difficult in C.

## Coding

### Code style

Unlike for example Python or Java, there's no single guide for C code style, or even a set of naming conventions, which would be widely adopted and agreed upon by C programmers. Traditional naming conventions are using `snake_case`, Win32 API naming conventions are using `PascalCase`, there are GNU guidelines, Microsoft guidelines, Google guidelines, and some of them contradict each other. Just use whatever set of guidelines you like, but when you do, use it consistently.

### Header files

Not as much of a problem for C as it is for C++, but still, C authors often forget to include required header files, or just leave them out deliberately because "it works" even when some of the files are not included. It happens mostly due to the following reasons:
- The compiler provides an implicit declaration of a function, when it's encountered in the code and was not declared. However, this behavior is not standard and is now deprecated. You need to explicitly include header files for library functions you use or declare them in some other way.
- Some header files include other header files indirectly, for example, file `foo.h` contains line `#include <bar.h>`, which might appear to make the explicit include for `bar.h` unnecessary. It's not true though, because the file `foo.h` might change one day, or might depend on some compiler settings or command line options, and after some changes to the configuration of the C runner, the `bar.h` might be not included there anymore. That's why every file (i.e. code snippet) of a kata should explicitly include all required header files declaring functions used in it.
- The author might think that header files for the testing framework are included automatically by the code runner. That is not the case though, and test suites need to include `criterion/criterion.h` explicitly.

### Compilation warnings

Compiler options related to warnings used by the C runner are somewhat strict and require some discipline to get the code to compile cleanly. `-Wall` and `-Wextra` may cause numerous warnings and some of them are very pedantic. However, code of C kata should still compile cleanly, without any warnings logged to the console. Even when a warning does not cause any problem with tests, users get distracted by them and blame them for failing tests.


### Memory management

Unlike many modern, high-level languages, C does not manage memory automatically. Manual memory management is a very vast and complex topic, with many possible ways of achieving the goal depending on a specific case, caveats, and pitfalls.

Whenever a kata needs to return a string or an array, C authors tend to use the naive technique of allocating the memory in the solution function, and freeing it in the test suite. This approach mimics the behavior known from other languages where returning an array or object from inside of user solution is perfectly valid, but it's hardly ever a valid way of working with unmanaged memory.

One of the consequences of unmanaged memory is that it's strongly recommended against returning string constants from C functions, especially when translating kata from other languages. Returning a string in other languages is not a problem, but in C it always raises questions of who should allocate it and how it should be allocated. Consider replacing the string with some simpler data type (eventually aliased with a `typedef`), and/or provide some symbolic constants for available values. For example, if the requirement for the Python version is to _Return the string `'You won!'` if you won the game, `'You lost :('` if you were defeated, and `'It's a draw'` if there is no winner._, C should preferably use the constants `WON`, `LOST` and `DRAW`. If the author decides to keep raw C-strings as elements of the kata interface, they should clearly specify the required allocation scheme.

Possible ways of handling memory management are described in the [Memory Management in C kata](/languages/c/authoring/memory-management-techniques/) article. But whichever approach is chosen, even the most obvious one, it should be described either in the kata description (preferably in in a C-specific paragraph), or in the initial solution stub as a comment, and in sample tests as an example of a call to the solution.

## Tests

### Testing framework

C kata use the [Criterion testing framework](/languages/c/criterion/) to implement and execute tests. Read its reference page to find out how to structure tests into groups and test cases, what assertions are available, etc.

Criterion supports many features that can be very helpful, but (unfortunately) are not commonly used by C authors. It allows for parameterized tests, setting up additional data, test fixture setup, teardown, custom descriptions, etc. 

### Test feedback

You should notice that the report hooks used by the Codewars test runner produce one test output entry per assertion, so the test output panel can get very noisy.


### Random utilities

Unlike some other languages, C does not provide too many means of generating random numbers which could be used to build random tests. `stdlib.h` header provides the `rand` function which, while being quite simple, satisfies the majority of needs, but sometimes can be tricky to be used correctly.

Before `rand` is called for the first time, it must be seeded with `srand`. A call to `srand` should be performed only once, in the setup phase of the random tests. `srand` usually uses the current time as a seed, so authors need to include `time.h` before using the `time` function.

`rand` can return integers only up to `RAND_MAX`. There's no standard-compliant way to generate random values of types `unsigned int`, `long`, or `double`. Authors who would like to generate random values out of the domain of `rand` have to craft them manually. _(TODO: create article with snippets with RNGs for types other than `int`)_

Additionally, the value of `RAND_MAX` might differ on different platforms, or even change. For the current Codewars setup it's `2^32-1`, but there are some common platforms with `RAND_MAX` being as small as `2^16-1`. This makes the code using `rand` even less portable, and while portability might not be a big concern for Codewars kata, it could turn out to be an issue for users trying to reproduce random tests locally.

An alternative to `rand` could be using random devices, like `/dev/urandom`. This way of generating random numbers could partially alleviate the issue of the `rand` being capped at `RAND_MAX`, but also could inflate the amount of the boilerplate code and could cause additional problems with portability.


### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), or some kind of reference data like precalculated arrays, etc., it must not be possible for the user to call it, redefine, overwrite or directly access its contents. To prevent this, it should be defined as `static` in the tests implementation file.

The reference solution or data ___must not___ be defined in the [Preloaded code](/authoring/guidelines/preloaded/).


### Redeclaration of user solution

The solution function should be re-declared in the file with submission tests. Such re-declaration prevents a compilation warning about implicitly declared functions, and additionally stops users from tampering with the prototype of the solution function, for example, to remove const-ness of parameters, or change types of parameters, etc.

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

//redeclare the user solution
void square_every_item(double items[], int size);

//reference solution defined as static
static void square_every_item_ref(double items[], int size)
{
    for(int i = 0; i<size; ++i)
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
static void fill_random_array(double array[], int size) {  
  for(int i=0; i<size; ++i) {
    //use rand to generate doubles
    array[i] = (double)rand() / RAND_MAX * 100;
  }
}

//helper function
static int get_mismatch_position(double actual[], double reference[], int size) {
  for(int i=0; i<size; ++i) {
    if(cmp_double_fuzzy_equal(actual+i, reference+i))
      return i;
  }
  return -1;
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
    int array_size = rand() % 10 + 1;
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
    int invalid_position = get_mismatch_position(actual, reference, array_size);
    cr_assert_arr_eq_cmp(actual, reference, array_size, cmp_double_fuzzy_equal,
                         "Invalid answer at position %d for input value %f, expected %f but got %f",
                         invalid_position, 
                         input[invalid_position], 
                         reference[invalid_position], 
                         actual[invalid_position]);
  }
}

//a set of large random tests, with not so detailed debugging messages
Test(random_tests, large_arrays) {
  
  double array[1000];
  double reference[1000];
  
  for(int i=0; i<10; ++i) {
    
    //generate test cases
    int array_size = rand() % 1000 + 1;
    fill_random_array(array, array_size);
    
    //since original array is no used after tests, it's enough to create only one copy
    memcpy(reference, array, sizeof(double) * array_size);
    
    square_every_item_ref(reference, array_size);
    square_every_item(array, array_size);
    
    //assertion uses custom message
    cr_assert_arr_eq_cmp(array, reference, array_size, cmp_double_fuzzy_equal, "Invalid answer for arrays of size %d", array_size);
  }
}

```
