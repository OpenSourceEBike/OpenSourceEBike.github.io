# TSDZ2 Wireless Project 
## Background
The project objective is to provide wireless TSDZ2 mid drive motor support for bike computers (and other wireless displays), a mobile android app for configuration and control, and a wireless remote control for assist level changing, power control and more. The goal is to emulate and improve upon commercially available wirelessly controlled ebikes like the  [Specialized Turbo Levo Ebike](https://www.youtube.com/watch?v=F43oqj1Zlww).

We have developed [a DIY wireless motor controller](https://github.com/OpenSourceEBike/TSDZ2_wireless/tree/master/EBike_wireless_TSDZ2) to connect to the motor, instead of using a wired display. The basis of the controller is the Nordic nrf52840 dongle, which has a very small form factor, supports multiple wireless formats, is easy to solder and costs only 25€.
![nordic](nordic.jpg)
With this wireless controller alone, you can power on/off the TSDZ2 motor and increase/decrease assist levels. If you use our mobile app, you will be able to accomplish the same actions and also change the motor configuration.There are over 100 configuration options that can be customized to fit any user's particular requirements!

We have also developed [our own DIY wireless remote](https://github.com/OpenSourceEBike/TSDZ2_wireless/tree/master/EBike_wireless_remote), that makes it possible to power on/off the motor, increase/decrease  assist levels, display motor battety levels and more. In addition, it can also connect to a GPS display like a Garmin Edge to change data pages.<br> 
This wireless remote costs only 20€ and the battery will work for about 2.5 years.
## Getting Started
To get started with this project, you need to first replace the bootloader that comes with a new  Nordic nrf52840 Dongle with a bluetooth enabled wireless bootloader.

### See: [How to Flash the Wireless Bootloader on a Nordic Dongle](getting_started.md)

Once you have the wireless bootloader installed, you need to load the firmware for both the remote control and the motor controller. The firmware can be uploaded using bluetooth wirelessly to the nrf52840 dongle, a process that makes future firmware updates a breeze!

### See: [How to Flash the Wireless Remote and Motor Controller Firmware](firmware.md)

With the nrf52840 dongle programmed and ready to be used, you will need to assenble the components needed for both the remote control and the wireless motor controller
### See: [How to Assemble the Wireless remote control](build_remote.md)

## See: [How to Assemble the TSDZ2 Wireless Controller](build_tsdz2_board.md)

## Operating Instructions
You are now ready to enjoy your new wirelessly controlled ebike.

### [Wireless Remote operating instructions](operation.md)

### Wireless Motor Controller Operating Instructions (TBD)

## Community help

- Forum message: [EBike wireless standard (like Specialized Turbo Levo) - OpenSource](https://endless-sphere.com/forums/viewtopic.php?t=106346)
- Developers: see [documentation](https://github.com/OpenSourceEBike/TSDZ2_wireless/blob/master/documentation/README.md)


