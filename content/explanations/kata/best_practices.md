# Kata Best Practices

## Be Clear

It should be clear in the instructions what the codewarrior is expected to complete in the kata. This is not always straightforward, especially for more challenging exercises. It is helpful to:

- Include all relevant details
  - Give clear definitions of technical terms, along with references
  - Mention all of the corner cases you intend to cover in your tests
- Motivate problems using concrete examples
- Give examples of input/output pairs

## In general, it is best to avoid:

- Irrelevant details
- Very abstract concepts
- Overly complex specifications

## Make Sure Content is New

Something important to consider when one is writing or editing kata: Is the concept behind this kata novel?

There are many standard exercises in programming that are well represented on Codewars. Some examples include:
- FizzBuzz
- Fibonacci Sequences
- String Reversal

When working on a kata, make sure to check that it has not been done already. Every new kata should ideally teach something different.

## Follow Established Conventions

Codewars is a site where programmers can train on their programming skills and apply them to the workplace in turn.  In the workplace, developers follow a large number (and variety) of conventions which are best understood as a set of "soft" rules that everyone follows to enhance communication within the developer community and make code more easy to read, understand and maintain.  For example, many programming languages each have their own naming conventions which when followed results in neat and easier-to-read code:

- Class names use `PascalCase` in almost all programming languages
- Identifier names in C/C++, Python and Ruby (and probably many other languages) are *always* in `snake_case`
- Identifier names in JavaScript, Java and Haskell (for example) are *always* in `camelCase`
- Identifier names in C# are *always* in `PascalCase`

Apart from exceptional circumstances (such as golfing Kata where coding best practices are irrelevant), each and every Kata you author should observe and follow the conventions set forth by the programming language(s) you are authoring your Kata in.  This is to ensure that those solving your Kata will become familiar with the conventions of the selected language and in turn follow them in the workplace as well.  It is a known fact that programmers who often fail to observe such conventions in their real-world project(s) are often seen by employers as less skilled and unsuitable for work in a team environment.  Therefore, if your Kata fails to observe such conventions, it is *perfectly acceptable* for others to raise one or more Issues on your Kata and it is **your responsibility** to address them thoroughly (either by editing the Kata to follow such conventions or provide a *good* explanation as to why such convention should not be followed in your case) before resolving the Issue report.

*N.B. Language conventions are in no way limited to naming conventions; obvious anti-patterns can also be considered to be violation of convention.  For example, in a language like TypeScript where simple standalone functions can be easily (and are often so) defined, requiring the solver to wrap a single function as a static method in a class which is never instantiated is an obvious violation of convention.*

## Simplicity

A good kata should be as simple as possible. Even though there are no hard and fast rules for ensuring simplicity, the following is recommended:

- Limit the number of corner cases tested for
- Unless specified explicitly, only test on valid inputs declared in the description
- Focus on testing for behavior, rather than implementation details

## Testing

A good kata includes a thorough and clear set of tests that match the description. This can be difficult, even for simple kata. When writing tests: 

- Include a preloaded set of Example tests that a codewarrior can see, run, and edit if they'd like
- Include fixed tests with full coverage of common cases and any corner cases specified in the kata description.
- Include random tests with parameters that match the description. 
- Do not include any surprises:
  - If a special case is tested, it should be in the description 
  - If you test very large inputs, say so in the description

[Random tests cases for beginners](https://github.com/codingforeveryone/READMEs/blob/master/codewars/random-test-cases-for-complete-beginners.md)

[More information on the test frameworks for different languages](https://github.com/Codewars/codewars.com/wiki/Languages-and-Test-Frameworks).


*This page is a stub, please consider contributing*