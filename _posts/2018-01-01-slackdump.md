---
layout: post
title: Dump - A Desktop Utility
description: "Dump - A simple desktop toolbar to delete Slack files in bulk"
permalink: /portfolio/dump/
featured_image: '/images/slackdump.jpg'
---

<a href="https://github.com/codethebeard/dump" class="button" alt="Checkout the code">View GitHub</a>

It's been three years since the awesome guys at [Tiny Speck](http://tinyspeck.com/) created their internal messaging tool, [Slack](https://slack.com). Since then they have improved their product and released it to the wild. They turned an internal tool into a [multibillion dollar business](http://fortune.com/2016/04/01/slack-raises-200-million-at-3-8-billion-valuation/) and it's pretty cool to see where they came from.

I've been using Slack for the better part of a year or so and one of the frustrations about the free version is the file quota cap they have. I *completely* understand why they have it. It's a free service... A GREAT free service. They have to cap the file uploads because it can overload their servers with space and if you are a cheap <del>bastard</del> person like me you try to create ways to get around it without violating terms of service or the law. That's where Dump comes into play.

One of the cool things that they do is allow developers to write integrations with their service. So I decided to write a OSX toolbar utility to go through my slack team's public files and delete all the files in bulk. This does two things: Discourages the teams users to add any important files to the slack channels without first putting them in the appropriate places *like our intranet filesystem*. It also frees up space on Slack's servers while lowering our upload usage.

## How we use it

Anytime we get a warning from slack that we are about to pass our upload quota, I just notify everyone in slack that we will be cleaning out the files and to make sure that everyone backs up their files elsewhere.

Then I just click the toolbar in the top of my desktop to run the utility. It then looks through all of the public channels and any files that I uploaded in personal messages and deletes them one-by-one. It doesn't handle private channels or private messages that I'm not associated with. The enterprise version of Slack does allow for access to those channels and this code could theoretically delete from those as well.

<img src="/images/slackdump-2.jpg" alt="How we use Dump">

## Technical Details

I work on these projects in my free-time. It's pretty rare that I have free-time. Currently this [project](https://github.com/codethebeard/dump) is a work in progress but I've made some good progress on it so far. Right now the active code that deletes the files is setting in a bash script on my desktop so I still need to translate it into this application. It's built on [Electron](electron.atom.io) a framework for building cross-platform hybrid desktop applications and toolbars. Which, coincidentally, Slack is built upon.

## Goals and ToDo

I want to finish this project soon and I have some goals for what I want to do with it.

* <del>oAuth Single Sign-on</del> - *completed*
* Shore up UI design
* One Step File Deletion
* Automatic #general channel notification
* Don't delete files that were uploaded in the past 24 hours.
* Cron that automatically runs the script based on settings.
* Simple binary download to use on your own team!
* Update this case study with good documentation. :)
