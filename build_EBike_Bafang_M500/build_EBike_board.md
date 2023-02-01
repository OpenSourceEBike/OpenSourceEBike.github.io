The EBike board task is to run the EBike application. The software on this board is high level Pyhton (easy and fast to develop) and is programmed by Wifi wireless from a phone or a PC.

The EBike application reads the input sensors as the throttle, maps the throttle value to a motor current (motor torque), and finally send this value to VESC motor controller, that will make the motor rotate with this specific current / torque.
It also sends and receives data to the display.

This is the EBike board schematic:
[![](EBike_board-schematic.png)](EBike_board-schematic.png)

The main component is the ESP32-S3-DevKitC-1 N8R2 board that you can buy in Aliexpress. This is the microcontroller board, that runs the Pyhton software and has Wifi and Bluetooth capabilities.

The only other board is the TJA1050 that is a CANBUS module. This board is needed to make the ESP32-S3 board being able to communicate with the Bafang M500 torque sensor.

