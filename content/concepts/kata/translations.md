---
kind: concept
sidebar: explanation-kata
---

# Translations

Codewars platform supports a variety of [programming languages](/languages/), and every kata can have more than one language version available. Users can choose any language available to solve the kata, they can also solve one kata in as many languages they wish. After gaining some experience and sufficient privileges, users are allowed to create translations to make kata available for broader group of users.

## Training on a language version

When user picks a kata to train on and enters kata trainer view, they can choose the language they want to practice. Some kata are available in many languages, some just in a few, and some only in one or two. If a kata is not available in your favorite language, then unfortunately you have to select another language you know, or wait until someone creates a translation. Completing a kata in only one language is enough to mark the kata as solved, but still, there is something to gain from completing it in other languages too:

- your [language rank](/concepts/gamification/ranks/#user-rank-breakdown) progresses for every language you solved the kata with (but Honor and overall rank progress are awarded only once per kata)
- you unlock the access to solutions of other users in this language
- you can view full test suite used to test user attepts against their solutions

## Creating a translation

To be able to translate a kata to other languages, user has to complete the kata in at least one other language. Once you have completed a kata, there will be a new choice within the languages menu to add a new language.

![Language Menu](https://www.evernote.com/l/AAW0GaebQllDBb_YS-AfeaUiwq5PoxaDPIoB/image.png)

This will take you to the translations page where you can view existing translations and create new ones.

After translation is approved it becomes available for others to solve, and its author is granted a reward:

- Rank for the language of the translation increases just as if author solved the kata,
- Author gains twice as much [Honor points](/references/gamification/honor/#other) as compared to solving the kata,
- If the kata is in beta, rank and Honor rewards are granted once it gets approved and its rank assigned
- Author is marked as [coauthor (TODO: explain)]() of translated kata.

_*WARNING:* Currently, "Coauthor" flag seems to be affected by a bug which prevents coauthors of a kata from collecting a reward for its translations. Until it gets fixed, users are rewarded for a translation only if they are not a coauthor of the translated kata yet._

Translation does not have to be finished in one go. It can be saved and kept in draft state as long as necessary. When translator considers it ready, it can be published and put in a "pending" state. It becomes available for other users for review, and can be approved, edited with fixes if necessary, or rejected.

## Pending translations

TBD

- `Translations` tab on a kata
- `Translations` page available to "mods"

## Reviewing a translation

TBD

- HOWTO properly review

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
