---
subject: "Tips: Advanced Code Fencing"
on:
  paths:
    - /translation/new
---

The description for a translation is shared between all languages for a kata. There are some enhanced markdown options available to allow you to selectively show content based off of the language - including a recently introduced ability to use `if` and `if-not` statements.

## Basic Code Block Filtering:

The easiest way to provide language specific content is when providing language specific code examples. If you simply place language examples on top of each other, only the one related to the current language will be shown.

````
```javascript
function example(){
  // only shown if javascript is active
}
```
```ruby
def example
  # only shown if ruby is active
end
```
````

## Filterable Markdown Blocks

A newer feature on Codewars is the ability to filter entire sections of markdown using `if` and `if-not` statements. These statements are also used with code blocks. The following examples try to illustrate different ways in which you can use these statements.

````
~~~if:javascript,ruby
This content will only be shown if javascript or ruby are active.

> A few things to note:
- Markdown is still available to be used within these code blocks
~~~
~~~if-not:ruby
This markdown will only be shown if ruby **is not** the active language.
```javascript
// still only shown if javascript is the active language, since it has multiple examples next to it
```
```python
# only shown if python is active
```
~~~
````
