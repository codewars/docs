---
kind: concept
sidebar: explanation-kata
---

# Kata Beta Process

Each kata is crafted for and by the community. Kata are created by other users rewarded with kata authoring privilege. When a kata is published by an author (or Sensei), it will go into a beta process where the community can help test and provide quality assurance feedback and cast a vote for its difficulty ranking. The feedback during this process is vital to making sure all kata are of the highest quality.

## Reward for Reviewers

You earn an _additional_ 2 honor for every Beta Kata you solve, in order to reward you for taking the risk of solving a Kata with potential issues. Then, leaving a satisfaction vote and rank assessment on said Beta Kata rewards you with 1 _extra_ honor _each_, in order to reward you for taking the time to leave valuable feedback on said Kata. Finally, if the Kata is approved, you will also receive the honor and rank progress for the official Kata. Therefore, it is in everyone's interest that you leave your satisfaction vote and rank assessment on every Beta Kata you have completed.

## Steps of Beta Process

Some of the steps are available only after earning the required privilege, but every user can help reviewing a kata in some way.

### Attempting the Kata

Training on a kata and solving it is the first step to verify its quality, but also a very effective one. Reading through the description, users can check if it's clear enough, or something needs to be reworded or explained in a clearer way. When tests are run, reviewers can verify if they are sufficient, or whether assertion messages are clear and easy to understand. Users can check whether their experience with the kata meets all [Kata authoring best practices](/recipes/authoring-howtos/create-kata/best-practices/). When any issues are found, users can raise issues or suggest changes in kata discourse.

While solving a beta kata, users are encouraged to go beyond just finding and submitting a working solution. It's very helpful when people solving the kata do some additional effort and test the tests themselves a bit: verify if test suite handles incorrect answers gracefully (for example, if it does not crash on `null`s), if assertion messages are clear enough, etc.

When kata is successfully solved, user unlocks further steps of the review process.

### Satisfaction vote

Users with [sufficient privileges](/references/gamification/privileges/#privileges) are able to vote on kata quality. They can cast one of three possible votes:

- **Satisfied**
- **Somewhat satisfied**
- **Not satisfied**

If you think the kata itself is valuable but you simply have some issues with it, then you should select "Somewhat" and create an issue instead. If you thought the kata is really great, other than the issues, then you can choose "Very". Please do not choose "None" simply because the kata has an issue but it is otherwise a good kata. The satisfaction rating is meant to indicate quality of kata as a concept, not its current state of condition in terms of open issues which can be fixed.

### Difficulty rating vote

Kata author assigns initial difficulty rank estimation to their kata, but they do not decide on its final rank. Difficulty rank is estimated from votes cast by users who solved the kata while it's in beta phase. This means that every user who solved a beta kata can give their own opinion on its difficulty, helping in determining its final rank.

### Reviewing Code

Users with sufficient privileges can enter the kata editor and view the code of all code snippets. Reading through them is a great way to find potential issues with tests, examples, or reference solution. Reviewers can check insides of the kata and verify whether it stands up to [Kata authoring best practices](/recipes/authoring-howtos/create-kata/best-practices/). Any discovered problems can be fixed right away in the code, or reviewers can raise issues or suggest improvements in the kata discourse.

### Reviewing Issues, Suggestions and Questions

Some beta kata, especially ones created a long time ago, can have some issues or suggestions which are still pending, but have been already fixed or are not applicable anymore because the kata has changed. It's very helpful when such old issues are reviewed and marked as resolved if they are not valid anymore. It can also happen that there are posts in the kata discourse which report some problem, but are not labelled appropriately. It's generally a good idea to re-raise such issues as new posts with the correct label, as it should help other users to find them and eventually fix them.

## Kata Approval and Retirement

After a kata has received [enough approval votes](/references/kata-ranking/approval-retire-criteria/) from the community, all issues are fixed, and the community reached a consensus on its ranking, it's ready for the final step to come out of beta. At this point, sufficiently privileged users can review it to make sure all these criteria have been met (see [How to Review a Beta Kata](/recipes/review-beta/)), and release it as an official kata onto the site!
