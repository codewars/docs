---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/
next: /authoring/guidelines/coding/
---

# Writing a Kata Description

The kata description, created by the kata author, is a crucial part of every kata, presenting the task and all requirements to a user attempting it. Descriptions should be written with special attention. Unclear descriptions are a common cause of a poor user experience with a kata. To ensure the quality of the kata, its description should conform to the guidelines presented below.


## General

- **Description should hold to general [Content Quality Guidelines][authoring-guidelines]** where applicable.
- **Descriptions should be written in English.** The Codewars community is international and not every author can write English proficiently. Authors should ask other users for proofreading and spellchecking if necessary.
- **All remarks and complaints about instructions not being clear should be considered with proper attention.** Authors should remember that after working on a kata for a long time, they understand it much better than others, and it's easy for them to miss some issues. Users may have completely different points of view, or simply understand things differently. Invite other users to provide feedback on description clarity, consider their suggestions, and integrate the feedback as appropriate.  
When questions or requests for improvements, clarifications, or examples pop up particularly often, the description should be updated to address them.
- **Descriptions should not make translating a kata into other programming languages difficult.** The description is shared between all translations of the kata and may need to be modified by translators. If there are many translations with many such modifications, description merge conflicts can occur, making kata maintenance difficult. As such, descriptions should ideally be as language-agnostic as possible and use only abstract terms not specific to any programming language. If a description cannot be kept language-agnostic, language-specific elements should be structured in a way which helps with resolution of merge conflicts: preferably in paragraphs or larger blocks rather than multiple language concepts in one sentence.


## Structure

- **Description should be structured into meaningful parts**, for example:
  - overview, general context, or introduction,
  - general statement of a task the user has to solve,
  - description of input and output, potentially with examples,
  - detailed rules and requirements,
  - additional notes, explanations, technical details, follow-ups.  
The above is just an example; not all sections are necessary unless applicable, and authors can use another structure if they like. However, related pieces of information should be together: explaining inputs in 3-4 different places isn't a good idea.
- **Descriptions should be concise, but precise.** The description of a task should be as short as possible, because long descriptions suggest that the task is either not very well defined, or is very complex. Descriptions accompanied with a theme or storyline are acceptable as long as they don't get in the way of understanding the problem.
- It's usually recommended to describe general aspects first, and then go further into details, edge cases and explanations of how malformed input should be handled, if applicable. Descriptions structured this way are usually easier to follow.


## Requirements

- **The description should clearly state all requirements** the user is expected to fulfil to complete the kata. Unless the kata is a puzzle, users should not be given test cases which enforce requirements not mentioned in the description. The description should _explicitly_, _unambiguously_ state which inputs have to be handled, which inputs do not have to be considered, and how to handle exceptional situations. When a test case fails, there should always be a point in the description which would explain why the particular test failed.
- Whenever helpful, descriptions should provide **examples of inputs and outputs for some representative scenarios**.
  - **Examples should not be too obvious or repetitive.** It's enough to provide them only for the most representative types of input, one example for each. They can be skipped for problems which are explained very clearly. Numerous or overly verbose examples can inflate the description beyond reason.
  - It's helpful when an **example presents not only input and expected output, but also explains why it's the correct one**, and hints how to work through the problem to reach the valid conclusion.
  - **Avoid things like _"See sample tests for more examples"_**. To see the sample tests, users have to enter the kata trainer, which marks the kata as unfinished in their profile.
  - **Use images when helpful, but prefer text if it's sufficient to communicate the idea.** Currently, Codewars does not allow attaching files to a kata which makes hosting images externally a default solution. Alternatively, a HTML image with Base-64 encoded content or an SVG can be included in the description. This is preferred because external image hosts create a dependency on another website which may become stale over time, rendering the kata unusable. Make sure that the image does not break the layout of the kata page. When using images, take into consideration users with small screen widths and visual impairments.
- **Describe or hint on the difficulty.** It's a very frustrating experience when a user comes up with a solution returning the correct answers, only to find out that it times out upon submission. Provide information about input ranges, volume of tests, expected complexity class, etc.


## Formatting

- **Use [Markdown capabilities][markdown-reference]** to format and structure descriptions appropriately. You can use headers and lines to introduce sections, lists and tables to collect various items, links to provide references, code markup to introduce code inline or in blocks, and basic text formatting for styling. Do not abuse it though; avoid visual noise and excessive formatting.
- **Use proper header levels.** Do not use `# Title` to introduce sections, consider `## Second level` or `### Third level` headers for organization.
- **Use [Sequential Code Blocks][sequential-code-blocks]** for blocks of code, examples, etc.
- **Avoid descriptions mentioning many languages.** Use [Language Conditional Rendering][conditional-rendering] for language-specific paragraphs and sections. Including multiple languages in a single sentence or paragraph (_"Return `null` for Java/C#/Scala, `None` for Python, `Nothing` for Haskell, `NULL` for C/C++, `nil` for Swift/Ruby"_) is noisy and makes the description difficult to read, and kata difficult to maintain.
- **Avoid HTML.** Interactions between embedded HTML and Markdown or theming are not well-defined and can break unexpectedly. HTML used for styling can give wrong results after CSS is updated or can not work well with visual themes (for example dark or light mode). HTML **can** be used as long as there's a valid purpose and the author is aware of the downsides.


## Other

- **Description should explain or hint on concepts used by the kata.** It should be possible to understand the problem just by reading the description, without referring to any external resources or additional, domain specific knowledge.   
- **Description can contain links and references** to external sources of knowledge, articles, explanations and papers, which provide some in-depth explanation or can be in any other way helpful. If possible, links should point directly to the revelant information inside of the linked resource, and not just to the main document.  
Keep in mind that external links create dependencies. Links that change over time may render a kata unusable and introduce a maintenance issue. 
- **Description can contain links to related kata**: other variants of the task, difficulty levels, challenge versions. Links should go in both directions, for example the easier kata should link to the more difficult version and vice versa.
- **Consider adding necessary preloaded code to the description.** As explained in a [related part][preloaded-accessibility], preloaded code is not visible to users attempting the kata, so they cannot easily set up their local environment to work on the attempted kata. It's strongly recommended to provide everything necessary to solve the kata in a local IDE.
- **Description should list all necessary credits** if some elements of a kata are inspired by other sources which require proper attribution. Even if it's not required, it's still a proper thing to do.


[authoring-guidelines]: /authoring/guidelines/
[preloaded-accessibility]: /authoring/guidelines/preloaded/#accessibility-of-preloaded-code
[markdown-reference]: /references/markdown/
[sequential-code-blocks]: /references/markdown/extensions/#sequential-code-blocks
[conditional-rendering]: /references/markdown/extensions/#conditional-rendering
