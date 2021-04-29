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

C++-specific code can be inserted with the `cpp` flag in [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks):

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

Some concepts don't always translate well to or from C++. C++ allows for a variety of paradigms and techniques, many of which are not necessarily suited to other languages. For this reason, certain constructs should be avoided and some kata just should not be translated to C++.
- C++ is statically typed, so any task that depends on dynamic typing can be difficult to translate into C++, and attempts to force a C++ kata to reflect a dynamically typed interface can lead to ideas that enforce a really bad design.
- There are only a few additional libraries available to the C++ runner, so kata that take advantage of specialized packages installed for other languages become much more difficult to implement in C++.
- Many features of C++ do not have direct equivalents in other popular languages: mixture of allowed paradigms, template meta-programming, unmanaged memory backed by RAII, native access to the platform and runtime, and many others. C++ kata which rely on them can be difficult to translate to other languages.


## Kata snippets and template

Due to the complicated compilation model of C++ code, paired with the fact that Codewars strictly enforces the names, amount, and meaning of source files, the code runner uses a `[template]()` (TODO: document C++ runner template) to concatenate all kata snippets into a single translation unit. This fact has various consequences on the code, some positive, and some negative: namespace pollution, symbols introduced by one snippet being visible in other snippets, etc. However, in the majority of cases, it does not affect kata in any way, and whenever possible, this behavior should be treated as an implementation detail of the C++ code runner. Kata snippets should be treated as separate source files, if possible.

One consequence of using a template is that the signature of a solution function can be modified by the user in a way which can affect tests. To avoid the possibility of users tampering with the prototype of a solution function, it's recommended to re-declare it in the tests snippet.

Another issue caused by the use of the template is excessive namespace pollution. See paagraph on [namespaces](#namespaces) for more details.


## Coding

### Code style

C++ programmers have many sets of naming conventions or code style guides. Some of them can be found for example [here](https://isocpp.org/wiki/faq/coding-standards), or [here](https://google.github.io/styleguide/cppguide.html). Codewars does not strictly enforce any of them, just use whatever set of guidelines you like, but when you do, use it consistently. 

There are a few C++ coding guidelines which are violated by kata authors and translators particularly often:
- Arguments which are not cheap to copy should be passed by const reference, and not by value.
- Appropriate containers should be used, _especially_ when used as input arguments or return values:
  - C-style raw arrays and pointers to arrays need to be avoided
  - `std::array`, `std::pair`, or `std::tuple` should be used for data of known size. Avoid representing 2D points or pairs with `std::vector`.
  - `std::vector` is not the only available option, and can be replaced by another container (for example, `std::set`), a set of iterators, a range, or any other construct suitable for the task.
  - `std::string` or `std::string_view` should be used instead of C-strings


### Header files

C++ authors often forget to include required header files, or just leave them out deliberately because "it works" even when some files are not included. It happens mostly due to the following reasons:
- C++ setup used by the Codewars runner uses a somewhat specific way to prepare and run kata snippets (TODO: describe C++ template). The structure of concatenated files which the runner compiles causes some header files to always be included, or makes some files included in one kata snippet automatically available to some other kata snippet. However, this behavior should not be relied upon if not necessary, and every snippet should include all header files required by the code it contains. 
- Some header files include other header files indirectly; for example, if file `foo.h` contains line `#include <bar.h>`, that might appear to make the explicit include for `bar.h` unnecessary. This is not true though, because the file `foo.h` might change one day, or might depend on some compiler settings or command line options, and after some changes to the configuration of the C++ runner, the file `bar.h` might be not included there anymore.


### Compilation warnings

Compiler options related to warnings used by the C++ runner are somewhat strict and require some discipline to get the code to compile cleanly. `-Wall` and `-Wextra` may cause numerous warnings and some of them are very pedantic. However, code of C++ kata should still compile cleanly, without any warnings logged to the console. Even when a warning does not cause any problem with tests, users get distracted by them and blame them for failing tests.


### Avoiding C

Sometimes authors consider C++ just "C, but with classes". While C and C++ are compatible in many ways, that kind of perception is wrong: incorrect use of C features in C++ code leads to bad code at best, or to undefined behavior and difficult to diagnose errors in more extreme cases. Features and idioms from C language should be replaced with their equivalents from modern C++:

- C features must not be used where they do not have well-defined behavior in C++. For example, memory management generally should not be done with `malloc`/`free` or similar, and VLAs should be replaced with `std::vector`.
- C++ features should be preferred over those inherited from C, for example:
  - C-style casts should be replaced with their C++ equivalents.
  - Functions originating from C should be replaced with related C++ functionalities: `<random>` instead of `rand`, `<iostream>` instead of `stdio.h`, etc.
- C++ header files should not be confused with their C equivalents. For example, `cmath` or `cctype` should be used instead of `math.h` or `ctype.h`.
- Proper C++ data types should be used instead of their C "equivalents", especially when used as elements of a solution interface (input parameters and return value). C-strings should be replaced with `std::string` (or `std::string_view`), raw C-style arrays should be replaced with `std::array`, `std::vector`, or other containers, smart pointers should be considered instead of raw pointers, etc.


### `using` directives

To avoid problems with namespace pollution, C++ snippets should not contain `using` directives (particularly `using namespace std;`) anywhere in the global namespace. Incorrect use of `using` can sometimes cause compilation problems that are difficult to diagnose. For example, `using namespace std;` placed incorrectly in the "Complete solution" or "Initial solution" snippet can result in failed compilation for _some_ users. To minimize such risks, authors should stick to following guidelines:
- `using` directives should not be present in the global scope of "Preloaded", "Complete solution", and "Initial solution" snippets. They are heavily discouraged in the global scope of "Sample tests" and "Submission tests" snippets. This rule applies not only to `using namespace std;`, but also to other namespaces and namespace-qualified names.
- `using` directives are perfectly fine inside the scope of an "Initial solution" function, test helpers, or `It` blocks.

## Tests

C++ kata use the [modified version](https://github.com/codewars/igloo) of the [Igloo](https://github.com/joakimkarlsson/igloo) testing framework, along with a [modified version](https://github.com/codewars/snowhouse) of the [Snowhouse](https://github.com/banditcpp/snowhouse) assertion library. Codewars modified both libraries to adapt them to the code runner environment and make them more useful for kata authors.

### Igloo

General structure of tests created with Igloo can be presented as:

```cpp
Describe(TestGroup_1) {

  It(TestCase_1) {
    //...
  }

  It(TestCase_2) {
    //...
  }
};

Describe(TestGroup_2) {

  It(TestCase_1) {
    //...
  }
};
```

`Describe` blocks are expanded into C++ `struct`s, and they can contain anything a `struct` can, in particular `public` and `private` access modifiers, member fields and functions, etc. `Describe` blocks can also be nested, with one caveat: while nested `Describe` sections are correctly compiled and registered for execution, the test output panel does not report them hierarchically; they are all flattened into a single-level test report.

### Snowhouse

`Snowhouse` provides the function `Assert::That`, which can accept either a constraint which has to be fulfilled by an asserted value (`Assert::That(actual, Equals(expected))`), or a fluent expression accepting actual value as input and returning a boolean value indicating success or failure (`Assert::That(actual, Is().Equal(expected))`). Both types of assertions are equivalent to each other and authors can choose whichever suits them better. For clarity, this document uses only constraints as examples, but each of them have corresponding expressions. The most useful ones are:
- `Equals`
- `EqualsWithDelta`
- `EqualsContainer`
- ... what else?


#### Custom assertion messages

A drawback of the original version of the Snowhouse assertion library is that neither its `AssertThat` macro nor `Assert::That` function accept a custom assertion message which could be used by authors to provide detailed information on the cause of failure. To support authors with possibility to provide useful feedback, Codewars provides a set of overloads for `Assert::That`, which accept an additional message supplier:

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

For more details and examples of custom assertion messages, see `[Example test suite](#example_test_suite)` below, or visit the `[Snowhouse reference](/languages/cpp/snowhouse/)` page.

#### Stringizers

In its default configuration, Snowhouse can produce confusing assertion messages when `expected` and `actual` values are of a type it cannot stringify:

```text
  does_not_pretty_print_type_without_stringizer
    Expected: equal to [ [unsupported type], [unsupported type] ]
    Actual: [ [unsupported type], [unsupported type] ]
```

To rectify this issue in your tests, you can make such types suitable for stringification in a way described in the dedicated documentation article on [custom Snowhouse stringizers](/languages/cpp/igloo/stringizers/).


### Random utilities

Until C++11, the most common way of producing random values was the `rand` function. However, it has a set of problems: it needs to be properly seeded, and it is difficult to produce values outside of `0...RAND_MAX` range. Since C++11, the standard library offers a set of functionalities which are designed to produce random values of different types, from various ranges, and with better distribution when compared to `rand`. Unfortunately, the API presented in the `random` header seems to be confusing and difficult to use and accompanied by a few misconceptions, and authors either use it incorrectly or resort to (not) good, old `rand`. However, working with `random` turns out to be not that difficult:

```cpp
//use random_device only as a seeder
std::random_device seeder;

//create one PRNG which will be used to pick values
//from (potentially many) distributions
std::mt19937 engine{ seeder() };

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
for(size_t i=0; i<input_length; ++i) {  
  //string generation logic...
  input.push_back(gen_letter()); //use generator of random letters
}

//... testing logic    
```

The standard library also contains some functions which can be helpful when generating random inputs:

- [`std::shuffle`](https://www.cplusplus.com/reference/algorithm/shuffle/) - randomly rearranges elements in range using generator.
- [`std::sample`](https://en.cppreference.com/w/cpp/algorithm/sample) - randomly selects elements from the sequence, without replacement.

Note that `std::random_shuffle` is now considered obsolete and has been superseded by `std::shuffle`.

### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), or some kind of reference data like precalculated arrays, etc., it must not be possible for the user to call it, redefine, overwrite, or directly access its contents. To prevent this, reference data can be made a private member of the `Describe` structure. A reference solution can be either a private member of `Describe`, or a lambda-initialized local variable of an `It` block. See `[Example test suite](#example_test_suite)` for some examples.

The reference solution or data ___must not___ be defined in the [Preloaded code](/authoring/guidelines/preloaded/).


### Input mutation

General guidelines for submission tests contain a section related to [input mutation](/authoring/guidelines/submission-tests/#input-mutation) and how to prevent users from abusing it to work around kata requirements. It's usually not a problem in "real world" C++ programming, but on Codewars, users can take advantage of vulnerable test suites and modify their behavior. Constness of a function argument can be forcefully cast away by a user, or they can change the function signature and remove the `const` qualifier from input parameter(s).  After calling a user solution, tests should not rely on the state of such values, and they should consider them as potentially modified by the user.


### Calling assertions

Snowhouse provides a set of useful `[assertions (TODO: link to reference)](/languages/c/criterion/#assertions)`, but when used incorrectly, they can cause a series of problems:
- Use of an assertion not suitable for the given case may lead to incorrect test results,
- Incorrectly used assertions may produce confusing or unhelpful messages.

To avoid the above problems, calls to assertion functions should respect the following rules:
- The expected value should be calculated _before_ invoking an assertion. The `expected` parameter passed to the assertion should not be a function call expression, but a value calculated directly beforehand. _(? does this point hold for C++ kata?)_
- Appropriate assertion functions should be used for each given test. `AssertEquals` is not the only option, and Snowhouse provides a selection of constraints and expressions suitable for many scenarios: `EqualsWithDelta` for floating point comparisons, `EqualsContainer ` to compare containers with a predicate, etc.
- Overloads of `Assert::That` which accept `message_supplier` should be preferred. Assertion message should provide meaningful details on the cause of failure, like test input, etc.
- `Assert::That(bool)` should not be used, because it generates poor feedback on failure. The overload `Assert::That(bool_value, Equals(expected_value), message_supplier)` should be used instead.
- Some additional attention should be paid to the order of parameters passed to `Assert::That`. Authors quite often happen to confuse `actual` and `expected` in assertion messages. For the C++ testing framework, the order is `(actual, SomeConstraint(expected))`.
- To avoid unexpected crashes in tests, it's recommended to perform some additional assertions before assuming that the answer returned by the user solution has some particular form or size. For example, if the solution returns a pointer, an explicit assertion should be added to check whether the returned pointer is valid, and not, for example, `nullptr`; the size of the returned container should be verified before accessing an element which could turn out to be located out of its bounds.


### Testability

In C++, not everything can be easily tested. It's not possible to reliably verify the validity of a returned pointer. It's difficult to test for conditions which result in a crash or undefined behavior. Sometimes the only way is to skip some checks or crash the tests.


## Preloaded

C++ sometimes requires some boilerplate code to implement non-trivial tests, checks, and assertions. It can be tempting to insert some code that would be common to sample tests and submission tests in the Preloaded snippet, but this approach sometimes proves to be problematic (see [here](/authoring/guidelines/preloaded/#accessibility-of-preloaded-code) why), and can cause some headaches for users who are interested in training on the kata locally, or checking how the user solution is called, etc. It's strongly discouraged to use preloaded code to make the code common for test snippets if it would hide some information or implementation details interesting to the user. 


## Example test suite

Below you can find an example test suite that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.

```cpp
//include all required headers
#include <fmt/core.h>
#include <fmt/ranges.h>

#include <vector>
#include <algorithm>
#include <random>
#include <sstream>
#include <string>

//redeclare the user solution
std::vector<int> square_every_item(const std::vector<int>& ages);


Describe(FixedTests) {
  
  // a test case of fixed_tests suite for a primary scenario
  It(ExampleArray) {
    
    // using directive limited to non-global scope
    using namespace std;

    vector<int> items    = { 0, 1, 2, 3,  4 };  
    vector<int> expected = { 0, 1, 4, 9, 16 };
      
    auto actual = square_every_item(items);
    
    // Assertion constraint checking for container equality
    Assert::That(actual, EqualsContainer(expected), ExtraMessage("Invalid answer for { 0, 1, 2, 3, 4 }"));
  }
  
  // a test case of fixed_tests suite for a potential edge case
  It(EmptyArray) {
    
    std::vector<int> empty;
    
    auto actual = square_every_item(empty);
    Assert::That(actual, IsEmpty(), ExtraMessage("Input: empty vector"));
  }
};

Describe(RandomTests) {

private:
  
  std::mt19937 engine{ std::random_device{}() };
  std::function<int   ()> gen_number     = std::bind(std::uniform_int_distribution<int   >{  1, 100 }, engine);
  std::function<size_t()> gen_small_size = std::bind(std::uniform_int_distribution<size_t>{  2,  10 }, engine);
  std::function<size_t()> gen_large_size = std::bind(std::uniform_int_distribution<size_t>{ 80, 100 }, engine);

  // random test case generator
  std::vector<int> generate_random_input(size_t size) {  
    std::vector<int> generated;
    std::generate_n(std::back_inserter(generated), size, gen_number);
    return generated;
  }  
  
  std::vector<int> square_every_item_ref(const std::vector<int>& numbers) {
    
    std::vector<int> result = numbers;
    std::transform(result.begin(), result.end(), result.begin(), [](int a) { return a * a; });
    return result;
  }
  
  std::string stringify_input(const std::vector<int>& input) {
    return fmt::format("{}", fmt::join(input, ","));
  }
  
public:  
  
  // a set of small random tests, with verbose debugging messages
  It(SmallArrays) {
    
    for(int i=0; i<10; ++i) {
      
      // generate test case
      size_t input_size = gen_small_size();
      auto input = generate_random_input(input_size);
      
      // tests need to copy the input vector, because
      // it is used after calling the user and reference solution
      auto original = input;
      auto expected = square_every_item_ref(input);      
      
      auto actual = square_every_item(input);
  
      // assertion uses a custom message to avoid confusing test output.
      // it also uses data from original, non-mutated input array
      Assert::That(actual, EqualsContainer(expected), ExtraMessage(fmt::format("Input: {}", stringify_input(original))));
    }
  }  

  // a set of large random tests, with less detailed debugging messages
  It(LargeArrays) {
    
    for(int i=0; i<10; ++i) {
      
      // generate test cases
      size_t input_size = gen_large_size();
      auto input = generate_random_input(input_size);
      
      auto expected = square_every_item_ref(input);
      auto actual = square_every_item(input);
      
      // assertion uses custom message supplier
      Assert::That(actual, EqualsContainer(expected), [&]() {
        auto [act, exp] = std::mismatch(actual.cbegin(), actual.cend(), expected.cbegin());
        auto idx = act - actual.cbegin();
        return fmt::format("Invalid answer for inputs of size {}: vectors mismatch at position {}, expected: {}, actual: {}", input_size, idx, *exp, *act);
      });
    }
  }
};
```
