The KT-LCD3 is signal compatible with TSZD2 motor controller however it
uses a different connector so you will need to manage the wiring
connection yourself.

The simplest option is to cut your existing display cable at the
display, and either splice it to the KT-LCD3 cable (easiest), or wire it
directly to the KT-LCD3 board. Obviously this renders your original
display useless without splicing its cable back together. If you want
either throttle or brake sensor functions, you will also need to connect
those components to wires in the original cable (the KT-LCD3 plays no
part in those functions)

To avoid cutting your original display cable, you would need to find the
source of [Higo Mini-A dimension
connector](https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/tsdz2-plug-dimensions.jpg)

The KT-LCD3 kit comes with an extension cable with plug, ready to be
spliced. KT-LCD3 connectors looks like Higo [mini-B
Z209](https://www.higoconnector.com/products/z209bm-p-00-a0-1000/K999K#title),
available from [EBike
Technologies](https://www.e-bike-technologies.de/index.php/en/connectors/higo/dustcaps-for-higo-mini-b-connectors).

TSZD2 motors models are sold with or without a throttle connection. The
cable that goes from the motor controller to LCD is different and here
are the details \-- you need to identify your cable signals (use a
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

# Summary of connections between KT-LCD3, Bafang 850C and TSDZ2 motor cable {#summary_of_connections_between_kt_lcd3_bafang_850c_and_tsdz2_motor_cable}

  KT-LCD3 wire color   6 wire color (no throttle)   8 wire color (throttle)   TSDZ2 controller wire function
  -------------------- ---------------------------- ------------------------- --------------------------------
  red                  green                        blue                      (P+) battery voltage
  blue                 white                        red                       Vin
  black                black                        black                     GND ground
  green                brown                        brown                     UART TX motor controller
  yellow               orange                       yellow                    UART RX motor controller
  na                   purple                       green                     Use with brakes
  na                   na                           orange                    Use with throttle
  na                   na                           white                     For hidden brakes and throttle

-   [KT-LCD3 0.1\" Motor Connector
    Photo](https://www.endless-sphere.com/forums/download/file.php?id=239409&mode=view)
-   [KT-LCD3 LCD end Round
    Connectors](https://sondorsforum.com/applications/core/interface/imageproxy/imageproxy.php?img=https%3A%2F%2Fi.imgur.com%2FGqfwM0S.jpg&key=1203f163b099843d28eb7d621793818bafcc3cbc1c177a2dd9ee66a2afc4ae07)

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
