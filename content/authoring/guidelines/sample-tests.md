---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/coding/
next: /authoring/guidelines/submission-tests/
---

# Writing Sample Tests

Sample tests are a part of every kata which is often very underappreciated by both kata authors, and users attempting it. Bad sample tests can cause a lot of frustration, while a good suite of them often increases overall satisfaction of users from solving the kata. To make sample tests as good as possible, follow guidelines collected below.

- **Conform to [General Coding Guidelines][authoring-guidelines-general-coding]**: tests are code too and as such should keep up to code quality standards.
- Sample tests are **not a replacement for a good description.** Description should be enough to drive the user through the kata to its completion, sample tests should not be the only place containing information necessary to complete the kata.
- **Avoid things like _"See sample tests for more examples"_**. To see the sample tests, users have to enter the kata trainer, which marks the kata as unfinished in their profile.
- Sample tests should **include examples described in the description.**
- **There's no general requirement on how many sample tests should be there.** There can be many, but there can be just a few, or even none. Users can always add new test cases as they are working through all described requirements. However, note that users usually like to have many sample tests with good coverage. The more sample tests, the better the user experience will probably be. Adding many sample tests is encouraged, but it's up to the author to decide.
- **The test suite should be organized**, splitting the tests into different groups and subgroups. Each test framework provides tools to do that, generally with a possibility to give meaningful names to each (sub)group.
- Whenever author chooses to not add many sample tests, they should remember that **adding test cases should not be more difficult than writing actual solution.**  Don't expect newbies to add test cases to an 8 kyu kata. Users who work on entry level problems can find it difficult to work with test frameworks and potentially complex concepts related to testing, and that's why sample tests for tasks targated at inexperienced uses should have rather good coverage of requirements and possible inputs.
- Whenever author chooses to not provide any sample tests at all, they should replace the template provided by Codewars and consider adding at least one runnable (but potentially failing) sample test. It's also recommended to add a note encouraging users to create their own test cases, and possibly help them out by, for example, providing a link to the documentation or reference of the testing framework or assertion libraries used by Codewars.
- Sample tests can be used as additional examples for a couple of aspects:
  - In some languages, for example C, they serve as a good example on how solution function is called, how input and output parameters are passed to it, how memory management is handled, etc.
  - Sample tests, in addition to the kata description, can clarify handling of edge cases, inputs which should be handled in some exceptional way, or errors.
  - Test cases provided by author show how to use testing framework and assertion libraries to the users who'd like to add their own tests.
  - One or two test cases with large inputs can serve as a hint on performance requirements, so users can see early that their solution is too slow or times out.  
- **Sample tests should be fixed, predictable, and repeatable.** Avoid sample tests which are random or change between the runs.
- Initial tests should compile correctly and it should be possible to run them.
- **Test cases from sample tests should appear also in submission tests**, possibly as a part of fixed tests.
- If possible, **sample tests should be easy to reproduce in user's local environment.** Many users work on their solutions with their local IDE, and it's very helpful for them to have all required information available. Preloaded snippet is especially problematic for them because it's not directly visible and it makes it difficult to reproduce sample tests locally. If your sample tests rely on anything from preloaded code, consider relevant guidelines related to [description](/authoring/guidleines/description/) and [preloaded code](/authoring/guidleines/preloaded/).

