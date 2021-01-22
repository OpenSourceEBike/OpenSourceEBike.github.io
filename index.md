# TSDZ2 Wireless project aims

This project aims to make TSDZ2 mid drive motor support wireless displays, mobile app and wireless remote control buttons, just like the new commercial ebikes does as [Specialized Turbo Levo Ebike](https://www.youtube.com/watch?v=F43oqj1Zlww).

We developed a DIY wireless board to connect instead of the display, that is very small, easy to build and costs only 25€.

With this wireless board alone, you can power on/off the TSDZ2 motor and increase/decrease the assist levels. If you use our mobile app, you will be able to do the same as also change al the configurations.

We also developed [our own DIY wireless remote](https://github.com/OpenSource-EBike-firmware/ebike_wireless_remote), that makes possible to power on/off the TSDZ2 motor and increase/decrease the assist levels. In addition, it can also connect to a GPS display like a Garmin Edge to change the page.<br> 
This wireles remote costs only 20€ and the battery will work for about 2.5 years.

## Community help

- Forum message: [EBike wireless standard (like Specialized Turbo Levo) - OpenSource](https://endless-sphere.com/forums/viewtopic.php?t=106346)
- Developers: see [documentation](https://github.com/OpenSourceEBike/TSDZ2_wireless/blob/master/documentation/README.md)

## How to build the TSDZ2 wireless board

You will need to acquire the following components:
* **[Wireless board - nRF52840 Nordic USB Dongle](https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-Dongle)**: costs 10€ and can be bought in many online shops.<br>
![](NRF52840.png)<br><br>
* **60V -> 5V power board - EBike buck dd7818ta 80V -> 5V 1A**: costs 4€ and can be bought in many online shops like EBay, just search for "EBike buck dd7818ta 80". Other DC-DC converters can be used, they need to have as input at least 60V and as output 5V.<br><br>
![](60V_DC_DC.png)<br><br>
* **Power switch BTS4140N**: costs 2€, can be bought on EBay or other shops.<br>
* **Transistor BSP296**: costs 2€, can be bought on EBay or other shops.<br>
* **TSDZ2 display extension cable**: costs 6€, can be bought on EBay or other shops.<br>
![](TSDZ2_cable.png)<br><br>

## Schematic

[![](TSDZ2_wireless-schematic.png)](TSDZ2_wireless-schematic.png)

## Firmware

Download the firmware from here: [https://github.com/OpenSourceEBike/TSDZ2_wireless/releases](https://github.com/OpenSourceEBike/TSDZ2_wireless/releases)

# Wireless remote

## Schematic

[![](ebike_remote_wireless-schematic.png)](ebike_remote_wireless-schematic.png)

## How to build wireless remote
You will need to acquire the following components:
* **[Wireless board - nRF52840 Nordic USB Dongle](https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-Dongle)**: costs 10€ and can be bought in many online shops.<br>
![](NRF52840.png)<br><br>
* **VLCD5 Keypad**: costs 10€, this is the keypad from the TSDZ2 original display. Can be bought in many online shops like EBay".<br>
![](VLCD5_keypad.png)<br><br>
* **CR2032 coin cell**: costs 1€, can be bought in any local shop or on EBay or other online shops.<br>