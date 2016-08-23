---
layout: page
title: Teatime
description: "Teatime - A lesson in 'why not'"
permalink: /portfolio/teatime/
featured_image: '/images/teatime.jpg'
---

<a href="https://codethebeard.com/teatime" class="button">View Website</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/codethebeard/teatime" class="button">View Github</a>

As you have probably read before, I like to challenge myself to do little mini-hack-a-thons to test what I can do in a short amount of time. These hack-a-thons usually take place within my lunch break between working on responsive websites, writing technical specifications for projects, or the good 'ol RFP meetings. It's a good break between the sometimes monotonous and tedious work that I occasionally have to do.

For a while I would pop down to the local Heine Bros Coffee shop on Fourth Street to get a tea. I had tried every tea at this point and my barista and friend, Brittany suggested that I mix two teas together to get a different blend of flavors.

I did that for a few weeks until she finally joked, "Hey, you should make a spin the wheel to tell you what teas you should mix." I laughed and built this that same day. I also brought a few other people to help out to see what we could come up with in 1 hour. Our designer, Emily Clark worked on the overall design and SVG vectors with some suggestions from Mark Shelton. And Tim Wallis and I knocked out the functionality of the application.

## Technology

The technology is really simple. It just uses an array of the different tea names and iterates through them twice to build two lists of teas that we can matchup. Each list item has a height of 3 ems. The javascript picks a random number between 1 and the amount of teas available. Then animates the list up or down by increments of 3 ems to show the tea chosen.

<img src="/images/teatime-2.jpg" class="page__featured-image" alt="Tea Time Example of wireframe">

Pretty simple. It also does some simple Event Tracking so that I can see how random the tea combinations actually are.

## The Future

Eventually, I'll get back into this project. I wanted to incorporate Firebase or MongoDB for the data store, rewrite it in Angular and provide a simple rating system so that a user could inform others that a particular tea combination was good or not.
