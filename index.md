# OpenSource DIY EBike / EScooter electronics and firmware

This is an OpenSource DIY EBike / EScooter simple electronics and firmware, to replace the original motor controller and display. This is main compose of 3 different parts:
- Motor controller
- DIY EBike/EScooter board
- Display

## Motor controller

The motor controller is the [popular and high performance OpenSource VESC](https://vesc-project.com/). You can buy it in many online stores like in Aliexpress, and there [small ones of 2kW up to big ones of 20Kw or more](https://flipsky.net/).

VESC is able to drive any motor, has a motor auto detection feature and is very easy to configure.

We control the motor by sending commands to VESC, like the command to set the motor current.

## DIY EBike/EScooter board

The DIY EBike/EScooter board runs the application that implements the EBike/EScooter logic, for instance, it reads the throttle and based on that value, it set the motor current by sendind a command to VESC.









# Older projects (for historic reasons only)

* [EasyDIY OpenSource Ebike display](easy_diy_display_ebike_display/index.md) - previous 
* [TSDZ2 wireless and fully wireless remote](tsdz2_wireless/index.md) - with Garmin Edge integration for page change.
