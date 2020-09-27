# Translations

Kata authors must write test cases for each specific language that they want to support, as well as a working solution to prove the kata can be solved. As you can imagine, it's not practical for a kata author to be able to write the challenge in all 20+ languages that Codewars supports. 

This is where translations come in. They allow other warriors to make katas available in other languages. Any user can publish a translation, where the kata author, an admin, or a power user with the Co-Author privilege can then approve the changes. Once a translation is approved, it will be added to the kata.

## How to Find Them

Once you have completed a kata, there will be a new choice within the languages menu to add a new language.

<img src="https://www.evernote.com/l/AAW0GaebQllDBb_YS-AfeaUiwq5PoxaDPIoB/image.png" title="Language Menu" height="400px">

This will take you to the translations page where you can view existing translations and create new ones.

## Honor & Rank

Translations are worth twice the honor you would normally receive for completing the kata.

Once approved you will also receive the rank progression associated with the translation language. If the kata is in beta, you will receive the rank progression once it gets approved and its rank assigned. After you have contributed to an approved kata, you will not receive the rank progression in any additional languages you translate the kata into.

## Forks

Code Warriors can fork a translation to improve it and help it get approved faster. However they will not receive rank or honor progression, only the original translator will.

## Merge Issues

Oftentimes if two translations are created around the same time, they may both update the description. When approving the 2nd translation, the 1st approved translation will have already updated the description. This will cause a merge conflict which will need to be resolved. You can do this by forking the 2nd translation and updating the description. `<<<<<<<<`, `=========` and `>>>>>>>>` merge labels will show up in the description to help identify where the merge issues are.

Once you have fixed the description merge issues you can publish the translation. If you are not the author then you will need to have someone else verify your changes and approve the translation.

## Remarks on translating

### Avoid creativity

A translation is essentially just a "port" of the original kata to a new language. Every aspect of the original kata should be retained.

The original kata sensei has probably invested a lot of time to make the kata in the first place.

Homogeneity across all languages is key to a good kata, and a kata "satisfaction rating" can easily be impacted by the quality of a translation, so it is the responsibility of the translator to maintain every intent of the original kata sensei.

Specifically

- do not change the kata description unless it is wrong or incomplete and the kata author cannot improve it themselves
- do not change the original kata input or output unless the translation language has more fitting data types the usage of which would conform to the language's best practices
- do not change any test cases, or refactor any of them to be grouped differently unless the kata introduces various limitatations (e.g. performance requirements or maximum allowed code length) which are usually language-specific
- do not add your own "cute" comments in the code
- do not make any of your own "improvements" without informing the kata sensei why they were required

The one notable exception to the last bullet point above is with regards to random tests. It is not uncommon for katas (published in the earlier years of Codewars) to lack random tests. In such cases, translations are still expected to include random tests, except in rare instances where random tests are simply not applicable.

### Consider relevance

Not all kata can be translated to all languages.

For example, if the kata is of a "Bugfix" type, the problem may not be applicable to other languages. If it feels like you are jamming a square peg into a round hole to create the translation then do not do it.

Another example would be when there is a disparity in difficulty between a translation and the original kata. For instance, a language that requires a user to write out an entire algorithm will require a great deal more legwork versus a language which provides the same algorithm as a built-in or importable module (e.g. Python, known for being "batteries included"). In short, if the translation (or the bulk of it) can be solved with a simple import and that option is not available in the original kata, that translation may not be suitable for publishing.

### Language conventions

The translation must use the naming, language, and syntax conventions of the language it is translated to.

### Shared Descriptions

Please note, the description is shared among all kata languages. Do not add or remove anything specific to your language unless absolutely necessary. In that case use [sequenced code blocks](https://github.com/Codewars/codewars.com/wiki/Markdown-Formatting#sequenced-code-blocks) and [optional section formatting](https://github.com/Codewars/codewars.com/wiki/Markdown-Formatting#optional-section-formatting) - add a new block using the formatter for your language and it will be displayed only when that particular language is selected in the kata overview, solutions page, discourse, and trainer.

## How to announce your translation

When you publish your translation the original kata sensei will be automatically notified that your effort is pending their approval. But it is also good practice to write a comment in the kata "Discourse" to announce what you have done. This way, if the original author has been absent from Codewars for a prolonged period of time, another qualified user can review and approve in their place.

Tip: marking that comment as a `suggestion` will also help your translation from being accidentally overlooked.

## Remarks on accepting a translation

Before you accept a translation, make sure that the difficulty and quality of the translation matches the current languages. In doubt, write a comment on the translation. If the translation diverges from the original kata, ask the translator politely whether they can modify the translation so that it matches the original intent.

If you want to comment on the translation, you can do that on the "Discourse" page, just as in normal katas or kumites. This is especially helpful if you're not sure whether the translation really reflects your original intentions.
