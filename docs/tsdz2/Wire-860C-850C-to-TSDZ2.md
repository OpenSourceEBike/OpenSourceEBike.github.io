The 860/850C display are signal compatible with TSZD2 motor controller.
Motors sold in a bundle with the 850C display can be used with 860C
interchangeably (the 850C stock firmware works with the TSDZ2 stock
firmware, but the 860C doesn\'t). Other motors, while signal compatible,
use different connectors/pinouts, so you will need to manage the wiring
connection yourself.

One option is to cut your existing display cable at the display and
splice it to the 850C cable. Obviously this renders your original
display useless without splicing its cable back together. If you want
either throttle or brake sensor functions, you will also need to connect
those components to wires in the original cable (the 850C plays no part
in those functions)

Important: You must disconnect both the battery and the motor when
modifying the wiring loom. The motor contains capacitors which are
likely to irreversibly damage the display if the motor is left connected
and the loom is wired incorrectly. Once you have modified the loom you
must carefully recheck your work before reconnecting the display, motor
and battery.

To avoid cutting your original display cable, you would need to find the
source of [Higo Mini-A dimension
connector](https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/tsdz2-plug-dimensions.jpg)

TSZD2 motors models are sold with or without a throttle connection. The
cable that goes from the motor controller to display is different and
here are the details \-- you need to identify your cable signals (use a
multimeter to measure between GND and P+ battery voltage):

## 6 pin controller (usually this is a TSDZ2 without throttle): {#pin_controller_usually_this_is_a_tsdz2_without_throttle}

+------------+--------------------------+---------------------------+
| wire color | function                 | description               |
+============+==========================+===========================+
| green      | P+                       | battery voltage           |
+------------+--------------------------+---------------------------+
| black      | GND                      | ground                    |
+------------+--------------------------+---------------------------+
| white      | Vin                      | ground when LCD disabled  |
|            |                          | and P+ (battery voltage)  |
|            |                          | when LCD is enabled       |
+------------+--------------------------+---------------------------+
| brown      | UART TX motor controller | sends digital data to LCD |
+------------+--------------------------+---------------------------+
| orange     | UART RX motor controller | receives digital data to  |
|            |                          | LCD                       |
+------------+--------------------------+---------------------------+
| purple     | brake                    | this signal is active     |
|            |                          | low, meaning that when    |
|            |                          | brakes are not active,    |
|            |                          | this wire has 5V and with |
|            |                          | brakes active this wire   |
|            |                          | has 0 volts.\             |
|            |                          | Leave this wire           |
|            |                          | unconnected if you will   |
|            |                          | not be using brake        |
|            |                          | sensors.                  |
+------------+--------------------------+---------------------------+

[100px](https://github.com/hurzhurz/tsdz2/raw/master/images/tsdz2-plug.jpg "wikilink")

## [8 pin](https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&hilit=flash+lcd3&start=3525#p1415134) controller (usually this is a TSDZ2 with throttle): {#pin_controller_usually_this_is_a_tsdz2_with_throttle}

+------------+--------------------------+---------------------------+
| wire color | function                 | description               |
+============+==========================+===========================+
| blue       | P+                       | battery voltage           |
+------------+--------------------------+---------------------------+
| black      | GND                      | ground                    |
+------------+--------------------------+---------------------------+
| red        | Vin                      | ground when LCD disabled  |
|            |                          | and P+ (battery voltage)  |
|            |                          | when LCD is enabled       |
+------------+--------------------------+---------------------------+
| brown      | UART TX motor controller | sends digital data to LCD |
+------------+--------------------------+---------------------------+
| yellow     | UART RX motor controller | receives digital data to  |
|            |                          | LCD                       |
+------------+--------------------------+---------------------------+
| green      | brake                    | this signal is active     |
|            |                          | low, meaning that when    |
|            |                          | brakes are not active,    |
|            |                          | this wire has 5V and with |
|            |                          | brakes active this wire   |
|            |                          | has 0 volts. Wired with   |
|            |                          | the 5V wire and black GND |
|            |                          | wire for 3 pin throttle.\ |
|            |                          | Leave this wire           |
|            |                          | unconnected if you will   |
|            |                          | not be using brake        |
|            |                          | sensors.                  |
+------------+--------------------------+---------------------------+
| white      | 5V                       |                           |
+------------+--------------------------+---------------------------+
| orange     | throttle                 | wired with the 5V wire    |
|            |                          | and black ground wire for |
|            |                          | 3 pin throttle            |
+------------+--------------------------+---------------------------+

[
width=500px](https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_8Pin_Connector_Higo_B8_Cable_Map_2.jpg "wikilink")

# Summary of connections between 860C/850C and TSDZ2 motor cable {#summary_of_connections_between_860c850c_and_tsdz2_motor_cable}

  Bafang 860C/850C wire color   6 wire color (no throttle)   8 wire color (throttle)   TSDZ2 controller wire function
  ----------------------------- ---------------------------- ------------------------- --------------------------------
  brown                         green                        blue                      (P+) battery voltage
  orange                        white                        red                       Vin
  black                         black                        black                     GND ground
  green                         brown                        brown                     UART TX motor controller
  white                         orange                       yellow                    UART RX motor controller
  na                            purple                       green                     Use with brakes
  na                            na                           orange                    Use with throttle
  na                            na                           white                     For hidden brakes and throttle

You can wire the brakes to brake wire and you will also need to wire the
GND wire. If you are using a "hidden wire brake sensor", you will also
need to connect the 5V wire.

For the throttle, you will need to connect the throttle wire, the GND
and 5V wire.

Some example of soldering wires :

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-02.jpg>

(nb. Correct way is to stagger the cuts so that they would not short
even without heatshrink, this makes a small neat bundle)

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/solder_wires_example-01.jpg>
