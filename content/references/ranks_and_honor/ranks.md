# Ranks

Ranks are used to indicate profficiency, progression, and difficulty. Users complete kata which are assigned a rank, which in turn earns them a higher rank once they complete enough of them. There are two classes of ranks, Kyu and Dan. You begin with Kyu at level 8 and work your way down to level 1. Then you progress to Dan, where you work your way up from level 1 to level 8.

Why the names Kyu and Dan? The terms are borrowed from a system in Japanese martial arts, which is in turn borrowed from the game of Go. Kyu (or Kyū) indicates the number of degrees away from master level (Dan). This is why they count downward. Once you reach master level, we count upward. Black belts in martial arts are Dan level.

## Leveling Your Rank

When you visit your profile on the site, you can see that you have an Overall rank for the site as well as individual ranks for each language you have completed kata in:

<div class="block dark:hidden">

![rank progress](./img/rank-breakdown_light.png)

</div>
<div class="hidden dark:block">

![rank progress](./img/rank-breakdown_dark.png)

</div>

System keeps an internal overall score as well as separate score for each language that drive your overall rank and per-language rank respectively.
When you solve a kata in some language, you earn some amount of score determined by rank of solved kata, and your progress for this language increases. When you complete a kata for the first time, additionally you will improve your Overall rank score by the same amount. Each rank has a percentage which represents how close you are to leveling to the next rank. For example, if your overall rank is `5 kyu / 25.0%` that means you have earned 25% of the progress that is needed to reach the rank of 4 kyu.

The score used to decide your rank is not the same as honor. You can't see your score on your profile, but it is visible in the API at the endpoint `https://www.codewars.com/api/v1/users/USERNAME`.

The table below shows the score required for you to reach each rank. You can see each rank is progressively harder to reach than the previous one.

| User Rank | Required Score |
| :-------- | -------------: |
| 8 kyu     |              0 |
| 7 kyu     |             20 |
| 6 kyu     |             76 |
| 5 kyu     |            229 |
| 4 kyu     |            643 |
| 3 kyu     |          1,768 |
| 2 kyu     |          4,829 |
| 1 kyu     |         13,147 |
| 1 dan     |         35,759 |
| 2 dan     |         97,225 |

When a kata is completed, you always received a set amount of honor points based on the level of the kata as well as an internal score that counts toward your next rank. Since every rank requires a higher score than the last, completing an easy kata well below your current rank will result in little progress. However completing a hard kata above your current rank will give you much more progress towards leveling up. As such, completing a lot of low level kata will give you a lot of honor, but will not increase your rank very quickly. Completing more difficult kata will level your rank faster.

This table shows the amount of score you gain every time you complete a kata of a given rank. Remember, every kata completion counts toward the rank of that language, but only the first completion of a given kata counts toward your overall rank/score.

| Kata Rank | Score Awarded |
| :-------- | ------------: |
| 8 kyu     |             2 |
| 7 kyu     |             3 |
| 6 kyu     |             8 |
| 5 kyu     |            21 |
| 4 kyu     |            55 |
| 3 kyu     |           149 |
| 2 kyu     |           404 |
| 1 kyu     |         1,097 |