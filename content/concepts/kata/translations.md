---
kind: concept
sidebar: explanation-kata
---

# Translations

Codewars platform supports a variety of [programming languages](/languages/), and every kata can have more than one language version available. Users can choose any language available to solve the kata, they can also solve one kata in as many languages they wish. After gaining some experience and sufficient privileges, users who solved the kata are allowed to create or review translations to make kata available for broader group of users.

## Training on a language version

When user picks a kata to train on and enters kata trainer view, they can choose the language they want to practice. Some kata are available in many languages, some just in a few, and some only in one or two. If a kata is not available in your favorite language, then unfortunately you have to select another language you are familiar with, or wait until someone creates a translation. Completing a kata in only one language is enough to mark the kata as solved, but still, there is something to gain from completing it in other languages too:

- Your [language rank](/concepts/gamification/ranks/#user-rank-breakdown) progresses for every language you solved the kata with (but Honor and overall rank progress are awarded only once per kata).
- You unlock the access to solutions of other users in this language.
- You can view full test suite used to test user attempts against their solutions.

## Creating a translation

To be able to translate a kata to other languages, user has to complete the kata in at least one other language. Once you have completed it, there will be a new choice within the languages menu to add a new language.

![Language Menu](https://www.evernote.com/l/AAW0GaebQllDBb_YS-AfeaUiwq5PoxaDPIoB/image.png)

This will take you to the translations page where you can view existing translations and create new ones.

Creating a new language version means writing code snippets required for every kata to have:

- **Example solution**, to show that it's possible to solve the kata.
- **Solution setup**, which works as a stub to work on for users training on the kata.
- **Sample tests**, with some initial test cases which can be expanded when training on a kata. Sample tests can also serve as an example how the solution is called.
- **Tests** which are run against user solution when they consider their solution ready. Tests collected in this snipped must pass to consider the kata solved.
- **Preloaded** snippet, which contains code not visible to users, and availale for both sample tests and full tests.

Description is shared among all language versions, so changing it in your translation will change it for all remaining languages. If you need to add some language specific information in the description, you can use Codewars specific extensions for Markdown formatting: [Sequential Code Blocks](/references/markdown/extensions/#sequential-code-blocks) or [Language Conditional Rendering](/references/markdown/extensions/#conditional-rendering).

Translation does not have to be finished in one go. It can be saved and kept in draft state as long as necessary. When translator considers it ready, it can be published and put in a "pending" state. It becomes available for other users for review, and can be approved, edited with fixes if necessary, or rejected.

## Reward

Translators are rewarded for their contribution after translation it is approved and becomes available for others to solve:

- Rank for the language of the translation increases just as if tranlator solved the kata in this language.
- Author gains twice as much [Honor points](/references/gamification/honor/#other) as compared to solving the kata.
- If the kata is in beta, rank and Honor rewards are granted once it gets approved and its rank assigned.
- Author is marked as [coauthor (TODO: explain)]() of translated kata.

_*WARNING:* Currently, "Coauthor" flag seems to be affected by a bug which prevents coauthors of a kata from collecting a reward for its translations. Until it gets fixed, users are rewarded for a translation only if they are not a coauthor of the translated kata yet._

## Pending translations

When a translation is published, it's put into a pending state and awaits for review and approval. Sufficiently privileged users can search for them, review them, and request some fixes, approve, or reject them. Currently, pending translations can be found in one of following ways:

- Reading through the kata discourse and searching for posts where translators announced the fact that they published a translation. Translators are encouraged to post a message labelled as **Suggestion** in the kata discourse with a link and information about the language of the translation, so others could find it easily.
- Navigating to `https://www.codewars.com/kata/kata-id/translations` page lists all accepted and pending translations of a kata.
- A small group of users has been granted the privilege of accessing the page with a list of all pending translations eligible for approval by them. This is the most convenient way of searching for pending translations, but not available to every user at this moment.

## Reviewing a translation

Before pending translation is accepted and new language version becomes available for a kata, it needs to be reviewed and determined whether it keeps up to Codewars quality standards. When reviewing a translation, users can perform following steps:

- reading the code and description
- running tests
- reading comments
- verifying if translation holds to [translation authoring guidelines (TODO)]()

After a review is completed, the reviewer can finalize it with one of following actions:

- leaving a comment with remarks
- approving the translation
- rejecting the translation

## Aproving a translation

TBD

- who can approve
- Approver is marked as coauthor

### Merge Issues

Oftentimes if two translations are created around the same time, they may both update the description. When approving the 2nd translation, the 1st approved translation will have already updated the description. This will cause a merge conflict which will need to be resolved. You can do this by forking the 2nd translation and updating the description. `<<<<<<<<`, `=========` and `>>>>>>>>` merge labels will show up in the description to help identify where the merge issues are.

Once you have fixed the description merge issues you can publish the translation. If you are not the author then you will need to have someone else verify your changes and approve the translation.

## Rejecting a translation

## Forking a translation

Code Warriors can fork a translation to improve it and help it get approved faster. However they will not receive rank or honor progression, only the original translator will.
