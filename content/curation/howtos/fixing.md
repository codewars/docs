---
title: How to Fix a Kata
---

Codewars kata, like any code, may need bug fixes, improvements, or updates to match new versions of runtimes or dependencies. That's why content maintenance activities are important and sometimes require significant effort.

## Finding a kata to fix

The first step to fixing a Codewars kata is determining which kata need fixing in the first place. The Codewars platform provides several ways to find challenges that require maintenance:

- On the [kata search page](https://www.codewars.com/kata/my-languages), every entry shows the number of pending issues (if any).
- Posts on the home page [dashboard](https://www.codewars.com/dashboard/discourse/issues) can be filtered to display the most recently reported issues.
- The discourse page of every kata can be filtered for posts labeled as `ISSUE`.
- The [kata search page](https://www.codewars.com/kata/) can be used to find challenges that have not been updated to the latest version of their available languages. For example, to find kata with tests that need to be updated to the latest available version of JavaScript, filter for language: JavaScript, and manually add the parameter `&outdated=1` to the URL (example link to find all [outdated JavaScript kata](https://www.codewars.com/kata/search/javascript?q=&order_by=sort_date%20desc&outdated=1)).
- The [`codewars/content-issues`](https://github.com/codewars/content-issues) GitHub repository hosts [wiki pages](https://github.com/codewars/content-issues/wiki) with lists of kata that need an update and an [issue board](https://github.com/codewars/content-issues/issues) with tickets related to kata maintenance.

## Creating a fork

A new fork can be initiated by opening the kata details page, selecting one of the available languages, and clicking the `Fork` button at the top right corner. This opens the fork editor, where all editors are populated with the current state of the corresponding code snippets in the selected language and description. This code can be edited and used as a starting point for a fix.

:::warning Do not fork outdated forks
Fixes should not be applied by starting with a fork of an already approved fork. For example, when an issue is reported with a JavaScript version of a kata, it should be fixed by forking the current state of the kata, not by forking the original, approved JavaScript translation or the most recent JavaScript translation. The kata may have been modified after the translation was published and approved, and forking an old fork can revert changes applied afterward. 
:::

:::warning Prefer forks to direct edits
Applying fixes via forks is preferred over updates done with the kata editor. Forks can be reviewed, and reviewers can share their remarks before approving the fix.
:::

### Scope of a fix

A single Codewars challenge can be affected by multiple problems. It may be tempting to fix as many things as possible in one go or even rewrite tests completely, but this is not always the best approach. Forks with extensive changes require significant effort to create, can be difficult to review, and make it harder for reviewers to determine what they attempt to fix and identify potential bugs. Forks that are difficult to review may remain unreviewed and unapproved for a long time. 

A user must find a balance between making large-scale fixes that attempt to address many issues at once and smaller, incremental changes that are easier to review and approve. Sometimes, applying a series of small fixes is more effective than attempting to fix multiple issues in a single fork.  

It is recommended to write a short post on a published fork explaining what problems it addresses.

### Announcing the fork

When a fork with a fix is ready, it needs to be published for review and potential merging. To notify reviewers about a fork ready for review, it can be helpful to announce the fix with a message posted in the discourse section of the kata (labeled as `SUGGESTION`) and in the `#fixing` channel of the Codewars Discord. 

### Review of a fork

After a fork with a fix is published and announced, it should attract the attention of reviewers who will evaluate it and either approve it or request further improvements.

Users with sufficient privileges can approve their own forks without waiting for a review.

When a reviewer requests further improvements, they can be added to the same fork. It is not necessary to fork a fork if it hasn't been approved or rejected. However, if the fork has already been merged and further improvements are required, it must be re-forked. Editing an approved fork is possible, but there is no way to merge the new changes into the kata.

### Resources on fixing

Users interested in fixing Codewars challenges have several resources at their disposal:

- [Codewars documentation](https://docs.codewars.com/)
- [Authoring examples](https://www.codewars.com/collections/authoring-examples) collection
- Codewars Discord and its `#fixing` channel

### Community resources

:::info Note
Community resources are created and maintained by Codewars users not affiliated with the platform. These resources are not maintained by Codewars and may become outdated or non-functional.
:::

- [Codot](https://github.com/hobovsky/codot-client/blob/main/README.md#fixing-forks-beta), an AI-powered assistant, and its [fork refactoring](https://github.com/hobovsky/codot-client/blob/main/README.fixing.md#fixing-forks-with-codot-beta) function.
