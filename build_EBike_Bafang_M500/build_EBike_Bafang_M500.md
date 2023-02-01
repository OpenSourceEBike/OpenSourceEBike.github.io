[![](ebike-2.jpg)](ebike-2.jpg) [![](ebike-1.jpg)](ebike-1.jpg)

My Ebike has a Bafang M500 motor, on a carbon frame Dengfu E10.

Here are all the details for my build, in the hope it will help you in your build. [If you have questions, please post on this forum](https://endless-sphere.com/forums/viewtopic.php?f=28&t=100777&start=1650).

There was a logic sequence for the build:
1. Connect the VESC to the motor, make the motor rotate and configure the VESC
2. Build the EBike board, connect to the VESC and to the torque sensor and other sensors
3. Build the display and connect to the EBike board
4. Do the final installation on the EBike

# VESC Motor controller

The VESC motor controller I use is the [FLIPSKY Mini FSESC6.7](https://flipsky.net/products/flipsky-mini-fsesc6-7-pro-70a-base-on-vesc6-6-with-aluminum-anodized-heat-sink). It can handle a continuous current of 70A, while I am looking to use only 12A. Also it supports a battery from 14V up to 48V, and I am using a 48V one.

![](FLIPSKY_Mini_FSESC6.7-1.png)

And the most important, it is small enough to fit inside the Bafang M500:

![](FLIPSKY_Mini_FSESC6.7-2.png)

I started to connect this VESC to the motor 3 phase wires. Then I connected my 48V EBike battery to the VESC. Finally I connected the VESC to my PC using a USB cable.

On the VESC tool software, I did the motor auto detection, the first motor run and the final configurations -- see all the details on the [**VESC configurations**](VESC_configurations/VESC_configurations.md) page.

Note that you can buy on Aliexpress the battery connector XT60 and the motor 3 phase connector MR30.

# EBike board

The DIY EBike board task is to run the EBike software application. This software is high level Pyhton (easy and fast to develop) and is programmed by Wifi wireless from a phone or a PC.

The EBike application reads the input sensors as the throttle, maps the throttle value to a motor current (motor torque), and finally send this value to VESC motor controller, that will make the motor rotate with this specific current / torque.
It also sends and receives data to the display.

[![](build_EBike_board/EBike_board-6.jpg)](build_EBike_board/build_EBike_board.md)

[![](build_EBike_board/EBike_board-7.jpg)](build_EBike_board/build_EBike_board.md)

See all the details on the [**Build EBike board**](build_EBike_board/build_EBike_board.md) page.

# Display

TODO

# Power management

Smart BMS on/off switch.

TODO