---
sidebar: curating
prev: /curating/guidelines/
next: /curating/guidelines/translation/
---


# Kata Curating Guidelines

This article contains a set of guidelines, which can be used by reviewers to determine whether a kata meets quality requirements to be approved and become available for users to train on. They were collected to help ensure that kata are of sufficient quality and users' experience will be as good as possible.

## Review

- **The kata must be reviewed before it's approved.** See [Reviewing a Kata HOWTO][howto-review-kata] for more details on how to review a kata.
- **The review should be as complete as possible,** including all applicable steps mentioned in [Reviewing a Kata HOWTO][howto-review-kata]. If the reviewer is not able to perform a complete review, they should ask other users for help.
- **Conformity to [kata authoring guidelines][guidelines-authoring-kata] should be verified.** All applicable guideliness should be followed by the author.


## Feedback

- **The satisfaction rating should indicate quality of kata as a concept, not its current state of condition in terms of open issues which can be fixed.** If you think the kata itself is valuable but you simply have some issues with it, then you should select "Somewhat" and create an issue instead. If you think the kata is really great, other than the issues, then you can choose "Very". Do not choose "None" simply because the kata has an issue but it is otherwise a good kata.
- **When casting a vote for difficulty rating, reviewers should consider broader picture than just their own skills.** It's true that the way how difficulty rankings are handled by Codewars is far from perfect, and not balanced well. It's also true that difficulty level is not easy to estimate, because what is easy for one, can be difficult for another, and vice versa. The way how difficulty ranking works will be hopefully improved in the future, but until then, your votes should not throw the system deliberately off balance.


## Approval

- A kata can be approved only if the review confirms that it is of sufficient quality, it holds to all applicable quality guidelines, and all reported issues have been addressed.
- **Approvers should keep responsibility for all issues in the kata they approved.** You should actively maintain all problems which slipped through your review and ended up in an approved kata: fix issues, consider suggestions, answer questions.


## Maintenance

- **Reported issues and bugs should be fixed.** When for some reason a reported issue is not going to be fixed, clearly explain why. If some issue is reported repeatedly, at least put a note in the description how to work around it. Do not mark valid issues as resolved, leave them for others to fix.
- **It's allowed for a fix to invalidate existing solutions.** Existing solutions should be considered, but also should not be used as an argument for bad quality. If possible, backward compatible fixes are preferred, but it's not necessary if they address a severe bug or a serious problem with the kata. Consider the maturity of the kata and severity of the issue when introducing a fix which is not backwards compatible:
  - For existing kata with thousands of solutions, code style issues (for example name of solution function) probably can wait.
  - For a kata which is still in beta, all solutions can be invalidated if necessary.
- **Kata should not be hijacked if its author is active and has not abandoned it.** It's discouraged to modify kata of other authors while they are still active and actively maintain their content. However, it's perfectly allowed to modify a kata if:
  - Its author is no longer active,
  - The author is active, but does not maintain their content,
  - Identified issue is of high severity and causes problems to users training on the affected kata.


[guidelines-authoring-kata]: /authoring/guidelines/kata/
[howto-review-kata]: /curating/kata/?review