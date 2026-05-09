---
layout: ../../layouts/NotebookPost.astro
title: "Graph Tech Labs & CYCFI Research"
pubdate: 2025-09-20
description: "Considering custom hardware to process each string's vibration into a discrete signal until investigating Cycfi Research's Nexus-GK"
author: "Derek Zoladz"
tags: ["Guitars"]
---

![derek zoladz in his basement](/notebooks/derek-zoladz-basement.jpg)

I've set up a temporary workbench in the basement to complete the build. Several hours each weekend
are spent working on the design and implementation of circuit connections while my laundry is churning
away in the background. The original internals, the RMC Poly-Drive X preamp system and piezo-electric
transducer saddles, for Godin electric guitars with synth access were already removed. The PCB boards 
and 13-PIN plug used for Roland synth systems were resting on the back of the bench.

Considering custom hardware to process separate string signals, I contacted Richard Graham to talk
about the current status of his [SEPTAR](https://dl.acm.org/doi/10.5555/2993778.2993840) board that 
functions as an electric guitar breakout box for polyphonic audio systems. It was recommended that I 
investigate the projects of [Joel de Guzman](https://github.com/djowel), the principal architect and 
engineer at the open Source software and hardware company [Cycfi](https://www.cycfi.com/) Research. 

Cycfi Research published all the schematics, PCB layout, CAD drawings, and bill of materials on 
[GitHub](https://github.com/cycfi) for their products. Cycfi's Nexus-GK breakout box was a housed
in a beautifully-design, anodized aluminum enclosure. Along with the internal breakout board to
control and configure the routing of pickup signals, control voltages, and any switches, I was 
convinced to ignore my compulsion to design and build my own hardware system. The thorough setup
documentation, rugged 19-pin cable, and locking LEMO connector included in the 
[Nexus-GK system kit](https://www.cycfi.com/product/nexus-gk-basic-set/) solidified the decision.
The kit includes the hardware required to split electric guitar string vibrations into discrete 
audio signal, but the [Nu Multi](https://www.cycfi.com/product/nu-multi-6/) modular active pickup
for 6-string hexaphonic electric guitar is required to capture the source.

The [internal breakout board documentation](internal-breakout.pdf) is fantastic. We're entering 
the next-level, mythical realm of chimeric beauties. This PCB encourages hybrid designs by supporting 
both 2mm and 2.54mm connectors.

![cycfi internal breakout board](/notebooks/cycfi-breakout-board.jpg)

Cycfi generously provides a complete reference implementation of a Nexus system, called 
[Meredith](meredith.pdf). This document was useful for understanding the PCB layouts and 
engineering specifics that I required to plan my own design, which included additional
components to replace the aging RMC preamp from the original 1990s Godin design.

![diagramatic sketch of the internal circuitry layout](/notebooks/internal-circuitry-sketch.jpg)

[Graph Tech Ghost Acousti-Phonic](https://graphtech.com/collections/ghost-pickup-systems-parts-accessories/products/ghost-bass-acousti-phonic-preamp) 
preamp board was selected to generate the harmonically-rich and silky resonance from the
RMC saddles. [Graph Tech's installation manual](ghost-installation-manual.pdf) provides 
quality instruction on the functionality of each component of the overall system, along 
with many examples that illustrate design decisions. Proving parts like a summing board 
to group each piezo terminal into a single PBC board connection are the useful bonus. 

![graph tech acousti-phonic PCB board](/notebooks/graphtech-acoustiphonic.jpg)

**Parts & Products**

| Product                                                | Description                               |
|--------------------------------------------------------|-------------------------------------------|
| [Graph Tech Labs](https://graphtech.com/)              | Acoustiphonic preamp                      |
| [Cycfi Research](https://www.cycfi.com/)               | Hexaphonic pickup and signal distribution |
| [RMC Pickups](https://www.rmcpickup.com/products.html) | Piezo saddle transducers                  |
