# How to build the TSDZ2 EBike wireless controller

Before you start you need to decide how you want to attach buttons and brake sensors and whether you want the option to have fewer wires on your EBike.

Both options require the use of the mobile app to configure the EBike. The mobile app connection is not required to control the EBike when riding - but can be used to provide real-time statistics; speed/motor current etc.

* **Wireless Controller** and **Wired Remote**:
    * You will need to build only one board and it connects to the motor via 6/8 pin cable.
    * Button keypad connects to the board directly.
    * Brake sensors connect direct to the motor.
    * You can mount the board either on the handlebars (so you can see LED signals easily) or you can mount closer to the motor if preferred.

* **Wireless Controller** and **Wireless Remote**:
    * You will need to build two boards. The first one for the EBike wireless controller and it connects to the motor via 6/8 pin cable. The second board will be for the wireless remote.
    * Button keypad and Brake sensors connect to the Wireless Remote.
    * Wireless Remote is battery powered so can be mounted on the handlebars with no cables.
    * EBike wireless controller is mounted close to the motor. 

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

1 - **Flash bootloader on the nrf52840 board** - see the page: [How to Flash the Wireless Bootloader on a Nordic Dongle](getting_started.md)

2 - **Build your board** - solder all the components following the next schematic. For instance, you can use a [perfboard](https://en.wikipedia.org/wiki/Perfboard) to solder the components and the wires.

2.1 - You can cut your nRF52840 board with a metal saw by hand and this way it will be smaller - here a picture as example:

![](nrf52_board_cut.png)

Schematic: Standard Controller (also need to build Wireless Remote)
[![](TSDZ2_wireless-schematic.png)](TSDZ2_wireless-schematic.png)

Schematic: Wireless Controller with Wired Buttons (Wired Remote)
[![](TSDZ2_wired-schematic.png)](TSDZ2_wired-schematic.png)

Wire multiple brake sensors in parallel.

nrf52840 board pinout:
![Pinout](nordic_pinout.png)

Pictures of a board that you can take as example - note that the nrf52840 board on the pictures were a different version as also one of the mosfets:

A perfboard were used to keep the nrf52840 board in place as also the mosfets and wires:<br>
![](TSDZ2-wireless-board-02.jpg)

Here the mosfets soldered (note the smaller one is now a different one, with the size of the other):<br>
![](TSDZ2-wireless-board-03.jpg)

And on the other side the DC-DC converter (this is one on the picture is one that need to be adjusted for 5V output - not recommended):<br>
![](TSDZ2-wireless-board-01.jpg)

Now with all the wires and the cable to connect on the TSDZ2 display connector:<br>
![](TSDZ2-wireless-board-04.jpg)

Final assembly:<br>
![](TSDZ2-wireless-board-05.jpg)

And inside of a 3D printed box:<br>
![](TSDZ2-wireless-board-box.jpg)

![](3d_printed_box.png)

3 - **Flash firmware on the nrf52840 board** - see the page: [How to Flash the Wireless Remote and Motor Controller Firmware](firmware.md)

4 - **Test** - when the board is powered up and running the firmware, you should see the "TSDZ2" Bluetooth device on your mobile phone.
