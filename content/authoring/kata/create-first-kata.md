---
kind: tutorial
sidebar: authoring
---


# Creating your first kata

Okay, so you might have completed many (all?) of the published katas on Codewars. But... that's only half of the battle.

There is an obvious elephant in the room: Where do the katas come from? Obviously they didn't come out of nowhere like inside a stone or from a big bang, so clearly someone, or *something*, must have created the kata.

Creating a kata is a totally different kind of task from solving a kata. You might be able to solve a purple kata in under an hour, and still get flummoxed by the process of making a new kata. Being a good player doesn't always make you a good level maker, after all. What authors sometimes do not realize is the fact that creating a good quality kata is much harder than solving it.

While a kata with minor problems can be easily fixed, a kata with fundamental issues will get stuck in the beta process forever, collecting negative feedback over time. You don't want that.


## Support for authors

To support you with this difficult task, a set of help pages has been created with following types of information:
- [tutorials](/tutorials/), for users who are still figuring things out,
- [guidelines](/authoring/guidelines/), which need to be respected to meet the Codewars quality criteria. It is strongly recommended to become familiar with these, otherwise you risk that your kata will be met with bad reception, harsh remarks, and many reported issues.
- [HOWTOs](/recipes/) explaining how to realize some commonly occuring tasks, or solve commonly repeating problems,
- [Language specific pages](/languages/) with code snippets, examples, references and tutorials related to specific programming languages.

You can also reach out directly to the community to ask questions and seek for advice of experienced users on the [kata-authoring-help](https://gitter.im/Codewars/codewars.com/kata-authoring-help) Gitter channel.


## Requirements

To create a new kata, you need to earn the ["Create Kata" privilege](/references/gamification/privileges/). After reaching the required amount of 300 Honor points, the privilege is granted and you can select the **"New Kata"** option from their profile menu:

<div class="block dark:hidden">

!["New Kata" menu command](./img/new_kata-light.png)

</div>
<div class="hidden dark:block">

!["New Kata" menu command](./img/new_kata-dark.png)

</div>



## Kata Idea

At the time of writing, there are already **over 6500** published kata, and almost 2500 beta kata. It's a vast red ocean out there - if you're still sticking to ideas like Fizzbuzz, Fibonacci numbers or Caesar/ROT cipher, it's pretty much `99.999999...%` chance that someone has done this before you.

This is bad because creating a kata about them again constitutes a **duplicate** kata, and we certainly don't want 100 Fizzbuzz katas out in the wild. When a duplicate is found it will be retired, which basically means it gets taken out of the kata catalog.


### How to not step on the minefield of duplicate katas


#### Search for keywords to see if someone has done the idea before

As we all know, before you even engage your enemies, you need to send scouts forward.

For example, while [Peano](https://www.codewars.com/kata/search/?q=peano) and [Church](https://www.codewars.com/kata/search/?q=church) numbers are definitely not easy, as the search results clearly shows, they've been done many times already.

In a way, knowing the katas in the wild is very similar to knowing your enemies: you get to see how others write the same kata, other people's (sometimes) brilliant solution in these katas.

Then, maybe you can decide whether to retreat, or make a **harder** version of the kata as return if you feel the existing one is too lackluster/easy.


#### Use a novel/original idea

If you find yourself worrying about hitting duplicates all the time, try to push yourself to think out-of-the-box. Don't worry, coming up with good ideas is hard! But if you can ensure that your ideas are always novel and original, you can be almost certain nobody will have taken the flag before you.

It also has a side benefit of making people think that you're clever, which will be reflected on the [[satisfaction rating|Satisfaction Rating]].


#### Solve more kata

Naturally, when you've already solved 10 fibonacci kata, solving another one will make you very nauseous, making you naturally allergic to duplicates ;-)


#### Solve more katas (again)

While the minimum honor for creating a kata is merely 300 honor, if you try to create a kata with just 300 honor, it'll most likely inadvertently be bad.

Why? With just 300 honor, you haven't even got a grasp of what kata are actually like.

Anyone can reach 300 honor in a very short time, from a few hours to a day or two. This is, obviously, far from enough. Thus, you need to train more.

Solving more kata to gain more experience can help one significantly in the following aspects:

- Getting more experienced will help you *understand* how hard your kata is, so that you can tune your kata to your desire easily.
- As you train more, you tend to know what the most efficient solution for a kata is. This is crucial to performance and golf katas: you don't want to make a performance kata when you can only write sub-par solutions! You'll get pwned hard by veterans ;-)
- Actually encountering kata issues and looking at comment sections will let you understand the common issues people will raise. Learn from history and don't make the same mistake again!
- Looking at solutions (and more importantly, solution comment sections) will give you insight to what constitutes good practice
- It also allows you to see how others write their tests. Writing good tests is**hard**, especially if your kata is also hard.


## Stick to the intent, focus on one key thing per kata

If you ask people to do 10 kata about 10 different things, that's okay.

But if you ask people to do 1 kata which needs to do 10 different things depending on some arbitrary conditions, nobody will ever like the kata. Juggling 10 objects at once is not fun.

This often happens for unbalanced kata - while they're asking for one thing, because of how the kata is written the actual difficulty lies on something **completely unrelated** to the proposed intent of the kata itself, e.g doing a task with a very unnatural and hard to work with input format.

If you find that your kata is too long, mostly from these symptoms:
- your kata has a very long description
- a typical solution is very long and yet none of them is hard, the only difficulty is from the tediousness
- your kata requires doing many things together,

you might want to break up your kata in separate parts if appropriate.

Quoting power user @JohanWiltink's comment on one of the beta kata:

> And, again, you're doing multiple unrelated things in one kata. Totally unrelated, neither of them trivial this time. What is the intent, what is the pointe of this kata?
>
> (Please note: a pointe is not a point. I'm not implying this kata is pointless. If anything, it seems overpointed - in width, not in depth.)


## Setting up the kata

Kata are edited with the kata editor tool, described in the [Kata Editor UI reference](/references/ui/kata-editor/). To fully set up the kata you have to provide some basic information, as well as write some code in language(s) of your choice.


### Kata Properties

#### Name

The name is used to uniquely identify a kata. You can be creative with the name that you use. Best practice is to use a name that gives other users a good idea of what type of challenge they will be getting themselves into.


#### Discipline

The discipline is the category that the kata belongs to. You should pick the category that best describes what the kata is intended to focus on. As of now there are four categories:

- Fundamentals - Focuses on core language and API knowledge.
- Algorithms - Focuses on the logic required to complete the task.
- Bug Fixes - Focuses on taking existing code, determining the issue and fixing it.
- Refactoring - Focuses on taking existing code and making it better.
- Puzzles


#### Estimated rank

Here you specify how difficult you think your kata is. This value is used as an initial estimate for the kata difficulty, and will be refined while collecting rank votes from other users who solved it. Your perception on the difficulty of your kata might differ from what the community might think and estimate, so your kata may end up approved with a higher or lower rank.


#### Tags

Tags are used to classify your kata and make it easier to search for. Some tags are derived from the assigned discipline and added automatically, but you can add more.


#### Allow Contributors?

If you allow others to contribute to your kata, they will be able to make changes to it when it's a subject of the [beta process](/concepts/kata/beta-process/). However, even when you do not allow for contributors, sufficiently privileged users will be able to edit your kata if it has some pending issues or requires fixing.

You can check the list of [privileges](/references/gamification/privileges/#privileges) to see who can modify your kata.


### Description

The description field is used to provide instructions to the users who will be training on the kata. This field recognizes [Github flavored markdown](https://docs.codewars.com/references/markdown/) with a set of [Codewars extensions](https://docs.codewars.com/references/markdown/extensions/). You can use the `Preview` tab to see how it will look like when presented to users.

Have you encountered that feeling when you're met with a requirement you can't understand because it's poorly and inadequately written, and you still have to fulfill the requirement? Don't let yourself be the guy who wrote this. If you ended up conjuring such hot garbage, everyone will just stay 10 miles away from you and your katas, and nobody will finish them at all.

Fortunately, if your kata description is not very good, people will be eager to point this out in the comments, so you have more than enough chances to fix them.

Writing good descriptions is a difficult task, and you should refer to ["Writing a Kata Description" guidelines](https://docs.codewars.com/authoring/guidelines/description/) to ensure that your description is of sufficient quality.


### Code Snippets

To make your kata runnable, you need to write some code. Kata code is divided into a couple of snippets, each of them having a specific role, and being used in specific circumstances.

To keep the kata easy to maintain, every snippet is a subject to quality guidelines, both [general](/authoring/guidelines/coding/), and a set specific for each of them.


#### Complete Solution

You need to provide a solution to your own kata, to prove that it can be solved at all. The author's solution is run every time the kata is published, to verify the correctness of tests and of the general kata setup.

#### Initial Solution

Initial solution is what users are provided with when they start training on your kata. The way in which you setup your initial solution code will depend heavily on the discipline that you have selected. For bug and refactor disciplines you will end up needing to include almost working or already fully working code within this block. For reference and algorithm disciplines you will likely only include skeleton code. Perhaps an empty function/method or some other code that has gaps which need to be filled in. Sometimes you may just want to include some comments to help get the user started, but no actual code.

However, imagine the following scenario (assuming a statically typed language): you train on a Kata that requires you to implement multiple functions, but the Initial Solution does not give you the relevant function signatures and hence fails to compile. You frantically read through the Kata description and Sample Test Cases to figure out the function signatures you need to add: the name of each function, the number of arguments to each function, the type of each argument, the return type of the function ... After fumbling with the Initial Solution for a full 15 minutes, you finally get it to compile. _Now_ you can actually focus on the task at hand. Not cool, right?

_Unless_ the focus of your Kata is debugging (and how often do you encounter debugging Kata that are even remotely enjoyable?) or your Kata involves some deep C++ compile-time metaprogramming where 50% of the challenge itself is to make the code compile, you most certainly do not want the solver to waste their precious time fixing the Initial Solution just to get it to compile. The Initial Solution should provide the solver with a dummy implementation that "works" out of the box (possibly with runtime errors) such that (s)he can start replacing the dummy implementations with his / her own code straight away. **It is a Kata issue if the Initial Solution fails to compile, especially if it introduces unnecessary overhead for the solver.**

Note that similar principles apply to interpreted languages (e.g. JavaScript, Python, Ruby): the Initial Solution should not contain syntax errors and / or (top-level) reference errors which may prevent the solver from getting started with the task immediately.

The initial solution block is required so you will have to include something (at the very least some comments) in order for the kata to be able to be published.

#### Preloaded

The preloaded code block is an optional feature that you can use if you need it. The code from the preloaded snippet cannot be edited by the user, but it's available for all other snippets (solution and tests) to use. Its useful for when you want to load some code that mimics an API that your kata is based around. Its also useful if you want to define some code that needs to be used within the solution, but shouldn't be editable within the solution itself. For example, it can contain classes or constants which should be common for both solution and tests.

Working with preloaded code is sometimes tricky, and that's why a set of [guidelines](/authoring/guidelines/preloaded/) related to this particular snipped is created.

#### Test Cases

The **Test Cases** editor is used to write submission tests: code that will validate the kata solution. Tests are not visible to the user, and the user solution needs to pass them to consider the kata completed. Every language on Codewars is set up to provide you with a testing framework, which you can use to write test cases, organize them into groups, and assert on tested conditions. You can find out what testing framework you need to use by visiting the [reference page of your language](/languages/). 

While the old kata are usually lazy and only have a few tests, nowadays if you try to pull off the same trick you'll instantly get yelled at with all the `Needs random tests!!!!!11!1` and your satisfaction rating plummets to 0%.

The key thing about tests is that a test should perform two things:
1. Accept all conforming solutions
2. Reject all non-conforming solutions

Some people might think that only point 1 is necessary, which is obviously untrue: test that accepts **everything** is pointless. Good tests will let the correct solutions -- *and only* the correct solutions -- pass.

For normal kata, a good set of tests should cover all of these aspects:
- Test basic functionality
- Has full coverage (if that's impossible, at least have decent coverage)
- Cover edge cases thoroughly
- Randomized tests to probe user solution with random samples (and so that pattern-matching against the tests is impossible)
- Stress/performance/code characteristic tests if needed

The first three should be put into fixed tests. The fourth item should be put into random tests (see below). Ideally the last item would be in isolation, or covered by random tests. The last item is optional.

Random test cases are test cases that cannot be predicted. Most kata have them (except for the really old ones) and they are usually in addition to some static tests. Using both static and random test cases with make it both easy for warriors to see what they are supposed to do, as well as make it impossible to write a solution that just pattern match the inputs (i.e return hard-coded outputs depending on a fixed set of inputs). Random tests are also good at finding edge cases.

Remember: just like in real life, if we failed a test, we want to know:
- what was the input
- expected and actual result

So unless revealing the expected result would spoil the kata, you should not hide them. Consult the documentation of testing framework used by your [language](/languages/) and pick the best method for your tests.

Writing good test suites is very difficult, often the most difficult part of creatign a kata. It often requires more code than the actual solution, and any flaws in the test suite can heavily impact the overall quality and experience of users with the kata. Make sure you follow [quality guidelines for submssion tests](/authoring/guidelines/submission-tests/) when writing them, as they will help you to avoid many common pitfalls awaiting for inexperienced authors.


#### Example Test Cases

Example test cases is a small set of tests which user can see and modify while working on their solution. These are some basic test cases that users will see when they load the kata. Sample tests are written in the same way as submission tests, using the testing framework set up for your language.

They are not necessary, but they are really good to have, so users can get the idea how the solution is called and tested.You can include a few tests to get someone started, though of course if you're lazy you can just copy the fixed test cases from the actual tests over there. Just don't copy your reference solution there as well. Unless you intend the users to write tests themselves, or tey are not applicable for your kata (Example: [Defuse the bombs](https://www.codewars.com/kata/defuse-the-bombs/)), it's usually considered a good practice to provide example test cases to the users.

Since sample tests can significantly impact user experience of a kata, they have a dedicated set of [sample tests authoring guidelines](/authoring/guidelines/sample-tests/).



## Before publishing

When you have finally written all the code, prettified the description, and verified the tests, you consider your kata good to go. But this is a very good moment to take a step back and hold back with publishing the kata, at least for a short while. While working on your kata you were focused on it so much, that it's very probable that you missed some issues or possible improvements. If you rush publishing it, you risk others will find problems you missed, and your kata will be downvoted, or even insta-retired.

### Train on your kata

Good first step is to train on your own kata. Getting in the shoes of a potential user is a nice way of checking what others will see and experience while training on your task. Although it's not possible to complete a kata being still in draft, it's still possible to train on it. Just open your kata in the trainer, and try to solve it, as any other user would do. This way, you can spot some problems with tests you have not thought about before.

### Verify quality guidelines

The next step would be to read through [authoring guidelines](/authoring/guidelines/) once again, and use them as a check-list to verify that your kata conforms to the applicable ones. Remember that the guidelines were collected basing on community's experience with many bad quality kata published back in the days, so take them seriously and approach them with proper attention. If you do not understand some guideline or you are not sure if your kata violates it or not, just ask more experienced users for advice.

### Ask for a review of your draft

Drafts of kata cannot be found and searched for, but can be accessed by other users with direct links. You can share the link to your not yet published kata with others, and they will be able to read the description, train on the kata, and provide some feedback, before getting a chance to downvote it. Sharing a link to a draft is a very good vay to get a quick feedback about the most obvious problems.


## After publishing

After you publish your kata, it becomes a subject to the [beta evaluation](/concepts/kata/beta-process/). Power users immediately jump on it, knowing they _will_ find problems, the kata discussion section will be flooded with issue reports marked with red labels, and the red, sad faced button of "Not Satisfied" vote will cause the satisfaction rating drop to 20%. Unless there won't be any serious issues. It may be discouraging at first, especially for new authors, but when you think about it, it makes sense: after all, no one wants a bad kata to get out of beta, right? That's why it's important to make sure that when a kata is published, it's already in as good shape as possible.

But still, no matter how hard you try, it's not possible to make everyone satisfied. Your kata may receive many satisfied votes, but even then, some users might not like it. Do not worry about this too much. Consider their remarks, and think a bit about them. Maybe they are right, and the kata needs some improvements? Listen to everyone, answer their questions, consider suggestions, and fix issues popping up. Also, do not rush things too much. If someone says something you are not sure about, just wait for another opinion. Users often do not agree with each other, so you can receive two mutually exclusive opinions. It can be difficult sometimes, but you just need to pass on one of them, or find some balance in between. Research shows \[citation needed] that kata with authors actively maintaining them leave beta quite quickly, while some kata can be retired within minutes, or, even worse, stay in beta forever, if authors do not want to fix problems.

After the kata collects enough of positive feedback, it leaves beta state and becomes available for everyone to train on and earn their points. Now it will draw even more attention, and potentially thousands of users will submit their solutions, possibly finding new problems reporting new issues, and raising new suggestions. Your task, as an author, is to actively maintain the kata. This will encourage others to train on it more, provide translations to other languages, and enjoy it in full extent.


Congratulations! Your first Codewars kata is a success!
