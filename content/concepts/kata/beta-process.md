---
kind: concept
sidebar: explanation-kata
---

# Kata Beta Process


Each kata is crafted for and by the community. Kata are created by other users rewarded with kata authoring privilege. When a kata is published by an author (or Sensei), it will go into a beta process where the community can help test and provide quality assurance feedback and cast a vote for its difficulty ranking. The feedback during this process is vital to making sure all kata are of the highest quality.

_TBD: this page was imported from old CW wiki and needs to be reviewied/redacted._

## Reward for Reviewers

You earn an _additional_ +2 honor for every Beta Kata you solve, in order to reward you for taking the risk of solving a Kata with potential issues. Then, leaving a satisfaction vote and rank assessment on said Beta Kata rewards you with +1 _extra_ honor _each_, in order to reward you for taking the time to leave valuable feedback on said Kata. Finally, if the Kata is approved, you will also receive the honor and rank progress for official Kata. **Therefore, it is in everyone's interest that you leave your satisfaction vote and rank assessment on every Beta Kata you have completed.**

## Beta Process Voting

Users with [sufficient privileges](/references/gamification/privileges/#privileges) are able to contributie to the beta process and vote on kata approval and ranking.

This voting happens on the discussion/solutions page after attempting or completing a kata.
Each vote that notes an issue should be accompanied by a comment explaining the specific fix or problem.
Similarly, while a kata sensei can mark an estimated rank, each rank vote will help adjust it's difficulty.


TBD

## Kata Approval

After a kata has received enough approval votes from the community,
fixed any issues, and reached a consensus on it's ranking,
it's ready for the final step to come out of beta.

At this point a moderator will review it to make sure all this criteria has been met,
and release it as an official kata onto the site!

As you get more katas approved, you'll become established as an experienced kata maker, and less votes will be needed for future katas to be approved.

The following table lists the requirements for a beta kata to be able to be approved:

<table>
<thead>
<tr>
<th>Level</th>
<th>Satisfaction %</th>
<th colspan="4">Required Votes by # of Approved Katas</th>
</tr>
<tr>
<th></th>
<th></th>
<th>&lt;10</th>
<th>&lt;20</th>
<th>&lt;30</th>
<th>30+</th>
</tr>
</thead>
<tbody>
<tr>
<td>White</td>
<td>80+</td>
<td>12</td>
<td>10</td>
<td>8</td>
<td>6</td>
</tr>
<tr>
<td>Yellow</td>
<td>80+</td>
<td>10</td>
<td>8</td>
<td>7</td>
<td>5</td>
</tr>
<tr>
<td>Blue</td>
<td>75+</td>
<td>8</td>
<td>6</td>
<td>5</td>
<td>4</td>
</tr>
<tr>
<td>Purple</td>
<td>70+</td>
<td>5</td>
<td>4</td>
<td>3</td>
<td>3</td>
</tr>
</tbody>
</table>

## Auto-Retire

Low quality kata are automatically retired. Current rules are:

1. If 4 or more votes and satisfaction percent is `0` (4+ consecutive "Not Satisfied")
2. If `n` or more votes and satisfaction percent is less than or equal to the half of the required satisfaction (see above). `n` is the same as the number of votes needed to be approved (see above).

This feature needs improvement and any feedback is appreciated. Please comment on [#1672](https://github.com/Codewars/codewars.com/issues/1672).
