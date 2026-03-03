---
title: How to Fix a Kata
---
##### Updated February 2026

Codewars kata, like any code, may need bug fixes, improvements, or updates to match new versions of runtimes or dependencies. That's why content maintenance activities are important and sometimes require significant effort.

# **Triage & Fixing Workflow**

Before using the editor to fork and fix an Approved kata, you must follow this tiered workflow to determine the correct triage level and consult with the community.

### **Step 1: Identifying Issues**

Issues are typically flagged through three primary channels:

* **Automated Flagging:** Tooling (like Cody) that detects beta kata issues or flags tests running on outdated language versions and automatically reports them to the [Kata Issues thread in the Discord fixing channel](https://discord.com/channels/846624424199061524/1419048924760641566) .  
* **Community Reports:** User submissions via Codewars Kata Discourse (using the "issue" or "suggestion" tags) and discussions in the `#fixing` channel on Discord.  
* **Content Audits:** Routine reviews of older kata established before our modern authoring guidelines were put in place.

  ### 

### **Step 2: The Triage Table**

Determine the severity of the issue to apply the correct maintenance protocol: 

| Tier | Classification | Description | Recommended Action |
| ----- | ----- | ----- | ----- |
| **1** | **Minor Fix** | A small typo, ambiguous description, or minor test adjustment that does not alter the core logic. | Apply the fix via a fork and request approval; focus on minimizing disruption. |
| **2** | **Moderate Fix** | A bug in the tests or missing edge-cases that improves overall correctness but may invalidate some existing solutions. | Announce your intent to fix. Consider offering a grace period before merging to allow users time to update their solutions. |
| **3** | **Structural / Conceptual** | A mis-specified kata or fundamental design flaw requiring completely rewritten tests or descriptions. | Evaluate whether it can be salvaged. If rewriting preserves the original spirit, treat it as a Tier 2 fix. If not, initiate **Retirement** (Requires SB approval). |
| **4** | **Duplicate / Obsolete** | A kata that directly duplicates an existing challenge or solely targets an outdated language version. | Initiate **Retirement** and link the deprecated kata to the canonical version. |

  ###
### **Step 3: Decision and Approval (For Tiers 2, 3, & 4\)**

* **Community Consultation:** Open a discussion thread in the Discord `power-users` or `#fixing` channel summarizing the proposed changes. Solicit feedback for a period of **7 to 14 days**, depending on the complexity of the issue.  
* **Final Determination:** The Community PM (SB) and Strategic Lead (MC) will review the community's input and make the final call on structural changes or retirements.  
* **Version Control:** Avoid building upon outdated forks. Always base your fixes on the most current published state of the kata.
  ###
### **Step 4: Implementation Requirements**

When merging a fix, you must adhere to the following rules:

1. **Scope Control:** Address *only* the specific issue at hand. Do not bundle unrelated stylistic changes into a single fix.  
2. **Change Logging:** You **must** append a clearly dated Change Log to the bottom of the Kata Description to inform users why their solution may suddenly show as outdated:  
   `**Update [YYYY-MM-DD]:** [Brief description of the fix, e.g., Added missing edge-case tests to align with modern standards.]`

  ###
## Finding a kata to fix

The first step to fixing a Codewars kata is determining which kata need fixing in the first place. The Codewars platform provides several ways to find challenges that require maintenance:

- The [Kata Issues thread in the Discord fixing channel](https://discord.com/channels/846624424199061524/1419048924760641566) where our community bot, Cody flags and automatically reports kata issues. 
- On the [kata search page](https://www.codewars.com/kata/my-languages), every entry shows the number of pending issues (if any).
- Posts on the home page [dashboard](https://www.codewars.com/dashboard/discourse/issues) can be filtered to display the most recently reported issues.
- The discourse page of every kata can be filtered for posts labeled as `ISSUE` or `SUGGESTION`.
- The [kata search page](https://www.codewars.com/kata/) can be used to find challenges that have not been updated to the latest version of their available languages. For example, to find kata with tests that need to be updated to the latest available version of JavaScript, filter for language: JavaScript, and manually add the parameter `&outdated=1` to the URL (example link to find all [outdated JavaScript kata](https://www.codewars.com/kata/search/javascript?q=&order_by=sort_date%20desc&outdated=1)).
- The [`codewars/content-issues`](https://github.com/codewars/content-issues) GitHub repository hosts [wiki pages](https://github.com/codewars/content-issues/wiki) with lists of kata that need an update and an [issue board](https://github.com/codewars/content-issues/issues) with tickets related to kata maintenance.

## Creating a fork

A new fork can be initiated by opening the kata details page, selecting one of the available languages, and clicking the `Fork` button in the top right corner. This opens the fork editor, where all editors are populated with the current state of the corresponding code snippets in the selected language and description. This code can be edited and used as a starting point for a fix.

:::warning Do not fork outdated forks
Fixes should not be applied by starting with a fork of an already approved fork. For example, when an issue is reported with a JavaScript version of a kata, it should be fixed by forking the current state of the kata, not by forking the original, approved JavaScript translation or the most recent JavaScript translation. The kata may have been modified after the translation was published and approved, and forking an old fork can revert changes applied afterward. 
:::

:::warning Prefer forks to direct edits
Applying fixes via forks is preferred over updates done using the kata editor. Forks can be reviewed, and reviewers can share their remarks before approving the fix.
:::

### Scope of a fix

A single Codewars challenge can be affected by multiple problems. It may be tempting to fix as many things as possible in one go or even rewrite tests completely, but this is not always the best approach. Forks with extensive changes require significant effort to create, can be difficult to review, and make it harder for reviewers to determine what they attempt to fix and identify potential bugs. Forks that are difficult to review may remain unreviewed and unapproved for a long time. 

A user must find a balance between making large-scale fixes that attempt to address many issues at once and smaller, incremental changes that are easier to review and approve. Sometimes, applying a series of small fixes is more effective than attempting to fix multiple issues in a single fork.  

It is recommended to write a short comment in the discourse of a published fork explaining what problems it addresses.

### Announcing the fork

When a fork with a fix is ready, it needs to be published for review and potential merging. To notify reviewers about a fork ready for review, it can be helpful to announce the fix with a message posted in the discourse section of the kata (labeled as `SUGGESTION`) and in the `#fixing` channel of the Codewars Discord. 

## Review of a fork

After a fork with a fix is published and announced, it should attract the attention of reviewers who will evaluate it and either approve it or request further improvements.

Users with sufficient privileges can approve their own forks without waiting for a review.

When a reviewer requests further improvements, they can be added to the same fork by its author. It is not necessary to fork a fork if it hasn't been approved or rejected. However, if the fork has already been merged and further improvements are required, it must be re-forked. Editing an approved fork is possible, but there is no way to merge the new changes into the kata.

## Pitfall: editing descriptions

Updading a kata description, with a fork or in any other way, renders all pending translations and update forks of this kata impossible to approve due to description merge conflicts. While unfortunate, it is not a serious impediment for fixing activities, because merge conflicts are relatively [easy to fix](/curation/translation/#merge-issues). 

## Resources on fixing

Users interested in fixing Codewars challenges have several resources at their disposal:

- [Codewars documentation](https://docs.codewars.com/)
- [Authoring examples](https://www.codewars.com/collections/authoring-examples) collection
- [Codewars Discord](https://discord.gg/gy2PBSuTyx) and its `#fixing` channel
