## How to build wireless remote
You will need the following components:
* **[programmed  nRF52840 Nordic USB Dongle]**<br>
![](NRF52840.png)<br><br>
* **VLCD5 Keypad**: costs 10€, this is the keypad from the TSDZ2 original display. Can be bought in many online shops like EBay".<br>
![](VLCD5_keypad.png)<br><br>
* **CR2032 coin cell**: costs 1€, can be bought in any local shop or on EBay or other online shops.
* <br>
![](cr2032.png)<br><br><br>

To get started, you need to first replace the bootloader that comes with a new  Nordic nrf52840 Dongle with a bluetooth enabled wireless bootloader.

### See: [How to Flash the Wireless Bootloader on a Nordic Dongle](getting_started.md)

Once you have the wireless bootloader installed, you need to load the firmware for both the remote control and the motor controller. The firmware can be uploaded using bluetooth wirelessly to the nrf52840 dongle, a process that makes future firmware updates a breeze!

### See: [How to Flash the Wireless Remote and Motor Controller Firmware](firmware.md)

With the nrf52840 dongle programmed and ready to be used, you will need to assenble the components needed for both the remote control and the wireless motor controller

## Schematic
Solder the remote control and brake sensor to the dongle as follows:
[![](ebike_remote_wireless-schematic.png)](ebike_remote_wireless-schematic.png)

## [back](./index.md)