# How to build the TSDZ2 wireless board

You will need the following components:
* **nRF52840 Nordic USB Dongle**<br>
![](NRF52840.png)<br><br>
* **60V -> 5V power board - EBike buck dd7818ta 80V -> 5V 1A**: costs 4€ and can be bought in many online shops like EBay, just search for "EBike buck dd7818ta 80". Other DC-DC converters can be used, like the [Traco power TEC-2-4811WI](https://uk.farnell.com/tracopower/tec-2-4811wi/dc-dc-converter-5v-0-4a/dp/2854928). Please note that any DC converter that you choose must have a voltage input of at least 60V and a 5V output.<br><br>
EBike buck dd7818ta 80V:<br>
![](60V_DC_DC.png)<br><br>
[Traco power TEC-2-4811WI](https://uk.farnell.com/tracopower/tec-2-4811wi/dc-dc-converter-5v-0-4a/dp/2854928):<br>
![](tec.png)<br><br>
* **Power switch BTS4140N**: costs 2€, can be bought on EBay or other shops.<br>
![](4140.png)<br><br>
* **Transistor BSP296**: costs 2€, can be bought on EBay or other shops.<br>
![](bsp296.png)<br><br>
* **TSDZ2 display extension cable**: costs 6€, can be bought on EBay or other shops.<br>
![](TSDZ2_cable.png)<br><br>

## Step by step instructions

1. **Flash bootloader on the nrf52840 board** - see the page: [How to Flash the Wireless Bootloader on a Nordic Dongle](getting_started.md)

2. **Build your board** - solder all the components following the next schematic. For instance, you can use a [perfboard](https://en.wikipedia.org/wiki/Perfboard) to solder the components and the wires.

Schematic:
[![](TSDZ2_wireless-schematic.png)](TSDZ2_wireless-schematic.png)

nrf52840 board pinout:
![Pinout](nordic_pinout.png)

3. **Flash firmware on the nrf52840 board** - see the page: [How to Flash the Wireless Remote and Motor Controller Firmware](firmware.md)

4. **Test** - when the board is powered up and running the firmware, you should see the "TSDZ2" Bluetooth device on your mobile phone.

## [back](./index.md)
