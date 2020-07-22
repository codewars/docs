## What is the Kata Creator?

The Kata Creator is the authoring tool used to create kata. It is accessible through the profile menu, found in the top right corner of this site. Only users who have earned the [[Create Kata|Privileges]] privilege.

## Anatomy of a Kata

In order to create a kata you must first understand the elements of a kata.

### Name

The name is used to uniquely identify a kata. You can be creative with the name that you use. Best practice is to use a name that gives other users a good idea of what type of challenge they will be getting themselves into.

### Discipline

The discipline is the category that the kata belongs to. You should pick the category that best describes what the kata is intended to focus on. As of now there are four categories

- Reference - Focuses on core language and API knowledge.
- Algorithm - Focuses on the logic required to complete the task.
- Bug Fix - Focuses on taking existing code, determining the issue and fixing it.
- Refactor - Focuses on taking existing code and making it better.

### Description

The description field is used to provide instructions to the users who will be training on the kata. This field recognizes [[Github/Codewars flavored markdown|Markdown-Formatting]]. You can use the preview tab to see the markdown.

For complex katas you may need to create a lengthy description in order to fully describe the requirements. For easier katas it is best to keep the description as short and concise as possible. Feel free to use code block examples within the description. It is always best to use the three back tick (```) code block style instead of indentation.

### Describing code examples for multiple languages

The markdown we provide adds an additional feature useful for displaying code blocks of multiple languages. If you use the ``` [language name] markdown format for indicating which code syntax should be used then you can define all of the languages examples within the description field. When your markdown is displayed it will filter out the languages that are not relevant (based off of the current context). In order for this to work you must use the language's full name and have your examples grouped together without any additional content in between them.

The following is an example of how to provide example code blocks for both javascript and coffeescript:

~~~
```javascript
var a = []
```
```coffeescript
a = []
```
~~~

### Final Solution

When creating your kata you will probably want to start with the final solution and test fixture code blocks. If you are used to TDD then you will write your tests within the test fixture and then you will create a fully working solution within the final solution code block. If you need to load some preloaded code then you may need to do that before working on the final solution code block.

### Initial Solution

After you have a working solution then you will want to next focus on getting the code setup for how other users will initially see it. The way in which you setup your initial solution code will depend heavily on the discipline that you have selected. For bug and refactor disciplines you will end up needing to include almost working or already fully working code within this block. For reference and algorithm disciplines you will likely only include skeleton code. Perhaps an empty function/method called "solution" or some other code that has missing code that needs to be completed. Sometimes you may just want to include some comments to help get the user started, but no actual code.

The initial solution block is required so you will have to include something (at the very least some comments) in order for the kata to be able to be published.

### Preloaded

The preloaded code block is an optional feature that you can use if you need it. Its useful for when you want to load some code that mimics an API that your kata is based around. Its also useful if you want to define some code that needs to be used within the solution, but shouldn't be editable within the solution itself. For example maybe you want to create a kata that asks a user to add an item to an array. It would be better to define the array within the preloaded code block so that the user already has the array created for them, and will be more likely to just add an item to the array using the appropriate array method, instead of updating the array constructor to include the value (and bypassing using an array method all together).

### Test Fixture

The test fixture is used to write code that will validate the kata solution.
The entire set of code in this block acts as a single test case. To validate solution code
you can use the Test.expect(passed_boolean, optional_message) method. More advanced testing methods are also available. Check out the kata test framework documentation for more information.