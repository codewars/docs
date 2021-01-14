---
kind: tutorial
languages: [c]
sidebar: "language:c"
---

# Memory Management in C kata

Unlike many modern, high-level languages, C does not manage memory automatically. Manual memory management is a very vast and complex topic, with many possible ways of achieving the goal depending on a specific case, caveats, and pitfalls.


## General information

### Specification

Whenever a kata passes in a pointer to the user's solution or requires it to return or manipulate a pointer or data referenced by a pointer, it should **explicitly** and **clearly** provide all information necessary to carry out the operation correctly. See the paragraph on [related guidelines][guidelines](/languages/c/authoring/#working-with-pointers-and-memory-management) in ["C: creating and translating a kata"](/languages/c/authoring/) tutorial.
When the structure, layout, or allocation scheme of pointed data is not described, users cannot know how to implement requirements without causing either a crash or a memory leak.


### Interface

It often happens that the solution function has to accept and return more values than just these related to the kata task itself. There can be more parameters required for tracking the memory, sizes of allocated buffers, statuses, etc. Depending on exact requirements, these parameters can be passed in and returned as separate function arguments, or can be packed together into some kind of structure. Examples in this article assume the former, but authors are free to decide otherwise.


### Arrays and strings

Since C-strings and arrays of other types are similar from the perspective of memory management, this article uses examples of integer arrays. However, most of the techniques presented here apply equally to handling memory holding integers, floats, and characters, zero-terminated or not.


## Memory Management Patterns

Whenever a kata needs to return a string or an array, C authors tend to use the naive technique of allocating the memory in the solution function, and freeing it in the test suite. This approach mimics the behavior known from other languages where returning an array or object from inside of the user's solution is perfectly valid, but it's not always the best, or even correct, way of working with unmanaged memory. The memory can be managed either by the test suite, by the user, or both. Authors can choose the way how their kata should deal with memory and ownership strategy their kata should use. However, they should be aware of the advantages and disadvantages of each such strategy, and when and which applies the best. 


### Statically allocated constant data

The best way to avoid problems with memory allocation is to avoid unnecessary memory allocation. This advice might sound tricky, but there are simply many kata which require dynamic memory allocation or operation on data pointed by pointers, while it's not necessary and could be avoided. One commonly occuring example of such situation is when a kata requires returning a pointer to a string which could be replaced by a constant, which is used in particular when translating kata from other languages. Returning a string in high-level languages is not a problem, but in C it always raises questions of who should allocate it and how it should be allocated. Consider replacing the string with some simpler data type (eventually aliased with a `typedef`), and/or provide some symbolic constants for available values. For example, if the requirement for the JavaScript version is: _"Return the string 'BLACK' if a black pawn will be captured first, 'WHITE' if a white one, and 'NONE' if all pawns are safe."_, C version should preferably provide and use the named constants `BLACK`, `WHITE` and `NONE`. 

<details>

Preloaded:

```c
//Provide a typedef for constants.
//If you really want to use strings for some reason, you can use
//constants of type const char*, but it's recommended to take
//this step even further and use an enum.
typedef const char * const Player;

//define constants
Player BLACK = "BLACK";
Player WHITE = "WHITE";
Player NONE  = "NONE";
```

Solution:

```c

//Since Codewars does not allow header files for kata, declarations need to be repeated
typedef const char * const Player;
extern Player BLACK;
extern Player WHITE;
extern Player NONE; 


Player who_won(const char* board) //typedef used for return type 
{
    if(...) {
      return BLACK;    //return constant instead of an allocated string
    } else if (...) {
      return WHITE;
    } else {
      return NONE;
    }
}
```


Tests:

```c
//Since Codewars does not allow header files for kata, declarations need to be repeated
typedef const char * const Player;
extern Player BLACK;
extern Player WHITE;
extern Player NONE; 

Player who_won(const char* board);

Test(fixed_tests, no_one_won) {
 
  Player winner = who_won("B");

  //constants can be asserted on with cr_assert_eq
  cr_assert_eq(winner, NONE, "Expected: [%s], but was: [%s]", NONE, winner);
}
```

It is recommended to replace constant strings with some even simpler type, preferrably an `enum`, but if authors really want to stick to strings for some reason, they can use them.

</details>


### Memory managed by tests

One set of possible techniques assumes that the caller (i.e. the test suite) is the owner of allocated memory and tests should be responsible for allocating and releasing it. Memory is always allocated by the test suite, and the test suite can decide whether it wants to use memory allocated automatically (i.e. on the stack), dynamically (for example with `malloc`), or in some other available way. The test suite is also responsible for releasing it, if necessary. Such allocated buffer is passed to the user's solution to work on, and it's filled with the requested data.

The biggest problem with this philosophy is that the test suite does not always know how much memory the solution would need to fit all the requested results in. But there are a few possible ways to resolve this issue.


#### When the size is known upfront: use preallocated buffer

Sometimes it's perfectly known how large the result will be before the solution is called. For example, if the test suite asks to generate `n` Fibonacci numbers, it means that the resulting array needs to have the size of at least `n`. Sometimes the exact size is not known exactly, but it's possible to accurately estimate its upper bound. For example, a function that removes punctuation from a string needs to work on a buffer at least as large as an input string, but the result can turn out to be a bit smaller. In such cases, the test suite can allocate the buffer which would be big enough to keep the result, and pass it to the solution function:

<details>

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

</details>

#### When the size is not known, but is easy to calculate: ask and allocate

Another possible approach is to ask the user to implement _two_ functions: one which would return the size needed to fit the result, and another one to perform the actual operation. For example:

<details>

Kata task:

> Given a positive integer `n`, return all terms in the top `n` rows of Pascal's triangle flattened into a single array.

Solution:

```c
//Function which counts amount of terms to be returned
int count_elements_of_pascal_triangle(int rows) {
    return rows * (rows + 1) / 2;
}

//Function performing actual calculations
void get_elements_of_pascal_triangle(int rows, int elements[]) {
    //...calculate elements of Pascal's triangle and store them in elements array
}
```

Tests:

```c
Test(fixed_tests, should_work_for_3) {

    int rows = 3;
    
    //array allocated on stack,
    //top three rows have 6 terms
    int terms[6]; 

    //pass the array to the function, and expect
    //it to be filled with the result
    get_elements_of_pascal_triangle(3, terms);

    //...perform assertions, verify correctness of returned numbers...

    //no need to deallocate the array
}

Test(random_tests, large_inputs) {

    const int MAX_TEST = 1000;

    //ten random tests
    for(int i=0; i<10; ++i) {

        //randomize the input
        int rows = rand() % MAX_TEST + 1;

        //query the solution for required size of the answer
        int terms_count = count_elements_of_pascal_triangle(rows);

        //You can perform assertions on the returned size here, or
        //you can create a separate suite just to test the
        //count_elements_of_pascal_triangle function

        //dynamically allocate an array large enough to fit the answer
        int* array = malloc(sizeof(int) * terms_count);

        //use the allocated array when calling the user's solution
        get_elements_of_pascal_triangle(rows, array);

        //...perform assertions, verify correctness of returned numbers...

        //release the memory after the test
        free(array);
    }
}
```

</details>

This approach is used when the size of the answer cannot be easily inferred by the test suite, but can be efficiently calculated by the user, potentially without the overhead of calculating the actual solution.


#### When the size is not known, and difficult to calculate: assume (or guess) the initial size and reallocate if too small

This approach is a combination of the two above. It has a somewhat complex interface, but allows for a performance compromise when the size of the result is not known upfront, and cannot be efficiently estimated without performing actual calculations. The general scheme is that the test suite passes in some pre-allocated buffer, and when the solution determines that the buffer is too small, it reports an error. The tests can then employ various strategies to grow the buffer and retry the solution. When the call to the solution succeeds, it fills the buffer with the result and reports its size.

:::info
This paragraph is probably too complex and not suitable for Codewars kata. It will be probably removed.
:::

<details>


Kata task:

> Given an integer `n > 1`, calculate Fibonacci numbers up to `n`.

Solution:

```c

typedef enum EStatus {OK = 0, BUFFER_TOO_SMALL} Status;

Status calculate_fibonaccis(int upto, int* array, int array_size, int* calculated_count) {

    *calculated_count = 0;
  
    if(array_size < 3) return BUFFER_TOO_SMALL;
    array[0] = 0;
    array[1] = 1;

    *calculated_count = 2;
    for(int i=2; ; ++i, ++*calculated_count) {
      
        int fib = array[i-1] + array[i-2];
        if(fib > upto)
            break;

        if(*calculated_count < array_size)
            array[*calculated_count] = fib;
        else
            return BUFFER_TOO_SMALL;
    }

    return OK;
}
```

Tests:

```c
typedef enum EStatus {OK=0, BUFFER_TOO_SMALL} Status;

Status calculate_fibonaccis(int upto, int* array, int array_size, int* calculated_count);

Test(fixed_tests, should_work_for_7) {

    int upto = 7;
    
    //array allocated on stack, large enough to hold many numbers
    int terms[20]; 
    int size = 20;
    int calculated_count;

    //pass the array to the function, and expect it to be filled with the result
    Status status = calculate_fibonaccis(upto, terms, size, &calculated_count);

    //assert that status = OK
    //assert that calculated_count = 6
    //assert that elements are 0,1,1,2,3,5

    //no need to deallocate the array
}

Test(random_tests, large_inputs) {

    const int MAX_TEST = 1000;

    //initially allocated array, will grow if necessary
    int array_size = 20;
    int* array = malloc(sizeof(int) * array_size);

    //ten random tests
    for(int i=0; i<10; ++i) {

        //randomize the input
        int upto = rand() % MAX_TEST + 5;
        

        int calculated_count;
        
        //call the user's solution and pass the initially allocated array
        Status status = calculate_fibonaccis(upto, array, array_size, &calculated_count);
        
        //when the solution concludes that the buffer is too small,
        //resize it and call the solution once again
        int retries = 0;
        while(status == BUFFER_TOO_SMALL) {
            array_size *= 2;
            array = realloc(array, sizeof(int) * array_size);
            status = calculate_fibonaccis(upto, array, array_size, &calculated_count);

            if(retries++ > MAX_RETRIES) {
                //... protect agains ill-behaving solutions which are not able to get the correct status
            }
        }
        
        //You can perform assertions on the status and returned size here, or
        //you can create a separate suite(s) just to test them separately

        //...perform assertions, verify correctness of returned numbers...
    }

    //release the memory after the test
    free(array);
}
```

</details>


### Naive approach: `malloc` in the solution and `free` in tests

In a vast majority of cases when a kata requires the solution to allocate memory, authors choose the naive approach of allocating the memory in the solution, and releasing it with `free` in the test suite after performing all necessary assertions:

<details>

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

</details>

This approach mimics the behavior of higher-level languages, where functions can allocate and return arrays without problems. It seems a natural way for many authors, but, sometimes surprisingly for them, it's often a bad one. It's often bad from a design point of view, but, even worse, in production setups, it can be straight invalid and can lead to crashes.

<!--
- SRP
- strdup and asprintf are nonstandard
-->


### Memory managed by the solution

The opposite of managing memory in the test suite is the approach of delegating the responsibility to the solver. This way, tests do not need to worry about problematic aspects of memory management, kata authors give freedom of implementation to users, and can reduce the boilerplate required to implement memory management.


#### Symmetric functions for allocation and deallocation

This idea boils down to asking users to provide their equivalents of allocation and de-allocation functions. The solution function is responsible not only for solving the task but also for allocation of memory and storing of book-keeping information. The clean-up function is responsible for releasing resources.

There are many possible ways of implementing the allocation scheme and corresponding clean-up function, and its usage usually ends up being similar to the [naive approach](#naive-approach-malloc-in-the-solution-and-free-in-tests) described in the beginning. An example implementation could be similar to:

<details>

Kata task:

> Given the initial generation of a Game of Life population, return the state and size of the game world after `n` generations.

Solution:

```c
//solution function, which allocates all required memory and solves the task
char** game_of_life(int generations, char** initial_generation, int* world_h, int* world_w) {

    char** world = ...; //allocating memory for the world map
    
    for(int i=0 i < generations; ++i) {
        //... actual game, which potentially requires additional (re)allocations
    }

    //return the final state of the game world to the caller
    return world;
}

//clean-up function
void destroy_world(char** world) {
    //... deallocate all memory appropriately in a way
    //which matches how the game_of_life allocated it.
}
```

Tests:

```c
int world_w = 3, world_h = 3;
char** initial_generation = ...; //set up a GoL glider
int generations = 25;

//invoke solution function, which allocates memory
char** actual = game_of_life(generations, initial_generation, &world_h, &world_w);

//... perform assertions on the world map and verify the state of its cells

//call the clean-up function, which deallocates all memory
destroy_world(actual);
```

</details>

As this approach very useful for more complex memory structures, a couple of examples can be found in the section on [Two-dimensional arrays](#two-dimensional-arrays).


## Two-dimensional arrays

Some kata require the user solution to return a two-dimensional array, for example, a 2D matrix, or an array of C-strings. Such scenarios are a bit more complex, because not only does the higher-order array have to be properly managed, but all its individual entries as well. The exact approach selected for the allocation of such structures depends on the scenario because different techniques are suitable for square or rectangular arrays, jagged arrays, arrays of null-terminated strings, etc.


Memory for 2D arrays can be managed by the test suite or the user solution. As long as the size of the 2D array is known before calling a solution and does not change through the course of calculations, the test suite can choose to perform all necessary allocations and pass the memory to the solution function ready to use. This is a very good approach when working with chessboards, sudokus, matrices and mazes of predetermined sizes, etc. However, in the case that the size of the answer cannot be easily determined beforehand, the technique with a clean-up function provided by the user turns out to be helpful. A user-provided clean-up function is used in the examples below, but authors can choose to manage the memory in the test suite if it fits the task of their kata.


### Naive approach: N+1 allocations

This is the most common yet worst possible approach of using dynamically allocated memory. It tends to be slow, causes excessive memory fragmentation and is usually inferior to available alternatives.

<details>

```c
char** game_of_life(int generations, char** initial_generation, int* world_h, int* world_w) {

     //allocating memory for the world map, row by row
    char** world = malloc(sizeof(char*) * world_h);
    for(int i=0; i < world_h; ++i)
        world[i] = malloc(world_w);
    
    for(int i=0 i < generations; ++i) {
        //... actual game, which potentially requires additional (re)allocations...
    }

    //return the final state of the game world to the caller
    return world;
}

void destroy_world(char** world, int world_h) {
    
    //... deallocate all memory also row by row
    for(int i=0; i < world_h; ++i)
        free(world[i]);
    free(world);
}
```

</details>

### Flat array

Very often overlooked, but a very good approach to represent 2D arrays is to store them in a regular, linear array of `T[ ]`. It can be effectively used when bounds between inner arrays can be efficiently determined, for example, each row of a matrix has a well-known length, rows of a Pascal's triangle have precisely defined, although different, lengths, and string entries are clearly terminated.

This way, the complexity of memory management is greatly reduced since all necessary memory can be allocated and freed with a single call to `malloc` (or equivalent) and `free`.

Drawbacks of this approach include:

- The solution does not resemble its logical structure, e.g. elements of a matrix cannot be accessed with, for example, `matrix[row][col]`, but with `matrix[row * size + col]`
- It is best suited for perfectly rectangular arrays, i.e. arrays whose sub-arrays all have equal length

<details>

```c
char* game_of_life(int generations, char* initial_generation, int* world_h, int* world_w) {

     //allocating a linear buffer of memory for the world map
    char* world = malloc(world_h * world_w);
    
    for(int i=0 i < generations; ++i) {
        //... actual game, which potentially requires additional (re)allocations...
        
        //...
        world[i * world_w + j] = 'x'; //set a cell as alive
    }

    //return the final state of the game world to the caller
    return world;
}

void destroy_world(char* world) {
    //... deallocate all memory at once
    free(world);
}
```

</details>

### Flat buffer with an array of rows

This method minimizes the number of allocations down to two, and allows for accessing the elements as if they were stored in a two-dimensional array. It uses two dynamically allocated buffers: One large buffer to store entries of the array in a flat array, and one smaller buffer which serves as an array of pointers to individual rows:

<details>

```c
char* game_of_life(int generations, char* initial_generation, int* world_h, int* world_w) {

     //allocating a large  linear buffer of memory for the world map
    char** world_data = malloc(world_h * world_w);
    //allocating smaller array to hold pointers to rows
    char* world_rows = malloc(world_h);
    for(int i=0; i < world_h; ++i)
        //put rows into the array
        world_rows[i] = world_data + i * world_w;

    for(int i=0 i < generations; ++i) {
        //... actual game, which potentially requires additional (re)allocations...
        
        //...
        world_rows[i][j] = 'x'; //set a cell as alive
    }

    //return the final state of the game world to the caller
    return world_rows;
}

void destroy_world(char** world_rows) {

    //... deallocate large buffer, which starts at the
    //first row of the 2D array
    free(world[0]);

    //deallocate the smaller buffer
    free(world_rows);
}
```

</details>

This method is somewhat problematic when the width of the internal arrays is subject to change through calculations. While both buffers can be easily reallocated to grow or shrink (for example to add new rows), changing the width of the array requires the data in rows to be manually "shifted apart", and entries in the affected rows need to be updated.

This approach also requires additional book-keeping when used for jagged arrays, unless entries of adjacent rows are clearly separated, e.g. as it happens for an array of C-strings.
