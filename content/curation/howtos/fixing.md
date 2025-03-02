---
title: How to Fix a Kata
---

Codewars kata, like any code, may need bug fixing, improvements, or update to match new versions of runtimes or dependencies. That's why content maintenance activities are important and sometimes can require significant amounts of effort.

## Finding a kata to fix

First step to fix a Codewars kata is to determine what kata need fixing in the first place. Codewars platform provides a couple of ways to find challenges which require maintenance:

- On the [kata search page](https://www.codewars.com/kata/my-languages), every entry shows the amount of pending issues (if it has any).
- Posts on the home page [dashboard](https://www.codewars.com/dashboard/discourse/issues) can be filtered to display most recently reported issues,
- Discourse page of every kata can be filtered for posts labeled as `ISSUE`,
- The [kata search page](https://www.codewars.com/kata/) can be used to find challenges which have not been updated to the latest version of their available languages. For example, to find kata with tests which need to be updated to the latest available version of JavaScript, filter for language: Javascript, and manually add the parameter `&outdated=1` to the url (example link to find all [outdated JavaScript kata](https://www.codewars.com/kata/search/javascript?q=&order_by=sort_date%20desc&outdated=1)).
- The [`codewars/content-issues`](https://github.com/codewars/content-issues) Github repository hosts [wiki pages](https://github.com/codewars/content-issues/wiki) with lists of kata which need an update, and [isseue board](https://github.com/codewars/content-issues/issues) with tickets related to maintenance of kata.

## Creating a fork

New fork can be initiated by opening kata details page, selecting one of available languages, and clicking the `Fork` button at the top right corner. It opens the fork editor, and all editors are filled with the current state of corresponding code snippets in the selected language, and description. This code can be edited and used as a starting point for a fix.

:::warning Do not fork outdated forks
Fixes should not be applied by starting with a fork of an already approved fork. For example, when an issue is reported with a JavaScript version of a kata, it should be fixed by forking the current state of the kata, and not by forking the original, approved JavaScript translation, or the most recent JavaScript translation. It is possible that the kata had been modified after the translation was published and approved, and forking an old fork can revert changes applied afterwards. 
:::

:::warning Prefer forks to direct edits
Applying fixes by forks is preferred over updates done with the kata editor. Forks can be reviewed and reviewers can share their remarks before approving the fix.
:::

### Scope of a fix

A single Codewars challenge can be affected by more than one problem. It can be tempting to fix as many things as possible in one go, or even rewrite tests completely, but it is not always the best approach. Forks with extensive changes require a lot of effort to create, can be difficult to review, and it is more difficult for reviewers to determine what they attempt to fix and find potential bugs. Forks which are difficult to review can stay not reviewed, and not approved, for a long time. A user has to find a good balance between fixes with large amount of changes attempting to fix many things at once, and fixes with small amount of changes, which are easy to review and approve. Applying a series of small fixes can sometimes be easier than applying one fix for many issues at once.  

It is recommended to write a short post on a published fork with information what problems it addresses.

### Announcing the fork

When a fork with a fix is ready, it needs to be published for a review, and potentially merged. To notify reviewers about a fork ready for review, it can be helpful to announce the fix with a message posted in the discourse section of the kata (labeled as `SUGGESTION`), and with a message posted to the `#fixing` channel of Codewars Discord. 

### Review of a fork

After a fork with a fix is published and announced, it should draw attention of reviewers who will evaluate it and either approve it, or ask for further improvements.

Users with sufficient privileges can approve their own forks without waiting for a review.

When a reviewer requests further improvements, they can be added to the same fork. It is not necessary to fork a fork if it hasn't been approved or rejected. However, if the fork has been merged and was found to require further improvements, it needs to be re-forked. Editing an approved fork is possible, but there is no way to merge the new changes into the kata.

### Resources on fixing

Users who are interested with fixing Codewars challenges have some resources at their disposal:

- [Codewars documentation](https://docs.codewars.com/),
- [Authoring examples](https://www.codewars.com/collections/authoring-examples) collection,
- Codewars Discord and its `#fixing` channel.

### Community resources

:::info Note
Community resources are created and maintained by Codewars users not affiliated with the platform. These resources are not maintained by Codewars, and can turn out to be outdated or not functional.
:::

- [Codot](https://github.com/hobovsky/codot-client/blob/main/README.md#fixing-forks-beta) an AI-powered assistant and its [fork refactoring](https://github.com/hobovsky/codot-client/blob/main/README.fixing.md#fixing-forks-with-codot-beta) function.
