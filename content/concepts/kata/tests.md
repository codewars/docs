---
kind: concept
sidebar: explanation-kata
---

# Tests

Eack kata has two sets of tests associated with it, used for two different purposes.

## Sample tests and TDD

Sample tests provide some preliminary test cases to guide users working on their solution. Sample tests are optional and author may choose to not provide them, although it's considered a good authoring practice to include at least a few of them.

When sample tests are present, it's worh to taka a good look at them. Reading them you can find out what is the required interface of your solution, and how it will be called (for example what name should your function have and how parameters are passed to it). It's possible that they will contain some hints on possible inputs, edge cases, etc.

As a user is working on their solution, they are encouraged to modify sample tests and add their own test cases, using [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) approach. This way they go through the problem step by step, improving the solution gradually. Sample tests can be run against the solution to verify if implementation conforms to requirements. If test turns red, there's still something to fix. If test output is all green, user can think of adding some more test cases, one by one, to sample tests. User can continue adding test cases until all requirements of the kata are covered, they cannot think of any more of cases, or they are confident their solution is ready.

After each test run, current state of user's tests and solution is stored locally in their browser, and it's loaded every time kata trainer is loaded. If needed, they can be reset to their initial form provided by kata author.

Sample tests may be attempted as many times as needed without any negative impact. When all sample tests pass and solution is ready, user may choose to attempt it against full test suite.

## Full tests

Kata is not considered solved until user's solution passes attempt against full test suite. Full tests are meant to be thorough and exhaustive, and it's possible they contain some test cases the solution did not account for: be it some edge conditions, large inputs, invalid inputs, or performance tests. They also cannot be viewed by a user if kata was not completed by them in attempted language.

If sample test pass but full attempt does not, it means that solution is still not complete and has to be improved. Test output panel should give some hints on what went wrong, and when it happens, user should reproduce failing condition, add failing test case to their sample tests, and improve the solution.

Sometimes it is important to get tests correct on the first try, for example when you care for "successful on first attempt" stat which is available to Codewars RED users.

## Tests output (?)

TBD:

- what's presented there,
- printing and debugging,
- handling unhelpful output

## Test frameworks (?)

TBD:

- follow up on TDD for users who want to add sample tests
