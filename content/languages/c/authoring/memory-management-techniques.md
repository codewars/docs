---
kind: tutorial
languages: [c]
sidebar: "language:c"
---

# Memory Management in C kata

Unlike many modern, high-level languages, C does not manage memory automatically. Manual memory management is a very vast and complex topic, with many possible ways of achieving the goal depending on a specific case, caveats, and pitfalls.


## General information

### Specification

Whenever a kata passes in a pointer to the user's solution or requires it to return or manipulate a pointer or data referenced by a pointer, it should **explicitly** and **clearly** provide all information necessary to carry out the operation correctly. See the paragraph on [related guidelines](/languages/c/authoring/#working-with-pointers-and-memory-management) in ["C: creating and translating a kata"](/languages/c/authoring/) tutorial.
When the structure, layout, or allocation scheme of pointed data is not described, users cannot know how to implement requirements without causing either a crash or a memory leak.


### Interface

It often happens that the solution function has to accept and return more values than just these related to the kata task itself. There can be more parameters required for tracking the memory, sizes of allocated buffers, statuses, etc. Depending on exact requirements, these parameters can be passed in and returned as separate function arguments, or can be packed together into some kind of structure. Examples in this article assume the former, but authors are free to decide otherwise.


### Arrays and strings

Since C-strings and arrays of other types are similar from the perspective of memory management, most of the techniques presented here apply equally to handling memory holding integers, floats, and characters, zero-terminated or not.


## Memory Management Patterns

In C, unlike for example Python, Java, C# or Javascript, dynamically allocated memory is not managed by the runtime. It's considered to be an external resource, just like a file, a DB or network connection, or a hardware device. The program itself has to take care of it properly, allocating it when necessary, and freeing when no longer needed.

In kata, the memory can be managed either by the test suite, by the user, or both. Authors can choose the way how their kata should deal with memory and they can pick any ownership strategy. However, they should be aware of the advantages and disadvantages of each such strategy, and when and which applies the best. 


### Statically allocated constant data

The best way to prevent problems with memory allocation is to avoid unnecessary memory allocation. This advice might sound tricky, but there are simply many kata that require dynamic memory allocation or operation on data pointed by pointers, while it's simply not necessary and could be avoided. One commonly occurring example of such a situation is when a kata requires returning a pointer to a string which could be replaced by a constant. It seems to appear particularly often when translating kata from other languages. Returning a string in high-level languages is not a problem, but in C it always raises questions of who should allocate it and how it should be allocated. Consider replacing the string with some simpler data type (eventually aliased with a `typedef`), and/or provide some symbolic constants for available values. For example, if the requirement for the JavaScript version is: _"Return the string 'BLACK' if a black pawn will be captured first, 'WHITE' if a white one, and 'NONE' if all pawns are safe."_, the C version should preferably provide and use the named constants `BLACK`, `WHITE` and `NONE`.

<details>
    <summary>Example</summary>

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

  //...no clean-up necessary
}
```

It is recommended to replace string constants with a simpler type, preferably an `enum`, but if authors really want to stick to strings for some reason, they can use them.

</details>


### Memory managed by tests (i.e. caller)

One set of possible techniques assumes that the caller is the owner of allocated memory and tests should be responsible for allocating and releasing it. Memory is always allocated by the test suite, and the test suite can decide whether it wants to use memory allocated automatically (i.e. on the stack), dynamically (for example with `malloc`), or in some other available way. The test suite is also responsible for releasing it, if necessary. Such allocated buffer is passed to the user's solution to work on, and it's filled with the requested data.

Sometimes it's perfectly known how large the result will be before the solution is called, or it's possible to pre-allocate a buffer that will be large enough for every call. For example, if the test suite asks to generate `n` Fibonacci numbers, it means that the resulting array needs to have the size of at least `n`. Sometimes the exact size is not known exactly, but it's possible to accurately estimate its upper bound. For example, a function that removes punctuation from a string needs to work on a buffer at least as large as an input string, but the result can turn out to be a bit smaller. In such cases, the test suite can allocate the buffer which would be big enough to keep the result, and pass it to the solution function:

<details>
    <summary>Example</summary>
    
Solution:

```c
//function prototype can use size hints
void calculate_numbers(size_t n, int result [n]) {
    //...actual calculations
}
```

Tests:

```c
void calculate_numbers(size_t n, int result [n]);
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

This technique is often overlooked by kata authors, but it greatly simplifies the way how user solutions are built and how they communicate with the test suite. The user's solution does not have to worry about allocations or error handling, and can focus on its task. The test suite can use any allocation technique it wants, like automatic allocation on the stack, or dynamic allocation on a heap. Buffers can be allocated once and reused across many test calls.

The biggest problem with allocated memory is that its size has to be known or possible to estimate before calling the user's solution. It's very often the case, but sometimes such estimation is not possible or easy. There are ways to work around this problem and work with memory allocated by the caller even when its size is not known upfront, but they are out of the scope of this article. In such cases, kata can use a memory allocated by the user.


### Mixed approach: `malloc` in the solution and `free` in tests

In a vast majority of cases when a kata requires the solution to allocate memory, authors choose the naive approach of allocating the memory in the solution, and releasing it with `free` in the test suite after performing all necessary assertions. This mimics the behavior known from high-level languages where returning an array or object from inside of the user's solution is perfectly valid, but it's not always the best, or even correct, way of working with unmanaged memory in C.

This approach is useful when the size of the result is not known before the call. The solution is responsible for finding the correct size and returning it along with the pointer to the buffer itself, and the test suite is responsible for freeing it after every call.

<details>
    <summary>Example</summary>

Kata task:

> Given a natural number `n`, return all prime numbers up to and including `n`.

Solution:

```c
//get all prime numbers less than upto
//use an output parameter to return the size of the result
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

This approach works in a way similar to functions like `strdup` or `asprintf`, which allocate required memory and pass its ownership to the caller. It's a good fit for Codewars kata because it's simple, effective, and works well in Codewars' code runner.

A potential issue with the mixed approach is not related to Codewars, but to "real world" C programming and design. It might not work well for complex memory structures, or when a callee has to do advanced book-keeping and tracking of allocated memory. It also does not work well when passing data between modules (for example, between libraries, or from a library to the main program).


### Memory managed by the solution

The opposite of managing memory in the test suite is the approach of delegating the responsibility to the solver. This way, tests do not need to worry about problematic aspects of memory management, kata authors give freedom of implementation to users, and can reduce the boilerplate required to implement memory management.

This idea boils down to asking users to provide their equivalents of allocation and de-allocation functions. The solution function is responsible not only for solving the task but also for allocation of memory and storing of book-keeping information. The clean-up function is responsible for releasing resources.

There are many possible ways of implementing the allocation scheme and corresponding clean-up function, but an example implementation could be:

<details>
    <summary>Example</summary>

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

//invoke solution function, which also allocates memory
char** actual = game_of_life(generations, initial_generation, &world_h, &world_w);

//... perform assertions on the world map and verify the state of its cells

//call the clean-up function, which deallocates all memory
destroy_world(actual);

//...at this point memory is deallocated, no need to call free
```

</details>

Memory management by a callee is not a common requirement for Codewars kata. It can be useful when the memory is structured in a complex way, or when it has to be tracked in some particular way. It mimics the behavior of C libraries, which often provide symmetrical de/allocation functions, and/or use opaque pointers as elements of their interface.


## Two-dimensional arrays

Some kata require the user solution to return a two-dimensional array, for example, a 2D matrix, or an array of C-strings. Such scenarios are a bit more complex, because not only does the higher-order array have to be properly managed, but all its individual entries as well. The exact approach selected for the allocation of such structures depends on the scenario because different techniques are suitable for square or rectangular arrays, jagged arrays, arrays of null-terminated strings, etc.


Just as any form of memory, 2D arrays can be managed by the test suite, user solution, or both. As long as the size of the 2D array is known before calling a solution and does not change through the course of calculations, the test suite can choose to perform all necessary allocations and pass the memory to the solution function ready to use. This is a very good approach when working with chessboards, sudokus, matrices and mazes of predetermined sizes, etc. However, in the case that the size of the answer cannot be easily determined beforehand, the mixed approach or memory management by the callee with a clean-up function provided by the user can be better.

:::note Note on examples
For simplicity, this section uses the terms "2D array", "array of arrays", and "matrix" interchangeably and assumes row-major order, i.e. data can be accessed with `array[row][col]`.
:::

### Naive approach: N+1 allocations

This is the most common approach of using dynamically allocated multidimensional arrays. An array of pointers to rows is allocated first, and each row is allocated individually afterwards.

<details>
    <summary>Example</summary>

Allocation:

```c
//allocate array of rows first
char** world = malloc(sizeof(char*) * world_h);
for(int i=0; i < world_h; ++i) {

    //allocate every row individually
    world[i] = malloc(world_w);
}
```    

Deallocation:

```c
//... deallocate all memory also row by row
for(int i=0; i < world_h; ++i)
    free(world[i]);

free(world);
}
```

</details>

The advantage of individually allocated rows is that it works well for jagged arrays.

This approach, despite appearing to be simple, is affected by issues mostly related to performance. It tends to be slow since each dynamic allocation requires a memory lookup. It can also cause excessive memory fragmentation.

Additionally, it is sometimes unnecessarily used to return an array of data (usually strings) that could be turned into constants.


### Array of `const` data

This approach is related to [returning a statically allocated const data](#statically-allocated-constant-data) but extended to arrays. Some kata require the user to return an array of strings, which could be turned into constants. In such a case, the array itself can be allocated dynamically, but its entries do not have to be.

<details>
    <summary>Example</summary>

Kata task:

> Return an array of strings `"LEFT"`, `"RIGHT"`, `"UP"`, `"DOWN"` which describe the path through the maze.


Preloaded:

```c
//Provide a typedef for constants.
//If you really want to use strings for some reason, you can use
//constants of type const char*, but it's recommended to take
//this step even further and use an enum.
typedef const char * Direction;

//define constants
Direction Left  = "LEFT";
Direction Right = "RIGHT";
Direction Up    = "UP";
Direction Down  = "DOWN";
```

Solution:

```c
#include <stdlib.h>

//Since Codewars does not allow header files for kata, declarations need to be repeated
typedef const char * Direction;
extern Direction Left;
extern Direction Right;
extern Direction Up;
extern Direction Down;


Direction* find_exit(size_t h, size_t w, char board[h][w], size_t* length) //typedef used for return type 
{
    Direction* path = malloc(sizeof(Direction) * ...);
    int found = 0;
    *length = 0;
    while(!found) {
        //put a named constant in the result array
        path[(*length)++] = Left;

        //...search for exit...
    }
    return path;
}
```

Tests:

```c
#include <criterion/criterion.h>

//Since Codewars does not allow header files for kata, declarations need to be repeated
typedef const char * Direction;
extern Direction Left;
extern Direction Right;
extern Direction Up;
extern Direction Down;

Direction* find_exit(size_t h, size_t w, char board[h][w], size_t* length);

//helper function
void setup_board(size_t w, size_t h, char board[h][w]) {
  //...
}

Test(fixed_tests, short_path) {
 
  char board[2][2];
  setup_board(2, 2, board);
  Direction expected[] = (Direction[]) { Left, Left };
  
  //call user's solution and get a result array and its size
  size_t path_length;  
  Direction* path = find_exit(2, 2, board, &path_length);

  //verify the size
  cr_assert_eq(path_length, 2);
  for(size_t i=0; i < path_length; ++i) {
    //constants can be asserted on with cr_assert_eq
    cr_assert_eq(path[i], expected[i]);
  }

  //...clean up only array of entries, and not entries themselves
  free(path);
}
```

</details>

Since array entries are statically allocated constants, they do not have to be explicitly allocated or freed.


### Flat array

Very often overlooked, but a very good approach to represent 2D arrays is to store them in a regular, linear array of `T[ ]`, potentially supported by some type casts between a linear buffer and two-dimensional matrix. 

<details>
    <summary>Example</summary>

```c
//declaration of solution accepting a two-dimentional array
void play_game_of_life(size_t world_h, size_t world_w, char world_2d[world_h][world_w]);

size_t world_h = ...;
size_t world_w = ...;

//allocating a linear buffer of memory for the world map
char* world_linear = malloc(world_h * world_w);

//cast a linear buffer to a 2D array
char (*world_2d)[world_h] = (char (*)[world_h])world_linear;

for(size_t row = 0; row < world_h; ++row) {
    for(size_t col = 0; col < world_w; ++col) {
    
        //...set up the world...

        //access a cell in linear buffer, or
        world_linear[row * world_w + col] = 'x'; //set a cell as alive

        //access a cell in 2d array
        world_2d[row][col] = ' '; //set a cell as dead
    }
}

//pass the 2d array to user solution
play_game_of_life(world_h, world_w, world_2d);

//deallocate all memory at once
free(world_linear);
```

</details>

This way, the complexity of memory management is greatly reduced since all necessary memory can be allocated and freed with a single call to `malloc` (or equivalent) and `free`.

The drawback of the version with casts between linear and 2D arrays is that it is best suited for perfectly rectangular arrays, i.e. arrays whose sub-arrays all have equal length. However, the version without casts can be effectively used when bounds between inner arrays can be efficiently determined, for example, each row of a matrix has a well-known length, rows of a Pascal's triangle have precisely defined, although different, lengths, and string entries are clearly terminated.

This method also does not fit perfectly the scenario when such an array should be *returned* from a function. The function still has to specify its return type as `T*`, and the caller has to either work with the linear form of the array or perform the cast on its own.
