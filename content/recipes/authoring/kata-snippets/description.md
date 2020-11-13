---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata-snippets/
next: /recipes/authoring/kata-snippets/coding-general/
---

# Writing a Kata Description

The kata description, created by the kata author, is a crucial part of every kata, presenting the task and all requirements to a user attempting it. Descriptions should be written with special attention. Unclear descriptions are a common cause of a poor user experience with a kata. To ensure the quality of the kata, its description should conform to the guidelines presented below.


## General

- **Description should hold to general [Content Quality Guidelines](/recipes/authoring/)** where applicable.
- **Descriptions should be written in English.** The Codewars community is international and not every user can write English proficiently. Authors should ask other users for proofreading and spellchecking if necessary.
- **All remarks and complaints about instructions not being clear should be considered with proper attention.** Authors should remember that after working on a kata for a long time, they understand it much better than others, and it's easy for them to miss some issues. Users may have completely different points of view, or simply understand things differently. Invite other users to provide feedback on description clarity, consider their suggestions, and integrate the feedback as appropriate.  
When questions or requests for improvements, clarifications, or examples pop up particularly often, the description should be updated to address them.
- **Descriptions should not make translating a kata into other programming languages difficult.** The description is shared between all translations of the kata and may need to be modified by translators. If there are many translations with many such modifications, description merge conflicts can occur, making kata maintenance difficult. As such, descriptions should ideally be as language-agnostic as possible and use only abstract terms not specific to any programming language. If a description cannot be kept language-agnostic, language-specific elements should be structured in a way which helps with resolution of merge conflicts: preferably in paragraphs or larger blocks rather than multiple language concepts in one sentence.


## Structure

- **Description should be structured into meaningful parts**, for example:
  - overwiew, general context, or introduction,
  - general statement of a task user has to solve,
  - description of input and output, potentially with examples,
  - detailed rules and requirements,
  - additional notes, explanations, technical details, follow-ups.  
Above is just an example; not all sections are necessary if not applicable, and authors can use another structure if they like. However, related pieces of information should be together: explaining inputs in 3-4 different places isn't a good idea.
- **Descriptions should be consise, but precise.** Description of a task should be possibly short, because long descriptions suggest that task is either not very well defined, or is very complex. Fabularized or themed descriptions are OK as long as they don't get in a way of understanding the problem.
- It's usually recommended to describe general aspects first, and then go further into details, edge cases and explanations of how malformed input should be handled, if applicable. Descriptions structured this way are usually easier to follow.


## Requirements

- **Description should clearly state all requirements** the user is expected to fulfill to complete the kata. Unless the kata is a puzzle, users should not be given test cases which enforce requirements not mentioned in the description. Description should _explicitly_, _very clearly_ state which inputs have to be handled, which inputs do not have to be considered, and how to handle exceptional situations. When a test case fails, there should always be a point in the description which would explain why the particular test failed.
- Descriptions should provide **examples of inputs and outputs for some representative scenarios**. Provide as many examples as you think necessary.
  - **Avoid things like _"See sample tests for more examples"_**. To see sample tests, users have to enter the kata trainer, what can mark the kata as unfinished in their profile.
  - **Use images when helpful, but prefer text if it's sufficient to communicate the idea.** Currently, Codewars does not allow attaching files to a kata which makes hosting images externally a default solution. Alternatively, a HTML image with Base-64 encoded content or an SVG can be included in the description. This is preferred because external image hosts create a dependency on another website which may become stale over time, rendering the kata unusable. Make sure that image does not break the layout of the kata page. When using images, take into consideration users with small screen widths and visual impairments.
- **Describe or hint the difficulty.** It's a very frustrating experience when a user comes up with solution returning correct answers, only to find out that it times out upon submission. Provide information about input ranges, volume of tests, expected complexity class, etc. 


## Formatting

- **Use [Markdown capabilities](/references/markdown/)** to format and structure descriptions appropriately. You can use headers and lines to introduce sections, lists and tables to collect various items, links to provide references, code markup to introduce code inline or in blocks, and basic text formatting for styling. Do not abuse it though; avoid visual noise and excessive formatting.
- **Use proper header levels.** Do not use `# Title` to introduce sections, consider `## Second level` or `### Third level` headers for organization.
- **Use [Sequential Code Blocks](/references/markdown/extensions/#sequential-code-blocks)** for blocks of code, examples, etc.
- **Avoid descriptions mentioning many languages.** Use [Language Conditional Rendering](/references/markdown/extensions/#conditional-rendering) for language-specific paragraphs and sections. Including multiple languages in a single sentence or paragraph (_"Return `null` for Java/C#/Scala, `None` for Python, `Nothing` for Haskell, `NULL` for C/C++, `nil` for Swift/Ruby"_) is noisy and makes the description difficult to read, and kata difficult to maintain.
- **Avoid HTML.** Interactions between embedded HTML and Markdown or theming are not well-defined and can break unexpectedly. HTML used for styling can give wrong results after CSS is updated or can not work well with visual themes (for example dark or light mode). HTML **can** be used as long as there's a valid purpose and the author is aware of the downsides.


## Other

- **Description can contain links and references** to external sources of knowledge, articles, explanations and papers. Keep in mind that external links create dependencies. Links that change over time may render a kata unusable and introduce a maintenance issue. 
- **Description can contain links to related kata**: other variants of the task, difficulty levels, challenge versions. Links should go in both directions, for example easier kata should link to difficult one, and vice versa.
- **Consider adding necessary preloaded code to the description.** As explained in a (related part)(/recipes/authoring/kata-snippets/preloaded/#accessibility-of-preloaded-code), preloaded code is not visible to users attempting the kata, so they cannot easily set up their local environment to work on the attempted kata. It's strongly recommended to provide everything necessary to solve the kata in a local IDE.
- **Description should list all necessary credits** if some elements of a kata are inspired by other sources which require proper attribution. Even if it's not required, it's still a proper thing to do.
