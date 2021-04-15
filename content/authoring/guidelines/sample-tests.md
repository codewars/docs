---
title: Writing Sample Tests
kind: reference
---

Sample tests are a part of every kata which is often underappreciated by both kata authors and solvers. Bad sample tests can cause a lot of frustration, while a good suite of them often increases the overall satisfaction of users from solving the kata. To make sample tests as good as possible, follow the guidelines collected below.

- **Conform to [General Coding Guidelines][authoring-guidelines-general-coding]**: tests should adhere to code quality standards as much as any other provided code.
- Sample tests are **not a replacement for a good description.** The description alone should be enough to enable the user to complete the kata. Sample tests should be treated as supporting the description and never be the only source of information necessary to complete the kata.
- **Avoid things like _"See sample tests for more examples"_**. To see the sample tests, users have to enter the kata trainer, which marks the kata as unfinished in their profile.
- Sample tests should **include examples described in the description.**
- **The test suite should be organized**, splitting the tests into different groups and subgroups. Each test framework provides tools to do that, generally with a possibility to give meaningful names to each (sub)group.
- Sample tests can be used as additional examples for a couple of aspects:
  - In some languages, for example C, they serve as a good example on how the solution function is called, how input and output parameters are passed to it, how memory management is handled, etc.
  - Sample tests, in addition to the kata description, can clarify the handling of edge cases, inputs which should be handled in some exceptional way, or errors.
  - Test cases provided by the author show how to use the testing framework and assertion libraries to the users who'd like to add their own tests.
  - One or two test cases with large inputs can serve as a hint on performance requirements, enabling users to check that their solution meets efficiency standards before submitting. These tests can be initially disabled with a note that they can be enabled if the user wants to verify the performance of their solution.
- **Sample tests should be fixed, predictable, and repeatable.** Avoid sample tests which are random or change between the runs.
- Initial tests should compile and execute fully without crashes or other non-test suite errors. Initially, users should expect clear, test suite-generated assertion failures for incomplete deliverables described in the instructions.
- **Assertions from sample tests should appear in submission tests as well**, possibly as a part of fixed tests.
- If possible, **sample tests should be easy to reproduce in the user's local environment.** Many users work on their solutions in their local IDE and it's very helpful for them to have all the required information available. The preloaded code file is especially problematic for them because it's not directly visible which makes it difficult to reproduce sample tests locally. If your sample tests rely on anything from preloaded code, consider relevant guidelines related to the [description][authoring-guidelines-description] and [preloaded code][authoring-guidelines-preloaded].


How many sample tests are provided is kata-specific and can range from none to many depending on the type of challenge and difficulty. Users may add new test cases but will tend to rely on the provided test cases foremost. Offering more sample tests tends to increase user satisfaction in solving the kata.

When no sample code or tests are available for a kata, it may not be obvious how to execute the solution code, leading to frustration. At least one sample test or call to the solution code is recommended along with a note encouraging the user to create their own test cases. Providing a link to the documentation for the testing framework or assertion library used by the kata is helpful.

As a rule of thumb, **adding test cases should not be more difficult than writing the actual solution.** It's unrealistic to expect users to add test cases to an 8 kyu kata. Users who work on entry-level problems will likely find it difficult to work with test frameworks and potentially complex concepts related to testing.

[authoring-guidelines-general-coding]: /authoring/guidelines/coding/
[authoring-guidelines-description]: /authoring/guidelines/description/
[authoring-guidelines-preloaded]: /authoring/guidelines/preloaded/
