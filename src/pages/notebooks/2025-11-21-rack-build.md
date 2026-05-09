---
layout: ../../layouts/NotebookPost.astro
title: "Constructing the Signal Receiving End of the Equation"
pubdate: 2025-11-01
description: "The next phase of the project involves constructing the receiving end of the guitar signals"
author: "Derek Zoladz"
tags: ["Guitars"]
---

After several months, I've reassembled the guitar into a playable condition. The electronic 
components are installed. The fretboard is attached. The truss rod and saddles have been
adjusted to match the updated hardware. And we're moving on to testing and troubleshooting
any issues with signal generation from the transducers. It's a relief to put fingers to 
fretboard and realize that there's been negligible impact on playability.

There's a significant amount of work remaining on the receiving end. The 19-pin LEMO connector
securely snaps into the Cycfi Nexus unit, but that's the least effort component in the setup.
On the other end of the spectrum, building my own cables from Mogami and Creative Labs components
to control the length of each run will be one of the more time-consuming and effortful tasks.

![wiring TRS mono cables](/notebooks/wiring-trs-mono.jpg)

Situating the hardware into the rack and defining the signal routing scheme to minimize obstructions
and clutter is critical. As a semi-permanent figure, the components need to be positioned for 
maximum accessibility without needing to uncouple wiring or disconnect elements from the rack.
The receiving end of the guitar signal also needs to afford flexibility and modularity. 

Unfortunately, I failed to adjust the splice point on a few cables to account for the horizontal 
drift as insert point move across the patch bay, so things clean aren't as clean and tidy as I'd 
prefer. I can live with it.

![patch bay and nexus internals](/notebooks/cycfi-nexus-internal.jpg)

Klein Tools digital multi-meters are wonderful products. Accurate, dependable, and reasonably priced 
for hobbyists and tinkerers. In the image below, I'm resting the guitar's neck on a mini-stand 
to check of voltages across the internal components, pickups, and wiring harnesses.

![klein tools multimeter to test voltages](/notebooks/testing-voltages.jpg)

**Tools & Supplies**

| Product                                                                                                                                    | Description             |
|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|
| [Klein MM420](https://www.kleintools.com/catalog/multimeters/digital-multimeter-manual-ranging-600v-1)                                     | Digital Multimeter      |
| [Klein Kurve](https://www.kleintools.com/catalog/combination-cutting-tools/klein-kurve-long-nose-wire-stripper-wire-cutter-crimping-tool)  | Long-Nose Wire Stripper |
| [Mogami W2524](https://mogamicable.com/)                                                                                                   | .25 inch cable          |
| [Creation Music Company](https://creationmusiccompany.com/collections/diy-power)                                                           | TRS & TS plugs          |
| [Hercules](https://herculesstands.us/)                                                                                                     | Travelite guitar stand  |
| [Stewart-MacDonald Manufacturing](https://www.stewmac.com/)                                                                                | Luthier supplies        |
