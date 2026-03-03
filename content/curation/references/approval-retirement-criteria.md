---
title: Criteria for Kata Approval and Retirement
sidebar_label: Criteria for Approval and Retirement
tags: [reference]
---
##### Updated February, 2026
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
1. If a kata needs 10 or more "Very Satisfied" votes in a row to reach the level of satisfaction required for approval.

This feature needs improvement and any feedback is appreciated. Please comment on [#1672](https://github.com/codewars/codewars.com/issues/1672).

### **Retiring Approved Content**

If a kata falls into Tier 3 (Structural Failure) or Tier 4 (Obsolete/Duplicate) and cannot be salvaged without invalidating most solutions or altering the original concept, it must be retired.

**The Manual Retirement Process:** Because there is currently no automated "Retire" button for approved content, Moderators & Admins must follow these steps (Note: only admins have the permission to retire a kata on the platform but moderators must provide admin with a kata retirement requirements listed below)  :

1. **Log the Decision (Done by Moderators)**

Log the retirement and the rationale in the internal community channel/thread/spreadsheet for transparency. This is done by the moderators and should contain the following;

- **Update Description:** Write the description to explicitly explain *why* it was retired.  
- **Link Replacements:** Provide a hyperlink to the new, canonical kata (if applicable).

2. **Retire the Kata on the Platform (Done by Admins)**  
   This is carried out by an admin (Andela staff)  with the following steps:  
- **Mark as Retired:** Adjust tags/status so it no longer appears in standard search results.    
- **Update Description:** Edit the description to explicitly explain *why* it was retired.  
- **Link Replacements:** Provide a hyperlink to the new, canonical kata (if applicable).

**Impact & The Honor Guarantee:** When retiring a kata, the decision-maker must confirm that all users who completed it retain their points, rank, and honor.

## 

