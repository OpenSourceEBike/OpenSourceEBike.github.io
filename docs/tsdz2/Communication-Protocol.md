# Original Protocol

[Offical Tongsheng Protocol](https://endless-sphere.com/forums/download/file.php?id=239100) and reputedly better [Hurzhurz version](https://github.com/hurzhurz/tsdz2/blob/master/serial-communication.md#motor-control-flags)

# New Protocol

V0.14 Link to some info????

> It is to early to document that type of things because it is still in development and because no one will use that information. The ones that may want to use, are capable and maybe even prefer, to look at the firmware and see how it is done. We put a good effort on comments on firmware sources for that.
> The most easy is for looking at UART code files

* [lcd3 end: uart.c](https://github.com/OpenSource-EBike-firmware/TSDZ2-Smart-EBike/blob/master/src/display/KT-LCD3/uart.c) 
* [controller end: ebike_app.c, function "communications_controller"](https://github.com/OpenSource-EBike-firmware/TSDZ2-Smart-EBike/blob/master/src/controller/ebike_app.c).

The below is inferred from the source without testing:

2 byte numbers are little endian.

## From Controller to LCD

(put example here was 43 00 01 51 51 00 07 07 F4)

Send frequency: 10 per second
Content:

Byte No. | example | description
-------- | ------- | -----------
1 | 0x43 | Start-Byte
2 | 0x00 |  ui8_master_comm_package_id
3 | 0x00 |  ui8_slave_comm_package_id
4,5 | 0x0000 | [Battery Voltage (10bit)](#battery-level)
6 | 0x00 | Battery Current
7,8 | ? | Wheel Speed
9 | 0x01 | [Motor status flags - brake state](#motor-status-flags)
10 | ? | ADC-Throttle (throttle wire is throttle-pot or LM35 temp sensor)
11 | ? | Temperature or Throttle value
12 | 0x51 | [Pedal torque-sensor ADC value](#pedal-torque)
13 | 0x51 | [Pedal torque-sensor actual value 0-255](#pedal-torque)
14 | ? | PAS Cadence
15 | ? | Human Power
16 | ? | PWM duty cycle
17,18 | ? | motor_speed_erps
19 | ? | foc_angle
20 | ? | Depends on slave_package_id: 8bit temperature limit or 3 byte speed sensor tick counter, byte by byte over 3 packets
21,22 | ? | Pedal Torque x10
23,24 | ? | Pedal Power x10
25,26 | ? | CRC16

## From LCD to Controller
