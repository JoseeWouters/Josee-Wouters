---
layout: blog
title: Cherry picking with Git in your terminal
displayDate: 20 januari 2021
date: 2021-01-20
intro: "I've heard it a lot when working with Git: cherry picking. I always thought this was some kind of scary tool that was probably really hard, so I never used it. Now thanks to working at home with two babies, I work some odd hours and sometimes I need to figure things out myself. And when I had to cherry pick a pull request because of a merge gone wrong, I just tried it. I'll help you get started on the basics too."
url:
reading time: 3 minutes
language: en
---
## Now what is cherry picking?
Cherry picking in Git means you pick only the commits you need and commit these to another branch. You could use cherry picking when you only need a couple of commits from another branch, for example a bug fix on a newer branch you can't merge with your own. It also comes in handy when you made a mistake and can't `amend` or `reset` the culprit without having to force push.

I can imagine this all sounds a bit overwhelming, especially when you're like me and you hesitate for a microsecond with actions like `git push` or `merge`. There is a lot of Git software that can make cherry picking as easy as 'drag and drop' but I prefer to use the terminal. The simplicity of it makes it easier for me to focus on the task at hand.

## How do I do it?
Let's start with an example. You and your colleague are both working on separate branches, but your colleague wrote a bit of code that you need on your branch and you can't wait until that pull request is merged. Now you need the _hash_ of the right commit and the command `git cherry-pick <hash>`. 

You can find the hash of a commit in multiple ways. In the commits overview on Github the hash is shown after every commit and exists of 7 digits or letters, for example `1a0be4b`. Another way is to look at the url of a commit on Github, the last part is the hash. 

The third way, if we're staying in the terminal, is to go to your colleague's branch with the commit you need and use the command `git log`. You'll get a log of commits made on that particular branch and that will look something like this: `commit 1a0be4bfb2b22883528bfe7944298853cb913aa4`. This long string of numbers and letters is your hash.

## Let's move this commit! 
If you used `git log` to find the hash, make sure to switch over to your own branch on which you want the commit your coworker made. In the terminal you can `git checkout your-branch-name`. 

Now you use the command `git cherry-pick 1a0be4b`. It doesn't matter if you use the short or long hash, Git knows what you mean. And see, the commit you needed, is now commited to your branch.

That's it. You did it. You just applied the commit `1a0be4b` to your own branch. If you run `git log` you'll see the new commit at the top of your log with the author information of the one who made the commit.

## What about merge conflicts?
I had to use cherry picking because of merge conflict that went wrong. I used `git cherry-pick <hash>` a couple of times and was surprised at how well it went. But suddenly I got an error. 
`fatal: Commit <hash> is a merge but no -m option was given.`

The commit that threw this error was a merge commit. A merge can't be cherry picked like other commits because Git doesn't know what the parent is that has to be applied. In that case, it's better to do the merge again instead of trying to cherry pick it.

## Push and done
When you cherry picked all the commits you need, the only thing left to do is push your branch with `git push`. You now have the changes of another branch available on your own branch with the correct attribution to the person who wrote that piece of code.

I was relieved that it didn't evolve some magic mumbo jumbo and that all it took was one command of `git cherry-pick <hash>`. Hopefully cherry picking is a little bit less scary now for you too.

Of course there's more you can do with this `cherry-pick` command. For example, you can do this multiple hashes at the same time. But these are the basics, to get you started.
