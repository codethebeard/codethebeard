---
layout: post
title: We placed 2nd at GE's Hack-The-Home Hackathon!
description: "We placed 2nd at GE's Hack-The-Home Hackathon! | Michael Large"
featured_image: '/images/gehackathon.jpg'
---

<a href="https://github.com/codethebeard/firstbuild_hackathon" class="button" alt="Checkout the code">View GitHub</a>

Last year in April, I participated with three other teammates in FirstBuild's first Hackathon at their GE Microfactory in Louisville. We had 33 hours to come up with a concept around "Hacking The Home" to compete against 300+ participants for over $60,000 in prizes. Since GE innovates and manufactures appliances for the home, it seemed prudent to "hack" one of their appliances.

I joined with three other talented people: Mark Shelton, Nelson Tanquero, and Jose Padron. Together we comprised a team of Front-End and Back-End Engineers. Nelson and Jose on Hardware and low-level integration; Mark and I on the client side interactions and design.

## We decided to hack a GE Refrigerator.

One of our ideas was to have a voice control mobile application that would talk to the refrigerator to control the water and ice dispenser. It would also record how much water a particular user is consuming a day and alert the user if they are below the [Institute of Medicine of the National Academies](http://www.nap.edu/read/10925/chapter/6#87) recommended daily value for water consumption; All in real-time.

> The job was to show a proof-of-concept and illustrate how this technology could be used to help people

Impractical for most commercial uses? Sure. No one would whip out their phone to turn on the water dispenser. However, it *could* help a disabled person and this technology could be eventually integrated into the refrigerator to give you stats on how much water you are consuming. For instance, there [have been studies](http://www.bbc.com/news/health-30312621) done to show that as you age you don't notice thirst as often and elderly people tend to be more dehydrated. This app could alert you if you aren't drinking enough water.

The job was to show proof-of-concept and illustrate how this technology could be used to help people *and maybe add a little voice control gimmick to show what we can do in 33 hours*. We set to work.

<div class='embed-container'><iframe src='https://www.youtube.com/embed/suHjkLq_xWA' frameborder='0' allowfullscreen></iframe></div>

Yeah. I know, I say "mobile" weird. That's what happens when you don't sleep for two days. But it turned out pretty neat.

## WE WON!

- **2nd Place Overall** from FirstBuild and received a $3000 prize.

- **Firebase's Best Realtime Hack** for integrating consumption information with FirebaseDB.

- **3rd Place** from Renesas ( a development board manufacturer ).

I can't say that I have ever had so much fun writing code under pressure. I loved my teammates, they were great to work with. I strengthened friendships, created new ones. I was tired, stressed, excited, and inspired to push myself to create something awesome in no time. We did a good job, I'm proud to say.


<img src="/images/fixofwater.jpg" alt="Fix Of Water Team">

## The technical stuff

We started everything with a [Intel Edison IOT](https://software.intel.com/en-us/iot/hardware/edison). This acted as our web server for connecting to the client-side application as well as running our NodeJS back-end. Nelson and Jose worked on this and did a fantastic job getting everything setup. Next, we connected the Edison board to a FirstBuild project called the [GreenBean Maker Module](https://cocreate.firstbuild.com/mylescaley/greenbean-maker-module/activity/). This interfaces with the refrigerator via an ethernet cable and gives us access to the 'brain' of the fridge. Just for fun, we also added a small relay to allow the user to turn off and on a kitchen light with their phone.

Next, is the client side. We wanted to package everything up natively but we were restricted to time and quick iteration was key. So we decided to serve a mobile specific web application via WiFi connection to the Edison board.

We chose to use Kik Messenger's [AppJS](http://code.kik.com/app/3/index.html) to build the front-end because it allowed us to get going really quickly without the overhead of something like AngularJS or Ember to get page transitions working. I've found in doing this hackathon that the goal is always to get it working as quick as you can *keeping quality in mind* and than iterate to improve the application.

All the communication between the Edison board and the web application was done through web-sockets via [Socket.io](http://socket.io/). The user would activate a listener via the mobile Chrome browser, it would initiate a new WebKit Speech Recognition instance which is a feature in Chrome. Then the app would set some defaults.


{% highlight javascript %}

var recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'en-US';

{% endhighlight %}


The speech recognition class would then send back a transcript of the voice command in plain text. If the transcript came back with actual text then it was sent to the web server via a socket channel.

{% highlight javascript %}
socket.emit('voice_command', final_transcript);
{% endhighlight %}

The webserver would then take the transcript and compare it with the approved commands via a commands table.

{% highlight javascript %}
var commands_table = [
  [DISPENSE, WATER, UNUSED, UNUSED, startDispensingWater],
  [DISPENSE, CUBED, UNUSED, UNUSED, startDispensingCubed],
  [DISPENSE, CRUSHED, UNUSED, UNUSED, startDispensingCrushed],
  [AUTOFILL, UNUSED, UNUSED, UNUSED, startAutofill],
  [DISPENSE, NUMBER, OUNCES, WATER, startAutofill],
  [STOP, UNUSED, UNUSED, UNUSED, stopDispensing],
  [LIGHT, ON_TXT, UNUSED, UNUSED, turnLightOn],
  [LIGHT, OFF_TXT, UNUSED, UNUSED, turnLightOff],
]
{% endhighlight %}

If the transcript had one of the keywords it would read the appropriate action at the end of the array and fire off that function.

That function would then send off commands to the GreenBean module to tell the fridge to execute one of many actions. It would also send information about the user and the water amount requested to a FireBase database that stored the information in realtime.

*And that's basically it.*

[Checkout the Firstbuild project here](https://cocreate.firstbuild.com/ntanquero/fix-of-water/) to see some diagrams and a little more information about how the project was put together.

Also, feel free to check out the recap that FirstBuild put together to show how big the hackathon actually was.
[1B First Build Recap](https://firstbuild.com/blog/post/hack-the-home-a-look-back/291/)

[DBS Interactive](https://www.dbswebsite.com/blog/2015/04/29/team-from-dbs-takes-1st-2nd-place-at-ges-mega-hackathon/) wrote a short article on our success. Feel free to check it out.
