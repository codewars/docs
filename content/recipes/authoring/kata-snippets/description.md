---
kind: recipe
sidebar: authoring
prev: /recipes/authoring/kata-snippets/
next: /recipes/authoring/kata-snippets/coding-general/
---

# Writing a Kata Description

Kata description, created by the kata author, is a crucial part of every kata presenting the task and all requirements ot a user attempting it. Descriptions have to be written with a special attention, because bad descriptions are one of the most common reasons for a bad user experience with a kata. To ensure the quality of the kata, it should conform to a set of guidelines presented below.

This article contains a set of guidelines for kata authors and translators to create good descriptions for their kata. They were collected to help ensure that kata and translations are of sufficient quality and user experience will be as good as possible.

The guidelines should be used by kata authors, translators and reviewers to verify whether new content about to be introduced to Codewars is of sufficient quality. Conformance with them should be verified before a kata or translation is published by its author and approved by a reviewer.

Failure to comply with the below guidelines should be considered an issue to be addressed and reported as such. In case of severe violations, the affected kata or translation may be retired, moved back to beta or rejected.


## General

- Some of these guidelines do not apply to every type of kata. Use where applicable, so not use where not.
- Keep as language neutral as possible
- Descriptions should be written in English. Proofread, ask for help if necessary.
- Ask others if it's clear enough, consider their suggestions


## Formatting

- use formatting, markdown, katex for readability. Avoid visual noise and excessive formatting. Consider proper header levels.
- avoid HTML
- use language code blocks
- avoid descriptions mentioning many languages. use conditional blocks (link) for language specific parts.


## Requirements

- Describe all requirements and edge cases, leave no surprises
- Provide examples, use images when helpful. Avoid "see sample tests for more examples".
- Describe or hint the difficulty: input ranges, volume of tests, minimum expected complexity, etc.


## Structure

- split the description into meaningfull sections. Example:
- overwiew/context (if needed)
- task
- input/output
- rules/details
- notes / technical details
- try to regroup informations of the same kind: explaining inputs specificities at 3-4 different places isn't a good idea
- the task section must stay _**short**_. Its goal is only to give an idea about what's going on. Going right there into details will just lose the user. So stay consise but precise.
- it's generally better to explain going from general things to details/exceptions/edge cases. Not the opposite.


## Other

- links to knowledge (hints, algorithms, papers)
- link related problems (variants, difficulty tiers)
- give credit when necessary
- include Preloaded