# DIY EBike board

The DIY EBike board task is to run the EBike software application. This software is high level Pyhton (easy and fast to develop) and is programmed by Wifi wireless from a phone or a PC.

The EBike application reads the input sensors as the throttle, maps the throttle value to a motor current (motor torque), and finally send this value to VESC motor controller, that will make the motor rotate with this specific current / torque.
It also sends and receives data to the display.

There are 4 sensors on Bafang M500:
* **Torque sensor:** has a CANBUS connection and outputs the pedal torque and pedal cadence values.
* **Throttle:** is a simple analog signal between 0 and 3.3V that represents the throttle position.
* **Brake:** is a simple digital signal between 0 and 3.3V, that stays at 3.3V while the brakes are not pressed.
* **Motor temperature:** is a simple analog signal between 0 and 3.3V that represents the motor temperature.

The communication between the EBike board and VESC is digital UART.

The communication between the EBike board and display is also digital UART.

This is the EBike board schematic, that is very easy to build due to easy to solder boards and connectors:
[![](EBike_board-schematic.png)](EBike_board-schematic.png)

The main component is the ESP32-S3-DevKitC-1 N8R2 board that you can buy in Aliexpress. This is the microcontroller board, that runs the high level Pyhton software, has Wifi and Bluetooth.

The connection to VESC is by the 4 wires: 2 wires for UART TX and UART RX that provides the comunication. The other 2 wires and GND and +5V, as the power to the EBike board comes from the VESC.

The throttle wire needs to have a 47K resistor connected to ground. This is a must for the case the throttle disconnects by accident, and this resistor will force the throttle signal to be zero.

The only other board is the TJA1050, is small and is a CANBUS module. This board is needed to make the ESP32-S3 board being able to communicate with the Bafang M500 torque sensor.
The torque sensor needs also to be powered from 5V.

The brake signal needs to have a 47K resistor connected to +3.3V otherwise it will not work.

The temperature sensor signal needs to have a 1K resistor connected to GND.






