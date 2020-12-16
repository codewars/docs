---
sidebar: curating
prev: /curating/
next: /curating/translation/
---

# Curating a Kata

This article is meant to explain how to ensure a high quality of a kata before it leaves the beta state, and after it's accepted.

## Beta process and working with beta kata

Some of the steps are available only after earning the required privilege, but every user can help reviewing a kata in some way.

### Attempting the Kata

Training on a kata and solving it is the first step to verify its quality, but also a very effective one. Reading through the description, users can check if it's clear enough, or something needs to be reworded or explained in a clearer way. When tests are run, reviewers can verify if they are sufficient, or whether assertion messages are clear and easy to understand. Users can check whether their experience with the kata meets all expectations. When any issues are found, users can raise issues or suggest changes in the kata discourse.

When the kata is successfully solved, the user unlocks further steps of the review process.

### Satisfaction vote

Users with [sufficient privileges][privileges-reference] are able to vote on kata quality. They can cast one of three possible votes:

- **Satisfied**
- **Somewhat satisfied**
- **Not satisfied**

If you think the kata itself is valuable but you simply have some issues with it, then you should select "Somewhat" and create an issue instead. If you thought the kata is really great, other than the issues, then you can choose "Very". Please do not choose "None" simply because the kata has an issue but it is otherwise a good kata. The satisfaction rating is meant to indicate quality of kata as a concept, not its current state of condition in terms of open issues which can be fixed.

### Difficulty rating vote

Kata author assigns initial difficulty rank estimation to their kata, but they do not decide on its final rank. Difficulty rank is estimated from votes cast by users who solved the kata while it's in beta phase. This means that every user who solved a beta kata can give their own opinion on its difficulty, helping in determining its final rank.

### Review

Before a beta kata is accepted and becomes available for users to train on, it needs to be reviewed and determined whether it holds up to Codewars quality standards.
When reviewing a beta kata, users can perform the following steps:

- **Reading the code and description**.
- **Running the tests** against a couple of solutions, to verify if test suite gracefully handles some unexpected answers and eventual crashes of the solution, or if assertion messages are clear enough, etc.
- **Reading the comments** to check if there are any remarks from other reviewers and whether they still hold or were addressed appropriately.
- **Verifying** if the kata holds to [kata authoring guidelines][kata-authoring-guidelines].

After a review is completed, the reviewer can finalize it with one of the following actions:

- **Leaving a properly labeled comment** with remarks, suggestions and issues which should be addressed by the author.
- **Fixing problems found during the review,** if privileges allow.
- **Approving the kata**, if it fulfills all required conditions (see below).

Users performing a review should hold to [Kata Curating Guidelines][kata-curating-guidelines].

## Reward for Reviewers

Reviewers earn an _additional_ 2 honor for every Beta Kata they solve, in order to reward them for taking the risk of solving a Kata with potential issues. Then, leaving a satisfaction vote and rank assessment on said Beta Kata grants  1 _extra_ honor _each_, in order to reward the reviewer for taking the time to leave valuable feedback on said Kata. Finally, if the Kata is approved, the reviewer will also receive the honor and rank progress for the official Kata. Therefore, it is in everyone's interest to leave the satisfaction vote and rank assessment on every completed Beta Kata.


## Kata Approval

After a kata has received [enough approval votes][approval-criteria] from the community, all issues are fixed, and the community reached a consensus on its ranking, it's ready for the final step to come out of beta. At this point, sufficiently privileged users can enter the kata editor, assign its rank, and release it as an official kata onto the site!


## Kata retirement

After a kata gets [retired][approval-criteria], it's removed from a pool of beta kata and cannot be completed nor approved anymore. All users who completed it keep their points, but the kata itself is not listed anymore and can be accessed only by direct links. Retirement is final, retired kata cannot be un-retired.


## Maintenance

When some problem with a kata is identified, it should be reported as an Issue or Suggestion, so it could be tracked and eventually fixed.
Some kata, especially ones created a long time ago, can have some issues or suggestions which are still pending, but have been already fixed or are not applicable anymore because the kata has changed. It's very helpful when such old issues are reviewed and marked as resolved if they are not valid anymore. It can also happen that there are posts in the kata discourse which report some problem, but are not labelled appropriately. It's generally a good idea to re-raise such issues as new posts with the correct label, as it should help other users to find them and eventually fix them.
Sufficiently privileged users are encouraged to fix any reported problems and improve the quality of affected kata whenever possible.

[kata-curating-guidelines]: /curating/guidelines/kata/
[kata-authoring-guidelines]: /authoring/guidelines/kata/
[privileges-reference]: /references/gamification/privileges/#privileges
[approval-criteria]: /references/kata-ranking/approval-retire-criteria/
