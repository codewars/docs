---
kind: tutorial
languages: [c]
sidebar: "language:c"
---

# Memory Management in C kata

- SRP
- strdup and asprintf are nonstandard
- structures vs output params

## Arrays and strings


### Naive approach: `malloc` in the solution and `free` in tests

In a vast majority of cases when a kata requires the solution to allocate memory, authors choose the naive approach of allocating the memory in the solution, and releasing it with `free` in the test suite after performing all necessary assertions:

Solution:
```c
//get all prime numbers less than upto
int* get_primes(int upto, int* size) {

    int* result = malloc(sizeof(int) * ...);
    //... fill result with primes
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




- pass in a preallocated buffer (use size hints if possible)
- two functions: get size, allocate in tests, run solution
- two functions: solution with allocation, deallocation. Bookkeeping information managed by user or passed as additional `void*`
- one function: accept buffer+size, return retsult or error and required size
- avoid string constants, use named symbols
- reporting size:output param, structure, sentinel teminators


## Two-dimensional arrays

- N+1 allocations
- Flat
- TOC + Flat
