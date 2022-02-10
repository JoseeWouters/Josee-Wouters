---
layout: blog
title: CSS Specificity... what?
displayDate: 10 februari 2022
date: 2022-02-10
intro: "Why isn't this working? It must be the most asked question by a developer. If you're sure you didn't make a typo and your CSS sheet is loaded, then it could very well be a problem with specificity. With what? CSS specificity. In short: it decides which CSS ruleset will take preference. You want the longer version? Read on!"
language: en
---
## The basics
Please allow me to go over the basics real quick. What is a CSS ruleset? A ruleset exists of a selector and a declaration, which in turn exists of a property and a value. For example:
```
.title {
  color: peachpuff;
}
```
In this example, `.title` is the selector, the property is `color` which has a value of `peachpuff`. This selector has a specific value and the ruleset with the highest specificity will apply. But how exactly does it work and how can you make sure your title will actually get the color `peachpuff`? For the code examples in this blog, I will make use of this CodePen example and with this you can play along to see the different results.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWOvgOb" data-user="joseewouters" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/joseewouters/pen/QWOvgOb">
  Untitled</a> by Josee (<a href="https://codepen.io/joseewouters">@joseewouters</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Selectors and their values
There are several kind of selectors: elements, classes and ID's. An element selector could be an `h1`, a `div` or a `p`. A class selector is what I used in the example above: `.title` and an ID selector would be `#title`. An ID selector has the highest specific value, an element selector the lowest. A low value means it's easiest to override. Let's say, we have the following rulesets in our CSS file.
```
h1 {
  color: forestgreen;
}

#title {
  color: peachpuff;
}
```
Your heading will have the color `peachpuff`, because the ID selector has the highest specificity. 

There are also pseudo-elements like `::before` or `::first-letter`, those have the same specificity as a "usual" element. Then there's pseudo-classes like `:hover` or `:disabled`, which will have the same specificity as a class selector. Another thing to keep in mind, ARIA or data attributes will also have the same specificity as a class selector.

If you would visualise CSS Specificity in a table, with the highest specificity at the left and the lowest at the right, it would look like this for the examples above. 

<em>h1</em>

| inline | ID | Class | Element |
| ------ | -- | ----- | ------- |
| 0      | 0  | 0     | 1       |

_#title_

| inline | ID | Class | Element |
| ------ | -- | ----- | ------- |
| 0      | 1  | 0     | 0       |

It's important to note, that in this case, the order of the rulesets doesn't matter. The ID selector has the highest specifity and the value of this declaration will always apply, even if the element selector ruleset comes later in your file. But when rulesets have the same specificity, order does matter.

## Order matters
```
.title {
  color: forestgreen;
}

.title {
  color: peachpuff;
}
```
Now, the color will be `peachpuff`, but if you change the order of these two rulesets, your color will be `forestgreen`. This will also be the case if you have two separate css files. Let's say, you have two files. `forestgreen.css` and `peachpuff.css` with each the corresponding ruleset of the example above. 
```
<link href="forestgreen.css" rel="stylesheet">
<link href="peachpuff.css" rel="stylesheet">
```
If you want your title to have the color `peachpuff`, make sure your CSS file is loaded last, otherwise the color will be `forestgreen`.
Let's make it a bit more complicated. What color will your title be in this case?

_forestgreen.css_
```
.title {
  color: forestgreen;
}
```
_peachpuff.css_
```
h1 {
  color: peachpuff;
}
```
If you guessed `forestgreen`, then you've got it right. Although the element selector is loaded last, it has a lower specificity and it will therefore not be applied.

## Overriding specificity
Now, this knowledge will come in handy. In some cases, you don't have control over the order of your rulesets or stylesheets, so you will need to override the specificity. Let's go back to the example where both stylesheets have a class selector. If you need to override the specificity, but you do not have control over the order, you can add an element selector.
```
h1.title {
  color: forestgreen;
}

.title {
  color: peachpuff;
}
```
The specificity of the first ruleset is now higher, so your color will be `forestgreen`, even if the `peachpuff.css` file is loaded last. Another way to increase specificity is to use a parent class. 
```
.header .title {
  color: forestgreen;
}

.title {
  color: peachpuff;
}
```
And remember, a class selector has a higher value, so if your rulesets would look like this:
```
.header .title {
  color: forestgreen;
}

h1.title {
  color: peachpuff;
}
```
Your title will still be forestgreen, because two class selectors have a higher value than an element and class selector.

## How to _not_ override specificity
Unfortunately, this can get ugly pretty fast. If you're working for example with external plugins or add-ons and you need to override those styles, you sometimes need to add multiple class selectors before your specificity is high enough. In those cases, you might want to choose the easy way out and use an ID selector or `!important`, but both options are bad practices.

An ID can only be used once on a page, it's best to try and use them only if you explicitly need them and in preference, not use them for styling. As for `!important`, there is no way to override this other than increasing the specificity of your selectors and even more `!important`.

A third option you should not use for increasing specificity, is using inline styles. No matter the specificity in your CSS files, inline styles will always take preference. There's only one way to override an inline style and that's with `!important`. See how this can get you in a really messy situation, real quick?

## TL;DR
- An ID selector is more specific than a class selector
- A class selector is more specific than an element selector
- The latest ruleset or stylesheet will apply if the specificity is the same
- Do not use inline styles, !important or ID's to increase specificity
- Overriding styles can be hard to maintain
