---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/translation/
---

# Creating a Kata

This article contains a set of guidelines, which can be used by authors to create good, enjoyable, high quality kata. They were collected to help ensure that kata are of sufficient quality and users' experience will be as good as possible.


## Idea
  
- **Make sure your kata adds some new value to Codewars.** Avoid creating blatant duplicates, and use the idea which has not yet been widely used to create a kata. Note that with so many existing kata, this can be very challenging to achieve, because it's very dificult to find out if your idea has already been used or not. Remember that you can always ask more experienced users if your idea is worth of creating a new kata, or maybe it has been already exploited sufficiently.
- **Do not use problems from other sites,** unless it's allowed by that site's licensing policy and/or terms of use. Explicitly give appropriate credit if your kata is based on, or inspired by, someone else's work.
 

## Task and Requirements
 
- **Requirements and design should hold to generally accepted and widely recognized guidelines** related to software design, programming, and domain of the kata. Do not require users to do things in a way which is widely recognized as wrong. If any of these guidelines are broken, the description should justify it with a plausible explanation.
- **Keep kata focused on one task.** Avoid distractions, do not add other, smaller, "side" requirements which do not add too much value to the task itself. 
- **Make requirements very clear.** If kata is not a puzzle, describe everything what will be tested and leave no surprises. Reason for every failing tests case should be evidently visible in the description of the kata.
- **Use ideas which can be easily translated,** if they are not the main point of the kata. It is generally OK to use code constructs idiomatic for the language of author's choice, but be aware when such idioms can cause problems to translators. Sooner or later someone will translate the kata to another progamming language, and if translator is not able to efficiently handle original, idiomatic approach, the quality or consistency of the tranlation can suffer.
- **Do not use requirements which cannot be reliably tested, enforced, or expressed in terms of a kata.** Some requirements simply do not translate well into a kata, and code restrictions (_"Do not use X", or _"You have to use Y"_) is one example of such.


## Before publishing

- All components of a kata, its description and code snippets, have dedicated sets of authoring guidelines which should be followed.
- **Kata should be complete.** There should be no excuses of _"I did not know how to do [something]"_ or _"I will add [something] later"_. Published kata should be complete and ready to be solved and reviewed. If you do not know how to do something, keep the kata as a draft and ask others for help.
- **Ask other users for feedback and for help when needed.** Codewars community is very helpful and will gladly drive you in a direction of improvements and better quality. After all, it's them who will solve the kata after it gets published.
  - Use available forums and chat rooms (for exaple [Kata authoring chatroom][gitter-kata-authoring] on Gitter) to ask others about your ideas or for help with any problems you encounter.
  - You can share links to draft of your kata before publishing, to get early feedback on its quality.


## Maintenance

- **You are responsible for your kata.** As long as you're active Codewars user, you should address quality issues in kata you authored: fix issues, consider suggestions, answer questions.
- **Issues and kata bugs should be fixed.** When for some reason a reported issue is not going to be fixed, clearly explain why. If some issue is reported repeatedly, at least put a note in the description how to work around it. Do not mark valid issues as resolved, leave them for others to fix.
- **It's allowed for a fix to invalidate existing solutions.** Existing solutions should be considered, but also should not be used as an argument for bad quality. If possible, backward compatible fixes are preferred, but it's not necessary if they address a severe bug or a serious problem with the kata. Consider the maturity of the kata and severity of the issue when introducing a fix which is not backwards compatible:
  - For existing kata with thousands of solutions, code style issues (for example name of solution function) probably can wait.
  - For a kata which is still in beta, all solutions can be invalidated if necessary.


[gitter-kata-authoring]: https://gitter.im/Codewars/codewars.com/kata-authoring-help