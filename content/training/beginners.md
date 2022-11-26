---
title: Before you start
---

There are no strict requirements, or things which you really, really, need to know, before you start solving your first problems on Codewars. However, being familiar with some basic topics can help with a smooth start.

## Architecture of a Codewars kata

From a solving person's perspective, every kata is built of two main parts: tests, and a solution.

Tests are created by a kata author. Their goal is to verify correctness of a user solution and to be able to do so, tests have to be able to interact with it: if a solution is a function, tests have to know how to call it. If solution is a class, tests have to know how to instantiate it. If solution is a variable, tests have to know how to reference it. That's why tests always predetermine what a solution is, and how it should be interacted with. A solution has to be what tests expect it to be, including its general form (a function, a method, a class, a variable, etc.), name, types, amount of parameters, etc.

Solution is written by a user who attempts a kata. To work correctly, it has to conform to expectations of tests: it has to be a function if tests expect it to be one, or a class, or a variable. Statement of a kata task should clearly explain what is required. To make things easier for users, initial solution setup usually (but not always) contains a stub which presents an expected form of a solution which conforms to requirements imposed by tests. It is ready to be called, usually should not be changed by users, and just needs to be filled in. Additional hints about how a user solution should look like and how it is invoked can be found in example tests.

One of implications of the setup used by Codewars is the fact that users who attempt kata do not have to write any driver code and can focus strictly on a required solution. They do not need to create entry points (like some kind of a `main` function or equivalent), they do not need to read any inputs from outside, and they do not need to print their answers anywhere. Knowing an exact form and a name of a solution, tests are able to use it directly: invoke a function, pass in arguments, and fetch its return value, or instantiate a class and call its methods, or read values of variables.

## Solution as a function

Most (almost all) Codewars kata require you to write a solution in a form of a function (or equivalent), which accepts argument(s) with input of the problem, and returns a value which constitutes your answer to the problem. Then, Codewars calls your function multiple times with different inputs, grabs the answer returned by it, and verifies the answer for correctness. You can learn everything what's needed by solving Codewars tasks, but being familiar with following basic topics could help and prevent being thrown off by some initial difficulties:
 - **What is a function, and how to create one?** - to be called and tested, your solution function has to conform with its so-called signature to expectations of tests: it has a predetermined name you need to keep, amount (and, in some languages, types) of arguments needs to match, etc. Usually, solution setup already provides a template with some initial form of the solution function, which is just left for you to fill in.
 - **How functions accept inputs?** - on Codewars, solution functions receive inputs by their parameters. Especially, users are not required to read anything from console or anywhere else.
 - **How functions return results they came up with?** When your function is run, it's expected by tests to return an answer to its caller, so it could be checked and tested. In particular, printing the answer to a console, or anywhere else, will not work as expected.
- **How are functions invoked?** - tests will call your function, possibly multiple times. Every time, they will pass in different input arguments, and will inspect an answer returned by it. There is no need for users to call their function themselves, and there's no need for any kind of entry point (like some `main` function, or equivalent) just to make a solution runnable. Tests already know how to run solutions. Users also need to make sure that their solution can be run more than once, and every time returns a correct answer.

## Solution as a class

Another popular kind of a solution is a class, or some function associated with a class (like a class method, or a prototype extension, etc.) In the majority of cases, it's enough to fill in a solution template in a correct place to create a working solution. But sometimes, some additional knowledge might come in handy:
 - **How are classes constructed and how to create a new one?** - as much as it's helpful to know this in general, this part is usually handled by kata in a solution setup provided to users. In the majority of cases a stub of a required class is already provided and there should be no need to create one from scratch.
 - **What are class members and how to add them to a class?** - in some languages this part is easier, and in some it's more difficult. For example, in C# and Java kata this tends to be easier because most methods are expected to be `static` and they do not differ a lot from free functions being just "wrapped" in a class. But for example in Python kata, it's usually necessary to know what is `self` and what role it takes when creating new class members. In JavaScript kata, so-called prototype extensions usually are used to add new members to existing classes.
 - **How are classes used?** - to verify a solution which is a class, tests have to be able to interact with it: instantiate it if necessary, and call its member functions. It is useful to know what is a difference between a class member function and instance member function, how both of these can be invoked, and how and when a class should be instantiated to invoke them.

Knowing how to handle above points is not strictly required, but can greatly help and make your initial experience with Codewars pleasant and enjoyable. If you are stuck and still do not even know how to begin, you can ask for help on `#beginners` channel of Codewars Discord.
