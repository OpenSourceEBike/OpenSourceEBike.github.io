NOTE: Before start using the firmware, you must configure correctly the
options on LCD3. For instance, you should configure your battery low
voltage cut off (battery voltage when it is discharged) and all the
other parameters \-- follow the next section.

KT-LCD3 shows and/or configure the following from TSDZ2 motor:

# 1. Main screen {#main_screen}

-   **`<u>`{=html}Main screen`</u>`{=html}**: this is the default screen
    after turn on the LCD.
    -   `<u>`{=html}assist level`</u>`{=html}: Assist level
        scales/amplify the torque sensor signal, if you want a higher
        assist level from the motor, choose the max assist level value.
        Assist level has 5 levels in total and user can define (on
        firmware configuration) a custom scale value for each level.
        Level 0 keep always the motor disabled.
    -   `<u>`{=html}ebike wheel speed`</u>`{=html}: the value can be
        shown in Km/H or MPH.
    -   `<u>`{=html}battery power`</u>`{=html}: real time value in watts
        of the power being draw from the battery.
    -   `<u>`{=html}battery state of charge`</u>`{=html}: 6 different
        levels. When battery is empty, the empty symbol on LCD will also
        blink (state of charge is based on battery voltage and can be
        setup on the motor controller firmware configuration)
    -   `<u>`{=html}lights`</u>`{=html}: enabled with a button up long
        press, the motor controller will enable the ebike lights. LCD
        backlight will also be enabled. (backlight intensity can be
        setup on the motor controller firmware configuration).
    -   `<u>`{=html}brake`</u>`{=html}: LCD symbol is enabled when user
        press the ebike brakes, good to check that sensor brakes are
        working.
    -   `<u>`{=html}walk assist`</u>`{=html}: although it is implemented
        on LCD, it is not yet implemented on the motor controller.
        Enabled with a button down long press.
    -   `<u>`{=html}odometer field`</u>`{=html}: the following
        information will cycle with on/off button click
        -   `<u>`{=html}battery voltage`</u>`{=html}: see your battery
            pack voltage.
        -   `<u>`{=html}battery current`</u>`{=html}: see the current
            being draw from your battery pack.
        -   `<u>`{=html}battery power`</u>`{=html}: see the accumulated
            battery power (in watts/hour) draw from your battery pack,
            since last battery full charge. This value is automatically
            reset when LCD turns on and battery voltage equals to
            charged battery voltage - this value can also be reset or
            set to a custom value on the configurations.
        -   `<u>`{=html}pedal cadence`</u>`{=html}: see the pedals
            cadence in rotations per minute.
    -   `<u>`{=html}battery state of charge in percentage`</u>`{=html}:
        this value can be shown as an option on the temperature field.
        The percentage is based on the accumulated battery power draw
        from your battery pack and user can define on LCD configurations
        menu, the battery pack total watts/hour.

# 2. Max battery power screen {#max_battery_power_screen}

-   **`<u>`{=html}Max battery power screen`</u>`{=html}**: Motor
    controller will automatically choose a battery current in a way to
    limit the max battery power usage. The battery current value will
    never be higher than the max battery current setup on the
    configurations screen. Long click on on/off and up buttons to enter
    on this screen. Up and down buttons to increase/decrease the value.
    Long click of on/off button lo leave.

# 3. Configurations screen {#configurations_screen}

-   **`<u>`{=html}Configurations screen`</u>`{=html}**: long click on up
    and down buttons to enter on this screen. On/off button click to
    enter on subscreens and on/off button click to cycle on subscreens,
    long press on/off to exit menu

```{=html}
<!-- -->
```
-   [Version 0.12
    (latest)](Usage-and-configuration-of-firmware-version-0.12 "wikilink")
-   [Version 0.14 (to be
    released)](Usage-and-configuration-of-firmware-version-0.14 "wikilink")

THE FOLLOWING CONFIGURATION VALUES ARE FOR VERSION 10!! YOU ALWAYS NEED
TO FLASH SAME VERSION ON BOTH, MOTOR AND LCD

## 0: General Basic setup {#general_basic_setup}

  -------------------- ------------------------ ------------------- ----------------------------------------------------------------------------------------------------------------------------------------------
  **submenu number**   **configuration name**   **default value**   **description**
  0                    Maximum wheel speed      50                  Put in your speed limit (by law) to run legal on public roads , the motor will fade out from - 0.5 km/h to +2,0 km/h in Europe often 25 km/h
  1                    Wheel perimeter in mm    2050                first estimate: 26*= 2050; 27*= 2150; 27.5*=2215; 28*= 2250; 29\'\'=2300
  2                    Speed Unit               0 km/h              0 is km/h and 1 is miles per hour ( british miles of course)
  -------------------- ------------------------ ------------------- ----------------------------------------------------------------------------------------------------------------------------------------------

## 1: Battery voltage & current setup {#battery_voltage_current_setup}

  -------------------- ------------------------------- ------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **submenu number**   **configuration name**          **default value**   **description**
  0                    Number of cells                 13                  24V -\>6/7?; 36v-\>10; 48V-\>13; 52v-\>14 based on the voltage of common Samsung or Panasonic cells
  1                    Maximum current of battery      16??                This is the maximum current your battery can supply, without damage, standard cells can suply 2C, means 2 times the capayity of cell without damage with 1.7C you are quite safe
  2                    battery low cut-off voltage\<   39                  The controller will reduce power to stay over this limit! usually 2.85-3.05 V per cell of (39.0 (3.0 \* 13 = 39.0)). The standard Samsung cells allow down to 2.75V but you need some safety margin because not all cells are discharging in the same way, but by setting too high you loose range power on a discharged battery and capacity I like 29V for 10 Cells but 30V is safer
  -------------------- ------------------------------- ------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2: Battery power setup {#battery_power_setup}

  -------------------- -------------------------------------------------------------------- ------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **submenu number**   **configuration name**                                               **default value**   **description**
  0                    Enable / disable percentage of battery charge in temperature field   0 ?                 Switch for the gauge in the teperature field 0= off 1 = on,
  1                    Increment or decrement of charge                                     0 ?                 You can switch if the percentage should go form 0% -100% (0?) or from 100% to 0% (1)
  2                    Total watt hour                                                      0                   Adjust the battery pack power, the ones supplier give you is often to a quite low cut of voltage. by using maybe 85 % -90 % of this you are fine I use 350 for my 386 wh battery with cut of 2.9V.
  3                    Used power (wh) of battery                                           0                   (as I understand it) Here you put in the start value what is already used from your Battery. for a charged one this is 0. This resets when the LCD detects a full charged battery when switched on
  -------------------- -------------------------------------------------------------------- ------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 3: Assist level setup {#assist_level_setup}

Here you can choose how many assist levels are used (the ones you can
choose on LCD3 when clicking up and down buttons). You can also choose
the max power value in watts that motor will use to assist you.

+----------------+----------------+----------------+----------------+
| **submenu      | *              | **default      | *              |
| number**       | *configuration | value**        | *description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Number of      | 9              | Please select  |
|                | assist levels  |                | the number of  |
|                |                |                | assist levels  |
|                |                |                | you like to    |
|                |                |                | use from min.  |
|                |                |                | 1 to max. 9    |
+----------------+----------------+----------------+----------------+
| 1              | Assist level 1 | 400            | Max value of   |
|                | power          |                | motor energy   |
|                |                |                | (in watts)     |
|                |                |                | that motor     |
|                |                |                | will use to    |
|                |                |                | assist you, on |
|                |                |                | this assist    |
|                |                |                | level. The     |
|                |                |                | motor will use |
|                |                |                | this max value |
|                |                |                | only when you  |
|                |                |                | hit the max    |
|                |                |                | torque sensor  |
|                |                |                | force \* max   |
|                |                |                | pedal          |
|                |                |                | cadence.\      |
|                |                |                | \              |
|                |                |                | Use higher     |
|                |                |                | values (more   |
|                |                |                | than what      |
|                |                |                | motor can      |
|                |                |                | give) to get   |
|                |                |                | more           |
|                |                |                | sensitivity    |
|                |                |                | from the       |
|                |                |                | torque sensor, |
|                |                |                | like you can   |
|                |                |                | setup a value  |
|                |                |                | of 2000 that   |
|                |                |                | will double    |
|                |                |                | the torque     |
|                |                |                | sensitivity    |
|                |                |                | comparing to   |
|                |                |                | use the value  |
|                |                |                | of 1000.       |
+----------------+----------------+----------------+----------------+
| 2              | Assist level X | \....          | The same a     |
|                | power          |                | previous but   |
|                |                |                | for assist     |
|                |                |                | level X.       |
+----------------+----------------+----------------+----------------+

## 4: startup power boost {#startup_power_boost}

Here you can configure the BOOST feature. This feature gives a peak of
power to the motor at startup. The amount of time of the peak as also
the amount of motor power during the peak, can be configured. You can
also disable this feature if you prefer.

+----------------+----------------+----------------+----------------+
| **submenu      | *              | **default      | *              |
| number**       | *configuration | value**        | *description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Config         | 0              | 0 to enable    |
|                |                |                | power boost    |
|                |                |                | only when      |
|                |                |                | startup and    |
|                |                |                | bicycle wheel  |
|                |                |                | speed is equal |
|                |                |                | to zero; 1 to  |
|                |                |                | enable power   |
|                |                |                | boost every    |
|                |                |                | time pedal     |
|                |                |                | cadence or     |
|                |                |                | torque sensor  |
|                |                |                | are zero       |
+----------------+----------------+----------------+----------------+
| 1              | limit boost    | 0              | 1 to enable    |
|                | power to max   |                | power boost    |
|                | battery power  |                | limit to the   |
|                | value          |                | Max battery    |
|                |                |                | power value    |
|                |                |                | and 0 to       |
|                |                |                | disable.       |
+----------------+----------------+----------------+----------------+
| 2              | boost time     | 25 (2.5        | 0 to disable   |
|                |                | seconds)       | startup power  |
|                |                |                | boost feature. |
+----------------+----------------+----------------+----------------+
| 3              | fade           | 25 (2.5        | fade out from  |
|                | out/transition | seconds)       | boost power to |
|                | time           |                | regular power. |
+----------------+----------------+----------------+----------------+
| 4              | assist level 1 | 200            | Max value of   |
|                | boost power    |                | motor energy   |
|                |                |                | (in watts)     |
|                |                |                | that motor     |
|                |                |                | will use to    |
|                |                |                | assist you     |
|                |                |                | during power   |
|                |                |                | boost, on this |
|                |                |                | assist level.  |
|                |                |                | The motor will |
|                |                |                | use this max   |
|                |                |                | value only     |
|                |                |                | when you hit   |
|                |                |                | the max torque |
|                |                |                | sensor force.\ |
|                |                |                | \              |
|                |                |                | Use higher     |
|                |                |                | values (more   |
|                |                |                | than what      |
|                |                |                | motor can      |
|                |                |                | give) to get   |
|                |                |                | more           |
|                |                |                | sensitivity    |
|                |                |                | from the       |
|                |                |                | torque sensor, |
|                |                |                | like you can   |
|                |                |                | setup a value  |
|                |                |                | of 2000 that   |
|                |                |                | will double    |
|                |                |                | the torque     |
|                |                |                | sensitivity    |
|                |                |                | comparing to   |
|                |                |                | use the value  |
|                |                |                | of 1000.       |
+----------------+----------------+----------------+----------------+
| 5              | assist level X | \-\--          | The same a     |
|                | boost power    |                | previous but   |
|                |                |                | for assist     |
|                |                |                | level X.       |
+----------------+----------------+----------------+----------------+

## 5: motor temperature protection {#motor_temperature_protection}

This feature is for protecting your motor from overheating and avoid
permanent damage/loss of torque \-- see here: **[TSDZ2 motor
demagnetized due to
overheating](TSDZ2_motor_demagnetized_due_to_overheating "wikilink")**.
You can only use and enable this feature [if you installed the motor
temperature sensor](How_to_install_motor_temperature_sensor "wikilink").

### How it works {#how_it_works}

On LCD3 temperature field you will be able to see the motor temperature
value. Once the configured minimum motor temperature value is hit, the
motor current will start to be reduced and as long as it increases, the
more the current will be reduce. After hitting the configured maximum
motor temperature value, the motor is shutoff.

The temperature value shown on LCD3 will blink when the motor current is
being limited and will blink faster for higher rates of limited current.
Finally, if the motor is shutoff, the blink rate will be very fast.

Possible configurations on LCD3:

  -------------------- --------------------------------- -------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **submenu number**   **configuration name**            **default value**    **description**
  0                    enable motor temperature sensor   0 (disabled)         NOTE: if you don\'t have the [motor temperature sensor installed](How_to_install_motor_temperature_sensor "wikilink"), you should disable this option and ignore the next configurations.
  1                    enable current limiting           0 (disabled)         limit the motor current to avoid the motor get over the max temperature.
  2                    min temperature                   75 degrees Celsius   motor temperature value at which the motor current will start to be limited.
  3                    max temperature                   85 degrees Celsius   motor temperature max value at which the motor current will be zero / motor shutoff.
  -------------------- --------------------------------- -------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

-   -   `<u>`{=html}6: various`</u>`{=html}
        -   `<u>`{=html}0: motor voltage type`</u>`{=html}: default
            value: 0. 0 for 48V brushless motor (TSDZ2 52V version has a
            48V brushless motor); 1 for 36V brushless motor. This
            configuration is needed for FOC calculations.
        -   `<u>`{=html}1: motor assistance startup without pedal
            rotation`</u>`{=html}: default value: 0 (disabled). 1 to
            enable this feature. Recommended to keep at 0 value if you
            don\'t have brake sensors installed.
        -   `<u>`{=html}2: PAS max cadence`</u>`{=html}: default
            value: 110. This value is used for calculation of human
            pedal power that will after be used for motor assist level.

```{=html}
<!-- -->
```
-   -   `<u>`{=html}7: advanced technical data`</u>`{=html} (the
        following values are read only, user can\'t change them)
        -   `<u>`{=html}0: adc throttle`</u>`{=html}: see the current
            value.
        -   `<u>`{=html}1: throttle`</u>`{=html}: see the current value.
        -   `<u>`{=html}2: adc pedal torque sensor`</u>`{=html}: see the
            current value.
        -   `<u>`{=html}3: pedal torque sensor`</u>`{=html}: see the
            current value.
        -   `<u>`{=html}4: pedal cadence`</u>`{=html}: see the current
            value.
        -   `<u>`{=html}5: pedal human power`</u>`{=html}: see the
            current value.
        -   `<u>`{=html}6: PWM duty_cycle`</u>`{=html}: see the current
            value.
        -   `<u>`{=html}7: motor speed in ERPs`</u>`{=html}: see the
            current value.
        -   `<u>`{=html}8: FOC angle`</u>`{=html}: see the current
            value. This value must be multiplied by 1.4 to get and angle
            value in degrees.
