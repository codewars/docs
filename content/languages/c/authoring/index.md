---
kind: tutorial
languages: [c]
sidebar: "language:c"
---

# C: creating and translating a kata

This article is meant as help for kata authors and translators who would like to create new content in C. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), shows the most common pitfalls and how to avoid them.

This article is not a standalone tutorial on creating kata or translations. It's meant to be a complementary, C-specific part of a more general set of HOWTOs and guidelines related to [content authoring](/authoring/). If you are going to create a C translation, or a new C kata from scratch, please make yourself familiar with the aforementioned documents related to authoring in general first. 

## General info

Any technical information related to the C setup on Codewars can be found on the [C reference](/languages/c/) page (language versions, available modules, and setup of the code runner).


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

Some concepts don't always translate well to or from C. Because of this, some constructs should be avoided and some translations just shouldn't be done. Some high level languages, like Pyton or Javascript, reside on the exactly opposite end of the spectrum than C, and translating kata between them and C can result in signiicant differences in difficulty, requirements, and design of the solution.
- C is a language of much lower level than many other popular languages available on Codewars. For this reason, many kata, even if their task can be translated to C directly, can turn out much harder in C than in original language. There's many kata which were originally created as very easy and beginner friendly (for example 8 kyu). But after translating into C, and adding aspects like memory management, or two dimensional C arrays, etc. they are not so easy anymore, and newbies complain that kata ranked 8 kyu is too difficult for them while it should be an entry level task.  
- C is statically typed, so any task which depends on dynamic typing can be difficult to translate into C, and attempts of forcing a C kata to reflect dynamically typed interface can lead to ideas which enforce a really bad design.
- There's just a few additional libraries available for C runner, so almost everything has to be implemented manually by the author or the user. Kata which take advantage of additional packages installed for other languages become much more difficult in C.

## Coding

### Code style

Unlike for example Python or Java, there's no single guide for C code style, or even no set of naming conventions, which would be widely adopted and agreed upon by C programmers. There are traditional naming conventions using `snake_case`, there are Win32 API naming conventions using `PascalCase`, there are GNU guidelines, Microsoft guidelines, Google guidelines, and some of them contradictory to each other. Just use whatever set of guidelines you like, but when you do, use it consistently.

### Header files

Not as much of a problem for C as it is for C++, but still, C authors often forget to include required header files, or just leave them out deliberately because "it works" even when some of the files are not included. It happens mostly due to following reasons:
- Compiler provides implicit declaration of a function, when it's encountered in the code and was not declared. However, this behavior is not standard and is now deprecated. You need to explicitly include header files for library functions you use, or declare them in some other way.
- Some header files include other header files indirectly, for example, file `foo.h` contains line `#include <bar.h>`, which might appear to make the explicit include for `bar.h` unnecessary. It's not true though, because the file `foo.h` might change one day, or might depend on some compiler settings or command line options, and after some changes to the cnfiguration of the C runner, the `bar.h` might be not included there anymore. That's why every file (i.e. code snippet) of a kata should explicitly include all required header files declaring functions used in it.
- Author might think that header files for the testing framework are included automatically by the code runner. It is not the case though, and test suites need to include `criterion/criterion.h` explicitly.

### Compilation warnings

Compiler options related to warnings used by C runner are somewhat strict and require some discipline to get the code to compile cleanly. `-Wall` and `-Wextra` cause that warnings can be numerous, and some of them are very pedantic. However, code of C kata should still compile in a clean way, without any warnings logged to the console. Even when a warnig does not cause any problem with tests, users get distracted by them and blame them for failing tests.


### Memory management

Unlike many modern, high level languages, C does not manage memory automatically. Manual memory management is a very vast and complex topic, with many possible ways of achieving the goal depending on a specific case, cave-ats, and pitfalls.

Whenever a kata needs to return a string or an array, C authors tend to use the naive technique of allocating the memory in the solution function, and freeing it in the test suite. This approach mimics the behavior known from other languages where returning an array or object from inside of user solution is perfectly valid, but it's hardly ever a valid way of working with unmanaged memory.

Possible ways of handling memory management are described in the [Memory Management in C kata](/languages/c/authoring/memory-management-techniques/) article. But whichever approach is chosen, even the most obvious one, it should be described either in the kata description (preferrably in in a C-specific paragraph), or in the initial solution stub as a comment, and in sample tests as an example of a call to the solution.

## Tests

### Testing framework

C kata use the [Criterion testing framework](/languages/c/criterion/) to implement and execute tests. Read its reference page to find out how to structure tests into groups and test cases, what assertions are available, etc.

Criterion supports many features which can be very helpful, but (unfortunately) are not commonly used by C authors. It allows for parametrized tests, setting up additional data, test fixture setup and teardown, custom descriptions, etc. 

### Test feedback

You should notice that the report hooks used by Codewars test runnerproduce one test output entry per assertion, so the test output panel can get very noisy.


### Random utilities

_ TBD_

- `rand` and `srand`
- `/dev/urandom`
- `MAX_RAND`


### Reference solution

If the test suite happens to use a reference solution to calculate expected values (which [should be avoided](/authoring/guidelines/submission-tests/#reference-solution) when possible), or some kind of reference data like precalculated arrays, etc., it must not be possible for the user to call it, redefine, overwrite or directly access its contents. To prevent this, it should be defined as `static` in the tests implementation file.

The reference solution or data ___must not___ be defined in the [Preloaded code](/authoring/guidelines/preloaded/).


### Redeclaration of user solution

Solution function should be redeclared in the file with submission tests. Such redeclaration prevents a compilation warning about implicitly declared functions, and additionally stops users from from tampering with the prototype of the solution function, for example to remove constness of parameters, or change types of parameters, etc.


### Calling assertions

Criterion testing framework provides a set of useful [assertions](/languages/c/criterion/#assertions), but when used incorrectly, they can cause a series of problems:
- Stacktraces of a crashing user solution can reveal details that should not be visible,
- Use of an assertion not suitable for the given case may lead to incorrect test results,
- Incorrectly used assertions may produce confusing or unhelpful messages.

To avoid the above problems, calls to assertion functions should respect the following rules:
- The expected value should be calculated _before_ invoking an assertion. The `expected` parameter passed to the assertion should not be a function call expression, but a value calculated directly beforehand.
- Appropriate assertion functions should be used for each given test. `cr_assert_eq` is not suitable in all situations. Use `cr_assert_float_eq` for floating point comparisons, `cr_assert` for tests on boolean values, `cr_assert_str_*` to test strings and `cr_assert_arr_*` to test arrays.
- Some additional attention should be paid to the order of parameters passed to assertion macros. It differs between various assertion libraries, and it happens to be quite often confused by authors, mixing up `actual` and `expected` in assertion messages. For the C testing framework, the order is `(actual, expected)`.
- To avoid unexpected crashes in tests, it's recommended to perform some additional assertions before assuming that the answer returned by the user solution has some particular form, or size. For example, if the solution returns a pointer (possibly pointing to an array), an explicit assertion should be added to check whether the returned pointer is valid, and not, for example, `NULL`; size of the returned array, potentially reported by an output paramter, should be verified before accessing an element which could turn out to be located outside of its bounds.
- Default messages produced by assertion macros are confusing, so authors should provide custom messages for failed assertions.


## Preloaded

As C is a quite low level language, it often requires some boilerplate code to implment non-trivial tests, checks, and assertions. It can be tempting to to put some code which would be common to sample tests and submission tests in the Preloaded snippet, but this approach sometimes proves to be problematic (see [here](/authoring/guidelines/preloaded/#accessibility-of-preloaded-code) why), and can cause some headaches for users who are interested in training on the kata locally, or checking how the user solution is called, etc. It's strongly discouraged to use preloaded code to make the code common for test snippets, if it would hide some information or implementation details interesting to the user. 


## Example test suite

Below you can find an example test suite that covers most of the common scenarios mentioned in this article. Note that it does not present all possible techniques, so actual test suites can use a different structure, as long as they keep to established conventions and do not violate authoring guidelines.

_TBD_

<!--

```python

#import modules explicitly
import codewars_test as test
import preloaded
from solution import user_solution

@test.describe('Fixed tests')
def fixed_tests():

    @test.it('Regular cases')
    def regular_cases():
        test.assert_equals(6, user_solution([1, 2, 3]))
        test.assert_equals(5, user_solution([2, 3]))

    @test.it('Edge cases')
    def edge_cases():
        test.assert_equals(0, user_solution([]), "Invalid answer for empty array")
        test.assert_equals(2, user_solution([2]), "Invalid answer for one element array")

    @test.it('Input should not be modified')
    def do_not_mutate_input():
        arr = list(range(100))
        random.shuffle(arr)
        arr_copy = arr[:]
        #call user solution and ignore the result
        user_solution(arr_copy)
        #arr_copy should not be modified
        test.assert_equals(arr_copy, arr, 'Input array was modified')


@test.describe('Random tests')
def random_tests():

    #non-global reference solution
    def reference_solution(arr):
        # calculate and return reference answer

    #generate data for test cases with small inputs
    #this test case generator combines a few types of input
    #in one collection
    def generate_small_inputs():    
        test_cases = []
        
        #first type of input: regular array of small inputs (many of them)
        for _ in range(50):
            test_cases.append(generate_small_test_case())
        
        #another type of input: array with potentially tricky numbers
        #(possibly many of them)
        for _ in range(50):
            test_cases.append(generate_small_tricky_test_case())

        #potential edge case of single element array (a few of them)
        for _ in range(10):
            test_cases.append(generate_single_element_edge_case())

        #another edge case: empty array
        #Not always necessary, usually fixed test is enough.
        #If present, there's no need for more than one.
        test_cases.append([])

        #randomly shuffle test cases to make their order unpredictable
        random.shuffle(test_cases)

        return test_cases

    #Generator for large test cases, can be used for performance tests.
    #Can generate structure and types of test cases similar to the
    #generate_small_test_cases, but can also add more tricky cases,
    #or skip on edge cases if they were sufficiently tested in the smaller set.
    def generate_large_cases():
        #... actual implementation

    @test.it('Small inputs')
    def small_inputs():
        
        inputs = generate_small_inputs()
        for input in inputs:

            #call reference solution first, in separate statement.
            #we know it does not mutate the array, so no copy is needed
            expected = reference_solution(input)

            #call user solution and get actual answer.
            #since the input is used after this call to compose
            #the assertion message, a copy is passed
            actual = user_solution(input[:])
            
            #Call assertion function.
            #Custom assertion message is used to help users with diagnosing failures.
            #Assertion message uses original, non-modified input.
            test.assert_equals(actual, expected, f'Input: {input}')

    @test.it('Large random tests')
    def large_random_tests():
        
        large_inputs = generate_large_cases()
        
        for input in large_inputs:
            
            #expected answer calculated first, on separate line
            expected = reference_solution(input)
            
            #assertion message composed before the user solution has a chance
            #to mutate the input array
            message = f'Invalid answer for array of length {len(input)}'

            #actual answer calculated as second.
            #no copy is made because input is not used anymore
            test.assert_equals(user_solution(input), expected, message)
```
-->