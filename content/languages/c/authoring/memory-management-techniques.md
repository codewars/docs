---
kind: tutorial
languages: [c]
sidebar: "language:c"
---

# Memory Management in C kata

- SRP
- strdup and asprintf are nonstandard
- structures vs output params
- avoid string constants, use named symbols

## Arrays and strings


### Naive approach: `malloc` in the solution and `free` in tests

In a vast majority of cases when a kata requires the solution to allocate memory, authors choose the naive approach of allocating the memory in the solution, and releasing it with `free` in the test suite after performing all necessary assertions:

Solution:

```c
//get all prime numbers less than upto
int* get_primes(int upto, int* size) {

    //the solution allocates required memory
    int* result = malloc(sizeof(int) * ...);

    //... fill result with primes
    //...

    *size = ...; //assign amount of primes
    return result;
}
```

Test suite:

```c
Test(fixed_tests, should_return_2_and_3_for_4) {
    
    int expected[] {2, 3}, expected_size = 2;
    int actual_size;
    
    //call user solution and expect it to allocate the returned array
    int* actual = get_primes(4, &actual_size);

    //...assert on actual_size
    //...assert on contents of actual

    //after performing all necessary assertions,
    //free the array allocated by the user solution
    free(actual);
}
```

This approach mimics the behavior of higher level languages, where functions are able to allocate and return arrays without problems. It seems a natural way for many authors, but, sometimes surplrisingly for them, it's often a bad one. It's often bad from the design point of view, but, even worse, in production setups it can be straight invalid and can lead to crashes.


### Memory managed by tests

One set of possible techniques assumes that the caller (i.e. the test suite) is the owner of allocated memory and tests should be responsible for allocating and releasing it. Memory is always allocated by the test suite, and the test suite can decide whether it wants to use memory allocated automatically (i.e. on the stack), dynamically (for example with `malloc`), or in some other available way. The test suite is also responsible for releasing it, if necessary. Such allocated buffer is passed to the user's solution to work on, and it's filled with the requested data.

The biggest problem with this philosophy is that the test suite does not always know how much memory the solution would need to fit all the requested results in. But there are a few possible ways to resolve this issue.


#### When the size is known upfront

Sometimes it's perfectly known how large the result will be before the solution is called. For example, if the test suite asks to generate `n` Fibonacci numbers, it means that the resulting array needs to have the size of at least `n`. Sometimes the exact size is not known exactly, but it's possible to accurately estimate it's upper bound: for example, a function which removes punctuation from a string needs to work on a buffer at least as large as an input string, but the result can turn out to be a bit smaller. In such cases, the test suite can allocate the buffer which would be big enough to keep the result, and pass it to the solution function:


```c
Test(fixed_tests, small_inputs) {

    //requested amount of nubers
    const int to_generate = 4;

    //array allocated on stack,
    //the required size is perfectly known
    int result_array[to_generate];

    //pass the array to the function, and expect
    //it to be filled with the result
    calculate_numbers(to_generate, result_array);

    //...perform assertions, verify correctness of returned numbers...

    //no need to deallocate the array
}

Test(random_tests, large_inputs) {

    const int MAX_TEST = 10000000;

    //dynamically allocate an array large enough to fit all possible answers.
    //allocate it once, and reuse it through the tests.
    int* array = malloc(sizeof(int) * MAX_TEST);

    //ten random tests
    for(int i=0; i<10; ++i) {

        //randomize the input
        int n = rand() % MAX_TEST + 1;

        //use preallocated array
        calculate_numbers(n, array);

        //...perform assertions, verify correctness of returned numbers...
    }

    //release the memory after all tests
    free(array);
}
```



#### two functions: get size, allocate in tests, run solution
#### one function: accept buffer+size, return retsult or error and required size


### Memory managed by the solution

#### two functions: solution with allocation, deallocation. Bookkeeping information managed by user or passed as additional `void*`


## Two-dimensional arrays

- TOC + N+1 allocations
- Flat
- TOC + Flat
- TOC: size vs sentinel terminator


