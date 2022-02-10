---
layout: blog
title: The magic of relative units
displayDate: 11 juli 2019
date: 2019-07-11
intro: You probably know what a pixel is. And you may have heard of rem and em, but what is it and when do you use it?  I'll try to explain some of the units I use the most and tell you my little trick for responsive magic.
url:
reading time: 6 minutes
language: en
---
There are two types of units you can use in CSS, relative and absolute units. The size of a relative unit, with the exception of percentages, is related to the viewport or font size of an element. An absolute unit will always be the same, regardless of the viewport or font size.

## Absolute units

### What is a pixel?
A pixel, or `px` in web development is an absolute unit. If you set elements to 16 pixels, every one of those elements will be exactly the same. 

The size of a display will be set in pixels. For example, a common laptop screen size could be 1366 x 768 pixels, meaning that 1366 pixels would fit the width of this screen. You can probably already guess the limitations of this unit. Create a `header` for example of `1400px` wide and it wouldn’t fit on this common laptop, causing the need for the user to scroll horizontally to view the header completely.

Don't mistake a CSS pixel for a display pixel. Some screens have a higher pixel density, like Apple's retina displays. 1 pixel in CSS could be 2 or maybe 4 screen pixels, so it will still look the same as on a display with a normal pixel density, only a bit smoother. The explanation is actually a bit more complicated, you can read more about it in the [W3C specs](https://www.w3.org/TR/css3-values/#px).

But pixel density aside, if you use pixels in CSS it may not fit your visitor's screen. In most cases, you'll want to use a relative unit.

## Relative units

### What is `vw` and `vh`?
`vw` stands for viewport width and `vh` means viewport height. If you set these to 1, it means it will be 1/100th the height or width of the viewport. The [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport) is that part of your web page that is currently visible in the window. If you want your header element to have the exact height of the viewport, you can set it like this.
```
header { 
	height: 100vh; 
}
```
Regardless of your display or whether you’re viewing it full screen or not, your header will always take up 100% of the height of the visible screen. The same goes for `vw`.

### What is `ch`?
`ch` stands for characters. This unit is a little bit different than you would expect. If you set the width of your paragraph to 60ch, it doesn’t mean there will be 60 characters on this line. This is because `ch` looks at the width of the 0 (zero) in your font. In most fonts, the character `i` will be smaller than a `0`. When would you use `ch`? You could use it if you want to keep your text at a readable width. Most research suggests for the best readability of your site, you want one line to contain 50 - 75 characters. 

### What is `em`?
`em` is relative to the font-size of your current element. If you have an element with a computed font-size of 16px, 1em will also be 16px. If you increase this to 20px, 1em will also be 20px. Remember the [cascade](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance) here. If your current element doesn't have a font size defined, but the parent does, this will be used as the relative size for an `em`.

Why am I still doing the math to get pixels? Because this is what your browser does. If you look in the inspector in your browser developer tools, the CSS rule will show your relative `em` unit, but the computed value will be pixels. 

### What is `rem`?
`rem` stands for *root em*. It's pretty much the same as `em`, except it will always be relative to the default font size instead of the current element's font size. This can either be the default font size of the browser, usually 16px, or one you can set it in your CSS like this.

```css
html {
	font-size: 1em;
}
```
or:
```css
:root {
	font-size: 1em;
}
```
You probably noticed I didn’t use `rem` here. That isn’t necessary, because we’re already at the root. `rem` and `em` are exactly the same here.

You can use both `:root` and `html`. `:root` refers to the `html` tag, but it's [specificity](https://joseewouters.nl/blog/css-specificity-what-color-will-it-be) is higher. 

### When to use which unit?
I prefer to use `rem` for font-sizes, `em` for margins and paddings and `px` for borders. I still use pixels when it comes to borders, because I usually want a border to be just a fine, `1px` line.

By using `em` for margins and paddings, they will increase when you increase the font size of your element: perfect responsiveness. Most times, a font size on a smartphone can be smaller than on a larger display. If you set a higher root size for the latter, everything will scale proportionally. More about this responsive magic in a bit.

### Why use relative units?
There are a couple of reasons to use this pattern. Of course you can set everything in pixels, but if you want to make something responsive, you usually need to overwrite more values. And another, maybe more important, reason: some people will have their browser font size set to something else than the default 16px, for example people who are visually impaired. 

If you set a higher default font size, you wouldn't have to zoom in the browser to be able to read a website, because the content of a website with relative units would increase with your preferred font size.

## What to do with pixel perfect?
There are some designers or customers who want a pixel perfect website, while you want to use relative units. Luckily there's an easier way than having to do math for every size you set. What often happens is setting the root to 10px and then defining a font size of 1.6rem for 16px. I wouldn't suggest on following this pattern, because you’ll be overwriting a possible higher default size of your visitor. 

If you use sass in your project, you can use a function to convert pixels to `rem`. If you want to use `em`, you can replace `rem` with `em` in this function.
```css
$baseFontSize : 16;
@function rem($pixels, $context: $baseFontSize) {
	@return $pixels / $context * 1rem;
}
```
You can then set your font size like this:
```css
p {
	font-size: rem(32);
}
```
The font-size in your stylesheet output will be set to 2rem, while you can easily use the exact font sizes the designer or customer wants. 

If you're not using a preprocessor, you can also use `calc` for this.
```css
h2 {
	font-size: calc(32 / 16 * 1rem);
}
```

## Responsive magic
If you combine the relative units of `em` and `rem`, you can reach almost perfect responsiveness, with a couple of lines of code.

### Set the default font sizes
First, you set a default font size and you define the media queries you need. Ideally, you’d use breakpoints when your layout breaks instead of targeting devices (because nowadays there are just way too many device sizes). The units used in this example are from a project I worked on and have no specific meaning outside of that project.

```css
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
### Style your elements

Let’s say you have an `aside` element in your website with a background color and padding that you want to scale proportionally. 
```css
aside {
	background-color: #FAA275;
	padding: 1em;
}
```
On the smallest breakpoint, your padding will be the equivalent of 12px, while on the largest breakpoint, it will evaluate in your browser to 16px.

### Scale some more
And let’s say you have this `aside` somewhere else on your website where you want it to be larger. You’ll only have to define the font-size again and both the font size and the padding of your element will scale accordingly.
```css
aside.larger {
	font-size: 1.5em;
}
```

And there it is: responsive magic. With this pattern you can easily increase or decrease your font sizes or elements, with just a couple of lines of code.