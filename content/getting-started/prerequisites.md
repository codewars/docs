---
title: Before you start
---

There are no strict requirements, or things which you really, really, need to know, before you start solving your first problems on Codewars. However, being familiar with some basic topics related to coding can help with a smooth start.

Most (almost all) Codewars kata require you to write a solution in a form of a function (or equivalent), which accepts argument(s) with input of the problem, and returns a value which constitutes your answer to the problem. Then, Codewars calls your function multiple times with different inputs, grabs the answer returned by it, and verifies the answer for correctness. You can learn everything what's needed by solving Codewars tasks, but being familiar with following basic topics could help and prevent being thrown off by some initial difficulties:
 - **What is a function, and how to create one?** To be called and tested, your solution function has to conform with its so-called signature to expectations of tests: it has a predetermined name you need to keep, amount (and, in some languages, types) of arguments needs to match, etc. This could sound daunting, but don't worry: many Codewars kata already provide a template with some initial form of the solution function, which is just left for you to fill in.
 - **How functions accept inputs?** On Codewars, solution functions receive inputs by their parameters. Especially, users are not required to read anything from console or anywhere else.
 - **How functions return results they came up with?** When your function is run, it's expected by Codewars to return an answer to its caller, so it could be checked and tested. In particular, printing the answer to a console, or anywhere else, will not work as expected.
- **How are functions invoked?** - Codewars will call your function, possibly multiple times. Every time, it will pass in different input arguments, and will inspect an answer returned by it. This means that you do not need to call your function yourself, and you do not need any kind of entry point (like some `main` function, or equivalent) just to make your solution runnable. Codewars already knows how to run your solution. You also need to make sure that your solution can be run more than once, and every time returns a correct answer.

Knowing how to handle above points is not strictly required, but can greatly help and make your initial experience with Codewars pleasant and enjoyable. If you are stuck and still do not even know how to begin, you can ask for help on `#beginners` channel of Codewars Discord.
