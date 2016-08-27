---
layout: post
title: "The Penny Power Loss Alarm: Part 1"
date: "2016-08-27 13:06:39 -0400"
featured_image: '/images/embed.jpg'
---


So to start this off I have to give you a little background about my family. My grandmother has been on an oxygen concentration machine for the last year. Basically, it takes the 21% oxygen that we have in our environment and concentrates it to a higher level to deliver it right to her nose. It's a pretty piece of engineering. This machine is a lifeline. For backup, she has massive oxygen tank reserve that she can switch to in an emergency or when she's going out.

## The problem

A few months ago my grandmother experienced a power outage in the middle of the night. She didn't know that she wasn't getting any oxygen because she was sleeping. Eventually, her low blood oxygen levels woke her up and, in a panic, she got out of bed to retrieve an oxygen tank.

> It was a close call that shook our family.

Quite honestly, I was surprised that these life supporting machines didn't have battery backups built into them. So I went online to see if I could find an uninterruptible power supply for her. They were expensive. We couldn't get one right away so we need a different plan for now.

The basic problem is that she can't get to a reserve tank in enough time without panicking. So I came up with an idea for an alarm that would wake her up in the event of a power outage. I call it "The Penny Power Loss Alarm"; named after her.

## The Idea

I wanted this alarm to do a couple of things while we work on getting her a backup system. This alarm should wake up her up in the event of a power outage from a storm or utility problem so that she has enough time to get her reserve tank without much of an issue. It should also notify a third party, such as my grandfather who could help her or my mother who lives across the street if my grandfather isn't home.

I've been playing around with a micro-controller from Partcle.io that is "internet enabled" and could allow me to send requests when something happens. It seemed like a good choice because of it's low cost and ease of use. They also have a cellular version that doesn't require the use of a WiFi router. What I want to build is a battery powered circuit that monitors the power from the outlet that her machine is hooked up to. When the power goes out, the micro-controller would detect the voltage drop and send a message to IFTTT.com. IFTTT could send an alert to my grandmothers phone which is normally at her bedside. It would also send a phone-call to a list of people that could check on her. As a backup, the circuit would be outfitted with a buzzer ( like one you would find in a smoke alarm ). At least, if those two alarms didn't wake her up, it would notify someone to go and check on her.

That's the situation and my idea to solve the problem. I have limited time to get this project finished because we can experience power outages quite frequently during the winter as snowstorms blow in. I'll be writing more as I gather plans, equipment, and resources to finish everything up. I think she'll enjoy the fact that I'm thinking of her and hopefully this will give her piece-of-mind in the event this happens again.
