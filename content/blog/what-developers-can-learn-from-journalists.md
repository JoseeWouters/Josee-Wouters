---
layout: blog
title: "What developers can learn from journalists"
displayDate: 24 maart 2022
date: 2022-03-24
intro: "It sounds so easy: create a `div` or other HTML element and
give it a name. But I bet you’ve been there before: 
staring at a piece of code, wondering what would be a short, clear and descriptive name for your element.
Did you know we can learn something from journalists here? In a journalistic article, almost everything 
has a function... and a name! What can we as developers use from this to improve - or at least simplify - our naming
conventions?"
language: en
---

## Title, subtitle and chapeau

The page you’re working on probably has a `title` (don’t forget, that’s usually your `h1`), but that’s usually
not the only heading you have on a page. If you have a heading below your title that explains a bit more about it or
your site, you can call that your `subtitle`. So far, so good, right? Nothing difficult at naming these headings.

What if you don’t have a subtitle, but a more descriptive heading placed above your title? Let’s look at a
journalistic article. In journalism this is actually called a `chapeau`. If you look in the inspector at my website you
can see that I used that here.

```html
<h1 class="chapeau">lead front-end developer</h1> 
```

Note: when designing this website in 2018, I made this my `h1` because I wanted to rank on my job title and not on my
name.

## Intros and leads

Most of the time when you’re creating the HTML for a blog or an article, you will probably call a first paragraph
the `intro`. But it could also be that you need `intro` for another element. Then what will you call the first
paragraph when it needs a different class than other parapgrahs?

Again, let’s look here at a journalist article. The `intro` is usually not really a part of the article, but it
explains a bit more about it and what you can expect to read there. Both the websites of _De Volkskrant_ and _NRC_ make use of
this.

```html
<p class="artstyle__intro">
  Dagelijks worden er coronacijfers gepubliceerd door 
  gezondheidsautoriteiten wereldwijd. Op deze pagina vindt u de
  nieuwste gegevens over ziekenhuisopnamen, besmettingen en
  sterfte door corona, en het verloop van de vaccinatiecampagnes, 
  in Nederland, Europa en de rest van de wereld.
</p>
```

Source: [De Volkskrant](https://www.volkskrant.nl/nieuws-achtergrond/de-belangrijkste-cijfers-over-corona-in-nederland-europa-en-de-wereld~bf5fec61/)

```html

<div class="intro article__intro">
  <p>
    <span class="keyword">Ongewenst intiem?</span>
    Hoe gaan acteurs en makers om met intimiteit op het podium?
    „De zoen was essentieel voor de impact van de voorstelling.” 
    Maar: „Een kus kan voor een acteur heel kwetsbaar zijn.”
  </p>
</div>
```

Source: [NRC](https://www.nrc.nl/nieuws/2022/03/23/toneelzoen-als-daad-van-emancipatie-of-provocatie-a4104671)

The first paragraph of an article is meant to drag you into it, it’s here where the reader decides if they are going to read
on. It’s catchy, in styling it usually stands out a bit more than the other paragraph. It is also a part of the
article, where an intro isn’t. It is called a `lead`. _De Correspondent_ makes use of this, although in their
design the lead is placed first, apart from the title, image and the rest of the content. I can imagine that for the developers this
wasn’t an easy thing to name!

```html

<div class="article-lead">
  <p>
    De toeslagenaffaire ontstond doordat gezinnen voor de kleinste
    foutjes genadeloos werden afgestraft en al hun kinderopvangtoeslagen
    moesten terugbetalen. Nu is de pendule volledig de andere kant op 
    geslagen: bij de minste aanleiding heb je al recht op riante 
    compensatie, zelfs als je wel degelijk de boel bedonderd hebt. 
    De kosten lopen inmiddels op tot 5,5 miljard euro, elf keer zo veel
    als vorig jaar nog was begroot.
  </p>
</div>
```

## Quote and streamers

I don’t think a `quote` needs a lot of explanation. You are probably familiar with the HTML element of `blockquote` and
giving this a class of `quote` is only logical.

A more interesting element from a journalist article, is one we can certainly use as developers. A `streamer`. A
streamer can be a couple of things. It’s not so much a technical term, as it is a design term. It can be heading in your
article, it can be a sentence from the article that needs to stand out. You could even use it on another page to attract
attention for a page or blog in particular. I bet this comes in handy!

Interestingly enough, _De Correspondent_ uses a `blockquote` with a class name of `streamer`.

```html

<blockquote class="Streamer">
  Zo lijkt de geschiedenis van de toeslagenaffaire zich langzaamaan
  in spiegelbeeld te herhalen
</blockquote>
```

And _NRC_ even uses both.

```html

<blockquote class="streamer quote">
  <p class="bq">
    Je ziet ook vaak dat vooral jongens wegkijken of hun tas 
    voor hun hoofd houden als het gebeurt
  </p>
  <p class="qsource">Denzel Goudmijn <span class="qttl">acteur</span></p>
</blockquote>
```

## Naming things is hard!

Especially these last two examples prove in my opinion, that naming things is hard. Even more so when you want to keep
it simple. Sometimes I even joke that naming my kids was easier.