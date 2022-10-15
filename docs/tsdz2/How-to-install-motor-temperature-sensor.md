The installation of the motor temperature sensor is optional. The advantage of installing the motor temperature sensor is to avoid permanent damage/loss of torque of TSDZ2 motor -- please read more here: [[TSDZ2 motor demagnetized due to overheating]]. 

You can see the installation process in the [JBalat Install Video for 6 Wire controller](https://www.youtube.com/watch?v=Wb8Omk6e7GI)

The firmware shows on LCD3 the motor temperature (this is optional) and can also reduce linearly the motor current while the motor temperature increases (this is optional).

NOTE: to use this motor temperature sensor _you will lose the ability to use the throttle_. 

## LM35 

The sensor used is the [LM35](http://www.ti.com/lit/ds/symlink/lm35.pdf) that is very popular and easy buy online like on Ebay. It is also very simple to interface with the TSDZ2 motor controller, where just 3 wires need to be connected. [If you are getting your LM35 from Ali/ebay, not Mouser/Digikey then you might want to test them at 100C (in steam) before fitting, to be sure they work properly, as the calibration of random chinese knockoffs is not something you can be confident in. (and some are reported to just not work at all)]

The LM35 outputs a linear voltage, 10mV/K, over the temperature range, i.e 0V@0C, 250mV@25C , 850mV@85C, 1V@100C. Because the only free header connector available on the TSDZ2 motor controller that reads an analog voltage signal is the one used for the throttle, the sensor is connected to that header and the throttle can not be connected and used.

There are two types of controller: 

* 8 wire with throttle: You will cut the wires and connect sensor to them
* 6 wire with no-throttle: You will pick the encapsulant away from the pcb and solder to the pcb.

I connected LM35 to a connector so is possible to remove it when I need, for instance when I want to remove the motor:

[[https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor_temperature_sensor-02.jpg]]
[[https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor_temperature_sensor-01.jpg]]

If you are getting your LM35 from Ali/ebay, then you might want to test them at 100C (in steam) before fitting, to be sure they work properly, as the calibration of random chinese knockoffs is not something you can be confident in.

## 8 Wire Throttle type. 

I wired the wires to the existing motor controllers wires for throttle. I decided to not cut the throttle wires but leave them in place in the case in future I still want to use them and not the temperature sensor:

For additional clarity - here are the wires labelled on a recent motor (2020). It appears the Black GND wire may have moved next to the White (5V) wire - earlier versions of the motor appear to have this Black GND wire attaching somewhere else, but as long as you use the Black wire in the 8 wire loom going to the screen (along with the Orange and White wires) shown in this photo, you should be fine. Please don't blindly use the wire colours - double check the wires going to the shown locations on the board, before you cut and splice.

So Throttle (Orange wire) is cut and soldered to the centre leg (Vout) of the temp sensor. 5V (White wire) is spliced to the Vs leg of the temp sensor. Gnd (Black wire) is spliced to the ground leg of the temp sensor

[[https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/8wire_temp_sensor_labelled.jpg]]

[[https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor_temperature_sensor-04.jpg]]

I first glued one face of LM35 to a metal face of the motor (the part of the motor that gets hot first) with a tape and then started to put silicone (high temperature version of silicone) and let it dry up before putting the final amount. Make sure the LM35 face is in close contact with the motor metal part:

[[https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor_temperature_sensor-03.jpg]]

## 6 Wire, No-Throttle type:

The connection points are clear in the [JBalat Install Video for 6 Wire](https://www.youtube.com/watch?v=Wb8Omk6e7GI)

![6 wire motor control](https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_motor_controller_without_throttle_wires.jpeg)

## Non-Reversible Temperature Label

A useful diagnostic is the [non-reversible temperature label](https://nz.rs-online.com/web/p/temperature-sensitive-labels/7799772/). This permanently changes color showing the maximum temperature *ever* reached. 

[[https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/Temperature_Label_on_Motor1.jpg]]