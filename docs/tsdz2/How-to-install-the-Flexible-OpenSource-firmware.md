These notes will help you to install or update the Flexible Open Source
firmware on the TSDZ2 motor controller. To build the display you should
see here:
[<https://opensourceebike.github.io>](https://opensourceebike.github.io/).

\
**IMPORTANT NOTES:**

-   Installing the open source firmware will void your warranty of the
    TSDZ2 and displays.
-   We are not responsible for any personal injuries or accidents caused
    by use of this firmware.
-   There is no guarantee of safety using this firmware, please use it
    at your own risk.
-   We advise you to consult the laws of your country and tailor the
    motor configuration accordingly.
-   Please be aware of your surroundings and maintain a safe riding
    style.

\
\_\_TOC\_\_

# Introduction

Note: If you are afraid to do the installation by yourself, you can ask
at a local ebike shop as they should easily be able to do it, as the
technical difficulty is small.

**[Jbalat did a series of videos explaining how to install the
firmware](https://www.youtube.com/watch?v=nj8GxKHut3o)** (please note
that this video shows the old display that is not used anymore).

**NOTES:**

-   **Motor configurations:** TSDZ2 motor configurations found on online
    shops (36V, 48V, 52V, whichever power in watts, with throttle or
    without) the motor controller is just the same. The only relevant
    difference is brushless motor inside, that there are only 2
    different: 36V and 48V motor (52V systems use the 48V motor).
-   **Motor max power without damage by heating:** the motor can handle
    only about 8 or 10 amps continuously (10 amps with a 52V battery is
    520 watts) otherwise it will heat up fast and damage permanently the
    motor. Peaks of 18 amps can be used, like at startup or for short
    time but it is advised to install the motor temperature sensor so
    the firmware will be able to protect the motor, by reducing the
    motor current as soon the starts heating after a defined threshold.

# Steps for the installation or update {#steps_for_the_installation_or_update}

Before start, please first read all the steps to find the tools you will
need to have.

NOTE 1: when you install or update the firmware, you need to do it both
for TSZD2 motor and display, as the display firmware expects a specific
version of firmware installed on TSDZ2 motor.

NOTE 2: when you need to install and use the various software tools, if
they are not available to your computer operation system, you can try to
use a virtual machine like [Virtual Box](https://www.virtualbox.org/) -
this may be a lengthy and hard process because you will probably need to
learn how to install and use a virtual machine as also how to install
and use a different operation system.

If you are updating the firmware, skip the steps 1 and 3.

1.  Build the display, [see here](https://opensourceebike.github.io/).
2.  Wire display to TSDZ2, [see here](wire_display "wikilink").
3.  [Flash the firmware on
    TSDZ2](Flash_the_firmware_on_TSDZ2 "wikilink")
