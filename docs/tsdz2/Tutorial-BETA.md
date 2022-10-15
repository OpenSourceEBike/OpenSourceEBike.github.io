# TSDZ2 Firmware Updating & Open Source firmware {#tsdz2_firmware_updating_open_source_firmware}

**Written by Tomtom50**

## TSDZ2 Motor Controller Hardware {#tsdz2_motor_controller_hardware}

There are only two hardware versions of the TSDZ2 motor controller, a
version with a 6-pin connector to the display with no throttle and an
8-pin connector version where the throttle can be connected to the
display. Voltage (36 V, 48 V, 52 V) does not change the hardware,
instead the firmware is different and usually locked to different
voltages. Stock firmware can be changed to open source firmware so as to
unlock and setup different voltages.

## Different Motors in the TSDZ2 {#different_motors_in_the_tsdz2}

There are two TSDZ2 motors, one spins 4000 RPM no-load at 36 V, the
other spins 4000 RPM no-load at 48 V. If you buy a 52 V system you are
getting the 48 V motor, and it will spin 52/48 x 4000 = 4333 RPM at 52
V. The brushless DC motors on ebikes are all like this. As they spin
faster they produce \'backwards emf\' and the backwards emf
automatically limits how much current the motor draws from the
controller. At a certain RPM the motor makes so much back emf it spins
but makes no torque, this is the no-load RPM. This is why your TSDZ2
gives less assist as your pedal cadence rises to 80 RPM or so. There are
ways to get around this but that is beyond the scope of this document.

-   If you have a 36 V system and you flash to 48 V or 52 V it will run.
    The motor will spin faster. This can be good if you want assist at a
    higher pedal cadence. Eco-ebikes sells systems set up this way, they
    call it overdrive. You can make a 36 V system work this way by
    flashing the firmware to 48 V/52 V and using a 48 V/52 V battery.
-   If you have a 48 V/52 V system and you flash to 36 V it will run.
    The motor spins slower. This can be good if you have a slow pedal
    cadence, although it does not get discussed much.

The motor controller has an STM embedded processor. The processor runs a
program called firmware that is stored in non-volatile memory. You can
change the motor firmware if you establish communication between a PC
and the motor controller using an STM V-link-2 USB adapter and a cable
you make. To use open source firmware and the KT-LCD3 display you also
need to connect to the KT-LCD3 display, which has its own STM embedded
processor, using a second cable you need to make. The open source
firmware is in two files, firmware for the motor controller and firmware
for the KT-LCD3 display. Other options exist, but I am not covering them
here: • You can use the open source firmware with the standard TSDZ2
display. You change firmware settings from a computer utility, not using
the KT-LCD3 display. This is good if you want to avoid buying a
dedicated display, making a special cable, etc. Because the stock
displays have fewer fields they cannot display all of the information
available on the KT-LCD3. Search user marcoq at endless-sphere. •
feketehegyi at endless sphere has figured out how to change settings in
the stock firmware with bluetooth connection for a mobile phone, so you
can ride with no display at all. • casainho, developer of the open
source firmware, if working out using the Bafang 850C display. This
display is color and pixel-based like a cell phone screen. This is only
in development, not yet released. The Bafang display has a different
connector than the KT-LCD3. Flashing the stock firmware is easier than
going to the open source firmware. You make one cable, you establish
connection between your PC and the motor controller, you write a
different firmware file, and you are done. If your main goal is to match
your system to a different battery voltage it might not be worth it do
go to open source firmware. I personally think the stock firmware is
pretty good, the open source firmware is probably not worth the trouble
for everyone, although I\'m glad I did it.

## Difference between stock and open source firmware {#difference_between_stock_and_open_source_firmware}

My experience is that the system does not feel that much different, but
the open source firmware gives far more configuration options, and the
KT-LCD3 displays far more information. The biggest difference in terms
of assist is assists level. With the open source firmware I can set
assist lower than stock level 1 and higher than stock level 4. Combined
with up to 9 assist levels you have a lot more control over assist. The
open source firmware is developed and modified by volunteers. I think it
is very smooth for a volunteer effort, but you get no guarantee that it
won\'t have bugs or omissions. Since it does not have a formal testing
program having your brakes connected is something to consider. I did not
bother to connect the brakes when I used the stock firmware, with the
torque sensor there was no need for the way I ride. But I connected the
brakes for the open source and I\'m glad I did. With the open source
firmware sometimes when I am at a stop with a foot on a pedal it can
give little lurches. This never happened with stock firmware (yes, I
have assist without pedal rotation disabled). I personally want to be
able to kill the motor by grabbing the brake in case there is a glitch
in the firmware programming. Going to open source means you are not
using the system the way Tongsheng recommends. You take on risk that the
motor might misbehave, you take on risk you might damage the hardware.

## Mechanical Issues {#mechanical_issues}

This document is not primarily about the mechanical side, but I will
cover a couple main points since I am aiming at people who do not know a
lot about the system and may not yet have bought a TSDZ2. I am a
mechanical engineer, and in my opinion the TSDZ2 is well-engineered and
manufactured, especially considering its price. But compromises were
necessarily made.

Mid-drive kits are designed to fit typical bike frame, which has a
bottom bracket that carries the crankset axle. 68mm bottom brackets are
most common and typical of road bikes. 73mm is also common and shows up
more on mountain bikes. Chainline is the distance of the chainwheel to
the center of the bike frame, Chainline varies, 45mm is common on road
bikes, 50mm on many mountain bikes. Ideally the chainline is right in
the center of the rear cluster, so the chain doesn\'t take too much of
an angle as you change gears with the rear derailleur. This becomes more
critical with more rear cogs, because as cogs were added the clusters
got wider, increasing the angle, and the cogs and chain got smaller and
less robust. So a chainline that works OK with a 7-speed rear cluster
might cause problems with 10 cogs. There are a lot of hits if you search
chainline in
<https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788> Mid-drive
kits have gears that fit between the right crank and the bottom bracket
that transmit the motor power, and those gears need thickness to be
strong, so it is tough to keep chainline small. Larger chainlines cause
worst misalignment in first gear. If first gear is important because you
climb a lot of hills you might be combining a lot of heavy use with a
chain that is pretty badly aligned. The TSDZ2 manages a 50mm chainline
(not great, not bad), but compromises were made to get there: • The back
of the gear shroud is dished because most frames have space and the dish
reduces chainline. But some frames (carbon, mountain bike frames where
the rear stays splay quickly aft of the bottom bracket) interfere. Using
a spacer at the bottom bracket increases chainline. • The standard 42
tooth TSDZ2 chainring is dished to reduce chainline. This is effective
and a good solution, but it has limitations: o It limits you to a single
chainwheel (no front derailleur). You can mount two chainwheels, but the
chainline is worse on the inner and worse still on the outer chainring.
Fortunately an ebike generally doesn\'t need such a wide gear range. I
live with a lot of hills and a 11T-36T rear cluster has worked out
really well. o A chain ring smaller than 42T can\'t be dished, the gear
case would interfere. This can be a problem for mountain bikers who need
a really low range. The TSDZ2 reacts torque by clamping the rear stays
aft of the bottom bracket. This is often not possible with bikes that
have a rear suspension, various people have come up with various
solutions that require some fabrication. The clamp also can block rear
derailleur cable routing, I had to grind clearance to keep the
derailleur cable free. There are a lot posts about the plastic motor
drive gear, which fails for some people and not for others. A bronze
gear is available which is stronger but increases noise. My belief is
that the plastic gear is fine if you take care to avoid a few practices
that especially load the gear: • Avoid high-assist startups in a high
gear. Motor torque is highest at low rpm, and a torque that is OK at
speed can damage a gear at low rpm. Develop a habit of shifting to a low
gear when coming to a stop so you are in low gear when you next take
off. If you forget reduce assist for launch. • 500W is definitely easier
on the system than 750W. The open source firmware lets you change power
really easily.

## Updating Stock Firmware {#updating_stock_firmware}

Eyebyesickle sells from eco-ebikes.com, and at that website there is
good instructions about how to: 1. Make a cable to connect your computer
to the TSDZ2 motor 2. How to use the STM V-Link 2 and software on your
computer 3. How to flash stock firmware 4. Stock firmware files.
<https://www.eco-ebike.com/blogs/eco-cycles-instructionals/tsdz2programmingfromscratch>

The instructions tell you how to edit voltage levels to adapt to a
different battery voltage, but that doesn\'t always work (it didn\'t for
me). What worked for me was replacing the entire firmware with a stock
version for a different voltage. He made a video to help to flash the
entire firmware <https://www.eco-ebike.com/pages/videos> FIXING FAULTY
52V TSDZ2 PROGRAMMING FROM OTHER DISTRIBUTORS He uses an STM brand STM
V-Link 2 USB adapter. I bought that type because it was in the
instructional. Its voltage output is 3.3V where the cheap generic units
source 5V. Both work, but if you plan to flash the KT-LCD3 display the
3.3V means the display is very very dim, you can barely see it.

## TSDZ2 Open Source Firmware Installation Using KT-LCD3 display {#tsdz2_open_source_firmware_installation_using_kt_lcd3_display}

User Jbalat has great videos on youtube. You can see every step when
using the STM software.\
\
Part 1 <https://youtu.be/nj8GxKHut3o>\
\
Part 2 <https://youtu.be/bxEHDFCaKH8>\
\
Part 3 <https://youtu.be/zChf_2K8rW8>\
\
Part 4 <https://youtu.be/0nXtaJniZQc>\
\
Part 5 <https://youtu.be/IrWn6e8bIuQ>

## 6-pin & 8-pin TSDZ2 {#pin_8_pin_tsdz2}

For installing the open source software the biggest hardware impact will
be whether you have 6-pin (no throttle) or 8-pin:

-   They have different motor connectors so the stock cable from the
    display to the motor is different, and the cable you need to make is
    also different.
-   Adding a temperature sensor uses the throttle connection

SHOPPING LIST: 1. KT-LCD3 display casainho had a prior open source
firmware project for KT controllers. He already know teh KT-LDC3
display, he knew it also uses an STM processor, and he knew it has a lot
of fields to display information. He is working on open source firmware
for the Bafang 850C display, but for now the KT-LCD3 is the supported
display This display is currently a monochrome display, Kunteng KT-LCD3.
Not all KT-LCD3 displays have the same connector. Some have a green
5-pin waterproof (Julet) connector, but not all. For example the KT-LCD3
from BMS Battery has a connector that matches their controllers. I
recommend buying a KT-LCD3 that has the 5-pin waterproof connector and a
mating extension cable. 2. ST-Link v2 In order to be able to flash the
display and the controller of the motor you will need a small USB device
called ST-Link v2, clones are cheap, the STM brand unit is more
expensive and sources 5V rather than 3.3V (5V is preferred). 3. ST-Link
visual programmer
<https://www.eco-ebike.com/blogs/eco-cycles-instructionals/tsdz2programmingfromscratch>
tells you how to get the STM program. 4. Cable for flashing motor I
followed the instruction in
<https://www.eco-ebike.com/blogs/eco-cycles-instructionals/tsdz2programmingfromscratch>
People have reported that long cables can cause communications faults.

Also see
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Flash-the-firmware-on-TSDZ2>

5\. Cable for flashing KT-LCD3 & JST-XH-4-pin connectors
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3>

jbalat in his video found he had to swap rx and tx to make his cable
work. Mine worked straight away but I have seen that RX and TX
assignments can vary with the generic STM adapters.

The KT-LCD3 is programmed by connecting to four empty (marked J7) holes
on the board. Access to the holes on the KT-LCD3 PCB requires opening
the case. If you make no modification you will need to open the case
every time you want to update. I recommend connectorizing the display
with a JST-XH 4-pin connector soldered to the back of the circuit board.
(JST XH is the connector used for RC lithium battery balancer
connections, the pins fit perfectly on the PC board). The JDT-XH
connector solders in and fits nicely after a clearance hole is cut in
the back of the KT-LCD3 case. Seal with hot glue or silicone.
<https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&p=1434902%23p1434902#p1434902>
6. Cable for connecting KT-LCD3 to TSDZ2 motor (and throttle and brake
sensors). I did 8-pin, both 6-pin and 8-pin are covered in
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Wire-KT-LCD3-to-TSDZ2>
The github link involves buying the connector + cable that connects to
the KSDZ2 motor and splicing to the KT-LCD3 cable brake and throttle
connections aren\'t covered in detail. I recommend starting with a
molded cable that has waterproof connectors for KT-LCD3, throttle, and
brakes and splicing to the motor + cable with a single splice. That
approach directly accepts the KT-LCD3 green 5-pin connector (see above,
some KT-LCD3 are sold that don\'t have the waterproof connector), and
waterproof connections for brakes and throttle are ready for use.
<https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&p=1430679#p1430679>
Topbikekit sells the 1 in 4 cable used, they also sell throttles and
brake levers with matching molded connectors:
<http://www.topbikekit.com/wuxing-brake-with-2pins-waterproof-connector-p-543.html>
<http://www.topbikekit.com/2pcs-ebike-hydraulic-brake-sensor-for-power-cut-off-with-2pins-junlei-waterproof-connector-p-697.html>
<http://www.topbikekit.com/wuxing-108x-thumb-throttle-with-3pins-waterproof-connector-for-ebike-p-670.html>
<http://www.topbikekit.com/wuxing-130x-thumb-throttle-with-3pins-waterproof-connector-p-542.html>
FLASHING THE KT-LCD3: The procedure is at
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/How-to-flash-the-Flexible-OpenSource-firmware-on-KT-LCD3>
The procedure uses jbalat\'s TSDZ2 OPENSOURCE FIRMWARE \| PART 2 video
which shows all steps, but watch closely! I had to pause and rewind a
few times to catch it all. Some main points: • 5V to J7 on KT-LCD3 (STM
brand V-Link 2 sources only 3.3V. It works but you can barely see
display) . Disconnect battery. • Settings for configuring the KT-LCD3
are (CONFIGURE menu) o Hardware: ST-LINK o Port: USB o Programming mode:
SWIM o Device: STM8S105x6 • Erase the original firmware, which is
locked. After you clear the firmware the KT-LCD3 is completely
unprogrammed o Read all tabs (will say device is locked) o Select Option
byte tab o Read Out Protection Off o Flash to current tab • Flash Open
Source Firmware o Unplug and re-plug ST-Link (Screen will be blank) o
Read all tabs o Select Program Memory Tab o File\\open the KT-LCD3
firmware hex file o Program All Tabs o Unplug and re-plug ST-Link twice
READ AND SAVE THE EXISTING TSDZ2 MOTOR FIRMWARE The procedure is at
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Flash-the-firmware-on-TSDZ2>
jbalat\'s TSDZ2 OPENSOURCE FIRMWARE \| PART 3 video. Some main points: •
Battery disconnected • You can do this step with the original LCD
display connected but not powered up. The ST-Link gives enough power to
flash the motor. • You will first read the existing firmware. This
ensures you have a working connection. Eco-ebike.com also has good
instructions to get the connection up and running. • Save the existing
firmware so you have a backup in case you want to go back to stock. •
Settings for configuring the KT-LCD3 are in the CONFIGURE menu o
Hardware: ST-LINK o Port: USB o Programming mode: SWIM o Device:
STM8S105x4 (per jbalat video this is the only time to use the X4 device.
Flashing Opensource firmware uses X6 same s KT-LCD3) FLASH THE TSDZ2
MOTOR OPEN SOURCE FIRMWARE The procedure is at
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Flash-the-firmware-on-TSDZ2>
jbalat\'s TSDZ2 OPENSOURCE FIRMWARE \| PART 4 video. Some main points: •
Battery disconnected • Connect the flashed KT-LCD3 to the motor • Use
the same ST-Link connection • Settings for configuring the KT-LCD3 are
in the CONFIGURE menu o Hardware: ST-LINK o Port: USB o Programming
mode: SWIM o Device: STM8S105x6. • Flash Firmware o Unplug and re-plug
ST-Link (Screen will be blank) o Read all tabs o Select Program Memory
Tab o File\\open the TSDZ2 firmware hex file o Program All Tabs
CONFIGURE THE SYSTEM The KT-LCD3 is used to configure the system. The
procedure is at
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Usage-and-configuration-of-firmware-version-0.17.x>
jbalat\'s TSDZ2 OPENSOURCE FIRMWARE \| PART 5 video. • Motor maximum
power screen o Access by simultaneously pressing ON/OFF and UP buttons o
UP and DOWN buttons increase/decrease the value o Exit by long pressing
the ON/OFF button. • Configuration Menu o Access by long pressing UP and
DOWN buttons. o On/off advances menus o UP or DOWN button enters menu o
On/off advances sub-menus o UP or DOWN button changes values o Exit menu
by long pressing the ON/OFF button o Exit to main screen by long
pressing the ON/OFF button once again The table below is from the github
site for v 0.17. I thin it is nice to have a log of the default settings
and what you pout in (Setting column). I added some comments of my own.
0: General Setup Submenu number Configuration name Default value Setting
Description 0 Unit Metric Set (0) for metric units (km/h and kilometers)
or (1) for imperial units (mph and miles) 1 Maximum wheel speed 50 Enter
your speed limit (by law) to run legal on public roads. The motor will
fade out from -0.5 km/h to +2,0 km/h. Tip: Europe has generally a speed
limit of 25 km/h for E-Bikes. 2 Wheel circumference 2050 Enter your
wheel circumference so that speed and distance is correctly calculated.

Tip: Search on Google how to measure wheel circumference. But for a
quick setup with ball park values use: 26 wheel = 2050; 27 wheel = 2150;
27.5 wheel =2215; 28 wheel = 2250; 29 wheel = 2300 1: Battery Submenu
number Configuration name Default value Setting Description 0 Maximum
current from battery 16 ampere Set maximum allowable current to be
pulled from the battery. This value is limited internally by the
firmware to the safe value of 18 ampere. 1 Battery low-cut-off voltage
39 volt The controller will reduce power to stay over this limit!
Calculate the limit by multiplying amount of cells in series with the
safe cut-off-voltage per cell, which is usually between 2.8 - 3.0 volts.
Example: 39.0 volts for: 13 cells in series \* 3.0 volts = 39.0 volts. 2
Number of cells in series 13 Set this value so the battery state
indicator works properly. This value can be any integer from 7 to 14

Example values: 7 for 24 V battery; 10 for 36 V battery; 13 for 48 V
battery; 14 for 52 V battery. 3 Battery internal resistance 130
milliohms Set this value so the battery state indicator does not display
a lower state of charge when pulling a lot of power from battery and the
voltage sags.

Explanation: If you set the value to 0, you will see the battery state
indicator fluctuating whenever the motor draws current from the battery.
This is due to the internal resistance in the battery. The fluctuation
will disappear and be filtered out with a correct value.

How to calculate the battery pack resistance: 1. Limit the battery
current to a known value, e.g. 10 amps 2. Read the voltage drop when
motor is pulling the 10 amps 3. Calculate the resistance value

Example for 10 amps current, R = U / I, R = 1.2 volts drop / 10 amps, R
= 0.120 = 120 milliohms. I found 300 was a good setting for my 52V
12.8Ah battery. 4 Battery voltage (SOC) - Measured and continuously
updated battery voltage State Of Charge (SOC). This value is filtered
using the battery pack resistance.

Tip: Here you can evaluate and test how the set internal resistance of
the battery affects the voltage reading. 2: Battery Capacity Setup
Submenu number Configuration name Default value Setting Description 0
Enable and set State of Charge function 0 Set (1) to enable function. It
will display watt-hours consumed and percentage of charge remaining,
i.e., display percentage value from 100 % to 0 %.

Set (2) to enable function. It will display watt-hours consumed and
percentage of charge consumed, i.e., display percentage value from 0 %
to 100 %.

Set (0) to disable the function. 1 Threshold voltage to reset watt-hour
meter 54.2 volt When powering on the display this value is compared to
the battery voltage. If it is lower, the battery is expected to be fully
charged and the watt-hour meter is reset.

Tip: To find a suitable value, fully charge the battery and measure the
voltage on the KT-LCD3, use a slightly lower value for the threshold
voltage.

Example: my 48 V battery charges up to 54.6 volts, so I set the
threshold to 54.2 volts. 2 Total watt-hours of battery 0 Set the total
capacity in watt-hours your battery has.

Tip: fully charge the battery and then discharge it completely and use
the measured value to input here.

Tip: the capacities stated from suppliers are often too high, expect a
value of around 80 % - 90 % of stated value. I use 350 Wh for my 386 Wh
battery.

Tip: roughly calculate the capacity by multiplying the nominal voltage
with the nominal ampere hours. Example: a 48 volt, 14.5 Ah battery has a
nominal watt-hour capacity of 696 Wh. 3 Consumed watt-hours - This value
represents consumed watt-hours since last reset. It is reset
automatically when you power on the LCD and the battery is fully
charged, i.e., above the set threshold voltage. 3: Assist Levels Submenu
number Configuration name Default value Setting Description 0 Number of
assist levels 5 default Select the desired number of assist levels from
a minimum of 1 to a maximum of 9. 1 Assist level 1 multiplier 0.5 0.1
0.2 0.3 0.4 0.5 0.7 0.9 1.2 1.5 The value with which the human pedaling
power is multiplied with. (default 0.5 1.0 1.5 2.0 2.5)

Example: 0.5 \* 200 W (human power) = 100 W assist power. This results
in 300 W total power.

I found the stock values gave crazy high assist,, o.5 was stronger than
level 4 (turbo) in the stock firmware.

Also the human power it tells me I am putting is flattering but way
high. It didn\'t matter in practice, I just set low multipliers. For me
0.1 is less assist that stock Eco mode, and 1.5 is more assist than
Turbo 2 Assist level X multiplier 0.5 inc The desired multiplier for
assist level X. 4: Startup BOOST function Submenu number Configuration
name Default value Setting Description 0 BOOST feature 0 Set (1) to
enable or (0) to disable. I get occasional motor lurches when I\'m at a
stop with my foot on a pedal even though this is disabled. 1 On startup
only / everytime 1 Set (1) to enable BOOST feature every time pedal
cadence or torque sensor value are zero. Set (0) to enable BOOST feature
only when startup and bicycle wheel speed is equal to zero; 2 Limit
BOOST power to max battery power 0 Set (1) to enable BOOST power limit
to the maximum battery power value. Set (0) to disable. 3 BOOST time 2.0
seconds Set time limit of BOOST. 4 Fade out BOOST 3.5 seconds Set time
limit to transition of power from BOOST to regular power. 5 Assist level
1 BOOST multiplier 4 Set the BOOST multipler corresponding to assist
level 1.

Tip: See assist levels for more information about multipliers. 6 Assist
level X BOOST multiplier - Set the BOOST multipler corresponding to
assist level X.

Tip: See assist levels for more information about multipliers. 5: Motor
Temperature Protection Submenu number Configuration name Default value
Setting Description 0 Motor temperature protection 0 Set (1) to enable
the motor temperature control or set (0) to disable.

NOTE: if you do not have the motor temperature sensor installed, you
should disable this option and ignore the immediate configurations
below. 1 Minimum temperature 75 °C Set the minimum motor temperature at
which the motor current will start to be limited. 2 Maximum temperature
85 °C Set the maximum motor temperature at which the motor current will
be completely blocked, i.e., motor shutoff. 6: Display Submenu number
Configuration name Default value Setting Description 0 LCD brightness
when backlight is off 5 Percentage of brightness when backlight is
turned off, e.g., 5 % 1 LCD brightness when backlight is on 80
Percentage of brightness when backlight is turned on, e.g., 80 % 2 LCD
auto power off 15 Automatic power off after set amount of minutes. 3
Reset to factory defaults 0 1. 2. Increase the value to 10 3. The
display will turn off 4. Turn it on again 5. Factory default settings
will be restored 7: Offroad Mode Submenu number Configuration name
Default value Setting Description 0 Feature toggle 0 Select (1) to
enable or (0) to disable. 1 Active on system startup 0 Determines
whether offroad mode should be active on system startup. Select (1) to
enable or select (0) to disable. 2 Speed limit 25 km/h This speed limit
is used when offroad mode is not active. Configure your speed which is
legal for using on public roads. The motor will fade out power from -0.5
km/h to +2,0 km/h. 3 Limit power 0 Determines whether power should be
limited when offroad mode is not active. Select (1) to enable or (0) to
disable. 4 Power limit 250 W The power limit in watts. For most
countries in Europe the legal power limit is 250 W. 8: Various Submenu
number Configuration name Default value Setting Description 0 Motor
voltage type 0 Depending on type of motor, select appropriate value so
that FOC calculations are correctly executed. The voltage of the battery
does not matter, this value should always be set depending on type of
motor.

0 for 48 V brushless motor (TSDZ2 52 V version has a 48 V brushless
motor). • 1 for 36 V brushless motor. • 2 for experimental high cadence
mode (only available in version 0.14.3 and up). Maybe not good for the
motor, use at your own risk. Probably only suitable for 36 V motors. 1
Motor assistance startup without pedal rotation 0 Select (1) to enable
or select (0) to disable. Recommended to keep at disabled (0) if you do
not have brake sensors installed. 2 Set odometer 0 Set the odometer to
preferred value. Increase the value by pressing UP button or press and
hold to have the value increment automatically. Decrease the value by
pressing the DOWN button or press and hold to have the value decrement
automatically. 9: Advanced Technical Data Submenu number Configuration
name Description 0 ADC throttle See the current value 1 Throttle See the
current value 2 ADC pedal torque sensor See the current value 3 Pedal
torque sensor See the current value 4 Pedal cadence See the current
value 5 Pedal human power See the current value 6 PWM duty cycle See the
current value 7 Motor speed in ERPs See the current value 8 FOC angle
See the current value. This value must be multiplied by 1.4 to get angle
value in degrees. Other links
<https://endless-sphere.com/forums/viewtopic.php?f=30&t=93818&p=1435526#p1435539>
<https://endless-sphere.com/forums/viewtopic.php?f=30&t=93818&p=1435526#p1435634>
<https://endless-sphere.com/forums/viewtopic.php?f=30&t=93818&p=1435526#p1435736>

Main screen
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Usage-and-configuration-of-firmware-version-0.17.x>
I added screenshots to the github info to make this easier to understand
o Assist level: assist level sets the motor power as a factor of the
power that rider is doing on the pedals. For instance, if current assist
level is 3 and if this level is configured as a factor of 2.0, when
rider is doing on the pedals a power of 100 watts, the motor power used
will then be 200 watts.

The assist level is changed by pressing UP and DOWN buttons. o Ebike
wheel speed: the value of wheel speed in kmh or mph.

o Motor power: power used by the motor (in watts) that is being draw
from the battery.

o Battery state of charge: Battery state of charge based on battery
voltage. There are 6 different levels. When battery is near empty, the
battery symbol will be empty and blinking and the motor power will be
reduced up to battery being totally empty.

The battery voltage used to calculate the state of charge has in
consideration the battery pack resistance to avoid floating when power
is being draw from the battery (the battery pack resistance value is set
on configurations menu). o Lights: enabled/disable with a long press of
UP button (LCD back light will also be change, depending on the
configurations) and the motor controller will enable/disable the ebike
lights.

o Brake: Brake symbol is enabled when user press the ebike brakes (good
to check that sensor brakes are working).

o Time Measurement: Time measurement functions. Switch between TM or TTM
to get measured time either from trip or user last reset.

o Walk assist: enabled/disable with a long press of DOWN button.
Although it is implemented on LCD, it is not yet implemented on the
motor controller.

o Offroad mode: if you have enabled the offroad mode (see configuration
section below) this can be activated with the ON/OFF and UP button
combination and deactivated with the ON/OFF and DOWN button combination.
When active, the assist symbol above the assist level will start
blinking.

Offroad mode is disabled and inactive by default. We do not recommend
you to activate offroad mode on public roads. In many countries offroad
mode may only be used on private property. o Motor temperature / battery
state of charge in percentage: this field can show either the motor
temperature (when the sensor is installed), the battery state in
percentage or none (you can switch what is shown by pressing POWER and
UP buttons simultaneously).

 Motor temperature: motor temperature in degrees Celsius. When the
power power is being limited due to over temperature, this field will
blink (configure the temperature limits on configurations menu). 
Battery state of charge in percentage: this percentage value is based on
the accumulated battery power draw from your battery pack (set options
on configurations menu). o Odometer field: this field can show a few
variables that are logic grouped in sub fields. You can change between
fields by pressing ON/OFF button and sub fields by quick pressing UP
button followed a long press UP button (you will see temporary the field
and sub field number blinking on wheel speed field).

 1. Distance  1.0 Trip distance: can be reset by quickly pressing DOWN
button followed by a long press DOWN button (you will see trip distance
value blinking if you keep pressed DOWN button and after 3 seconds the
value will reset).  1.1 Distance since power on this value is
automatically reset at power on. You can also reset by quick pressing
DOWN button followed a long press DOWN button (you will see trip
distance value blinking if you keep pressed DOWN button and after 3
seconds the value will reset).  1.2 Odometer: can be set to a specific
value on the configurations menu.  2. Battery State of Charge (not
shown if function is disabled in configuration menu)  2.0 State of
charge in percentage  2.1 Consumed watt-hours  3. Battery State  3.0
Voltage: Voltage of battery.  3.1 Current: instantaneous current drawn
from battery.  4. Pedals  4.0 Rider pedal power: in watts.  4.1 Pedal
cadence: in revolutions per minute.  4.2 Pedal torque: in newton meter.
 5. Motor Temperature (not shown if function is disabled in
configuration menu)  5.0 Motor temperature: Temperature of motor.  6.
Time Measurement  6.0 Time Measurement: Time measured since display is
powered on.  6.1 Total Time Measurement: Total time measured since last
reset.
