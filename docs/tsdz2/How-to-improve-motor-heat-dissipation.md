\_\_TOC\_\_

# Circulating Fan {#circulating_fan}

I installed a small 30mm tangential blower to circulate air inside the
case. It fits with no modification blowing around the motor
circumference.

The effect on power handling was measured by feeding DC through the
windings on the bench, while blowing air on the outside of the case.
Internal motor temperature can be measured by the change in winding
resistance (V_at_windings/I) due to temperature (Copper is similar to
PT100 RTD type sensor). By keeping R constant i.e the winding
temperature , the amount of power for X degrees inside the windings, can
be measured blower on and blower off.

# TSDZ2 motor heat dissipation improvement with thermal grease and pads {#tsdz2_motor_heat_dissipation_improvement_with_thermal_grease_and_pads}

This guide is about improving the cooling of the TSDZ2 engine. It allows
to use more continuous power. Reduces the risk of demagnetizing or even
burning the engine, but does not prevent it. Installation of the
temperature sensor is highly recommended.\
This upgrade requires testing. It is suggested to perform a continuous
power level test at the optimum, constant motor operating temperature
(e.g. 70 C degrees) before and after the modification. Then share the
results on the Endless Sphere forum thread **[Hardware temperature
control
tsdz2](https://endless-sphere.com/forums/viewtopic.php?f=28&t=102046)**.

We will focus on modifying the heat flow from the motor windings, where
heat is generated to the outer casing.

Elements needed to complete the upgrade:\
- Heat conducting paste 5 W / mK or better - 2-3 g,\
- AAB Cooling Thermopad 20x130x2 6 W / mK - 1 piece\
- AAB Cooling Thermopad 20x130x3 6 W / mK - 1 piece\
You can use any other thermal silicone pad with similar parameters with
adhesive on both sides.

## Step 1 {#step_1}

Remove the electric motor. Secure the chamber in which the blue rack and
motor shaft work, e.g. with paper tissues. Carefully clean the seat in
which the engine is mounted. Remove the old glue. In this step, you can
check the condition of the blue gear and bearings, grease them.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-1.jpg>

## Step 2 {#step_2}

Disassemble the motor. The flanges must be removed separately from the
stator. A small bearing puller can be used. Apply thermal paste to the
flange seats in which the stator is mounted. Assemble the electric motor
together.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-2.jpg>

## Step 3 {#step_3}

Stick the Thermopad strips to the gear housing in the place where the
electric motor is (Thermopad contains adhesive on both sides). The gap
between the motor and the housing is 1.5 mm thick. 2 mm thick Thermopads
strips are enough. Remember to leave gaps between the strips, because
when pressed they widen.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-3.jpg>

## Step 4 {#step_4}

Apply thermal grease to the gearbox flange

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-4.jpg>

## Step 5 {#step_5}

Apply thermal grease to the motor flange

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-5.jpg>

## Step 6 {#step_6}

Put the electric motor in its place. Connect the cables.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-6.jpg>

## Step 7 {#step_7}

Stick 3 mm thick Thermopad strips to the outer motor flange and
controller housing. Put the outer cover in its place.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-7.jpg>

## Step 8 (optional) {#step_8_optional}

Cut the outer plastic cover under the sprocket. In this way you will
open an unused chamber. This chamber works perfectly as a heat sink. Put
some black Sugru (it can be molded like Pongo) or black silicone in the
gap between the cut plastic cover and the gear housing. You can use
black spray paint inside of the chamber for better look.

You can skip this step if you want to keep the factory appearance, but
then you will get less continuous power.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-8a.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/motor-heat-dissipation-step-8b.jpg>
