---
sidebar_position: 2
---
# Developement
There are no hall sensors on the motor and the original motor controller only has 1 DC shunt current sensor, so it does not measure the motor phase currents.

The motor controller has a magnetic sensor on the board, to detect the angle position of the motor rotor shaft (that has a magnet glued). This should provide a high resolution motor rotor position, which should provide a good torque at motor startup as also a easy implementation of motor FOC, with an efficient and silent motor.

We know and have all the datasheets of the components of the board - see the [hardware folder](Hardware/).

# Ideas

## How to implement simple motor control

1. calculate the phase current as: phase current = battery current * duty_cycle (this is done on TSDZ2 OpenSource firmware)
2. use motor speed and motor inductance to calculate the angle between the motor voltage and motor current, to keep the i_d current always at 0, this way get principle of FOC running (this is done on TSDZ2 OpenSource firmware)
3. control the phase current wuing a PID controller
4. control the phase angle using a PID controller
5. implement SVPM and finally apply the PWM values

### (Optionally) How to sample phase currents using the DC shunt current sensor

How to sample phase currents:
* If Ia+Ib+Ic=0, Set the ADC trigger when U high V low W low, You get Iu
* Trigger at U high V high W low, You get -Iw
* There are 6 combinations like this i think so you can get all phase readings
* But it gives poor results at low speed

## Firmware Information

### Hex Values

The following firmware hex values seem to be related to the following configuration options:

hex address = value == effect/target-effect

**Fully Charged voltage**
0768 = 29 == 41( 36v firmwares)
0768 = 30 == 48 ( 43v firmwares)
0768 = 35 == 53 ( 48v firmwares)


**Low voltage level:**

076c = 2A  == 42v
076c = 20 == 32v
076c = 27 == 39v

**Normal/Nominal Voltage setting:**

0770 = 24 == 36v
0770 = 2B == 43V
0770 = 30 == 48v


**Max current setting:**

0774 = 0a == 10A
0774 = 0d == 13A
0774 = 0f == 15A
0774 = 12 == 18A
0774 = 14 == 20A

**Max current setting 2:**
somewhere around 11b80, this whole section differs between firmwares with different voltage setting

24 24 == 36v
2B 2B == 43V
30 30 == 48v
