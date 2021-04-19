---
title: Criteria for Kata Approval and Retirement
sidebar_label: Criteria for Approval and Retirement
kind: reference
---

## Eligibility for Approval

As an author gets more katas approved, they become established as an experienced kata maker, and less votes will be needed for their future kata to be approved. The following table lists the requirements for a beta kata to be able to be approved:

<table>
<thead align="center">
<tr>
<th align="left">Average assessed rank</th>
<th>Required satisfaction %</th>
<th colspan="4">Required votes<br/>(by number of author's approved kata)</th>
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
<tbody align="center">
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

To determine whether a kata is eligible for approval, the following procedure is used:

1. There should be no pending issues.
1. `votes count` is calculated as the total amount of satisfaction votes cast on a kata.
1. `votes score` is calculated as the sum of votes multiplied by the [voting power](/gamification/privileges/) of the user.
1. `required votes` and minimum satisfaction rating are determined from the table above.
1. The kata is approvable when the requirement for minimum satisfaction rating is met and one of the following conditions is satisfied: `votes count >= required votes` or `votes count >= 3 AND votes score >= required votes`.

To be able to approve a kata, the user needs to have [`Approve Kata` privilege](/gamification/privileges/).

## Auto-Retire

Low-quality kata are automatically retired. Current rules are:

1. If 4 or more votes and satisfaction percent is `0` (4+ consecutive "Not Satisfied" as the only votes)  
1. If a kata collected enough votes to be approved (see above) and the satisfaction rate is less than or equal to half of the required satisfaction.

This feature needs improvement and any feedback is appreciated. Please comment on [#1672](https://github.com/codewars/codewars.com/issues/1672).
