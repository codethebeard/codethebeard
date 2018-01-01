---
layout: post
title: Sounds Of Louisville
description: "Sounds Of Louisville - An exploration of the sounds of the city"
permalink: /portfolio/soundsoflouisville/
featured_image: '/images/soundsoflouisville.jpg'
---

<a href="http://soundsoflouisville.com" class="button" alt="Go to the Sounds Of Louisville website.">View Website</a> &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/codethebeard/soundsoflouisville" class="button" alt="Checkout the code">View GitHub</a>

I always try to challenge myself to create things when I have a little bit of time away from my work desk. This time I wanted to create an experience that you normally wouldn't really think about. There are a lot of city centric blogs out there that take photos, videos, and write about the area that they are in. But, there hasn't been many sound blogs from a city. There are tons of different atmospheres from across the city that have distinct sounds. That's what [Sounds Of Louisville](http://soundsoflouisville.com) aims to explore.

Basically, it's a sound blog that contains high quality, 180 degree stereo ambient sound from different places around the city of Louisville at different times during the day. It could be sounds from construction at the new Omni Hotel, the birds chirping downtown at the Humana building, or a thunderstorm in the East-End. There are so many sounds to explore.

## My Goal

I wanted to create this blog with simplicity in mind so that I can update it easily without much overhead. So, I decided to host the static assets on [GitHub](https://github.com/codethebeard/soundsoflouisville) and the sounds that I recorded on [SoundCloud](https://soundcloud.com/soundsoflouisville). The user needed an interactive Google Map to show all of the places that I recorded and for the sounds to play automatically when you clicked the map marker.

> I wanted to build this over a lunch break.

Everything is tracked with Google Analytics as well as Event Tracking on the marker clicks so I know where people are interested the most. I also wanted to build this over a lunch break in under an hour.


## Technology

I built this blog in AngularJS with a google maps module to help make the process a little faster. This was a mini-hackathon after-all. I also wanted to try to stick to [John Papa's Angular style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).

The app consisted of three javascript files:

### [app.js](https://github.com/codethebeard/soundsoflouisville/blob/master/js/app.js)

This file was mainly for instantiating the Angular app as well as setting up config for my Google Analytics and pulling in my modules.

### [home.controller.js](https://github.com/codethebeard/soundsoflouisville/blob/master/js/controllers/app.home.controller.js)

This file consisted of a few $scope calls to update information on the front-end as well as some calls to our Data service to get information from our static data.

### [data.service.js](https://github.com/codethebeard/soundsoflouisville/blob/master/js/shared/data.service.js)

I needed a service who's sole job it was to gather location and media data from a [JSON](https://github.com/codethebeard/soundsoflouisville/blob/master/js/shared/data.json) file. Separating this service on it's own was important so that if our data structure changes all we need to do is update the methods here and not a bunch of other places.

The application reads the data from a JSON file, parses it's information and loops through the different entries and displays them as markers on a Google Map. When a user clicks a marker it sends the marker information back to the home controller and it pulls the correct audio player from SoundCloud then repositions the map at a higher zoom level.

## The Future

There are a lot of things that I want to do with this project. I would like to integrate it into a Hybrid Mobile Application and add a VR experience along with the sounds. For instance, when you clicked on the marker it would open a Google Cardboard compatible 360 degree photo of the place that the sound was recorded. Perhaps that 360 degree VR experience had tooltip markers on the image that you could hover over with a VR cursor in the middle of the screen and read a little history about the area that you are in.

I'll be updating this soon to incorporate these features as soon as I get the chance.
