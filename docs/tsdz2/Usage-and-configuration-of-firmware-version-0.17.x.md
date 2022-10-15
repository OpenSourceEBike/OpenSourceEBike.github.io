The following applies to firmware version 0.17.x only!

CAUTION: always use the same firmware version for both the motor
controller and LCD unless otherwise specified!

NOTE: Before using the mid drive with new firmware, you must configure
the options on the display correctly. For instance, you should configure
your battery low voltage cut off so as to not over discharge the
battery. Do set all other parameters also.

# KT-LCD3 information and configurations {#kt_lcd3_information_and_configurations}

## 1. Main screen {#main_screen}

-   **`<u>`{=html}Main screen`</u>`{=html}**
    -   `<u>`{=html}Assist level`</u>`{=html}: assist level sets the
        motor power as a factor of the power that rider is doing on the
        pedals. For instance, if current assist level is 3 and if this
        level is configured as a factor of 2.0, when rider is doing on
        the pedals a power of 100 watts, the motor power used will then
        be 200 watts.\
        The assist level is changed by pressing UP and DOWN buttons.
    -   `<u>`{=html}Ebike wheel speed`</u>`{=html}: the value of wheel
        speed in kms or mph.
    -   `<u>`{=html}Motor power`</u>`{=html}: power used by the motor
        (in watts) that is being draw from the battery.
    -   `<u>`{=html}Battery state of charge`</u>`{=html}: Battery state
        of charge based on battery voltage. There are 6 different
        levels. When battery is near empty, the battery symbol will be
        empty and blinking and the motor power will be reduced up to
        battery being totally empty.\
        The battery voltage used to calculate the state of charge has in
        consideration the battery pack resistance to avoid floating when
        power is being draw from the battery (the battery pack
        resistance value is set on configurations menu).
    -   `<u>`{=html}Lights`</u>`{=html}: enabled/disable with a long
        press of UP button (LCD back light will also be change,
        depending on the configurations) and the motor controller will
        enable/disable the ebike lights.
    -   `<u>`{=html}Brake`</u>`{=html}: Brake symbol is enabled when
        user press the ebike brakes (good to check that sensor brakes
        are working).
    -   `<u>`{=html}Time Measurement`</u>`{=html}: Time measurement
        functions. Switch between TM or TTM to get measured time either
        from trip or user last reset.
    -   `<u>`{=html}Walk assist`</u>`{=html}: enabled/disable with a
        long press of DOWN button. Although it is implemented on LCD, it
        is not yet implemented on the motor controller.
    -   `<u>`{=html}Offroad mode`</u>`{=html}: if you have enabled the
        offroad mode (see configuration section below) this can be
        activated with the ON/OFF and UP button combination and
        deactivated with the ON/OFF and DOWN button combination. When
        active, the assist symbol above the assist level will start
        blinking. Offroad mode is disabled and inactive by default. We
        do not recommend you to activate offroad mode on public roads.
        In many countries offroad mode may only be used on private
        property.
    -   `<u>`{=html}Motor temperature / battery state of charge in
        percentage`</u>`{=html}: this field can show either the motor
        temperature (when the sensor is installed), the battery state in
        percentage or none (you can switch what is shown by pressing
        POWER and UP buttons simultaneously).
        -   `<u>`{=html}Motor temperature`</u>`{=html}: motor
            temperature in degrees Celsius. When the power power is
            being limited due to over temperature, this field will blink
            (configure the temperature limits on configurations menu).
        -   `<u>`{=html}Battery state of charge in
            percentage`</u>`{=html}: this percentage value is based on
            the accumulated battery power draw from your battery pack
            (set options on configurations menu).
    -   `<u>`{=html}Odometer field`</u>`{=html}: this field can show a
        few variables that are logic grouped in sub fields. You can
        change between fields by pressing ON/OFF button and sub fields
        by quick pressing UP button followed a long press UP button (you
        will see temporary the field and sub field number blinking on
        wheel speed field).
        -   `<u>`{=html}1. Distance`</u>`{=html}
            -   `<u>`{=html}1.0 Trip distance`</u>`{=html}: can be reset
                by quickly pressing DOWN button followed by a long press
                DOWN button (you will see trip distance value blinking
                if you keep pressed DOWN button and after 3 seconds the
                value will reset).
            -   `<u>`{=html}1.1 Distance since power on`</u>`{=html}
                this value is automatically reset at power on. You can
                also reset by quick pressing DOWN button followed a long
                press DOWN button (you will see trip distance value
                blinking if you keep pressed DOWN button and after 3
                seconds the value will reset).
            -   `<u>`{=html}1.2 Odometer`</u>`{=html}: can be set to a
                specific value on the configurations menu.
        -   `<u>`{=html}2. Battery State of Charge`</u>`{=html} (not
            shown if function is disabled in configuration menu)
            -   `<u>`{=html}2.0 State of charge in
                percentage`</u>`{=html}
            -   `<u>`{=html}2.1 Consumed watt-hours`</u>`{=html}
        -   `<u>`{=html}3. Battery State`</u>`{=html}
            -   `<u>`{=html}3.0 Voltage:`</u>`{=html} Voltage of
                battery.
            -   `<u>`{=html}3.1 Current:`</u>`{=html}: instantaneous
                current drawn from battery.
        -   `<u>`{=html}4. Pedals`</u>`{=html}
            -   `<u>`{=html}4.0 Rider pedal power`</u>`{=html}: in
                watts.
            -   `<u>`{=html}4.1 Pedal cadence`</u>`{=html}: in
                revolutions per minute.
            -   `<u>`{=html}4.2 Pedal torque`</u>`{=html}: in newton
                meter.
        -   `<u>`{=html}5. Motor Temperature`</u>`{=html} (not shown if
            function is disabled in configuration menu)
            -   `<u>`{=html}5.0 Motor temperature:`</u>`{=html}
                Temperature of motor.
        -   `<u>`{=html}6. Time Measurement `</u>`{=html}
            -   `<u>`{=html}6.0 Time Measurement:`</u>`{=html} Time
                measured since display is powered on.
            -   `<u>`{=html}6.1 Total Time Measurement:`</u>`{=html}
                Total time measured since last reset.

## 2. Motor maximum power screen {#motor_maximum_power_screen}

In the maximum motor power sub menu you can set a limit to maximum motor
power. This can be useful for various reasons, like controlling the
battery range for long travels.

Access this screen by long pressing ON/OFF and UP buttons. Press UP and
DOWN buttons to increase/decrease the value. Exit this screen by long
pressing the ON/OFF button.

How it works: the motor controller will automatically limit current and
therefore limit maximum motor power. As the battery discharges and the
voltage decreases the motor controller will adapt and adjust the current
to maintain the set limit.

**NOTES:**

-   This function cannot be used when offroad mode is enabled. Disable
    offroad mode first.
-   It is not possible to set a higher motor power than the maximum
    allowed battery current set by user.

## Configuration menu {#configuration_menu}

-   To enter configuration menu: long press UP and DOWN buttons.
-   To enter sub menus: press UP or DOWN button
-   To move to next subscreen: press ON/OFF button
-   To exit: long press the ON/OFF button

## 0: General Setup {#general_setup}

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Unit           | Metric         | Set (0) for    |
|                |                |                | metric units   |
|                |                |                | (km/h and      |
|                |                |                | kilometers) or |
|                |                |                | (1) for        |
|                |                |                | imperial units |
|                |                |                | (mph and       |
|                |                |                | miles)         |
+----------------+----------------+----------------+----------------+
| 1              | Maximum wheel  | 50             | Enter your     |
|                | speed          |                | speed limit    |
|                |                |                | (by law) to    |
|                |                |                | run legal on   |
|                |                |                | public roads.  |
|                |                |                | The motor will |
|                |                |                | fade out from  |
|                |                |                | -0.5 km/h to   |
|                |                |                | +2,0 km/h.     |
|                |                |                | Tip: Europe    |
|                |                |                | has generally  |
|                |                |                | a speed limit  |
|                |                |                | of 25 km/h for |
|                |                |                | E-Bikes.       |
+----------------+----------------+----------------+----------------+
| 2              | Wheel          | 2050           | Enter your     |
|                | circumference  |                | wheel          |
|                |                |                | circumference  |
|                |                |                | so that speed  |
|                |                |                | and distance   |
|                |                |                | is correctly   |
|                |                |                | calculated.\   |
|                |                |                | \              |
|                |                |                | Tip: Search on |
|                |                |                | Google how to  |
|                |                |                | measure wheel  |
|                |                |                | circumference. |
|                |                |                | But for a      |
|                |                |                | quick setup    |
|                |                |                | with ball park |
|                |                |                | values use:    |
|                |                |                | 26*wheel =     |
|                |                |                | 2050; 27*      |
|                |                |                | wheel = 2150;  |
|                |                |                | 27.5*wheel     |
|                |                |                | =2215; 28*     |
|                |                |                | wheel = 2250;  |
|                |                |                | 29\'\' wheel = |
|                |                |                | 2300           |
+----------------+----------------+----------------+----------------+

\

## 1: Battery

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Maximum        | 16 ampere      | Set maximum    |
|                | current from   |                | allowable      |
|                | battery        |                | current to be  |
|                |                |                | pulled from    |
|                |                |                | the battery.   |
|                |                |                | This value is  |
|                |                |                | limited        |
|                |                |                | internally by  |
|                |                |                | the firmware   |
|                |                |                | to the safe    |
|                |                |                | value of 18    |
|                |                |                | ampere.        |
+----------------+----------------+----------------+----------------+
| 1              | Battery        | 39 volt        | The controller |
|                | low-cut-off    |                | will reduce    |
|                | voltage        |                | power to stay  |
|                |                |                | over this      |
|                |                |                | limit!         |
|                |                |                | Calculate the  |
|                |                |                | limit by       |
|                |                |                | multiplying    |
|                |                |                | amount of      |
|                |                |                | cells in       |
|                |                |                | series with    |
|                |                |                | the safe       |
|                |                |                | c              |
|                |                |                | ut-off-voltage |
|                |                |                | per cell,      |
|                |                |                | which is       |
|                |                |                | usually        |
|                |                |                | between 2.8 -  |
|                |                |                | 3.0 volts.     |
|                |                |                | Example: 39.0  |
|                |                |                | volts for: 13  |
|                |                |                | cells in       |
|                |                |                | series \* 3.0  |
|                |                |                | volts = 39.0   |
|                |                |                | volts.\        |
|                |                |                | \              |
|                |                |                | Tip: The       |
|                |                |                | standard       |
|                |                |                | Samsung cells  |
|                |                |                | allow down to  |
|                |                |                | 2.75 V but you |
|                |                |                | need some      |
|                |                |                | safety margin  |
|                |                |                | because not    |
|                |                |                | all cells have |
|                |                |                | exactly the    |
|                |                |                | same capacity. |
|                |                |                | But setting a  |
|                |                |                | too large      |
|                |                |                | value you      |
|                |                |                | loose range    |
|                |                |                | and power. I   |
|                |                |                | like to use    |
|                |                |                | the value of   |
|                |                |                | 29 V for a 36  |
|                |                |                | V battery pack |
|                |                |                | (= 10 cells in |
|                |                |                | series).       |
+----------------+----------------+----------------+----------------+
| 2              | Number of      | 13             | Set this value |
|                | cells in       |                | so the battery |
|                | series         |                | state          |
|                |                |                | indicator      |
|                |                |                | works          |
|                |                |                | properly. This |
|                |                |                | value can be   |
|                |                |                | any integer    |
|                |                |                | from 7 to 14\  |
|                |                |                | \              |
|                |                |                | Example        |
|                |                |                | values: 7 for  |
|                |                |                | 24 V battery;  |
|                |                |                | 10 for 36 V    |
|                |                |                | battery; 13    |
|                |                |                | for 48 V       |
|                |                |                | battery; 14    |
|                |                |                | for 52 V       |
|                |                |                | battery.       |
+----------------+----------------+----------------+----------------+
| 3              | Battery        | 130 milliohms  | Set this value |
|                | internal       |                | so the battery |
|                | resistance     |                | state          |
|                |                |                | indicator does |
|                |                |                | not display a  |
|                |                |                | lower state of |
|                |                |                | charge when    |
|                |                |                | pulling a lot  |
|                |                |                | of power from  |
|                |                |                | battery and    |
|                |                |                | the voltage    |
|                |                |                | sags.\         |
|                |                |                | \              |
|                |                |                | Explanation:   |
|                |                |                | If you set the |
|                |                |                | value to 0,    |
|                |                |                | you will see   |
|                |                |                | the battery    |
|                |                |                | state          |
|                |                |                | indicator      |
|                |                |                | fluctuating    |
|                |                |                | whenever the   |
|                |                |                | motor draws    |
|                |                |                | current from   |
|                |                |                | the battery.   |
|                |                |                | This is due to |
|                |                |                | the internal   |
|                |                |                | resistance in  |
|                |                |                | the battery.   |
|                |                |                | The            |
|                |                |                | fluctuation    |
|                |                |                | will disappear |
|                |                |                | and be         |
|                |                |                | filtered out   |
|                |                |                | with a correct |
|                |                |                | value.\        |
|                |                |                | \              |
|                |                |                | How to         |
|                |                |                | calculate the  |
|                |                |                | battery pack   |
|                |                |                | resistance:\   |
|                |                |                | 1. Limit the   |
|                |                |                | battery        |
|                |                |                | current to a   |
|                |                |                | known value,   |
|                |                |                | e.g. 10 amps\  |
|                |                |                | 2. Read the    |
|                |                |                | voltage drop   |
|                |                |                | when motor is  |
|                |                |                | pulling the 10 |
|                |                |                | amps\          |
|                |                |                | 3. Calculate   |
|                |                |                | the resistance |
|                |                |                | value\         |
|                |                |                | \              |
|                |                |                | Example for 10 |
|                |                |                | amps current,  |
|                |                |                | R = U / I, R = |
|                |                |                | 1.2 volts drop |
|                |                |                | / 10 amps, R = |
|                |                |                | 0.120 = 120    |
|                |                |                | milliohms.     |
+----------------+----------------+----------------+----------------+
| 4              | Battery        | \-             | Measured and   |
|                | voltage (SOC)  |                | continuously   |
|                |                |                | updated        |
|                |                |                | battery        |
|                |                |                | voltage State  |
|                |                |                | Of Charge      |
|                |                |                | (SOC). This    |
|                |                |                | value is       |
|                |                |                | filtered using |
|                |                |                | the battery    |
|                |                |                | pack           |
|                |                |                | resistance.\   |
|                |                |                | \              |
|                |                |                | Tip: Here you  |
|                |                |                | can evaluate   |
|                |                |                | and test how   |
|                |                |                | the set        |
|                |                |                | internal       |
|                |                |                | resistance of  |
|                |                |                | the battery    |
|                |                |                | affects the    |
|                |                |                | voltage        |
|                |                |                | reading.       |
+----------------+----------------+----------------+----------------+

\

## 2: Battery Capacity Setup {#battery_capacity_setup}

Under this configuration menu you can set parameters to display the
state of charge of your E-Bike battery. If this function is enabled it
will display how many watt-hours have been consumed since last charge
and what percentage remains of the battery. Depending on preferences it
is possible to set so that percentage of consumed charge is displayed
instead of percentage of remaining charge.

Tip: If this function is enabled you will be able to see percentage of
charge in the temperature field on your display. To enable or disable
just click the ON/OFF-button together with the DOWN-button at the same
time. Do not forget to enable and set up the function below.

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Enable and set | 0              | Set (1) to     |
|                | State of       |                | enable         |
|                | Charge         |                | function. It   |
|                | function       |                | will display   |
|                |                |                | watt-hours     |
|                |                |                | consumed and   |
|                |                |                | percentage of  |
|                |                |                | charge         |
|                |                |                | remaining,     |
|                |                |                | i.e., display  |
|                |                |                | percentage     |
|                |                |                | value from 100 |
|                |                |                | % to 0 %.\     |
|                |                |                | \              |
|                |                |                | Set (2) to     |
|                |                |                | enable         |
|                |                |                | function. It   |
|                |                |                | will display   |
|                |                |                | watt-hours     |
|                |                |                | consumed and   |
|                |                |                | percentage of  |
|                |                |                | charge         |
|                |                |                | consumed,      |
|                |                |                | i.e., display  |
|                |                |                | percentage     |
|                |                |                | value from 0 % |
|                |                |                | to 100 %.\     |
|                |                |                | \              |
|                |                |                | Set (0) to     |
|                |                |                | disable the    |
|                |                |                | function.      |
+----------------+----------------+----------------+----------------+
| 1              | Threshold      | 54.2 volt      | When powering  |
|                | voltage to     |                | on the display |
|                | reset          |                | this value is  |
|                | watt-hour      |                | compared to    |
|                | meter          |                | the battery    |
|                |                |                | voltage. If it |
|                |                |                | is lower, the  |
|                |                |                | battery is     |
|                |                |                | expected to be |
|                |                |                | fully charged  |
|                |                |                | and the        |
|                |                |                | watt-hour      |
|                |                |                | meter is       |
|                |                |                | reset.\        |
|                |                |                | \              |
|                |                |                | Tip: To find a |
|                |                |                | suitable       |
|                |                |                | value, fully   |
|                |                |                | charge the     |
|                |                |                | battery and    |
|                |                |                | measure the    |
|                |                |                | voltage on the |
|                |                |                | KT-LCD3, use a |
|                |                |                | slightly lower |
|                |                |                | value for the  |
|                |                |                | threshold      |
|                |                |                | voltage.\      |
|                |                |                | \              |
|                |                |                | Example: my 48 |
|                |                |                | V battery      |
|                |                |                | charges up to  |
|                |                |                | 54.6 volts, so |
|                |                |                | I set the      |
|                |                |                | threshold to   |
|                |                |                | 54.2 volts.    |
+----------------+----------------+----------------+----------------+
| 2              | Total          | 0              | Set the total  |
|                | watt-hours of  |                | capacity in    |
|                | battery        |                | watt-hours     |
|                |                |                | your battery   |
|                |                |                | has.\          |
|                |                |                | \              |
|                |                |                | Tip: fully     |
|                |                |                | charge the     |
|                |                |                | battery and    |
|                |                |                | then discharge |
|                |                |                | it completely  |
|                |                |                | and use the    |
|                |                |                | measured value |
|                |                |                | to input       |
|                |                |                | here.\         |
|                |                |                | \              |
|                |                |                | Tip: the       |
|                |                |                | capacities     |
|                |                |                | stated from    |
|                |                |                | suppliers are  |
|                |                |                | often too      |
|                |                |                | high, expect a |
|                |                |                | value of       |
|                |                |                | around 80 % -  |
|                |                |                | 90 % of stated |
|                |                |                | value. I use   |
|                |                |                | 350 Wh for my  |
|                |                |                | 386 Wh         |
|                |                |                | battery.\      |
|                |                |                | \              |
|                |                |                | Tip: roughly   |
|                |                |                | calculate the  |
|                |                |                | capacity by    |
|                |                |                | multiplying    |
|                |                |                | the nominal    |
|                |                |                | voltage with   |
|                |                |                | the nominal    |
|                |                |                | ampere hours.  |
|                |                |                | Example: a 48  |
|                |                |                | volt, 14.5 Ah  |
|                |                |                | battery has a  |
|                |                |                | nominal        |
|                |                |                | watt-hour      |
|                |                |                | capacity of    |
|                |                |                | 696 Wh.        |
+----------------+----------------+----------------+----------------+
| 3              | Consumed       | \-             | This value     |
|                | watt-hours     |                | represents     |
|                |                |                | consumed       |
|                |                |                | watt-hours     |
|                |                |                | since last     |
|                |                |                | reset. It is   |
|                |                |                | reset          |
|                |                |                | automatically  |
|                |                |                | when you power |
|                |                |                | on the LCD and |
|                |                |                | the battery is |
|                |                |                | fully charged, |
|                |                |                | i.e., above    |
|                |                |                | the set        |
|                |                |                | threshold      |
|                |                |                | voltage.       |
+----------------+----------------+----------------+----------------+

\

## 3: Assist Levels {#assist_levels}

Here you can configure how many assist levels you wish to be able to
select and also their respective multipliers. The defaults should
already work for most people.

The assist level sets the motor power as a factor of the power the rider
is generating on the crankshaft. For instance, if assist level 3 is
chosen and configured with a multiplier of 2.0, when the rider is
generating a power of 100 watts, the motor power will assist another 200
watts.

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Number of      | 5              | Select the     |
|                | assist levels  |                | desired number |
|                |                |                | of assist      |
|                |                |                | levels from a  |
|                |                |                | minimum of 1   |
|                |                |                | to a maximum   |
|                |                |                | of 9.          |
+----------------+----------------+----------------+----------------+
| 1              | Assist level 1 | 0.5            | The value with |
|                | multiplier     |                | which the      |
|                |                |                | human pedaling |
|                |                |                | power is       |
|                |                |                | multiplied     |
|                |                |                | with.\         |
|                |                |                | \              |
|                |                |                | Example: 0.5   |
|                |                |                | \* 200 W       |
|                |                |                | (human power)  |
|                |                |                | = 100 W assist |
|                |                |                | power. This    |
|                |                |                | results in 300 |
|                |                |                | W total power. |
+----------------+----------------+----------------+----------------+
| 2              | Assist level X | \....          | The desired    |
|                | multiplier     |                | multiplier for |
|                |                |                | assist level   |
|                |                |                | X.             |
+----------------+----------------+----------------+----------------+

\

## 4: Startup BOOST function {#startup_boost_function}

Here you can enable, disable and configure the BOOST feature. This
feature helps from standstills where you might need greater assistance.
It gives more power during a set time and then fades the power back to
normal assistance. To configure the function for you likening please set
appropriate values.

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | BOOST feature  | 0              | Set (1) to     |
|                |                |                | enable or (0)  |
|                |                |                | to disable.    |
+----------------+----------------+----------------+----------------+
| 1              | On startup     | 1              | Set (1) to     |
|                | only /         |                | enable BOOST   |
|                | everytime      |                | feature every  |
|                |                |                | time pedal     |
|                |                |                | cadence or     |
|                |                |                | torque sensor  |
|                |                |                | value are      |
|                |                |                | zero. Set (0)  |
|                |                |                | to enable      |
|                |                |                | BOOST feature  |
|                |                |                | only when      |
|                |                |                | startup and    |
|                |                |                | bicycle wheel  |
|                |                |                | speed is equal |
|                |                |                | to zero;       |
+----------------+----------------+----------------+----------------+
| 2              | Limit BOOST    | 0              | Set (1) to     |
|                | power to max   |                | enable BOOST   |
|                | battery power  |                | power limit to |
|                |                |                | the maximum    |
|                |                |                | battery power  |
|                |                |                | value. Set (0) |
|                |                |                | to disable.    |
+----------------+----------------+----------------+----------------+
| 3              | BOOST time     | 2.0 seconds    | Set time limit |
|                |                |                | of BOOST.      |
+----------------+----------------+----------------+----------------+
| 4              | Fade out BOOST | 3.5 seconds    | Set time limit |
|                |                |                | to transition  |
|                |                |                | of power from  |
|                |                |                | BOOST to       |
|                |                |                | regular power. |
+----------------+----------------+----------------+----------------+
| 5              | Assist level 1 | 4              | Set the BOOST  |
|                | BOOST          |                | multipler      |
|                | multiplier     |                | corresponding  |
|                |                |                | to assist      |
|                |                |                | level 1.\      |
|                |                |                | \              |
|                |                |                | Tip: See       |
|                |                |                | assist levels  |
|                |                |                | for more       |
|                |                |                | information    |
|                |                |                | about          |
|                |                |                | multipliers.   |
+----------------+----------------+----------------+----------------+
| 6              | Assist level X | \-             | Set the BOOST  |
|                | BOOST          |                | multipler      |
|                | multiplier     |                | corresponding  |
|                |                |                | to assist      |
|                |                |                | level X.\      |
|                |                |                | \              |
|                |                |                | Tip: See       |
|                |                |                | assist levels  |
|                |                |                | for more       |
|                |                |                | information    |
|                |                |                | about          |
|                |                |                | multipliers.   |
+----------------+----------------+----------------+----------------+

\

## 5: Motor Temperature Protection {#motor_temperature_protection}

This function protects your motor from overheating resulting in
permanent damage/loss of torque. See: **[TSDZ2 motor demagnetized due to
overheating](TSDZ2_motor_demagnetized_due_to_overheating "wikilink")**.
You can only use and enable this feature if you have installed the [
motor temperature
sensor](How_to_install_motor_temperature_sensor "wikilink").

### How it works {#how_it_works}

If you have installed the [ motor temperature
sensor](How_to_install_motor_temperature_sensor "wikilink") and you
enable the function, you will be able to see the motor temperature in
the temperature field of the display. When the set minimum motor
temperature threshold is reached, the motor current will start to be
limited. If the temperature keeps rising this will result in even more
current, and therefore overall power, limitations. If the maximum motor
temperature is reached the current will be completely limited.

The temperature value on the display will blink if the motor current is
being limited. As the function limits the current more it will blink
faster corresponding to higher limitations on current. Finally, if the
current is completely limited, the blink rate will be very fast.

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Motor          | 0              | Set (1) to     |
|                | temperature    |                | enable the     |
|                | protection     |                | motor          |
|                |                |                | temperature    |
|                |                |                | control or set |
|                |                |                | (0) to         |
|                |                |                | disable.\      |
|                |                |                | \              |
|                |                |                | NOTE: if you   |
|                |                |                | do not have    |
|                |                |                | the [motor     |
|                |                |                | temperature    |
|                |                |                | sensor         |
|                |                |                | install        |
|                |                |                | ed](How_to_ins |
|                |                |                | tall_motor_tem |
|                |                |                | perature_senso |
|                |                |                | r "wikilink"), |
|                |                |                | you should     |
|                |                |                | disable this   |
|                |                |                | option and     |
|                |                |                | ignore the     |
|                |                |                | immediate      |
|                |                |                | configurations |
|                |                |                | below.         |
+----------------+----------------+----------------+----------------+
| 1              | Minimum        | 75 °C          | Set the        |
|                | temperature    |                | minimum motor  |
|                |                |                | temperature at |
|                |                |                | which the      |
|                |                |                | motor current  |
|                |                |                | will start to  |
|                |                |                | be limited.    |
+----------------+----------------+----------------+----------------+
| 2              | Maximum        | 85 °C          | Set the        |
|                | temperature    |                | maximum motor  |
|                |                |                | temperature at |
|                |                |                | which the      |
|                |                |                | motor current  |
|                |                |                | will be        |
|                |                |                | completely     |
|                |                |                | blocked, i.e., |
|                |                |                | motor shutoff. |
+----------------+----------------+----------------+----------------+

\

## 6: Display

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | LCD brightness | 5              | Percentage of  |
|                | when backlight |                | brightness     |
|                | is off         |                | when backlight |
|                |                |                | is turned off, |
|                |                |                | e.g., 5 %      |
+----------------+----------------+----------------+----------------+
| 1              | LCD brightness | 80             | Percentage of  |
|                | when backlight |                | brightness     |
|                | is on          |                | when backlight |
|                |                |                | is turned on,  |
|                |                |                | e.g., 80 %     |
+----------------+----------------+----------------+----------------+
| 2              | LCD auto power | 15             | Automatic      |
|                | off            |                | power off      |
|                |                |                | after set      |
|                |                |                | amount of      |
|                |                |                | minutes.       |
+----------------+----------------+----------------+----------------+
| 3              | Reset to       | 0              | 1.  Increase   |
|                | factory        |                |     the value  |
|                | defaults       |                |     to 10      |
|                |                |                | 2.  The        |
|                |                |                |     display    |
|                |                |                |     will turn  |
|                |                |                |     off        |
|                |                |                | 3.  Turn it on |
|                |                |                |     again      |
|                |                |                | 4.  Factory    |
|                |                |                |     default    |
|                |                |                |     settings   |
|                |                |                |     will be    |
|                |                |                |     restored   |
+----------------+----------------+----------------+----------------+

\

## 7: Offroad Mode {#offroad_mode}

This function enables user to limit speed and power when using bike on
road. When using the bike off road where laws may be different it is
possible to toggle Offroad mode and unlock a higher speed or power
limit. Set parameters suitable for your specific laws and preferences.

  -------------------- -------------------------- ------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Submenu number**   **Configuration name**     **Default value**   **Description**
  0                    Feature toggle             0                   Select (1) to enable or (0) to disable.
  1                    Active on system startup   0                   Determines whether offroad mode should be active on system startup. Select (1) to enable or select (0) to disable.
  2                    Speed limit                25 km/h             This speed limit is used when offroad mode is not active. Configure your speed which is legal for using on public roads. The motor will fade out power from -0.5 km/h to +2,0 km/h.
  3                    Limit power                0                   Determines whether power should be limited when offroad mode is not active. Select (1) to enable or (0) to disable.
  4                    Power limit                250 W               The power limit in watts. For most countries in Europe the legal power limit is 250 W.
  -------------------- -------------------------- ------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

\

## 8: Various

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Motor voltage  | 0              | Depending on   |
|                | type           |                | type of motor, |
|                |                |                | select         |
|                |                |                | appropriate    |
|                |                |                | value so that  |
|                |                |                | FOC            |
|                |                |                | calculations   |
|                |                |                | are correctly  |
|                |                |                | executed. The  |
|                |                |                | voltage of the |
|                |                |                | battery does   |
|                |                |                | not matter,    |
|                |                |                | this value     |
|                |                |                | should always  |
|                |                |                | be set         |
|                |                |                | depending on   |
|                |                |                | type of        |
|                |                |                | motor.\        |
|                |                |                | \              |
|                |                |                | \* Set 0 for   |
|                |                |                | 48 V brushless |
|                |                |                | motor (TSDZ2   |
|                |                |                | 52 V version   |
|                |                |                | has a 48 V     |
|                |                |                | brushless      |
|                |                |                | motor).        |
|                |                |                |                |
|                |                |                | -   Set 1 for  |
|                |                |                |     36 V       |
|                |                |                |     brushless  |
|                |                |                |     motor.     |
|                |                |                | -   Set 2      |
|                |                |                |                |
|                |                |                | (EXPERIMENTAL) |
|                |                |                |     for the 36 |
|                |                |                |     V          |
|                |                |                |     brushless  |
|                |                |                |     motor,     |
|                |                |                |     high       |
|                |                |                |     cadence    |
|                |                |                |     mode.      |
|                |                |                |     Maybe not  |
|                |                |                |     good for   |
|                |                |                |     the motor, |
|                |                |                |     use at     |
|                |                |                |     your own   |
|                |                |                |     risk.      |
|                |                |                |     Probably   |
|                |                |                |     only       |
|                |                |                |     suitable   |
|                |                |                |     for the 36 |
|                |                |                |     V motor.   |
+----------------+----------------+----------------+----------------+
| 1              | Motor          | 0              | Select (1) to  |
|                | assistance     |                | enable or      |
|                | startup        |                | select (0) to  |
|                | without pedal  |                | disable.       |
|                | rotation       |                | Recommended to |
|                |                |                | keep at        |
|                |                |                | disabled (0)   |
|                |                |                | if you do not  |
|                |                |                | have brake     |
|                |                |                | sensors        |
|                |                |                | installed.     |
+----------------+----------------+----------------+----------------+
| 2              | Set odometer   | 0              | Set the        |
|                |                |                | odometer to    |
|                |                |                | preferred      |
|                |                |                | value.         |
|                |                |                | Increase the   |
|                |                |                | value by       |
|                |                |                | pressing UP    |
|                |                |                | button or      |
|                |                |                | press and hold |
|                |                |                | to have the    |
|                |                |                | value          |
|                |                |                | increment      |
|                |                |                | automatically. |
|                |                |                | Decrease the   |
|                |                |                | value by       |
|                |                |                | pressing the   |
|                |                |                | DOWN button or |
|                |                |                | press and hold |
|                |                |                | to have the    |
|                |                |                | value          |
|                |                |                | decrement      |
|                |                |                | automatically. |
+----------------+----------------+----------------+----------------+

\

## 9: Advanced Technical Data {#advanced_technical_data}

  -------------------- ------------------------- --------------------------------------------------------------------------------------------
  **Submenu number**   **Configuration name**    **Description**
  0                    ADC throttle              See the current value
  1                    Throttle                  See the current value
  2                    ADC pedal torque sensor   See the current value
  3                    Pedal torque sensor       See the current value
  4                    Pedal cadence             See the current value
  5                    Pedal human power         See the current value
  6                    PWM duty cycle            See the current value
  7                    Motor speed in ERPs       See the current value
  8                    FOC angle                 See the current value. This value must be multiplied by 1.4 to get angle value in degrees.
  -------------------- ------------------------- --------------------------------------------------------------------------------------------
