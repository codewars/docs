---
kind: concept
sidebar: explanation-kata
---

# Translations

Codewars supports a variety of [programming languages](/languages/) and every kata can have more than one language version available. Users may choose any language available to solve the kata and do so in as many languages as they wish. After gaining the required privileges, users who solved the kata are allowed to create or review translations to make the kata available for a larger audience.

## Training on a language version

When the user enters the kata trainer to solve a kata, they can select a language to train on. Some kata are available in many languages, some in just a few, and some only in one or two. If a kata is not available in your favorite language, you must select another language you are familiar with or wait until a translation in your preferred language is approved. Completing a kata in only one language is enough to mark the kata as solved; however, there is something to gain from completing it in other languages too:

- Your [language rank](/concepts/gamification/ranks/#user-rank-breakdown) progresses for every language you solved the kata with (but Honor and overall rank progress are awarded only once per kata).
- You unlock the access to solutions of other users in this language.
- You can view full test suite used to test user attempts against their solutions.

## Creating a translation

To be able to translate a kata to other languages, the user has to complete the kata in at least one language. Once they have completed it, there will be an option within the languages menu to add a new language.

![Language Menu](https://www.evernote.com/l/AAW0GaebQllDBb_YS-AfeaUiwq5PoxaDPIoB/image.png)

This will take you to the translations page where you can view existing translations and create new ones.

Creating a new language version means writing code snippets required for every kata to have:

- **Example solution**, to show that it's possible to solve the kata.
- **Solution setup**, which works as a stub to work on for users training on the kata.
- **Sample tests**, with some initial test cases which can be expanded when training on a kata. Sample tests can also serve as an example how the solution is called.
- **Tests** which are run against user solution when they consider their solution ready. Tests collected in this snipped must pass to consider the kata solved.
- **Preloaded** snippet, which contains code not visible to users, and availale for both sample tests and full tests.

The description is shared among all language versions so changing it in your translation will change it for all languages. If you need to add some language specific information in the description, you can use Codewars specific extensions for Markdown formatting: [Sequential Code Blocks](/references/markdown/extensions/#sequential-code-blocks) or [Language Conditional Rendering](/references/markdown/extensions/#conditional-rendering).

The translation does not have to be finished in one go. It can be saved and kept in draft state as long as necessary. When the translator considers it ready, it can be published which places it in a "pending" state and becomes available for other users to review, approve, edit or reject. Only one translation may be published for any given kata and language. For example, if a published Java translation already exists then a new one may be created but not published until the former is rejected.

Unfortunately, currently there's no reliable way to prevent approval of translations of insufficient quality. Unlike beta kata, translations are not a subject to any kind of beta process, and comments in translation discourse cannot be labelled as issues. That's why it's very important to make sure that published translations comply with [translation authoring guidelines (TODO)]().

**NOTE:** kata authors and users with appropriate privileges are able to add new language versions directly within the kata editor. This approach is strongly discouraged for the following reasons:

- such language versions cannot be properly reviewed before it's published so it misses the opportunity for bugs and issues to be found by reviewers,
- maintenance of a language version created this way is difficult because it cannot be improved by forking. It can be changed only with the kata editor which is available only to power users.

### Reward

Translators are rewarded for their contribution upon approval of their translation:

- The translator earns rank progress for the individual language in which the translation was authored in, equivalent to solving the kata in that language.
- The translator gains twice the [honor](/references/gamification/honor/#other) compared to solving the kata.
- If the kata is in beta, rank and honor rewards are granted upon approval of the kata itself.
- The translator is listed as a [coauthor (TODO: explain)]() of the kata.

_WARNING: Currently, the co-author flag seems to be affected by a bug which only rewards translators with honor and rank progress if they have not been listed as a co-author of the kata prior to the approval of the translation._

## Reviewing and working with pending translations

When a translation is published, it's put into a pending state and awaits for review and approval. Sufficiently privileged users can search for them, review them, and request some fixes, approve, or reject them. Currently, pending translations can be found in one of following ways:

- Reading through the kata discourse and searching for posts where translators announced the fact that they published a translation. Translators are encouraged to post a message labelled as **Suggestion** in the kata discourse with a link and information about the language of the translation, so others could find it easily.
- Navigating to `https://www.codewars.com/kata/kata-id/translations` page lists all accepted and pending translations of a kata.
- A small group of users has been granted the privilege of accessing the page with a list of all pending translations eligible for approval by them. This is the most convenient way of searching for pending translations, but not available to every user at this moment.

### Reviewing a translation

Before a pending translation is accepted and a new language version becomes available for a kata, it needs to be reviewed and determined whether it holds up to Codewars quality standards. When reviewing a translation, users can perform the following steps:

- **Reading the code and description**.
- **Running the tests** against _other_ solutions along with the reference solution. Unfortunately, testing solutions to a proposed translation other than the reference solution is currently rather cumbersome. One possibility is to fork the translation, replace the reference solution with your solution, run the tests and discard the fork afterwards. Another way is to create a new kumite from scratch and copy/paste code snippets from the translation under review to your kumite.
- **Reading the comments** to check if there are any remarks from other reviewers and whether they still hold or were addressed appropriately. Unfortunately, comments under translations cannot be labelled as an **Issue** or **Suggestion** so there are no additional markers for the severity of the comment.
- **Verifying** if the translation holds to [translation authoring guidelines (TODO)]().

After a review is completed, the reviewer can finalize it with one of following actions:

- **Leaving a comment** with remarks, suggestions and issues which should be addressed by the translator.
- **Fixing problems found during the review**. The translation fork may be edited directly only by its author. If a user wants to make changes to a translation fork created by another user, they have to fork it first, edit the code, and publish the changes as a new fork.
- **Approving the translation**, which introduces a new language version to the kata available for solving.
- **Rejecting the translation** if it cannot be fixed.

### Approving a translation

Pending translation can be approved either by kata author, or users with [privilege to coauthor](/references/gamification/privileges/) who are not the publisher of the translation fork being approved, under following conditions:

- translation is older than a week, or
- kata author has been inactive for over a month.

When translation is approved, new language version is immediately available for other users to solve. There's also a honor reward, but remember that it's granted to the author of the **initial fork**, and not to the author of the fork which got finally accepted!

**NOTE:** currently, probably because of a bug, a user who _approves_ a translation is marked as **kata contributor**. Users with "contributor" flag seem to be affected by a bug which prevents them from getting any future points they would be rewarded for authoring activities on the kata they contributed to. Be aware that as a result, approving of a translation can cause you won't be eligible for any Honor points you would earn by translating, editing or fixing the kata in the future, unless the bug is fixed.

### Merge Issues

Oftentimes if two translations are created around the same time, they may both update the description. When approving the 2nd translation, the 1st approved translation will have already updated the description. This will cause a merge conflict which has to be resolved. You can do this by forking the 2nd translation and updating the description. `<<<<<<<<`, `=========` and `>>>>>>>>` merge labels will show up in the description to help identify where the merge issues are.

Once you have fixed the description merge issues you can publish the translation. If you are not the author then you will need to have someone else verify your changes and approve the translation.

### Rejecting a translation

Sometimes the best course of action is to simply reject a pending translation. Some possible reasons could be:

- translation is outdated and kata changed a lot since the translation has been published,
- translation is of bad quality and fixing it is too much work,
- some user authored newer, better translation and they cannot publish it because there can be only one pending translation per kata per language,
- there's a justified concern that someone might approve a translation of insufficient quality before its issues are fixed.

It's worth to note that rejected translations are not wasted work. They are still available in the system, can be forked and serve as a base for new translation, or its code can be simply copied and reused.

## Fixing existing language versions

Sometimes kata needs to be fixed because some issue was found: be it a bug in reference solution, tests, typos in description, or maybe some test cases need to be added. Fixes and improvements to every kata can be done in one of two ways:

- If language version was created as a translation, its most recent version can be forked, modified, and published. Now it needs to go through normal translation review process and wait until other user approves it. However, language versions which were created directly with kata editor (including initial language version of the kata) cannot be forked.
- Language version can be modified directly with kata editor. This way of fixing kata is discouraged unless absolutely necessary, because it has some drawbacks:
  - it causes merge conflicts for modified snippets if someone would want to publish a fork of this language version some time in the future,
  - direct edits are not a subject to the review process and other users cannot verify introduced changes.
