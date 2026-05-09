---
layout: ../../layouts/NotebookPost.astro
title: "Finalizing Internal Component Connections for Installation"
pubdate: 2025-09-23
description: "Using Dupont connectors to secure piezo saddle wires to the summing board"
author: "Derek Zoladz"
tags: ["Guitars"]
---

**I only write guitar solos 😆**

All of this experimentation. Input instrumentation, playing technique, juggling instruction 
sets, only to capture a bundle of signals that contain enough informational density that I'm 
able to computationally explore the transformation those source signals into a variety of 
auditory phenomena. Exploring ways that microscopically decouple a player's gestures from
the resultant audio.

Graph Tech's summing board for the RMC piezo saddle pickups is marvelous. Shrink tubing the 
stress points of all components and creating 2mm Dupont connectors to secure wire-to-board. 
A bit tedious and frustrating at times. It's time well spent, as this activity will no doubt 
make for a more reliable and cleaner build.

![graph tech summing board](/notebooks/graphtech-summing-board.jpg)

![loose wire connectors preparing to be inserted into a dupont block](/notebooks/rmc-piezo-to-dupont.jpg)

As I'm going to mount the potentiometers internally, I removed the stems to create additional 
open space in the body cavity.

![potentiometer stub](/notebooks/potentiometer-stubs.jpg)

Very early in the contemplation process, I considered reusing the 13-pin connector. It’s the 
same connector used by Roland GK systems. Having abandoned that approach in favor of implementing
the Cycfi Nexus system, a 19-pin LEMO connector was required. There were many advantages to replacing
the port. The LEMO connector uses a push-pull self-latching mechanism to secure the cable to the
guitar body port. The 19-pin system also supports up to 12 audio channels and 7 control voltage 
(CV) channels, plenty of initial capacity for multichannel audio and MIDI controls. The LEMO 
connector itself is 15 mm (0.6 inch) in diameter and is an inplace retrofit for the previous
Roland-compatible port.

![LEMO 19-pin CAD drawing](/notebooks/19-pin-CAD.png)

![reusing the Godin 13-pin hole for Cycfi 19-pin LEMO connector](/notebooks/reuse-roland-panel.jpg)

**Products**

| Product                                   | Description         |
|-------------------------------------------|---------------------|
| [Cycfi Research](https://www.cycfi.com/)  |                     |
| Quimtech                                  | Liquid solder flux  |
| [LEMO](https://www.lemo.com/en)           | Push-pull connector |
| Dupont connectors                         | 2mm and 2.54mm      |
