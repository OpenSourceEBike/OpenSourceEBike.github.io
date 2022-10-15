\_\_TOC\_\_

If your are looking for previous version information: [Features and
configurations on display
850C_SW102_v0.6.7](Features_and_configurations_on_display_850C_SW102_v0.6.7 "wikilink").

The following only applies to TSDZ2 motor controller firmware version
0.56.0, 860C, 850C and SW102 displays firmware 0.7.0.

**CAUTION:** as the previous firmware version burn the motor controller
and/or make unwanted motor rotating at max speed and power, please be
very careful when installing this version by keep the back wheel on the
air, have brake sensors installed and the possibility with easy access
to quick cut the battery power like removing the battery connector to
the TSDZ2.

**CAUTION:**\
\* Always use the mentioned firmware version for both the TSDZ2 motor
controller and display!

-   Before using the mid drive with new firmware, you must correctly
    configure the options on the display. For instance, you should
    configure your battery low voltage cut off so as not to over
    discharge the battery. Do set all other parameters also to ensure
    proper operation.
-   When installing new firmware, always check that no unwanted
    functions have become enabled or disabled during the install
    process.

Note that the street mode is not implemented yet.\

# Navigation

## Main screens {#main_screens}

NOTE: Both displays have 3 different main screens and each one have his
own customized numeric fields and 860C and 850C have also their own
customized graph field on each main screen. You can change the
information/variable shown on this customized fields.

  -------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------
  [Click here to see video showing 850C](https://www.youtube.com/watch?v=eDENZS4pHvo)    [Click here to see video showing SW102](https://www.youtube.com/watch?v=q0N5W3Fgyjk)
  <https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/850C_video.jpg>   <https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_video.jpg>
  -------------------------------------------------------------------------------------- ---------------------------------------------------------------------------------------

-   Turn on/off: ON/OFF long press
-   Change assist level: UP or DOWN click
-   Turn on/off the lights: UP long press
-   Walk assist: DOWN long press (walk assist is only enabled while DOWN
    button is pressed)
-   Alternate main screen: ON/OFF click
-   Show fields labels (SW102 only): M click
-   Enter configurations screen: simultaneous ON/OFF, UP and DOWN, long
    press

### Change variables on numeric fields or graph {#change_variables_on_numeric_fields_or_graph}

-   Select the variable: simultaneous UP and DOWN, long press
-   Leave: ON/OFF long press
-   Choose new variable: UP or DOWN click
-   Jump to next field: ON/OFF click
-   (850C only) UP and DOWN long press to select on the graph the X axis
    scale from 15m, 1h, 4h or automatic
-   (850C only) UP or DOWN click to change X axis scale
-   (850C only) ON/OFF long press to leave

## Configurations screen {#configurations_screen}

-   Leave: ON/OFF long press to go back
-   Scroll up or down: UP or DOWN click
-   Edit item: 850C: ON/OFF click; SW102: menu click
-   Apply: 850C: ON/OFF long press; SW102: menu click

# Available information to show on display {#available_information_to_show_on_display}

There are a few variables that can be selected to be shown on the
customized numeric fields or graph (850C only). Note that only some of
them are available to be show on the graph.

+---------------+-----------------------------------------------------+
| **Variable**  | **Description**                                     |
+---------------+-----------------------------------------------------+
| trip time     | Amount of time from startup of the system.          |
+---------------+-----------------------------------------------------+
| trip distance | Amount of kms from counted from startup of the      |
|               | system.                                             |
+---------------+-----------------------------------------------------+
| odometer      | Total amount of kms. This value can be edited on    |
|               | the configurations, for instance in the case you    |
|               | want to set a specific value.                       |
+---------------+-----------------------------------------------------+
| cadence       | Pedal cadence measured using the PAS sensor inside  |
|               | the TSDZ2 motor.                                    |
+---------------+-----------------------------------------------------+
| human power   | Pedal human power. This is calculated using the     |
|               | following formulas:\                                |
|               | \# torque sensor signal is linearized and the       |
|               | output ADC values are converted to weight is kgs    |
|               |                                                     |
|               | 1.  pedal torque in Nm is calculated as: pedal      |
|               |     torque = weight Kgs on pedals \* 9.81 (gravity) |
|               |     \* 0.17 (0.17 is the arm cranks size)           |
|               | 2.  pedal power in watts is calculated as: pedal    |
|               |     power = (pedal torque \* pedal cadence \* 2 \*  |
|               |     pi) / 60                                        |
+---------------+-----------------------------------------------------+
| motor power   | This value is calculated by multiplying the battery |
|               | current to the battery voltage.                     |
+---------------+-----------------------------------------------------+
| batt voltage  | Battery voltage measure by the TSDZ2 motor          |
|               | controller.                                         |
+---------------+-----------------------------------------------------+
| batt current  | Battery current measure by the TSDZ2 motor          |
|               | controller.                                         |
+---------------+-----------------------------------------------------+
| motor current | Motor current. This value is calculated as: motor   |
|               | current = measured battery current / PWM            |
|               | duty-cycle. Note that PWM duty-cycle value varies   |
|               | between 0 and 1.                                    |
+---------------+-----------------------------------------------------+
| battery SOC   | Battery state of charge, based on counting the      |
|               | amount power pulled from the battery to power the   |
|               | TSDZ2 motor.                                        |
+---------------+-----------------------------------------------------+
| motor temp    | Motor temperature. Note that if the temperature     |
|               | sensor is not installed, this value has no meaning. |
+---------------+-----------------------------------------------------+
| motor speed   | In ERPS (electric rotation per second) units. The   |
|               | motor has 8 pair of magnets inside, meaning each 1  |
|               | ERPs equal to one RPS (rotation per second).        |
+---------------+-----------------------------------------------------+
| motor pwm     | Motor PWM duty-cycle. This value can fluctuate      |
|               | between 0% and 100% max. Where 0 means 0 battery    |
|               | voltage applied to motor coils while 100 means max  |
|               | battery voltage applied. When this value hits the   |
|               | max of 100, means that motor max power possible is  |
|               | being applied.                                      |
+---------------+-----------------------------------------------------+
| motor foc     | Angle calculated by FOC algorithm, between 0 and    |
|               | 30. Higher motor phase current and/or higher motor  |
|               | speed, makes this value increase.                   |
+---------------+-----------------------------------------------------+

# Configurations

## Wheel

+---------------+-------------------+--------------------------------+
| **Name**      | **Default value** | **Description**                |
+---------------+-------------------+--------------------------------+
| Max speed     | 50                | Enter speed limit from where   |
|               |                   | the motor will fade out power  |
|               |                   | from.\                         |
|               |                   | \                              |
+---------------+-------------------+--------------------------------+
| Circumference | 2050              | Enter your wheel circumference |
|               |                   | so that speed and distance are |
|               |                   | correctly calculated.\         |
|               |                   | \                              |
|               |                   | Tip: Search on Google how to   |
|               |                   | measure the wheel              |
|               |                   | circumference. Below are       |
|               |                   | approximate values for a quick |
|               |                   | setup. Remember to calibrate   |
|               |                   | with GPS for finer             |
|               |                   | adjustments.\                  |
|               |                   | \                              |
|               |                   | 20 inch wheel = 1595 mm\       |
|               |                   | 26 inch wheel = 2050 mm\       |
|               |                   | 27 inch wheel = 2150 mm\       |
|               |                   | 27.5 inch wheel = 2215 mm\     |
|               |                   | 28 inch wheel = 2250 mm\       |
|               |                   | 29 inch wheel = 2300 mm        |
+---------------+-------------------+--------------------------------+

## Battery

+-------------+-------------------+----------------------------------+
| **Name**    | **Default value** | **Description**                  |
+-------------+-------------------+----------------------------------+
| Max current | 16 ampere         | Set maximum allowable current to |
|             |                   | be pulled from the battery -     |
|             |                   | this value is a technical        |
|             |                   | characteristic of your battery,  |
|             |                   | you need to find it on your      |
|             |                   | battery user manual or ask to    |
|             |                   | the manufacturer. Also the TSDZ2 |
|             |                   | has his own limit of the max     |
|             |                   | current it can pull from the     |
|             |                   | battery that is 18 amps so the   |
|             |                   | TSDZ2 firmware limits to this    |
|             |                   | value (no point for you to setup |
|             |                   | a higher value than 18).         |
+-------------+-------------------+----------------------------------+
| Low cut-off | 42 volts          | The controller will reduce power |
|             |                   | to stay over this limit!\        |
|             |                   | \                                |
|             |                   | NOTE that is saffer and so       |
|             |                   | highly suggested that your       |
|             |                   | battery pack have BMS to protect |
|             |                   | against battery deep             |
|             |                   | discharging, short circuit, etc  |
|             |                   | and this way to avoid possible   |
|             |                   | explosions of the battery pack.\ |
|             |                   | \                                |
|             |                   | Calculate the Low cut-off limit  |
|             |                   | by multiplying amount of cells   |
|             |                   | in series with the safe          |
|             |                   | cut-off-voltage per cell, which  |
|             |                   | is usually between 2.8 - 3.0     |
|             |                   | volts. Example: 42.0 volts for:  |
|             |                   | 14 cells in series \* 3.0 volts  |
|             |                   | = 42.0 volts.\                   |
|             |                   | \                                |
|             |                   | Note that by setting a to high   |
|             |                   | Low cut-off limit you will make  |
|             |                   | less deep discharging cycles of  |
|             |                   | your battery meaning the battery |
|             |                   | life will be increased AND you   |
|             |                   | will then have less power        |
|             |                   | available to use and so less     |
|             |                   | range.                           |
+-------------+-------------------+----------------------------------+
| Resistance  | 300 milliohms     | The battery SOC (State Of        |
|             |                   | charge) indicator use the        |
|             |                   | battery resistance to consider   |
|             |                   | the power loss inside the        |
|             |                   | battery resistance and also the  |
|             |                   | resistance on the cables.\       |
|             |                   | \                                |
|             |                   | `<nowiki>`{=html}Example of      |
|             |                   | power loss: assuming the TSDZ2   |
|             |                   | is pulling 15 amps from the      |
|             |                   | battery and that my battery of   |
|             |                   | 350 Wh (watt / hour) has an      |
|             |                   | internal resistance of 300       |
|             |                   | milliohms, the power loss inside |
|             |                   | the battery is: P = R \* I \* I  |
|             |                   | = 0.3 \* 15 \* 15 = 67.5 watts.  |
|             |                   | As we can see, this power loss   |
|             |                   | is equal to 19% of my battery Wh |
|             |                   | value                            |
+-------------+-------------------+----------------------------------+
| Voltage     | \-                | Real time battery voltage value  |
|             |                   | that is filtered using the       |
|             |                   | battery pack resistance.         |
+-------------+-------------------+----------------------------------+

## Battery SOC {#battery_soc}

+-----------------------+-------------------+-----------------------+
| **Name**              | **Default value** | **Description**       |
+-----------------------+-------------------+-----------------------+
| Text                  | SOC %             | \"SOC %\" to show on  |
|                       |                   | the main screen, near |
|                       |                   | the battery symbol,   |
|                       |                   | the value of SOC in   |
|                       |                   | percentage. \"Volts\" |
|                       |                   | to show the battery   |
|                       |                   | voltage and           |
|                       |                   | \"disable\" to show   |
|                       |                   | nothing\'             |
+-----------------------+-------------------+-----------------------+
| Reset at voltage /    | 58.5              | Threshold voltage to  |
| Reset at              |                   | reset the SOC         |
|                       |                   | watt-hour meter: when |
|                       |                   | powering on the       |
|                       |                   | display this value is |
|                       |                   | compared to the       |
|                       |                   | battery voltage. If   |
|                       |                   | the battery voltage   |
|                       |                   | is higher, then the   |
|                       |                   | battery is expected   |
|                       |                   | to be fully charged   |
|                       |                   | and the SOC watt-hour |
|                       |                   | meter is reset,       |
|                       |                   | effectively resetting |
|                       |                   | the SOC to 100%.\     |
|                       |                   | \                     |
|                       |                   | Tip: To find a        |
|                       |                   | suitable value, fully |
|                       |                   | charge the battery    |
|                       |                   | and measure the       |
|                       |                   | voltage on the        |
|                       |                   | display, use a        |
|                       |                   | slightly lower value  |
|                       |                   | for the threshold     |
|                       |                   | voltage.\             |
|                       |                   | \                     |
|                       |                   | Example: my 52V       |
|                       |                   | battery charges up to |
|                       |                   | 58.8 volts, so I set  |
|                       |                   | the threshold to 58.5 |
|                       |                   | volts.\               |
|                       |                   | \                     |
+-----------------------+-------------------+-----------------------+
| Battery total Wh /    | 500               | Set the total         |
| Battery total         |                   | capacity in           |
|                       |                   | watt-hours your       |
|                       |                   | battery has.\         |
|                       |                   | \                     |
|                       |                   | Tip: fully charge the |
|                       |                   | battery and then      |
|                       |                   | discharge it          |
|                       |                   | completely and use    |
|                       |                   | the measured value to |
|                       |                   | input here. NOTE that |
|                       |                   | you also need first   |
|                       |                   | to setup the correct  |
|                       |                   | value of your battery |
|                       |                   | internal resistance   |
|                       |                   | as also the low       |
|                       |                   | cut-off voltage.\     |
|                       |                   | \                     |
|                       |                   | Tip: the capacities   |
|                       |                   | stated from suppliers |
|                       |                   | are often too high,   |
|                       |                   | expect a value of     |
|                       |                   | around 80 % - 90 % of |
|                       |                   | stated value. I use   |
|                       |                   | 350 Wh for my 386 Wh  |
|                       |                   | battery.\             |
|                       |                   | \                     |
|                       |                   | Tip: roughly          |
|                       |                   | calculate the         |
|                       |                   | capacity by           |
|                       |                   | multiplying the       |
|                       |                   | nominal voltage with  |
|                       |                   | the nominal ampere    |
|                       |                   | hours. Example: a 52  |
|                       |                   | volt, 7 Ah battery    |
|                       |                   | has a nominal         |
|                       |                   | watt-hour capacity of |
|                       |                   | 364 Wh.\              |
|                       |                   | \                     |
+-----------------------+-------------------+-----------------------+
| Used Wh               | 0                 | This value shows the  |
|                       |                   | SOC watt-hour meter   |
|                       |                   | value. You can change |
|                       |                   | this value if you     |
|                       |                   | need, like in the     |
|                       |                   | event that the        |
|                       |                   | battery was not fully |
|                       |                   | charged and this      |
|                       |                   | value is not accurate |
|                       |                   | anymore.\             |
|                       |                   | \                     |
+-----------------------+-------------------+-----------------------+

## Motor

+----------------------+-------------------+-----------------------+
| **Name**             | **Default value** | **Description**       |
+----------------------+-------------------+-----------------------+
| Motor voltage        | 48V               | Depending on type of  |
|                      |                   | motor, set            |
|                      |                   | appropriate value so  |
|                      |                   | that FOC calculations |
|                      |                   | are correctly         |
|                      |                   | executed. The voltage |
|                      |                   | of the battery does   |
|                      |                   | not matter, this      |
|                      |                   | value should always   |
|                      |                   | be set depending on   |
|                      |                   | type of motor. Set    |
|                      |                   | \"48V\" for 48V       |
|                      |                   | brushless motor       |
|                      |                   | (TSDZ2 52V version    |
|                      |                   | has a 48V brushless   |
|                      |                   | motor). Set \"36V\"   |
|                      |                   | for 36V brushless     |
|                      |                   | motor.\               |
|                      |                   | Set \"exp 48V\" or    |
|                      |                   | \"exp 36V\" for the   |
|                      |                   | 48 or 36V brushless   |
|                      |                   | motor, high cadence   |
|                      |                   | mode (this            |
|                      |                   | experimental options  |
|                      |                   | may not be good for   |
|                      |                   | the motor, use at     |
|                      |                   | your own risk).       |
+----------------------+-------------------+-----------------------+
| Max current          | 16                | The more current the  |
|                      |                   | more torque the motor |
|                      |                   | will do (will also    |
|                      |                   | put more stress on    |
|                      |                   | internal gears like   |
|                      |                   | the blue gear and     |
|                      |                   | make the motor heat   |
|                      |                   | faster). The TSDZ2    |
|                      |                   | firmware limits this  |
|                      |                   | value to max of 30    |
|                      |                   | amps and high values  |
|                      |                   | are achieved at motor |
|                      |                   | startup / very low    |
|                      |                   | speeds.\              |
|                      |                   | \                     |
|                      |                   | As an example, a      |
|                      |                   | value of 8 amps can   |
|                      |                   | be used for a kid     |
|                      |                   | ebike, to reduce the  |
|                      |                   | amount of torque      |
|                      |                   | since he is small and |
|                      |                   | light. For an adult,  |
|                      |                   | a value of 18 amps    |
|                      |                   | can be used.          |
+----------------------+-------------------+-----------------------+
| Current ramp         | 5 amps per second | Set value after user  |
|                      |                   | preference. Higher    |
|                      |                   | value corresponds to  |
|                      |                   | faster acceleration   |
|                      |                   | but also greater      |
|                      |                   | forces on the mid     |
|                      |                   | drive. Be mindful not |
|                      |                   | to select too fast    |
|                      |                   | acceleration.         |
+----------------------+-------------------+-----------------------+
| Min current ADC step | 1                 | Min current value (in |
|                      |                   | ADC steps) while      |
|                      |                   | pedaling, even if not |
|                      |                   | pressing the pedals.  |
|                      |                   | This is nice to keep  |
|                      |                   | motor engaged and     |
|                      |                   | ready even if         |
|                      |                   | rotating pedals with  |
|                      |                   | minimal force that it |
|                      |                   | is not even detected  |
|                      |                   | by the torque sensor. |
+----------------------+-------------------+-----------------------+

## Torque sensor / Torque sen {#torque_sensor_torque_sen}

Before you enable the \"calibration\", you MUST calibrate your torque
sensor by following this guide: [How to calibrate the torque
sensor](How_to_calibrate_the_torque_sensor "wikilink")

**How to use:** everytime you startup the system, the pedals need to be
vertical pointing to ground. You can select on Configurations to be left
or right pedal to point to ground at startup, based on your preferences.
This is needed done so the system can know in which pedal are you doing
the force with your legs, since the weight is measured differently on
each pedal due to the torque sensor.

  ----------------------------------- ------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Name**                            **Default value**   **Description**
  Calibration                         disabled            Enable the torque sensor full calibration.
  Start pedal ground / Pedal ground   left                For the calibration to work, you need to power on the system while keeping the pedals in the vertical position and without touching them or moving the bicycle. One of the pedals must be near the ground, you can select here your preferred pedal.
  Left weight 1 / L weight 1          0                   Set the first weight value for the left pedal.
  Left ADC 1                          304                 Set the first weight value for the left pedal.
  Left weight x / L weight 1          x                   Set the x weight value for the left pedal.
  Left ADC x                          x                   Set the x weight value for the left pedal.
  ----------------------------------- ------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Assist level / Assist {#assist_level_assist}

The firmware applies a motor current (motor torque) based on the pedal
human power done by the rider and multiplied by the assist level factor.
As an example, if the current assist level factor is 0.153 and the rider
pedal human power is 100W, the motor current will be 100 \* 0.153 = 15.3
amps.\
\
The default twenty assist levels start at factor 0.005 and each next
assist level increase the factor by +33%, which should good for most
users. If you still want to customize, follow the next steps to adapt
assist level factors for you:

1.  Calibrate the torque sensor.
2.  Ride with assist level 0 (motor will be disabled) for some minutes
    on a flat road and see on the display what is the average value of
    your pedal human power - my average value is 125 watts.
3.  As it is advised to not exceed 18 amps of motor current on TSDZ2,
    let\'s say I want to have a motor current of 12 amps for my average
    human power of 125 watts, so, the assist level factor should be
    0.144 (divide motor current by human power: 12 / 150 = 0.144).
4.  You can choose an assist level factor like 0.05 for assist level 0
    and increase next one by multiplying 1.33 (each level have +33%
    motor current from previous one), resulting in the following values:
    0.05, 0.07, 0.09, 0.12, 0.16, etc.\

\
{\| \| **Name** \|\| **Default value** \|\| **Description** \|- \|
Number of assist levels / Num levels \|\| 20 \|\| Select the desired
number of assist levels from a minimum of 1 to a maximum of 20. \|- \|
Level 1 \|\| 0.005 \|\| The value with which the human pedal power is
multiplied to obtain the motor current value. \|- \| Level X \|\| x \|\|
The desired multiplier for assist level X. \|}

## Walk assist / Walk {#walk_assist_walk}

Here you can enable or disable the walk assist function. And also
configure the motor duty-cycle in each and every enabled assist level.
The defaults should work for most situations.

The walk assist PWM value sets the motor duty-cycle. It is an open loop
controller. A PWM value of 30 will set the target duty-cycle to 30.
Maximum settable PWM in the walk assist function is limited to a value
of 100.

**NOTES:**

-   There are only as many walk assist levels as there are assist
    levels.
-   Carefully test and set appropriate values.
-   The function is only active in speeds below 8 km/h or around 5 mph.

  ------------------------------------- ------------------- ---------------------------------------------
  **Name**                              **Default value**   **Description**
  Enable/disable walk assist function   disabled            Enable or disable the walk assist function.
  Level 1                               30                  The fixed PWM value applied to the motor.
  Level X                               x                   The fixed PWM value applied to the motor.
  ------------------------------------- ------------------- ---------------------------------------------

## Startup BOOST / Start Pwr {#startup_boost_start_pwr}

Here you can enable, disable and configure the BOOST feature. This
feature helps from standstills where you might need greater assistance.
It gives more power during a set time and then fades the power back to
normal assistance. Configure the function after your own likening and
preference.

  -------------------- ------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Name**             **Default value**   **Description**
  Feature              disabled            Enable or disable the startup BOOST function.
  Active on            startup             Set to startup to enable startup BOOST feature only when startup and bicycle wheel speed is equal to zero or set to enable to enable BOOST feature every time pedal cadence or torque sensor value are zero.
  Limit to max-power   no                  Yes to enable BOOST power limit to the maximum battery power value and no to disable.
  Duration             2.0                 Set time limit of BOOST in seconds.
  Fade                 3.5                 Set time limit to transition of power from BOOST to regular power.
  Level 1              4                   Set the BOOST multiplier corresponding to assist level 1. Tip: See assist levels for more information about multipliers.
  Level X              \-                  Set the BOOST multiplier corresponding to assist level X.
  -------------------- ------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Motor temperature / Motor temp {#motor_temperature_motor_temp}

Here you can enable or disable the throttle or the motor temperature
protection that will let you push the motor limits. Note that you must
first install the [motor temperature
sensor](How_to_install_motor_temperature_sensor "wikilink").

**NOTES:**

-   The throttle and the motor temperature protection can not be active
    simultaneously. This is because they use the same hardware ports to
    operate.
-   If the motor temperature sensor is installed it is not possible to
    use the throttle. Do NOT enable throttle if that is the case.

+-----------+-------------------+------------------------------------+
| **Name**  | **Default value** | **Description**                    |
+-----------+-------------------+------------------------------------+
| Feature   | disabled          | \"disabled\" means that neither    |
|           |                   | motor temperature limit function   |
|           |                   | nor throttle is enabled. Set to    |
|           |                   | \"temperature\" to enable the      |
|           |                   | automatic motor temperature        |
|           |                   | control limit or set to            |
|           |                   | \"throttle\" to enable the         |
|           |                   | throttle.\                         |
|           |                   | \                                  |
|           |                   | NOTE: Do NOT enable the throttle   |
|           |                   | if you have installed the [motor   |
|           |                   | temperature                        |
|           |                   | sensor](How_to_install_mot         |
|           |                   | or_temperature_sensor "wikilink"). |
|           |                   | If you have the sensor installed   |
|           |                   | you need to either have the motor  |
|           |                   | temperature limit function enabled |
|           |                   | or everything disabled.            |
+-----------+-------------------+------------------------------------+
| Min limit | 75                | Set the minimum motor temperature  |
|           |                   | at which the power will start to   |
|           |                   | be limited.                        |
+-----------+-------------------+------------------------------------+
| Max limit | 85                | Set the maximum motor temperature  |
|           |                   | at which the power will be         |
|           |                   | completely blocked, i.e. no motor  |
|           |                   | assistance.                        |
+-----------+-------------------+------------------------------------+

## Variables (850C only) {#variables_850c_only}

This configuration let you configure some options of the possible
variables shown on the numeric field and on graph.

+--------------------+-------------------+---------------------------+
| **Name**           | **Default value** | **Description**           |
+--------------------+-------------------+---------------------------+
| Graph auto max min | x                 | Should graph use an       |
|                    |                   | automatic values for max  |
|                    |                   | and min or use the        |
|                    |                   | following manual values.  |
+--------------------+-------------------+---------------------------+
| Graph max          | x                 | Set the graph max value.  |
|                    |                   | Will be set up to when a  |
|                    |                   | new value on the graph is |
|                    |                   | lower than this value.    |
+--------------------+-------------------+---------------------------+
| Graph min          | x                 | Set the graph min value.  |
|                    |                   | Will be set up to when a  |
|                    |                   | new value on the graph is |
|                    |                   | higher than this value.   |
+--------------------+-------------------+---------------------------+
| Thresholds         | x                 | Thresholds will make the  |
|                    |                   | graph or numeric field    |
|                    |                   | values fade to yellow or  |
|                    |                   | red color, depending on   |
|                    |                   | the variable value. For   |
|                    |                   | instance, as soon motor   |
|                    |                   | speed start to approach   |
|                    |                   | near his max value, the   |
|                    |                   | color will fade first to  |
|                    |                   | yellow and then to red.\  |
|                    |                   | You can disable, set to   |
|                    |                   | manual or automatic the   |
|                    |                   | thresholds.               |
+--------------------+-------------------+---------------------------+
| Max threshold      | x                 | Set the value for manual  |
|                    |                   | max threshold, for red    |
|                    |                   | color.                    |
+--------------------+-------------------+---------------------------+
| Min threshold      | x                 | Set the value for manual  |
|                    |                   | max threshold, for yellow |
|                    |                   | color.                    |
+--------------------+-------------------+---------------------------+

## Various

  ---------------------- ------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Name**               **Default value**   **Description**
  Odometer               0                   This field shows current odometer value. You can also edit the value, like set to 0 to reset the odometer.
  Assist w/o pedal rot   disable             Enable to get motor assistance once you press the pedals even without rotating them. Recommended to keep disabled if you do not have brake sensors installed.
  ---------------------- ------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------

## Display

+-----------------------+-------------------+-----------------------+
| **Name**              | **Default value** | **Description**       |
+-----------------------+-------------------+-----------------------+
| Clock hours (850C     | 0                 | See current hour      |
| only)                 |                   | value or set a        |
|                       |                   | different value.      |
+-----------------------+-------------------+-----------------------+
| Clock minutes (850C   | 0                 | See current minutes   |
| only)                 |                   | value or set a        |
|                       |                   | different value.      |
+-----------------------+-------------------+-----------------------+
| Brightness on (850C   | 100%              | Set display back      |
| only)                 |                   | light brightness when |
|                       |                   | lights are on.        |
+-----------------------+-------------------+-----------------------+
| Brightness off (850C  | 30%               | Set display back      |
| only)                 |                   | light brightness when |
|                       |                   | lights are off.       |
+-----------------------+-------------------+-----------------------+
| Auto power off        | 15m               | Set the amount of     |
|                       |                   | minutes for the       |
|                       |                   | display automatic     |
|                       |                   | power off.\           |
|                       |                   | The auto power off    |
|                       |                   | timer counter is      |
|                       |                   | reset when wheel      |
|                       |                   | speed or battery      |
|                       |                   | current higher than   |
|                       |                   | 0, or, if brakes or   |
|                       |                   | buttons are active.   |
+-----------------------+-------------------+-----------------------+
| Units                 | SI                | Set units to SI or    |
|                       |                   | Imperial.             |
+-----------------------+-------------------+-----------------------+
| LCD type (850C only)  | x                 | This is read only and |
|                       |                   | is the LCD type on    |
|                       |                   | the display and is    |
|                       |                   | relevant for          |
|                       |                   | developers. Actual    |
|                       |                   | options are ILI9481,  |
|                       |                   | ST7796 and unknown.   |
+-----------------------+-------------------+-----------------------+
| Reset to defaults     | no                | Set yes to reset all  |
|                       |                   | the configurations to |
|                       |                   | default values.       |
+-----------------------+-------------------+-----------------------+

## Technical

Here you can see the values of some variables of the system. This can
help debug issues on TSDZ2 or help you understand how the system works.

  ----------------------- ------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Name**                **Default value**   **Description**
  ADC throttle sensor     x                   Current value of the input signal from throttle, from 0 to 255.
  Throttle sensor         x                   Current value of the input signal from throttle, without offset, from 0 to 255.
  ADC torque sensor       x                   Current value of the input signal from torque sensor, from 0 to 1023.
  Pedal side              x                   Current side of the pedal the firmware considers. This value depends on correct calibration at startup of the system: the pedals need to be vertical pointing to ground. You can select on Configurations to be left or right pedal to point to ground at startup, based on your preferences. This is needed to the system can know in which pedal are you doing the force with your legs, since the weight is measured differently on each pedal due to the torque sensor.
  Weight with offset      x                   Weight on the pedals and this value can have an offset representing a no zero value at startup when there are zero weight on pedals.
  Weight without offset   x                   Same as previous but with offset removed.
  Pedal cadence           x                   
  PWM duty-cycle          x                   This values can fluctuate between 0 and 100 max. Where 0 means 0 battery voltage applied to motor coils while 100 means max battery voltage applied. When this value hits the max of 100, means that motor max power possible is being applied.
  Motor speed             x                   In ERPS (electric rotation per second) units. The motor has 8 pair of magnets inside, meaning each 1 ERPs equal to one RPS (rotation per second).
  Motor FOC               x                   Angle calculated by FOC algorithm, between 0 and 30. Higher motor phase current and/or higher motor speed, makes this value increase.
  Hall sensors            x                   Current value of the motor hall sensor. You can rotate very slow the bicycle wheel back backwards to see this value changing and it must always follow the next same sequence and values must be only the next ones: 4, 6, 2, 3, 1, 5.
  ----------------------- ------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
