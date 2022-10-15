\_\_TOC\_\_

# TSDZ2 motor {#tsdz2_motor}

See this video: <https://www.youtube.com/watch?v=EsMlBj6ogVQ>

Pictures of inside TSDZ2 motor
([<https://endless-sphere.com/forums/viewtopic.php?p=1614340#p1614340>](thanks_to_Wapous "wikilink")):

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/mechanics/TSDZ2_Motor_Assembly_Inside_View_A.JPG>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/mechanics/TSDZ2_Motor_Assembly_Inside_View_B.JPG>

## Known issues, how to repair and possible causes {#known_issues_how_to_repair_and_possible_causes}

### Motor slipping, not transferring power to the chain wheel {#motor_slipping_not_transferring_power_to_the_chain_wheel}

If you find the motor spinning quickly inside but not able to transfer
the power properly to the chain wheel, like when for instance you are
pedaling at startup with low cadence and start to ear a strange noise,
feeling the lacking of motor power on the chain wheel and the motor runs
suddenly at very high speeds (check the motor speed on the display),
your blue gear is probably damaged.

See here how to install the TSDZ2 gear:
<https://www.youtube.com/watch?v=CTbDKN2GzNE>

Possible causes for damaging the blue gear:

1.  maybe something blocked the chain wheel (like applying brakes
    without using brake sensors or the chain left it´s place and blocked
    the chain wheel)
2.  normal wear, that should depends on how much stress you put on the
    motor

Some notes from users:

1.  skestans wrote: In my opinion, the blue gear is a feature. I\'d much
    rather have the blue gear fail with the nylon chewed through if
    anything happens and only have to replace that part (25\$ straight
    from China, shipped) than having to replace much more expensive
    parts in the motor instead. The blue gear is an intentional point of
    failure and I like it that way. Same as a fuse, cheaper to swap the
    fuse than whatever it protected which is why you don\'t replace
    fuses with a nail (well, that and fire hazard)

```{=html}
<!-- -->
```
1.  casainho wrote: I replaced maybe 10 blue gears up to now on the 4
    ebikes I have and ALWAYS it failed after I brake with motor running
    (and I had no brake sensors installed on that time) or recently when
    the chain suddenly blocked the chainring - something would brake on
    that situations if not the blue gear. Yes, I am also buying the Blue
    gear for 20 euros on Aliexpress straight to my door, the only thing
    is that it takes some time and hand dirty to replace it inside the
    motor :-)

#### Blue gear damaged tooths {#blue_gear_damaged_tooths}

Here we can see the teeth damaged:\
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_blue_gear_broke.jpg>

Solutions:

1.  exchange for a new blue gear

#### Blue gear roller clutch slipping {#blue_gear_roller_clutch_slipping}

The blue gear has a roller clutch made of a HF1216 bearing and a metal
splined shell. The roller clutch can be slipping:\
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_blue_gear_slipping_0.png>

Solutions:

1.  exchange for a new blue gear
2.  oil the roller clutch with something like the spray oil WD40,
    sometimes this fixes this issue
3.  exchange the roller clutch by gently removing the old one: this is
    possible if you can recycle a good one from an old blue gear:

Roller clutch almost removed from the blue gear:\
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_blue_gear_slipping_1.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_blue_gear_slipping_2.jpg>

#### Broken motor axle {#broken_motor_axle}

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_motor_broken_axle.jpg>

Possible causes:

1.  when installing the electric motor, for instance after doing
    maintenance, install it but let the motor body/axle slightly bent
    with reference to the TSDZ2 case where the bearing where the end of
    shaft connects.

Solutions:

1.  install a new motor
2.  replace the motor axle from an old motor

Notes from users on forum:\
\
knutselmaaster wrote: Motor shaft failure is often caused by bad
alignment.\
If a bearing is not well placed or at a slight angle, or if the axle
isn\'t perfectly straight, this gives a small fluctuation in tangential
force causing fatigue in the metal that leads to breakage of the weakest
point. This can be caused by a badly made motor part but also by bad
mounting.\
If the motor cover (with the bearing in it) isn\'t 100% \"flat
mounted\", in exactly 90° angle with the axle, or when the center of the
bearing isn\'t perfectly in the center of the axle for example.\
Generally it is noticeable if something like this is happening, the
motor vibrates more than it should with the exact frequency of the
axle.\
Axles are made of hardened steel. When steel gets hardened it looses
it\'s flexibility. In short, it\'s a trade in between wear resistance
and flexibility.\
\
andrea_104kg wrote: I broke an engine in a similar way :-( Simply, in
one of my 2 tsdz2 the engine did not want to disassemble and I beat it
lightly with a hammer. I didn\'t notice anything but once reassembled,
after 1km the engine broke exactly as in your photo.\
I think it is a fragile alloy that does not allow the slightest decline.

### Pedal slipping, not transferring power to the chain wheel {#pedal_slipping_not_transferring_power_to_the_chain_wheel}

#### Main gear clutch/bearing slipping {#main_gear_clutchbearing_slipping}

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_main_gear_clutch.jpg>

The sprag clutch is a one way bearing in the TSDZ2 ebike torque sensing
motor that transfers your pedal torque to the main gear which is
attached to the chain ring. After some time, this gear may began
slipping/failing. Here is a video from jbalat showing how it happens
when sprag clutch is failing:
<https://www.youtube.com/watch?v=PWlz4xw3pI8>

When you start feeling some pedal slipping with chain ring not moving
when you pedal, or some cracking noise when you pedal harder and the
chain ring does not move, be aware because the main gear clutch/bearing
may fail soon.

Here is a picture showing at left the main gear clutch/bearing broken
and in this case the pedal was always slipping:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_v1_and_v2-main_gear-v2_broke_bearing.jpg>

Possible causes for damaging the main gear clutch/bearing:

1.  maybe you are a heavy rider of like 110 kgs and you did a lot of
    torque on the pedals at a startup - TSDZ2 seems to fail for this
    rider weights.

Solutions:

1.  buy a new main gear: (includes the sprag clutch bearing): You can
    buy a new main gear, that includes the sprag clutch bearing, [on
    PSWPower(about 30
    euros)](http://www.pswpower.com/ven.php?cargo.2017-2s-mact) or in
    any other shop.
2.  alternatively you can buy only the bearing and exchange it by
    yourself, see this video:
    <https://www.youtube.com/watch?v=Kn-GjeRA1Lw>
3.  install the new main gear: See this video from jbalat showing how to
    remove and install the main gear:
    <https://www.youtube.com/watch?v=u-SY0rGMEMo>

### No motor power {#no_motor_power}

#### Bad configuration {#bad_configuration}

Check the
[<https://github.com/OpenSourceEBike/TSDZ2_wiki/wiki/Features-and-configurations-on-display#Configurations>](configuration_settings "wikilink")
such as the battery low voltage. Also make sure you are in in assist
level higher than 0.

#### PAS sensor fail {#pas_sensor_fail}

If you have no motor power when pedaling, it can be the PAS sensor not
working. Please look at the pedal cadence value on the display while
pedaling, it should not be zero or wrongly values.

The PAS sensor is the small black piece that is screwed to the motor
controller metal case. It has 2 hall sensors has 4 wires with color
black, red, blue and yellow. This hall sensors detect the 20 small
magnets that are on the torque sensor out ring and pass in the front on
the hall sensors when the torque sensor rotates due to pedal rotation.

After disassembling TSDZ2 motor controller to inspect the PAS sensor, I
saw the following (left side is the sensor failing and on right side is
new one):

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_PAS_sensor_fail.jpg>

Seems the failing sensor was sanded (about 1 millimeter) by the torque
sensor part ring where the 20 small magnets are. Why did it happen?
Maybe when I previously disassembled and assembled again the torque
sensor I did not install a needed washer? Or maybe there is now some
looseness of the axle where the torque sensor is due to wear after the
many usage I did to the motor?

Solutions:

1.  exchange for a new motor controller that should have a working PAS
    sensor
2.  exchange the PAS sensor for a new one:

To repair, I exchanged the PAS sensor to a new one from a broken motor
controller I had, by cutting the original 4 color wires of the old one
to solder the wires of the new one. This time I put 2 little washers
between the PAS sensor and the place it is screwed so it is now far way
about 1 millimeter and with this I hope it will not be sanded enough, by
the torque sensor, to fail. Other option to repair could be simple
exchange for a new motor controller however I would need also to put
that 2 little washers under the PAS sensor.

## Motor controller is unresponsive, after completely discharging the battery {#motor_controller_is_unresponsive_after_completely_discharging_the_battery}

Some users have reported that the motor controller dies and stops
working normally. After investigation it was confirmed to be happening
when the battery overdischarges below recommended limits and controller
firmware gets corrupted due to low battery voltage. It is not
recommended to use lower than 2.9V per cell cutoff voltage. For example,
if you use 10S 36V battery the protection cutoff voltage should be
2.9x10 = 29V or more. Please make sure you configure it on your display
before using your bike. If the voltage dropped too low and your
controller firmware was corrupted then you will need to reflash it.
Depending on the corruption you may have to reupload option bytes too as
OSF .hex does not contain all the option bytes. First you need to
connect to motor controller via st link and make sure you still
communicate with the MCU by reading the tabs. Make sure your reset is
wired in the cable (see the wiring section of the wiki). If you can read
the tabs from your controller it means your controller is not damaged
and the firmware can be reflashed. Sometimes when corruption is hard you
need to try several times. First find the option bytes from the ECO
cycles website
<https://drive.google.com/drive/folders/1eGcBtTj8GrGQ4tDJAECr6ejMrpW2ZqvH>
Choose stockoptionbyte.s19 and flash it in the option byte section. ECO
cycles have flashing instructions here
<https://www.eco-ebike.com/blogs/eco-cycles-instructionals/tsdz2-motor-firmware-programming> 1.
Flash stockoptionbyte.s19 in the options tab

2\. Flash the OSF firmware normally in the program tab.

Now your controller is operational again. Make sure you program the
battery cutoff voltage in your display so the issue will not happen
again.

## Rider max weight {#rider_max_weight}

TSDZ2 should work well for riders up to 100 kgs. For higher values like
110 kgs, it will also work but it is recommended to avoid doing big
impulses (put full rider weight on the pedals) and with high gear, at
startup, to avoid the risk of broking the torque sensor.

Casainho wrote: After using TSDZ2 for more than 2 years (since begin of
2018), on different bicycles and with different TSDZ2 motors, doing both
MTB and city commuting, with my weight around 105 kgs, I never had a
problem.\
On 2020, my weight increased to 111 kgs and one day at city I did a big
impulse at start pedaling, while I was standing on the pedals with a
high gear, the central tubular shaft of the torque sensor broke doing a
big cracking noise. Everything went back to normal after I exchanged for
a new torque sensor and now I will avoid to do that big impulses on the
pedals and with high gear.

## Max speed {#max_speed}

Casainho wrote: I go relatively easy to 45 km/h on flat roads in my city
and to 50 km/h on slight descents, but, with me pedaling and giving
about 150W myself and with the following conditions:

-   I weight 105 kgs
-   my ebike has relatively large tires and rear panniers, as shown on
    the following picture
-   no wind
-   I have a 52V battery and 48V TSDZ2 motor
-   I configure the battery max current to 18 amps and I have the motor
    temperature sensor installed
-   I have a chain ring of 50 teeth and 11T at rear, with 27.5 inches
    wheels

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/casainho-ebike-2020.02.jpg>

## TSDZ2 different versions {#tsdz2_different_versions}

### Voltage, power, throttle {#voltage_power_throttle}

For the TSDZ2 motor versions found on online shops (36V, 48V, 52V,
whichever power in watts, with throttle or without) the motor controller
electronic board is just the same. The only relevant difference is the
brushless motor inside because there are only 2 different versions (note
that the 36V motor heats faster than the 48V motor, so, if you looking
to use the motor at max power / current, go with the 48V version):

1.  TSDZ2 36V version: 36V brushless motor
2.  TSDZ2 48V and 52V version: 48V brushless motor

Other difference is the throttle or no throttle version, because with no
throttle version there are no throttle wires available to connect it
(also, if you plan to install the motor temperature sensor, a throttle
version will make your life easier during on the installation).

All motor versions are ready for you to use the brake sensors, you can
always buy ebike standard brake sensors and wiring them by yourself. Do
note that the OSF [has an option to not engage the motor if it can\'t
sense pedal
rotation](https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Features-and-configurations-on-display#various).
That means you can be stopped, have your foot pushing down on the pedal,
and the brakes engaged without the motor engaging. This is not something
that\'s possible with the stock firmware without brake sensors.

With our flexible OpenSource firmware, you will able to make any TSDZ2
motor version working with any battery voltage from 24V up to 52V (7S up
to 14S battery cells in series). Yes, the motor works well with 24V and
there is a report of an user doing that because he wanted to use a very
small battery pack. Please note that the brushless motor inside will
work at the rated RPM and hence at the regular pedal cadence, if the
battery voltage is near the motor voltage, for instance, choose a 36V
battery for a 36V brushless motor and a 48V or 52V battery for the 48V
brushless motor.

Also, our flexible OpenSource firmware does no limit the motor power and
you will be able to run the motor at his max power of 18 amps \* battery
voltage, for instance, on a 52V battery you will get 936 Watts (18\*52 =
936).

### Mechanical

There are at least 2 TSDZ2 different (mechanical) versions. The most
recent version seems the one that has a helical main gear that makes the
motor to be more silent compared to the one that uses a spur gear. Some
pictures:

The main gear at top is helical and the one at bottom is a spur gear:\
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_v1_and_v2-main_gear.jpg>

Helical gear on the motor at right side:\
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_v1_and_v2.jpg>

The main gear on the left side is helical (with broken bearing). The
bearing has the reference CSK30P, that can be found online as a \"CSK30P
bearing sprag clutch\":
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_v1_and_v2-main_gear-v2_broke_bearing.jpg>

Also the older versions had a different axle that includes 2 bearings
and it is also longer. The torque sensor is also a bit different size on
the part that fixes on the axle. Axles comparison:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_different_versions_axles_comparition.jpg>

## Install TSDZ2 on full suspension bicycles {#install_tsdz2_on_full_suspension_bicycles}

See here how to install: [How to install TSDZ2 on a full suspension
bicycle](How_to_install_TSDZ2_on_a_full_suspension_bicycle "wikilink")

## Brakes

### Should I install the brake sensors? {#should_i_install_the_brake_sensors}

A: Brake sensors ensure the motor will not work while you are stopped,
avoiding stress on the system and the nylon gear, and wasted power.
However, the default configuration under Motor Controller Setup, to
avoid power without pedal rotation, should also protect you from this
and some users have no issues running the system without brake sensors.

### Can I use a brake sensor for hydraulic brakes or the \"hidden wire brakes sensor\"? {#can_i_use_a_brake_sensor_for_hydraulic_brakes_or_the_hidden_wire_brakes_sensor}

A: Yes, see here how to install: [How to install brake
sensors](How_to_install_brake_sensors "wikilink").

### Can I use \"hidden wire brakes sensor\" on TSDZ2 no throttle version? {#can_i_use_hidden_wire_brakes_sensor_on_tsdz2_no_throttle_version}

A: Yes, see here how to install: [How to install brake
sensors](How_to_install_brake_sensors "wikilink").

# Nylon gear and metal gear {#nylon_gear_and_metal_gear}

See here how to install the TSDZ2 gear:
<https://www.youtube.com/watch?v=CTbDKN2GzNE> Nylon gear at left and
metal gear at right:

When you buy a TSDZ2 motor, it will come with the nylon gear. The metal
gear is available as optional part on the online shops, you can buy it
but you will need to install by yourself.

## Should I install the metal gear? {#should_i_install_the_metal_gear}

The nylon gear is more weak than the metal gear and many users report
that it fails very soon as like on the first 20 kms of ride \-- but this
is probably faulty of the users, like not using brake sensors and apply
brakes while the motor is rotating, etc.

The metal gear makes the motor a more noisy compared to the nylon gear.
In general, users prefer to use the nylon gear to keep the motor noise
at a lower possible value, and, using our OpenSource firmware, users are
reporting they do not have issues with the nylon gear anymore (but sure,
it will fail sometime because it is a wear piece). Our OpenSource
firmware has a specific feature that is the current ramp, and, it can be
configured to a conservative value to help reduce the force on the Nylon
gear and so protect it. Also, installing the brake sensors will help
protect the nylon gear.

See here how to install the TSDZ2 gear:
<https://www.youtube.com/watch?v=CTbDKN2GzNE>

## Bearings codes {#bearings_codes}

-   Blue gear: HF1216 - 609 RS
-   Axle motor side 608RS -- carter side 6001RS
-   Motor shaft carter side 696RS -- motor side 6800RS
-   Main pedal shaft: left side 6902RS (61902 2RS1) -- right side on
    torque sensor HK 2212 (note: on left side it is beneficial to put
    two bearings instead of one)
-   Sprag clutch: 30 CSK-P bb30 o CSK30P

## Torque sensor {#torque_sensor}

See:

-   [How TSDZ2 torque sensor
    works](How_TSDZ2_torque_sensor_works "wikilink")
-   [How to calibrate the torque
    sensor](How_to_calibrate_the_torque_sensor "wikilink")

# Displays

## 850C display clock losing time {#c_display_clock_losing_time}

Some users report that 850C display clock loses time, maybe at every
system startup or maybe after every 24 or 48 hours. [This issue was
discussed and analyzed
here](https://github.com/OpenSource-EBike-firmware/Color_LCD/issues/80)
and to resume, the problem lies on the small battery inside the display
that has the duty to keep a clock running but when the battery is
discharged it will not work anymore as expected. This battery is very
hard to replace, if possible at all. If you bought the display and it
has this issue, I would try to get a refund or warranty from the seller.

Here a feedback from an user:\
*I have used a newer 850C on a Bafang mid-drive. Even with the original
Bafang firmware, turning off using the buttons, the clock has severe
drift and once the main battery is disconnected will only last 12-48?
hours before completely losing time.*\
*I didn\'t pay much attention, but it was annoying for sure.*

# Flexible OpenSource firmware {#flexible_opensource_firmware}

## Why stock LCDs VLCD5 and XH18 do not work {#why_stock_lcds_vlcd5_and_xh18_do_not_work}

When I received my TSDZ2 it come with VLCD5. This LCD is very limited,
for instance it can\'t show basic information like battery voltage.
Because our Flexible OpenSource firmware has advanced features it was
found desirable to have a display that we can develop firmware for and
that way we get the flexibility we need. On May 2018, a research was
done and was selected LCD KT-LCD3. In 2019, the project moved to even
more advanced displays: the Bafang 850C big color display and the small
SW102 Bluetooth display.

## Brakes error {#brakes_error}

If you have a brake error at display startup (and you have no brakes
and/or are sure the cables are OK) reload the Option Byte backup to the
controller via STLink

## Are there plans to make the firmware compatible with stock LCDs VLCD5 and XH18 {#are_there_plans_to_make_the_firmware_compatible_with_stock_lcds_vlcd5_and_xh18}

Would be possible but that way the advanced features would not be
available and this firmware would have small advantages over the
original firmware. We are not trying to save money, users that want the
advanced features of our firmware will need to spend some money.

See here this alternative:
<https://endless-sphere.com/forums/viewtopic.php?f=30&t=98281>
