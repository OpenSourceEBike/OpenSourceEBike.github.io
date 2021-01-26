## How to build the TSDZ2 wireless board

You will need the following components:
* **[A programmed nRF52840 Nordic USB Dongle]**<br>
![](NRF52840.png)<br><br>
* **60V -> 5V power board - EBike buck dd7818ta 80V -> 5V 1A**: costs 4€ and can be bought in many online shops like EBay, just search for "EBike buck dd7818ta 80". Other DC-DC converters can be used, like the [Traco power TEC-2-4811WI](https://uk.farnell.com/tracopower/tec-2-4811wi/dc-dc-converter-5v-0-4a/dp/2854928). Please note that any DC converter that you choose must have a voltage input of at least 60V and a 5V output.<br><br>
![](60V_DC_DC.png)<br><br>
![](tec.png)<br><br>
* **Power switch BTS4140N**: costs 2€, can be bought on EBay or other shops.<br>
![](4140.png)<br><br>
* **Transistor BSP296**: costs 2€, can be bought on EBay or other shops.<br>
![](bsp296.png)<br><br>
* **TSDZ2 display extension cable**: costs 6€, can be bought on EBay or other shops.<br>
![](TSDZ2_cable.png)<br><br>

To get started, you need to first replace the bootloader that comes with a new  Nordic nrf52840 Dongle with a bluetooth enabled wireless bootloader.

### See: [How to Flash the Wireless Bootloader on a Nordic Dongle](getting_started.md)

Once you have the wireless bootloader installed, you need to load the firmware for both the remote control and the motor controller. The firmware can be uploaded using bluetooth wirelessly to the nrf52840 dongle, a process that makes future firmware updates a breeze!

### See: [How to Flash the Wireless Remote and Motor Controller Firmware](firmware.md)

With the nrf52840 dongle programmed and ready to be used, you will need to assenble the components needed for both the remote control and the wireless motor controller
## Schematic
Solder the board as shown in the schematic below:
[![](TSDZ2_wireless-schematic.png)](TSDZ2_wireless-schematic.png)



## [back](./index.md)
