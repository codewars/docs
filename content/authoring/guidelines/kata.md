---
kind: reference
sidebar: authoring
prev: /authoring/guidelines/translation/
---

# Kata Authoring Guidelines

This article contains a set of guidelines, which can be used by authors to create good, enjoyable, high quality kata. They were collected to help ensure that kata are of sufficient quality and users' experience will be as good as possible.


## Idea
  
- **Make sure your kata adds some new value to Codewars.** Avoid creating blatant duplicates, and use the idea which has not yet been widely used to create a kata. Note that with so many existing kata, this can be very challenging to achieve, because it's very difficult to find out if your idea has already been used or not. Remember that you can always ask more experienced users if your idea is worthy of creating a new kata, or maybe it has been already exploited sufficiently.
- **Do not use problems from other sites,** unless it's allowed by that site's licensing policy and/or terms of use. Explicitly give appropriate credit if your kata is based on, or inspired by, someone else's work.
 

## Task and Requirements
 
- **Requirements and design should hold to generally accepted and widely recognized guidelines** related to software design, programming, and domain of the kata. Do not require users to do things in a way which is widely recognized as wrong. If any of these guidelines are broken, the description should justify it with a plausible explanation.
- **Keep kata focused on one task.** Avoid distractions, do not add other, smaller, "side" requirements which do not add too much value to the task itself. 
- **Make requirements very clear.** If kata is not a puzzle, describe everything that will be tested and leave no surprises. The reason for every failing test case should be evidently visible in the description of the kata.
- **Use ideas that can be easily translated,** if they are not the main point of the kata. It is generally OK to use code constructs idiomatic for the language of the author's choice, but be aware when such idioms can cause problems to translators. Sooner or later someone will translate the kata to another programming language, and if the translator is not able to efficiently handle the original, idiomatic approach, the quality or consistency of the translation can suffer.
- **Do not use requirements which cannot be reliably tested, enforced, or expressed in terms of a kata.** Some requirements simply do not translate well into a kata, and code restrictions (_"Do not use X"_, or _"You have to use Y"_) is one example of such.


## Before publishing

- All components of a kata, its description and code snippets, have dedicated sets of authoring guidelines which should be followed.
- **Kata should be complete.** There should be no excuses of _"I did not know how to do [something]"_ or _"I will add [something] later"_. Published kata should be complete and ready to be solved and reviewed. If you do not know how to do something, keep the kata as a draft and ask others for help.
- **Ask other users for feedback and for help when needed.** Codewars community is very helpful and will gladly drive you in a direction of improvements and better quality. After all, it's them who will solve the kata after it gets published.
 - Use available forums and chat rooms (for example [Kata authoring chatroom][gitter-kata-authoring] on Gitter) to ask others about your ideas or for help with any problems you encounter.
- You can share links to the draft of your kata before publishing, to get early feedback on its quality.


## Maintenance

- **You are responsible for your kata.** As long as you're an active Codewars user, you should address quality issues in kata you authored: fix issues, consider suggestions, answer questions. See [kata curation guidelines][kata-curation-guidelines] for more guidelines on kata maintenance.

[kata-curation-guidelines]: /curating/guidelines/kata/
[gitter-kata-authoring]: https://gitter.im/Codewars/codewars.com/kata-authoring-help
