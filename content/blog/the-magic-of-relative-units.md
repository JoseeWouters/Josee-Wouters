---
layout: blog
title: The magic of relative units
displayDate: 11 juli 2019
date: 2019-07-11
intro: You probably know what a pixel is. And you’ve also probably heard of `rem` and `em`, but what is it? And when do you use it? I’ll explain some of the almost magical ways I use these units.  But first let’s start with a short explanation of these units. If you already know the difference between absolute and relative units, you can also skip to the responsive magic part.
url:
---
# The magic of rem
You probably know what a pixel is. And you’ve also probably heard of `rem` and `em`, but what is it? And when do you use it? I’ll explain some of the almost magical ways I use these units.  But first let’s start with a short explanation of these units. If you already know the difference between absolute and relative units, you can also skip to the responsive magic part.

## What is a pixel?
A pixel, or `px` in web development is an absolute unit. This means that a pixel will always be the same size, on every display. You can compare it to a centimeter, a cm is always the same, everywhere. The size of a display will be set in pixels. For example, an average laptop screen size could be 1366 x 768 pixels, meaning that 1366 pixels would fit the width of this screen. You can probably already guess the limitations of this unit. Create a `header` for example of 1400px wide and it wouldn’t fit on this average laptop, causing the user to scroll to the right to view the header of the website.

In come the relative units like `em`, `rem`,`vw`,`vh` or `ch`. The size of relative unit can vary, it’s usually set relative to the font-size or viewport size. 

## What is `vw` and `vh`?
`vw` Stands for viewport width and `vh` means viewport height. If you set these to 1, it means it will be 1/100th the height or width of the viewport. The [window](https://developer.mozilla.org/en-US/docs/Glossary/viewport) is that part of your web page that is currently visible in the window. If you want your header element to have the exact height of the viewport, you can set it like this.
```
header { 
	height: 100vh; 
}
```
Regardless of your display or whether you’re viewing it full screen or not, your header will always have the full height. The same goes for `vw`.

## What is `ch`?
`ch` stands for characters. This unit is a little bit different than you would expect. If you set the width of your paragraph to 60ch, it doesn’t mean there will be 60 characters on this line. This is because `ch` looks at the width of the 0 in your font. In most fonts, an i will be smaller dan a 0. When would you use `ch`? You could use it if you want to keep your text at a readable width. Most research suggests for the best readability of your site, you want one line to have 50 - 75 characters. 

## What is `em`?
`em` is relative to the font-size of your current element. If you have an element with a font-size of 16px, usually the default font size of a browser, 1em will also be 16px. If you increase the font-size to 20px, 1em will also be 20px.

## What is `rem`?
`rem` is pretty much the same as `em`, with one important difference. `rem`  stands for *root em*. This means it will always be equal to the root font size, usually 16px. 1rem will be 16px, but if you increase the font size of an element, `rem` will not increase. You can set the root font size in two ways:
```
html {
	font-size: 1em;
}
```
or:
```
:root {
	font-size: 1em;
}
```
You probably noticed I didn’t use `rem` here. That isn’t necessary, because we’re already at the root. `rem` and `em` are exactly the same here.
`:root` and `html` are identical, but because the [specifity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) of `:root` is higher, this is preferable. 

If you combine these units, you can reach almost perfect responsiveness, with a couple of lines of code.

## When to use what?
I use `rem` for font-sizes, `em` for margins and paddings and `px` for borders. This way, the margins and paddings of an element will increase, when you increase the font size: perfect responsiveness. Most of the times, a font size on a smart phone can have a smaller size than on high dpi screen. If you set a higher root size for the latter, everything will scale proportionally. You can achieve this in a couple of steps.

## Set the root font sizes
First, you set a root font size and you define the media queries you need. Ideally, you’d use breakpoints when your layout breaks instead of targeting devices (because nowadays there are just way too many device sizes).

```
:root {
	font-size: 0.75em;
}

@media(min-width: 48em) {
	:root {
		font-size: 0.875em;
	}
}

@media(min-width: 75em) {
	:root {
		font-size: 1em;
	}
}
```
Let’s say you have an `aside` element in your website with a background color and padding that you want to scale proportionally. 
```
aside {
	background-color: #FAA275;
	padding: 1em;
}
```
On the smallest breakpoint, your padding will be the equivalent of 12px, while on the largest breakpoint, it will evaluate to 16px. 
And let’s say you have this aside somewhere else on your website where you want it to be larger. You’ll only have to define the font-size again and both the font size and the padding of your element will scale accordingly.
```
aside.larger {
	font-size: 1.5em;
}
```

## Why do this?
There are a couple of reasons to use this pattern. Of course you can set everything in pixels, but if you want to make something responsive, you usually need to overwrite more values. And another reason: some people will have their browser font size set to something else than the default 16px, for example people with less vision. In an ideal world, if you set a higher default font size, it wouldn’t be necessary to zoom in the browser to be able to read a website, because the content  of a website would increase with your preferred font size.

## What to do with pixel perfect?
There are some designers or customers who want a pixel perfect website. Sometimes you just don’t have any other option than defining and overwriting font sizes for the various media queries. But there is an easier way than having to do math for every size you set. Setting the root to 10px and then defining a font size of 1.6rem for 16px, is bad practice, because you’ll be overwriting a possible higher default size of your visitor. 
If you use sass in your project, you can use a function to convert pixels to `rem`. If you want to use `em` you can replace `rem` with `em`.
```
$baseFontSize : 16;
@function rem($pixels, $context: $baseFontSize) {
	@return $pixels / $context * 1rem;
}
```
You can set your font size like this:
```
p {
	font-size: rem(16);
}
```
The font-size in your stylesheet output will be set to 1rem, while you can input the exact font sizes the designer or customer wants. 