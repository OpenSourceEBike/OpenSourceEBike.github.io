# EBike / EScooter modular DIY OpenSource electronics and firmware

Over the years I did own a few different EBikes / EScooters from different brands, and I always found limitations on all of them, mainly on the software. Knowing that in general, all EBikes and EScooters are equal, I decided to replace the original motor controller electronics and display, from my different EBikes/EScooters, with my own modular DIY version and running my custom software.

I share here all the information and source codes, about the build I did for my EBike, in the hope it will help others replicate and learn about EBikes / EScooters tecnhology.

Because it is modular, DIY and OpenSource, this system is easy to reuse for any different EBike / EScooter brand, so it will be future prof and cheap as will be possible to save money by reusing the materials.

For a user like me, it let me optimize my battery usage, so I can have a smaller and ligher battery, use a smaller motor, and so have a smaller and lighter MTB EBike.

For other users that may want a more powerfull motor, it let go behond the limits that the brands impose on the software.

And if you are looking for a more advanced system, with GPS navigation on the display, the best option is to use a popular solution as a Garmin Edge. Similarly, if you are looking to use your EBike for fitness and want a display showing your heart rate, pedal human power, etc, the best option is to use a Garmin Edge.

## System overview

In general, all EBikes and EScooters are equal - they have a battery, a motor, a motor controller electronics and a display.

* **Battery:** most of the time is a standalone system, with an output voltage of like 36V or 48V, with only one connector with 2 wires: - and +

* **Motor:** motors are in general very similar. They have 3 input phase wires that will power the motor coils. They may also have a small connector with 5 wires to output the hall sensors signals, to provide the rotor position information.

* **Motor controller electronics:** the main task is to use the battery voltage and drive the motor coils, to make the motor rotate, using the lowest energy possible and be silent. It also reads input sensors like the throttle, pedal torque sensor or brake sensor, as also sends and receive information to the display.

* **Display:** the basis of the display is to show information to user, like what is the battery state of charge, what motor power is being used, and to let user select the motor assist level.

## System details 

This modular and DIY system, replace the original motor controller and display, keeping the original battery.
It is composed of three different modular parts:
- Motor controller
- EBike/EScooter board
- Display

### Motor controller

The motor controller used is the [popular and high performance OpenSource VESC](https://vesc-project.com/). You can buy it in many online stores like in Aliexpress, and there are [small ones of 2kW up to big ones of 20Kw or more](https://flipsky.net/).

VESC is able to drive any motor, has a motor auto detection feature and is very easy to configure.

We control the motor by sending commands to VESC, like the command to set the motor current / torque.

### EBike/EScooter

The EBike/EScooter DIY board runs the application that implements the EBike/EScooter logic, for instance, it reads the throttle value and with it, sets the motor current by sending a command to VESC.

The microcontroller used is the popular ESP32, that has Wifi and Bluetooth. This ESP32 has a lot of memory and high speed processing, so it runs directly Pyhton firmware and we can edit/program this firmware wirelessly using our phone or computer.

This board needs to have a specific circuit for each EBike/EScooters sensors, for instance, a Bafang M500/M600 motor has a CANBUS torque sensor as input while an EScooter has only throttle as input.

### Display

This DIY display is small and shows basic information as EBike/EScooter speed, battery SOC and motor power. It uses a 3 buttons remote to let user change the motor assistance level as also set other features.

It uses the popular OLED 1.3inches screen. It also uses the ESP32, so it runs directly Pyhton firmware and we can edit/program this firmware wirelessly using our phone or computer.

# EBike build with Bafang M500 mid drive motor

This was the first build I did. You can take this build details as a reference for your build, as most probably you have a different motor:

**[Build with Bafang M500 mid drive motor](build_EBike_Bafang_M500/build_EBike_Bafang_M500.md)**

# Older projects (for historic reasons only)

* [EasyDIY OpenSource Ebike display](easy_diy_display_ebike_display/index.md) - previous 
* [TSDZ2 wireless and fully wireless remote](tsdz2_wireless/index.md) - with Garmin Edge integration for page change.
