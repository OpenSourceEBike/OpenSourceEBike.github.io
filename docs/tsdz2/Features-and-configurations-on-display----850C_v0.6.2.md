\_\_TOC\_\_

The following only applies to TSDZ2 motor controller firmware version
0.51.0 and 850C display firmware 0.6.2. The same information can be used
to extrapolate the configurations of SW102 display as they are mostly
common.

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

# Keys combinations {#keys_combinations}

## Main screen {#main_screen}

  ------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------
  850C display main screen                                                                               SW102 display main screen
  <https://user-images.githubusercontent.com/147128/70063742-38525980-15e0-11ea-8d0c-d843c89015f9.jpg>   <https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102-01.jpg>
  ------------------------------------------------------------------------------------------------------ ------------------------------------------------------------------------------------

-   ON/OFF long press to turn of
-   UP or DOWN click to change assist level
-   UP long press to turn on/off the lights
-   DOWN long press to turn on the walk assist (walk assist is only on
    while DOWN button is pressed)
-   ON/OFF quick click + long press to enter configurations screen
-   UP and DOWN long press to select which variable to show on the four
    numeric fields at center and on the graph.
    -   ON/OFF long press to leave
    -   UP or DOWN click to choose a new variable
    -   ON/OFF click to jump to next field
        -   UP and DOWN long press to select on the graph the X axis
            scale from 15m, 1h, 4h or automatic
        -   UP or DOWN click to change X axis scale
        -   ON/OFF long press to leave

## Configurations screen {#configurations_screen}

-   ON/OFF long press to go back
-   UP or DOWN click to scroll up or down
-   ON/OFF click select and edit item field
    -   ON/OFF long press to apply

\
Please refer to the KT-LCD3 information of the configurations as they
follow the same logic.

# Configurations

## Wheel

+---------------+-------------------+--------------------------------+
| **Name**      | **Default value** | **Description**                |
+---------------+-------------------+--------------------------------+
| Max speed     | 50                | Enter speed limit from where   |
|               |                   | the motor will fade out power  |
|               |                   | from.                          |
|               |                   |                                |
|               |                   | Tip: If you setup Street Mode  |
|               |                   | this will effectively be the   |
|               |                   | speed limit when going         |
|               |                   | offroad, i.e. when using the   |
|               |                   | bike on non-public roads.\     |
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
| Odometer      | 0                 | This field shows current       |
|               |                   | odometer value. You can also   |
|               |                   | edit the value, like set to 0  |
|               |                   | to reset the odometer.         |
+---------------+-------------------+--------------------------------+

## Battery

+--------------+-------------------+---------------------------------+
| **Name**     | **Default value** | **Description**                 |
+--------------+-------------------+---------------------------------+
| Max current  | 16 ampere         | Set maximum allowable current   |
|              |                   | to be pulled from the battery.  |
|              |                   | This value is limited           |
|              |                   | internally by the firmware to   |
|              |                   | the safe value of 18 ampere (no |
|              |                   | point for you to setup a higher |
|              |                   | value than 18).                 |
+--------------+-------------------+---------------------------------+
| Current ramp | 5 amps per second | Set value after user            |
|              |                   | preference. Higher value        |
|              |                   | corresponds to faster           |
|              |                   | acceleration but also greater   |
|              |                   | forces on the mid drive. Be     |
|              |                   | mindful not to select too fast  |
|              |                   | acceleration.                   |
+--------------+-------------------+---------------------------------+
| Low cut-off  | 39 volt           | The controller will reduce      |
|              |                   | power to stay over this limit!  |
|              |                   | Calculate the limit by          |
|              |                   | multiplying amount of cells in  |
|              |                   | series with the safe            |
|              |                   | cut-off-voltage per cell, which |
|              |                   | is usually between 2.8 - 3.0    |
|              |                   | volts. Example: 39.0 volts for: |
|              |                   | 13 cells in series \* 3.0 volts |
|              |                   | = 39.0 volts.\                  |
|              |                   | \                               |
|              |                   | Tip: The standard Samsung cells |
|              |                   | allow down to 2.75 V but you    |
|              |                   | need some safety margin because |
|              |                   | not all cells have exactly the  |
|              |                   | same capacity. But setting a    |
|              |                   | too large value you loose range |
|              |                   | and power. I like to use the    |
|              |                   | value of 29 V for a 36 V        |
|              |                   | battery pack (= 10 cells in     |
|              |                   | series).\                       |
|              |                   | \                               |
+--------------+-------------------+---------------------------------+
| Num cells    | 13                | Set this value so the battery   |
|              |                   | state indicator works properly. |
|              |                   | This value can be any integer   |
|              |                   | from 7 to 15\                   |
|              |                   | \                               |
|              |                   | Example values: 7 for 24 V      |
|              |                   | battery; 10 for 36 V battery;   |
|              |                   | 13 for 48 V battery; 14 for 52  |
|              |                   | V battery.\                     |
|              |                   | \                               |
+--------------+-------------------+---------------------------------+
| Resistance   | 130 milliohms     | Set this value so the battery   |
|              |                   | state indicator does not        |
|              |                   | display a lower state of charge |
|              |                   | when pulling a lot of power     |
|              |                   | from battery and the voltage    |
|              |                   | sags.\                          |
|              |                   | \                               |
|              |                   | Explanation: If you set the     |
|              |                   | value to 0, you will see the    |
|              |                   | battery state indicator         |
|              |                   | fluctuating whenever the motor  |
|              |                   | draws current from the battery  |
|              |                   | (if the indicator is configured |
|              |                   | to show SOC based on voltage).  |
|              |                   | This is due to the internal     |
|              |                   | resistance in the battery. The  |
|              |                   | fluctuation will disappear and  |
|              |                   | be filtered out with a correct  |
|              |                   | value.\                         |
|              |                   | \                               |
|              |                   | How to calculate the battery    |
|              |                   | pack resistance:\               |
|              |                   | 1. Limit the battery current to |
|              |                   | a known value, e.g. 10 amps\    |
|              |                   | 2. Read the voltage drop when   |
|              |                   | motor is pulling the 10 amps\   |
|              |                   | 3. Calculate the resistance     |
|              |                   | value\                          |
|              |                   | \                               |
|              |                   | Example for 10 amps current, R  |
|              |                   | = U / I, R = 1.2 volts drop /   |
|              |                   | 10 amps, R = 0.120 = 120        |
|              |                   | milliohms.\                     |
|              |                   | \                               |
+--------------+-------------------+---------------------------------+
| Voltage      | \-                | Measured and continuously       |
|              |                   | updated battery voltage State   |
|              |                   | Of Charge (SOC). This value is  |
|              |                   | filtered using the battery pack |
|              |                   | resistance.\                    |
|              |                   | \                               |
|              |                   | Tip: Here you can evaluate and  |
|              |                   | test how the set internal       |
|              |                   | resistance of the battery       |
|              |                   | affects the voltage reading.\   |
|              |                   | \                               |
+--------------+-------------------+---------------------------------+

## Battery SOC {#battery_soc}

+-----------------------+-------------------+-----------------------+
| **Name**              | **Default value** | **Description**       |
+-----------------------+-------------------+-----------------------+
| Feature               | disabled          | Enable to show on     |
|                       |                   | main screen, top      |
|                       |                   | left, battery SOC     |
|                       |                   | (State Of Charge). If |
|                       |                   | disabled, will show   |
|                       |                   | battery voltage       |
|                       |                   | instead.              |
+-----------------------+-------------------+-----------------------+
| Show                  | \% full           | \% full will show     |
|                       |                   | 100% when battery is  |
|                       |                   | full and 0% wen       |
|                       |                   | battery is empty      |
|                       |                   | while % used will     |
|                       |                   | show the inverse.     |
+-----------------------+-------------------+-----------------------+
| Reset at voltage /    | 54.2              | Threshold voltage to  |
| Reset at              |                   | reset watt-hour       |
|                       |                   | meter: when powering  |
|                       |                   | on the display this   |
|                       |                   | value is compared to  |
|                       |                   | the battery voltage.  |
|                       |                   | If it is lower, the   |
|                       |                   | battery is expected   |
|                       |                   | to be fully charged   |
|                       |                   | and the watt-hour     |
|                       |                   | meter is reset.\      |
|                       |                   | \                     |
|                       |                   | Tip: To find a        |
|                       |                   | suitable value, fully |
|                       |                   | charge the battery    |
|                       |                   | and measure the       |
|                       |                   | voltage on the        |
|                       |                   | KT-LCD3, use a        |
|                       |                   | slightly lower value  |
|                       |                   | for the threshold     |
|                       |                   | voltage.\             |
|                       |                   | \                     |
|                       |                   | Example: my 48 V      |
|                       |                   | battery charges up to |
|                       |                   | 54.6 volts, so I set  |
|                       |                   | the threshold to 54.2 |
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
|                       |                   | input here.\          |
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
|                       |                   | hours. Example: a 48  |
|                       |                   | volt, 14.5 Ah battery |
|                       |                   | has a nominal         |
|                       |                   | watt-hour capacity of |
|                       |                   | 696 Wh.\              |
|                       |                   | \                     |
+-----------------------+-------------------+-----------------------+
| Used Wh               | 0                 | This value represents |
|                       |                   | consumed watt-hours   |
|                       |                   | since last reset. It  |
|                       |                   | is reset              |
|                       |                   | automatically when    |
|                       |                   | you power on the LCD  |
|                       |                   | and the battery is    |
|                       |                   | fully charged, i.e.   |
|                       |                   | above the set         |
|                       |                   | threshold voltage.\   |
|                       |                   | \                     |
+-----------------------+-------------------+-----------------------+

## Torque sensor / Torque sen {#torque_sensor_torque_sen}

Please follow this guide: [How to calibrate the torque
sensor](How_to_calibrate_the_torque_sensor "wikilink")

**How to use:** everyime you startup the system, the pedals need to be
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

Here you can configure how many assist levels you wish to be able to
select and also their respective multipliers. The defaults should
already work for most situations.

The assist level sets the motor power as a factor of the power the rider
is generating on the crankshaft. For instance, if assist level 3 is
chosen and configured with a multiplier of 2.0, when the rider is
generating a power of 100 watts, the motor power will assist another 200
watts.

+-----------------------+-------------------+-----------------------+
| **Name**              | **Default value** | **Description**       |
+-----------------------+-------------------+-----------------------+
| Number of assist      | 5                 | Select the desired    |
| levels / Num levels   |                   | number of assist      |
|                       |                   | levels from a minimum |
|                       |                   | of 1 to a maximum of  |
|                       |                   | 9.                    |
+-----------------------+-------------------+-----------------------+
| Level 1               | 0.5               | The value with which  |
|                       |                   | the human pedaling    |
|                       |                   | power is multiplied   |
|                       |                   | with.\                |
|                       |                   | \                     |
|                       |                   | Example: 0.5 \* 200 W |
|                       |                   | (human power) = 100 W |
|                       |                   | assist power. This    |
|                       |                   | results in 300 W      |
|                       |                   | total power.\         |
+-----------------------+-------------------+-----------------------+
| Level X               | x                 | The desired           |
|                       |                   | multiplier for assist |
|                       |                   | level X.              |
+-----------------------+-------------------+-----------------------+

## Walk assist / Walk {#walk_assist_walk}

Here you can enable or disable the walk assist function. And also
configure the motor duty cycle in each and every enabled assist level.
The defaults should work for most situations.

The walk assist PWM value sets the motor duty cycle. It is an open loop
controller. A PWM value of 30 will set the target duty cycle to 30.
Maximum settable PWM in the walk assist function is limited to a value
of 100.

**NOTES:**

-   There are only as many walk assist levels as there are assist
    levels. This is configured under 3: Assist Levels.
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
  Level 1              4                   Set the BOOST multipler corresponding to assist level 1. Tip: See assist levels for more information about multipliers.
  Level X              \-                  Set the BOOST multipler corresponding to assist level X.
  -------------------- ------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Motor temperature / Motor temp {#motor_temperature_motor_temp}

Enable or disable the throttle or the motor temperature protection
function.

**NOTES:**

-   The throttle and the motor temperature protection can not be active
    simultaneously. This is because they use the same hardware ports to
    operate.
-   If the motor temperature sensor is installed it is not possible to
    use the throttle. Do NOT enable throttle if that is the case.

+-----------+-------------------+------------------------------------+
| **Name**  | **Default value** | **Description**                    |
+-----------+-------------------+------------------------------------+
| Feature   | disabled          | Disabled means that neither motor  |
|           |                   | temperature limit function nor     |
|           |                   | throttle is enabled. Set to        |
|           |                   | temperature to enable the          |
|           |                   | automatic motor temperature        |
|           |                   | control limit or set to throttle   |
|           |                   | to enable the throttle.\           |
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

Available variables: Speed, Trip distance, Odometer, Cadence, Human
power, Battery power, Battery voltage, Battery current, Battery SOC,
Motor temperature, Motor speed, Motor pwm dut-cycle, Motor FOC.

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

  --------------- ------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Name**        **Default value**   **Description**
  Motor voltage   48V                 Depending on type of motor, set appropriate value so that FOC calculations are correctly executed. The voltage of the battery does not matter, this value should always be set depending on type of motor. Set 48V for 48 V brushless motor (TSDZ2 52 V version has a 48 V brushless motor). Set 36V for 36 V brushless motor. Set expert for the 48 or 36 V brushless motor, high cadence mode. Maybe not good for the motor, use at your own risk. Probably only suitable for the 36 V motor.
  Motor assist    disable             Enable to get motor assistance once you press the pedals even without rotating them. Recommended to keep disabled if you do not have brake sensors installed.
  --------------- ------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
  PWM duty-cycle          x                   This values can fluctuate between 0 and 255 max. Where 0 means 0 battery voltage applied to motor coils while 255 means max battery voltage applied. This value should increase with increase of motor phase current, battery current and/or motor speed.
  Motor speed             x                   In ERPS (electric rotation per second) units. The motor has 8 pair of magnets inside, meaning each 1 ERPs equal to one RPS (rotation per second).
  Motor FOC               x                   Angle calculated by FOC algorithm, between 0 and 30. Higher motor phase current and/or higher motor speed, makes this value increase.
  Hall sensors            x                   Current value of the motor hall sensor. You can rotate very slow the bicycle wheel back backwards to see this value changing and it must always follow the next same sequence and values must be only the next ones: 4, 6, 2, 3, 1, 5.
  ----------------------- ------------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
