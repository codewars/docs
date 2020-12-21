---
sidebar: curating
prev: /curating/kata/
next: /curating/guidelines/
---

# Curating a Translation

Unfortunately, there is currently no reliable way to prevent approval of translations of insufficient quality. Unlike beta kata, translations are not subject to any kind of beta process, and comments in the translation discourse cannot be labeled as issues. That's why it's very important to make sure that published translations are of sufficient quality.

## Reviewing and working with pending translations

When a translation is published, it's put into a pending state and awaits for review and approval. Users who earned related [privileges][privileges-reference] can search for them, review them, and approve or reject them.
Currently, pending translations can be found in one of the following ways:

- Reading through the kata discourse and searching for posts where translators announced the fact that they published a translation. Translators are encouraged to post a message labelled as **Suggestion** in the kata discourse with a link and information about the language of the translation, so others could find it easily.
- Navigating to `https://www.codewars.com/kata/kata-id/translations` page, which lists all translations in two sections: pending ones at the top, and closed ones (approved and rejected) below.
- A small group of users has been granted the privilege of accessing the page with a list of all pending translations eligible for approval by them. This is the most convenient way of searching for pending translations, but not available to every user at the moment.

### Review

Before a pending translation is accepted and a new language becomes available for a kata, it needs to be reviewed and determined whether it holds up to Codewars quality standards.
When reviewing a translation, users can perform the following steps:

- **Reading the code and description**.
- **Running the tests** against a couple of solutions, to verify if the test suite gracefully handles some unexpected answers and eventual crashes of the solution. Unfortunately, testing tests of a translation is currently rather cumbersome. One possibility is to fork the translation, replace the "Solution" snippet with your own solution, run tests, and discard the fork afterwards. Another way is to create a new kumite from scratch and copy/paste code snippets from the translation under review to your kumite.
- **Reading the comments** to check if there are any remarks from other reviewers and whether they still hold or were addressed appropriately. Be aware that comments under translations cannot be labelled as an **Issue** or **Suggestion**, so there are no additional markers for the severity of the comment. They also cannot be marked as spoilers, so don't reveal too many details about the solution in your comment, if possible.
- **Verifying** if the translation holds to [translation authoring guidelines][translation-authoring-guidelines].

After a review is completed, the reviewer can finalize it with one of the following actions:

- **Leaving a comment** with remarks, suggestions and issues which should be addressed by the translator.
- **Fixing problems found during the review**. Only the author of the translation can edit its fork directly. If a user wants to make changes to a translation fork created by someone else, they have to fork it first, edit the code, and publish the changes as a new fork.
- **Approving the translation**, which introduces a new language to the kata available for solving.
- **Rejecting the translation** if it cannot be fixed.

Users performing a review should hold to [Translation Curating Guidelines][translation-curating-guidelines].

### Review comments

When a reviewer writes a post pointing out the spotted issues which need to be fixed, it should be done in a way which actually instructs the translator how to fix them. Sometimes, authors can be unaware that some specific issue might occur, or why this might be a problem, and reviewers with their short remarks leave them even more clueless. When a reviewer wants to signal such an issue, it should be done in a way which would minimize the need for follow-up questions and additional explanations. Initially it might seem as more effort from the reviewer, but this additional effort may ease the resolution of problems further down the line.

### Approving a translation

Pending translations can be approved by either the kata author at any time, or any user with the [privilege to coauthor][privileges-reference] under the following conditions:

- the approver is not the author of the translation, and
  - translation is older than a week, or
  - kata author has been inactive for over a month.

When the translation is approved, a new language is immediately available for solving. There's also an honor reward, but remember that it's granted to the author of the **initial fork** and not that of the approved fork!

The user who approved the translation should also go through the kata discourse and mark suggestions posted by the translator as resolved.

**NOTE:** at the time of writing, a user who _approves_ a translation is marked as a **kata contributor**. Users with the "contributor" flag seem to be affected by a bug preventing them from earning any future points they would be rewarded for authoring activities on kata they contributed to. Be aware that as a result, approving a translation will render you ineligible for honor points you would otherwise earn by translating, editing or fixing the kata in the future until the bug is fixed.

### Merge Issues

Oftentimes if two translations are created around the same time, they may both update the description. When approving the 2nd translation, the 1st approved translation will already have updated the description. This will cause a merge conflict which has to be resolved.
You can do this by forking the 2nd translation and updating the description. `<<<<<<<<`, `=========` and `>>>>>>>>` merge labels will show up in the description to help identify where the merge issues are.
Another solution is to start a new translation to some other (not yet available) language, grab the most recent version of the kata description from there, and then copy/paste it in your fork.

Once you have fixed the description merge issues you can publish the translation. If you are not the kata author then you will need to have someone else verify your changes and approve the translation.

### Rejecting a translation

Sometimes the best course of action is to simply reject a pending translation.
Some possible reasons could be:

- translation is outdated and the kata changed a lot since the translation has been published,
- translation is of bad quality and fixing it is too much work,
- some user authored a newer, better translation and they cannot publish it since there can only be one pending translation per language per kata,
- there's a justified concern that someone might approve a translation of insufficient quality before its issues are fixed.

It's worth noting that rejected translations are not wasted work. They are still available in the system, can be forked and used as a base for new translations, or its code can be simply copied and reused.

## Fixing existing translations

Sometimes a kata needs to be fixed due to an issue, be it a bug in the reference solution, typos in the description or the lack of test coverage. Fixes and improvements to approved translations can be done in one of two ways:

- If a translation was created with the translations panel, the most recent fork can be forked again, modified, and published. Afterwards it has to go through the usual translation review process and wait until another user approves it. However, translations created directly within the kata editor cannot be forked.
- A translation may be modified directly with the kata editor. This method allows for immediate changes without waiting for approval, but it also has some drawbacks:
  - it requires privileges which are available only to experienced users,
  - it invalidates existing forks, what may cause merge conflicts for modified snippets if someone publishes a fork of this translation sometime in the future,
  - direct edits are not subject to the review process and other users cannot verify the introduced changes.

:::warning
The way how kata edits are currently handled, existing pending forks can be very easily outdated by direct edits of the kata. When creating a fork based on some other, existing fork, you have to make sure that it contains the most current state of its language and does not overwrite or revert changes introduced with the kata editor.
:::

[translation-curating-guidelines]: /curating/guidelines/translation/
[translation-authoring-guidelines]: /authoring/guidelines/translation/
[privileges-reference]: /references/gamification/privileges/
