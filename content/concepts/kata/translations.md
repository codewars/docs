---
kind: concept
sidebar: explanation-kata
---

# Translations

Codewars supports a variety of [programming languages][languages] and every kata can be available in more than one language. Users may choose any language available to solve the kata and do so in as many languages as they wish. After gaining the required privileges, users who solved the kata are allowed to create or review translations to make the kata available in new languages, therefore for a larger audience.

## Training on a selected language

When the user enters the trainer to solve a kata, they can select a language to train on. Some kata are available in many languages, some in just a few, and some only in one or two. If a kata is not available in your favorite language, you must select another language you are familiar with or wait until a translation in your preferred language is created and approved.
Completing a kata in only one language is enough to mark the kata as solved, however, there are things to gain from completing it in other languages too:

- Your [language rank][ranks-breakdown] progresses for every language you solved the kata with (but Honor and overall rank progress are awarded only once per kata).
- You unlock the access to solutions of other users in this language.
- You can view full test suite for completed languages (TODO: explain where).

## Creating a translation

To be able to translate a kata to other languages, the user has to complete the kata in at least one language. Once they have completed it, the option to add a new translation will appear in languages dropdown:

<div class="block dark:hidden">

![add translation](./img/add-translation_light.png)

</div>
<div class="hidden dark:block">

![add translation](./img/add-translation_dark.png)

</div>

This will take the user to the translations page where they can view existing translations (pending ones, approved and rejected) or create new ones.

Creating a new translation means writing code snippets required for every kata to have:

- **Example solution**, to show that it's possible to solve the kata.
- **Solution setup**, which works as a stub to work on for users training on the kata.
- **Sample tests**, with some initial test cases which can be expanded by the user training on a kata. Sample tests can also serve as an example how the solution is called.
- **Tests** which are run against user's solution when they consider their solution ready. All the tests run in this snipped must pass to consider the kata solved.
- **Preloaded** snippet, which contains code not visible to users, and availale for both sample tests and full tests.

The description is shared among all languages so changing it in your translation will change it for all languages. If you need to add some language specific information in the description, you can use Codewars specific extensions for Markdown formatting: [Sequential Code Blocks][sequential-code-blocks] or [Language Conditional Rendering][conditional-rendering].

The translation does not have to be finished in one go. It can be saved and kept in draft state as long as necessary. When the translator considers it ready, it can be published which places it in a "pending" state and becomes available for other users to review, approve, edit or reject. Only one translation may be published for any given kata and language. For example, if a published Java translation already exists then a new one may be created but not published until the former is rejected.

After a translation is published, the translator is advised to post a comment in the kata discourse with a link to their translation fork labelled as **Suggestion**. This will notify other users about the fact and it will be easier for others to find such pending translations.

**NOTE:** kata authors and users with appropriate privileges are able to add new translations directly within the kata editor. This approach is strongly discouraged for the following reasons:

- such translations cannot be properly reviewed before it's published so it misses the opportunity for bugs and issues to be found by reviewers,
- maintenance of a translation created this way is difficult because it cannot be improved by forking. It can be changed only with the kata editor which is available only to power users.

### Reward

Translators are rewarded for their contribution upon approval of their translation:

- The translator earns rank progress for the individual language in which the translation was authored in, equivalent to solving the kata in that language.
- The translator gains twice the [honor][honor-reference-other] compared to solving the kata.
- If the kata is in beta, rank and honor rewards are granted upon approval of the kata itself.
- The translator is listed as a [coauthor (TODO: explain)]() of the kata.

_WARNING: Currently, the co-author flag seems to be affected by a bug which only rewards translators with honor and rank progress if they have not been listed as a co-author of the kata prior to the approval of the translation._



[languages]: /languages/
[ranks-breakdown]: /concepts/gamification/ranks/#user-rank-breakdown
[sequential-code-blocks]: /references/markdown/extensions/#sequential-code-blocks
[conditional-rendering]: /references/markdown/extensions/#conditional-rendering
[honor-reference-other]: /references/gamification/honor/#other
