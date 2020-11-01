---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata/
next: /recipes/authoring/kumite/
---

# Creating a Translation

_This page is a stub._


> in unordered fashion:
> 
> * make preferably the description language agnostic (if the author is ok with te idea), but if not possible, don't forget to add the relevant codeblocks
> 
> wanted changes, compared to the original language:
> 
> * adding random tests (required)
> * adding sample tests (required)
> * clarifying the description if needed (only if the author is ok, if he's active)
> * build a better organisation of the test suite
> 
> things where you need to "stay in line"
> 
> * respect the performances requirements of the original language. If needed decrease/increase the number of tests
> * respect the perf of the original solution
> * respect the overall setup of the initial solution (except for translations "from/to Java/C#" and alike where you adapt to what's the more loical
> * all tests must be translated (unless irrelevant in the translated language)
> 
> things to be careful about: (_**these ones will have to be in "create a kata" too**_)
> 
> * write readable/maintainable code => golfed ref solutions like Giacommo cas used to do are to be avoided
> * isolate completely ref and user code: when mutable data structures are used as input, either compute the expected result before sending the inputs to the user, or send copies to the user (deep copies if needed)
> * respect the naming conventions of the translated language

