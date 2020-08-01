---
kind: explanation
sidebar: ranks-honor
prev: /explanations/gamification/
next: /explanations/gamification/honor/
---

# Ranks

Ranks are used to indicate the proficiency of users and the difficulty of Kata. There are two classes of ranks, Kyu and Dan, which are  divided in 8 levels each. By increasing order of proficiency/difficulty:
* 8 Kyu to 1 Kyu
* 1 Dan to 8 Dan

Why the names Kyu and Dan? The terms are borrowed from a system in Japanese martial arts, which is in turn borrowed from the game of Go. Kyu (or Kyū) indicates the number of degrees away from master level (Dan). This is why they count downward. Once you reach master level, we count upward. Black belts in martial arts are Dan level.




## User Rank Breakdown

When you visit your profile on Codewars, you can see that you have an Overall rank as well as individual ranks for each language you have completed kata in:

<div class="block dark:hidden">

![rank progress](./img/rank-breakdown_light.png)

</div>
<div class="hidden dark:block">

![rank progress](./img/rank-breakdown_dark.png)

</div>

The wheel on the left indicates your progress toward your next rank. For example, if you see the `1 dan` bagde in the wheel and your overall rank is `1 kyu / 70.0%` that means you have earned 70% of the progress  needed to reach the rank of 1 dan.

The overall rank increases each time you successfully complete kata you never completed in any language before. This increase occurs only one time per kata. On the other hand, the language ranks are language specific, so if you complete the same Kata in several languages, each one of them will progress accordingly.

Note that you cannot gain progress if you forfeited a kata.


## Leveling Your Rank

The score used to determine your rank is not the same as honor. You can't see your score on your profile, but it is visible in the API at the endpoint `https://www.codewars.com/api/v1/users/USERNAME`.

As said before, the only way to "rank up" is to complete Kata. However, the rank of the Kata you complete has a huge difference on the evolution of your rank/%.

* [This table](/references/gamification/ranks/#rank-rewards) shows the amount of score you gain every time you complete a kata of a given rank.
* [This table](/references/gamification/ranks/#rank-requirements) gives the total score required to reach each user rank.

As you can see, if your main goal is to level up your rank, you should aim for completing hard kata, above your current user rank. On the contrary, completing a lot of low level kata will give you a lot of honor, but will not increase your rank very quickly.

Remember, every kata completion counts toward the rank of that language, but only the first completion of a given kata counts toward your overall rank/score.

---

_Note about the conversion `score <-> %`:_

New users are often surprised when they realized that some kata of rank 4 kyu rewarded them with 5% progress or so, then the amout suddenly dropped to 1.7%. This kind of things happens each time your rank level up: since the score rewarded for a Kata is constant but the score required to reach the next level increases a lot, the equivalent % awarded in lower and lower when you level up for the same difficulty.

To give you a general idea about the process, completing a kata where (note: values are very approximative):
* `kata rank == your rank+2: +30%`
* `kata rank == your rank+1: +12%`
* `kata rank == your rank+0: +5%`
* `kata rank == your rank-1: +1.7%`
* `kata rank == your rank-2: +0.7%`
* `kata rank == your rank-3: +0.3%`
* `kata rank == your rank-4: +0.09%`
* ...
