\_\_TOC\_\_

**The following only applies to firmware version 0.19.X!**

**CAUTION:**\
\* Always use the same firmware version for both the motor controller
and LCD unless otherwise specified!

-   Before using the mid drive with new firmware, you must correctly
    configure the options on the display. For instance, you should
    configure your battery low voltage cut off so as not to over
    discharge the battery. Do set all other parameters also to ensure
    proper operation.
-   When installing new firmware, always check that no unwanted
    functions have become enabled or disabled during the install
    process.

# Bafang 850C: information and configuration {#bafang_850c_information_and_configuration}

Please see here: [Features and configurations on 850C
display](Features_and_configurations_on_850C_display "wikilink")

# KT-LCD3: information and configuration {#kt_lcd3_information_and_configuration}

\

## 1. Main Screen {#main_screen}

------------------------------------------------------------------------

### Assist Level Field {#assist_level_field}

The assist level field displays the active assist level. This sets the
motor power as a factor of the power that rider is generating on the
pedals. For instance, if current assist level is 3 and if this level is
configured as a factor of 2.0, when rider is doing on the pedals a power
of 100 watts, the motor power supplied will be 200 watts. The assist
level is changed by pressing either UP or DOWN button.\
\
**NOTES:**\
\* It is possible to configure the number of assist levels (1 to 9) in
the configuration menu.\

------------------------------------------------------------------------

### Wheel Speed Field {#wheel_speed_field}

This sub field displays information about speed. The values are
displayed in either metric or imperial units and the user can switch
between a couple of different speed measurements. The default one is
current wheel speed. Other ones are average speed since power on and
peak speed since power on.\
\
- `<b>`{=html} Wheel speed: `</b>`{=html} Displays current wheel speed.\
\
- `<b>`{=html} Average wheel speed: `</b>`{=html} Displays average wheel
speed since power on.\
\
- `<b>`{=html} Peak wheel speed: `</b>`{=html} Displays peak wheel speed
since power on.\
\

------------------------------------------------------------------------

### Motor Power Field {#motor_power_field}

The motor power field displays instantaneous motor power in watts.

It is possible to access a quick-power-set menu by pressing and holding
the ONOFF and UP buttons. When entered in the menu, press or hold UP and
DOWN buttons to increase or decrease the power limit. This can be useful
for various reasons, for instance controlling the battery range on long
trips. Exit the menu by holding the ONOFF button.

Note that the menu cannot be accessed when Street Mode is enabled.
Disable Street Mode first or change the motor power limit in the
configuration menu.

How it works: the motor controller will automatically limit current and
therefore limit maximum motor power. As the battery discharges and the
voltage decreases the motor controller will adjust the current to
maintain the set power limit.\
\
**NOTES:**\
\* Enter the quick-power-set menu by pressing and holding the ONOFF and
UP buttons. Exit by holding the ONOFF button.

-   The motor power will not exceed the maximum battery current set by
    user.

\

------------------------------------------------------------------------

### Odometer Field {#odometer_field}

The odometer field located at the bottom of the display can show a few
variables that are logically grouped in sub fields. You can change
between fields by pressing the ON/OFF button. To change between
different data in a sub field quickly press UP button followed by a long
hold on UP button. The current field and sub field number will
temporarily blink in the wheel speed field.

Summary:

  Group                   Option .1             Option .2        Option .3
  ----------------------- --------------------- ---------------- -----------
  1 - Distance            Trip                  Since Power On   Odometer
  2 - Battery Charge      Percentage            Consumed Wh      \-
  3 - Battery State       Voltage (V)           Current (A)      \-
  4 - Pedal Data          Power                 Cadence          Torque
  5 - Energy              Average Wh/distance   Est range        \-
  6 - Time                Since Power On        Total            \-
  7 - Wheel Speed         Current               Average          Peak
  8 - Motor Temperature   Current               \-               \-
  9 - Cruise              Target Speed          \-               \-

If there are any system errors the error code will be force-displayed in
the odometer field. To look up what the error code means please take a
look at the table under Error Codes.\
\
**NOTES:**\
\* Sub fields are only displayed if the function in question is enabled
and not set to hidden in the Configuration Menu, Main Screen Setup.\
\
`<b>`{=html} - 1. Distance `</b>`{=html}

-   `<u>`{=html} 1.0 Trip distance: `</u>`{=html} You can manually reset
    the trip distance by pressing DOWN button quickly followed by a long
    press on the DOWN button until value resets. It will start to blink
    when it is about to reset.
-   `<u>`{=html} 1.1 Distance since power on: `</u>`{=html} this value
    will automatically reset during power on/off.
-   `<u>`{=html} 1.2 Odometer: `</u>`{=html} can be set to a specific
    value in the configurations menu or reset as described above.

\
`<b>`{=html} - 2. Battery State of Charge `</b>`{=html}

-   `<u>`{=html} 2.0 State of charge in percentage `</u>`{=html}
-   `<u>`{=html} 2.1 Consumed watt-hours `</u>`{=html}

\
`<b>`{=html} - 3. Battery State `</b>`{=html}

-   `<u>`{=html} 3.0 Voltage: `</u>`{=html} voltage of battery.
-   `<u>`{=html} 3.1 Current: `</u>`{=html} instantaneous current drawn
    from battery.

\
`<b>`{=html} - 4. Pedal data `</b>`{=html}

-   `<u>`{=html} 4.0 Rider pedal power `</u>`{=html}: in watts.
-   `<u>`{=html} 4.1 Pedal cadence `</u>`{=html}: in revolutions per
    minute.
-   `<u>`{=html} 4.2 Pedal torque `</u>`{=html}: in newton meter.

\
`<b>`{=html} - 5. Energy data `</b>`{=html}

-   `<u>`{=html} 5.0 Average consumed power since power on
    `</u>`{=html}: displayed in watt-hours per kilometer or watt-hours
    per mile.
-   `<u>`{=html} 5.1 Estimated range since power on `</u>`{=html}:
    displayed in kilometers or miles and is based on the watt-hour
    consumption since power on and remaining watt-hours in the battery.
    This sub field will not be displayed if the Battery State of Charge
    function has not been enabled.

\
`<b>`{=html} - 6. Time Measurement `</b>`{=html}

-   `<u>`{=html} 6.0 Time Measurement: `</u>`{=html} time measured since
    display is powered on. You can reset by pressing DOWN button quickly
    followed by a long press on the DOWN button until value resets. It
    will start to blink when it is about to reset.
-   `<u>`{=html} 6.1 Total Time Measurement: `</u>`{=html} total time
    measured since last reset. Can be reset as described above.

\
`<b>`{=html} - 7. Wheel Speed `</b>`{=html}

-   `<u>`{=html} 7.0 Current wheel speed: `</u>`{=html} Current wheel
    speed.
-   `<u>`{=html} 7.1 Average wheel speed: `</u>`{=html} The average
    speed since power on.
-   `<u>`{=html} 7.2 Peak wheel speed: `</u>`{=html} The measured peak
    value of wheel speed since power on.

\
`<b>`{=html} - 8. Motor Temperature `</b>`{=html}

-   `<u>`{=html} 8.0 Motor temperature: `</u>`{=html} temperature of
    motor.

\
`<b>`{=html} - 9. Cruise Function `</b>`{=html}

-   `<u>`{=html} 9.0 See target speed for Cruise: `</u>`{=html}

\

------------------------------------------------------------------------

### Motor Temperature Field {#motor_temperature_field}

This field can either show the motor temperature, when the function is
enabled and the temperature sensor is installed, or some other data
depending on user preference. It is also possible to set so that the
field displays nothing.

**How the motor temperature function works:**

This motor temperature protection eliminates overheating. Without this
function the motor might overheat during heavy loads, resulting in
permanent damage/loss of torque. See: **[TSDZ2 motor demagnetized due to
overheating](TSDZ2_motor_demagnetized_due_to_overheating "wikilink")**.
You can only use and enable this feature if you have installed the [
motor temperature
sensor](How_to_install_motor_temperature_sensor "wikilink").

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

**NOTES:**\
\* Set your desired configuration under the Main Screen Setup in the
Configuration Menu.

-   The chosen field to be displayed will be temporarily hidden and the
    motor temperature will be displayed if it is at temperature limits.

\
\
- `<b>`{=html} Motor temperature: `</b>`{=html} Motor temperature in
degrees Celsius. When the power power is being limited due to over
temperature, this field will blink. It is possible to configure the
temperature limits in the Configurations Menu.\
\
- `<b>`{=html} Battery state of charge in percent: `</b>`{=html} This
percentage value is based on measured watt hours consumed from the
battery. Set different modes and read more about this function in the
configurations menu.\
\
- `<b>`{=html} Battery voltage: `</b>`{=html} When you prefer to always
have the battery voltage displayed it is possible to set this in the
motor temperature field.\
\
- `<b>`{=html} Battery current: `</b>`{=html} Monitor the instantaneous
current drawn from the battery.\
\
- `<b>`{=html} Pedal cadence: `</b>`{=html} Set to pedal cadence if you
wish to see the instantaneous cadence of pedal rotation.\
\
- `<b>`{=html} Average wheel speed: `</b>`{=html} Set to average wheel
speed if you wish to see the average wheel speed since power on.\
\
\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\--

### Time Measurement Field {#time_measurement_field}

The time measurement field displays elapsed time since power on or since
last reset. It displays either the TM symbol, stands for Time
Measurement, or TTM symbol, stands for Total Time Measurement. This
corresponds to the mentioned \"time since power on\" and \"time since
last reset\".\
\
- `<b>`{=html} TM: `</b>`{=html} Elapsed time since power on.\
\
- `<b>`{=html} TTM: `</b>`{=html} Elapsed time since last reset.\
\

------------------------------------------------------------------------

### Battery State of Charge Bar {#battery_state_of_charge_bar}

The battery state of charge bar in the top left corner of the display is
based on battery voltage. There are 6 different levels. When battery is
near empty the bar will start blinking and the motor power will be
reduced accordingly.\
The system considers the internal resistance of the battery pack to
display appropriate battery state of charge. This filters out voltage
drops when drawing higher amounts of current from the battery. Set the
internal resistance of your particular battery in the configurations
menu.\

------------------------------------------------------------------------

### Lights

Enabled or disable LCD backlight, headlights and lights symbol with a
long press of UP button. The LCD backlight will change as configured by
user.\

------------------------------------------------------------------------

### Brakes

The brake symbol lights up when user engages the E-Bike brakes, if
installed. This is also useful for checking that the E-Brakes are
working properly and thus turn of the motor assistance when applied.\

------------------------------------------------------------------------

### Walk Assist {#walk_assist}

Enable or disable walk assist with a long hold of DOWN button at speeds
below 8 km/h (approximately 5 mph). The motor will start to give
assistance configured by user and maintain that as long as the DOWN
button is being pressed. At the same time the walk assist symbol will
light up. To set different power levels simply select appropriate assist
level. The power levels can be configured in the configuration menu.\
\
**NOTES:**\
\* This function can be disabled in the configuration menu.

-   Number of walk assist levels correspond to number of configured
    assist levels.

\

------------------------------------------------------------------------

### Cruise

Enable or disable the cruise function with a long hold of DOWN button at
speeds above 8 km/h (approximately 5 mph). If the function is enabled it
will by default save the current wheel speed and maintain it for as long
as the DOWN button is pressed. The cruise symbol will light up to let
the user know that the function is active.

It is also possible to enable a feature where you enter the desired
wheel speed and the cruise function will automatically go to and
maintain that speed. More information on how to enable and use the
different functions can be found under the configuration menu.\
\
**NOTES:**\
\* This function can be disabled in the configuration menu.

-   Use with safety in mind.

\

------------------------------------------------------------------------

### Street Mode {#street_mode}

If the Street mode function is activated it can be toggled with the
ONOFF and DOWN button combination. When active, the \"ASSIST\" symbol
above the assist level will start to blink.\
\

------------------------------------------------------------------------

### Error codes {#error_codes}

If there is an error in the system it will be force-displayed in the
odometer field. There will be a number associated with the error and
this is the actual error code. Simply look at the table below for
different error codes and what they mean.\

  ----------------- ---------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  **Error Codes**   **Error Name**                           **Description**
  1                 ERROR_MOTOR_BLOCKED                      Motor is blocked. Excessive current is passing through motor and controller with no motor rotation. Please unblock the wheel or motor. After ten seconds this error will disappear and you will be able to use the system as usual.
  2                 ERROR_TORQUE_APPLIED_DURING_POWER_ON     (Not yet implemented)
  3                 ERROR_BRAKE_APPLIED_DURING_POWER_ON      (Not yet implemented)
  4                 ERROR_THROTTLE_APPLIED_DURING_POWER_ON   (Not yet implemented)
  5                 ERROR_NO_SPEED_SENSOR_DETECTED           (Not yet implemented)
  ----------------- ---------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

\

------------------------------------------------------------------------

## 2. Configuration Menu {#configuration_menu}

\

### How to enter the Configuration Menu {#how_to_enter_the_configuration_menu}

-   To enter the configuration menu: long press the UP and DOWN buttons
-   To enter a sub menu: press the ON/OFF button
-   To navigate between sub menus: press either the UP or DOWN button
-   To exit a sub menu or the configuration menu: long press the ON/OFF
    button

\

### 0: General Setup {#general_setup}

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
|                |                |                | miles).\       |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 1              | Maximum wheel  | 50             | Enter speed    |
|                | speed          |                | limit from     |
|                |                |                | where the      |
|                |                |                | motor will     |
|                |                |                | fade out power |
|                |                |                | from. The      |
|                |                |                | power fade     |
|                |                |                | starts from    |
|                |                |                | -0.5 km/h to   |
|                |                |                | +2,0 km/h.     |
|                |                |                |                |
|                |                |                | Tip: If you    |
|                |                |                | setup Street   |
|                |                |                | Mode this will |
|                |                |                | effectively be |
|                |                |                | the speed      |
|                |                |                | limit when     |
|                |                |                | going offroad, |
|                |                |                | i.e. when      |
|                |                |                | using the bike |
|                |                |                | on non-public  |
|                |                |                | roads.\        |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 2              | Wheel          | 2050           | Enter your     |
|                | circumference  |                | wheel          |
|                |                |                | circumference  |
|                |                |                | so that speed  |
|                |                |                | and distance   |
|                |                |                | are correctly  |
|                |                |                | calculated.\   |
|                |                |                | \              |
|                |                |                | Tip: Search on |
|                |                |                | Google how to  |
|                |                |                | measure the    |
|                |                |                | wheel          |
|                |                |                | circumference. |
|                |                |                | Below are      |
|                |                |                | approximate    |
|                |                |                | values for a   |
|                |                |                | quick setup.   |
|                |                |                | Remember to    |
|                |                |                | calibrate with |
|                |                |                | GPS for finer  |
|                |                |                | adjustments.\  |
|                |                |                | \              |
|                |                |                | 20 inch wheel  |
|                |                |                | = 1595 mm\     |
|                |                |                | 26 inch wheel  |
|                |                |                | = 2050 mm\     |
|                |                |                | 27 inch wheel  |
|                |                |                | = 2150 mm\     |
|                |                |                | 27.5 inch      |
|                |                |                | wheel = 2215   |
|                |                |                | mm\            |
|                |                |                | 28 inch wheel  |
|                |                |                | = 2250 mm\     |
|                |                |                | 29 inch wheel  |
|                |                |                | = 2300 mm\     |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 3              | Set odometer   | 0              | Set the        |
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
|                |                |                | a              |
|                |                |                | utomatically.\ |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 4              | Screen         | 5              | Percentage of  |
|                | brightness     |                | brightness     |
|                | when backlight |                | when back      |
|                | is off         |                | light is       |
|                |                |                | turned off.    |
|                |                |                | The default    |
|                |                |                | value is five  |
|                |                |                | (5) percent.\  |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 5              | Screen         | 80             | Percentage of  |
|                | brightness     |                | brightness     |
|                | when backlight |                | when back      |
|                | is on          |                | light is       |
|                |                |                | turned on. The |
|                |                |                | default value  |
|                |                |                | is eighty (80) |
|                |                |                | percent.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 6              | Screen auto    | 15             | Automatic      |
|                | power off      |                | power off      |
|                |                |                | after set      |
|                |                |                | amount of      |
|                |                |                | minutes.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 7              | Reset to       | 0              | 1.  Increase   |
|                | factory        |                |     the value  |
|                | defaults       |                |     to 10      |
|                |                |                | 2.  The        |
|                |                |                |     display    |
|                |                |                |     will turn  |
|                |                |                |     off        |
|                |                |                | 3.  Hold the   |
|                |                |                |     ONOFF      |
|                |                |                |     button a   |
|                |                |                |     couple of  |
|                |                |                |     seconds    |
|                |                |                |     with the   |
|                |                |                |     screen     |
|                |                |                |     blank      |
|                |                |                | 4.  Release    |
|                |                |                |     the ONOFF  |
|                |                |                |     button     |
|                |                |                | 5.  Turn the   |
|                |                |                |     system     |
|                |                |                |     back on    |
|                |                |                |     again      |
|                |                |                | 6.  Factory    |
|                |                |                |     default    |
|                |                |                |     settings   |
|                |                |                |     will be    |
|                |                |                |     set        |
|                |                |                |                |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+

\

### 1: Battery Setup {#battery_setup}

In this sub menu you can specify all parameters regarding the battery.

Is is also possible to enable measurements of consumed watt-hours since
last charge and also see what percentage of capacity remains during a
trip. Depending on preferences it is possible to set so that percentage
of consumed charge is displayed instead of percentage of remaining
charge.

Tip: If this function is enabled you will be able to see percentage of
charge in the temperature field on your display. To enable or disable
just click the ON/OFF-button together with the DOWN-button at the same
time. Do not forget to enable and set up the function below.

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
|                |                |                | ampere.\       |
|                |                |                | \              |
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
|                |                |                | series).\      |
|                |                |                | \              |
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
|                |                |                | battery.\      |
|                |                |                | \              |
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
|                |                |                | milliohms.\    |
|                |                |                | \              |
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
|                |                |                | reading.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 5              | Enable and set | 0              | Set (1) to     |
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
|                |                |                | function.\     |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 6              | Threshold      | 54.2 volt      | When powering  |
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
|                |                |                | 54.2 volts.\   |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 7              | Total          | 0              | Set the total  |
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
|                |                |                | 696 Wh.\       |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 8              | Consumed       | \-             | This value     |
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
|                |                |                | i.e. above the |
|                |                |                | set threshold  |
|                |                |                | voltage.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+

\

### 2: Assist Levels {#assist_levels}

Here you can configure how many assist levels you wish to be able to
select and also their respective multipliers. The defaults should
already work for most situations.

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
|                |                |                | of 9.\         |
|                |                |                | \              |
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
|                |                |                | W total        |
|                |                |                | power.\        |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| X              | Assist level X | \....          | The desired    |
|                | multiplier     |                | multiplier for |
|                |                |                | assist level   |
|                |                |                | X.\            |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+

\

### 3: Walk Assist {#walk_assist_1}

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

\
{\| \| **Submenu number** \|\| **Configuration name** \|\| **Default
value** \|\| **Description** \|- \| 0 \|\| Enable/disable walk assist
function \|\| 0 \|\| Set (1) to enable or set (0) to disable the walk
assist function.\
\
\|- \| - \|\| Walk assist level 0 \|\| 0 \|\| -\
\
\|- \| - \|\| Walk assist level 1 \|\| 25 \|\| -\
\
\|- \| - \|\| Walk assist level 2 \|\| 30 \|\| -\
\
\|- \| - \|\| Walk assist level 3 \|\| 35 \|\| -\
\
\|- \| - \|\| Walk assist level 4 \|\| 40 \|\| -\
\
\|- \| - \|\| Walk assist level 5 \|\| 45 \|\| -\
\
\|- \| - \|\| Walk assist level 6 \|\| 50 \|\| -\
\
\|- \| - \|\| Walk assist level 7 \|\| 55 \|\| -\
\
\|- \| - \|\| Walk assist level 8 \|\| 60 \|\| -\
\
\|- \| - \|\| Walk assist level 9 \|\| 65 \|\| -\
\
\|}\

### 4: Cruise Function {#cruise_function}

Here you can enable or disable the cruise function. The function can be
activated when the bike is traveling at speeds above 8 km/h or around 5
mph and the user presses and holds the DOWN button.

The cruise function has two modes of operation depending on user
preference. It can, when activated, save the current speed and maintain
it. Or the user can set a desired target speed and the cruise function
will accelerate/decelerate to the set speed and then maintain it
instead. Both modes of operation are activated the same way as described
above.

If it is preferred to set a target speed and let the cruise function
maintain that speed there are two ways in which the user can set the
speed. The first way is through the configuration menu. The second way
is by enabling the cruise display in the odometer field in the Main
Screen Setup. This will display an extra sub field where the target
speed is displayed in the odometer field. Pressing the UP or DOWN
buttons will not change the assist level in this sub field, instead, it
will change the target speed.\
\
**NOTES:**

-   It is recommended to install and use the E-brakes when using Cruise.
-   The cruise function only works at speeds above 8 km/h or around 5
    mph.
-   The motor power will not exceed set power limits.

\
{\| \| **Submenu number** \|\| **Configuration name** \|\| **Default
value** \|\| **Description** \|- \| 0 \|\| Enable/disable cruise
function \|\| 0 \|\| Set (1) to enable or set (0) to disable the cruise
function.\
\
\|- \| 1 \|\| Set speed to maintain \|\| 0 \|\| Set (1) to enable or set
(0) to disable the set speed to maintain feature. This will enable the
user to set desired speed and the cruise function will maintain that
speed.\
\
\|- \| 2 \|\| Set target speed \|\| 25 kph or 15 mph \|\| Here it is
possible to set the target speed for the cruise function to maintain.
This is when the \"set speed to maintain\" feature is enabled.\
\
\|- \| 3 \|\| Display set target speed for cruise \|\| 0 \|\| Display of
user set target speed in which the cruise function will try to maintain.
In this menu the UP and DOWN buttons will increment or decrement target
speed. The target speed is displayed in the odometer field and is
enabled (1) by default. Set (0) to disable.\
\
\|-\

### 5: Main Screen Setup {#main_screen_setup}

In the Main Screen Setup it is possible to configure and customize the
main screen.\
\
**NOTES:**\
\* Some variables can only be reset in the odometer field so it is
required to enable those variables to be able to reset.\
{\| \| **Submenu number** \|\| **Configuration name** \|\| **Default
value** \|\| **Description** \|- \| 0 \|\| Distance data \|\| 1 \|\|
Display of distance data, i.e. trip distance, distance since power on
and odometer, in the odometer field is enabled (1) by default. Set (0)
to disable.\
\
\|- \| 1 \|\| Battery SOC\|\| 1 \|\| Display of battery state of charge,
i.e. watt-hours consumed or percentage of state of charge, in the
odometer field is enabled (1) by default. Set (0) to disable.\
\
\|- \| 2 \|\| Battery state \|\| 1 \|\| Display of battery state, i.e.
voltage and current, in the odometer field is enabled (1) by default.
Set (0) to disable.\
\
\|- \| 3 \|\| Pedal data \|\| 1\|\| Display of pedal data, i.e. rider
pedal power, pedal cadence or pedal torque, in the odometer field is
enabled (1) by default. Set (0) to disable.\
\
\|- \| 4 \|\| Energy data \|\| 1\|\| Display of energy data, i.e.
average consumed power since power on, in the odometer field is enabled
(1) by default. Set (0) to disable.\
\
\|- \| 5 \|\| Time measurement \|\| 1 \|\| Display of time measurement,
i.e. TM or TTM, in the odometer field is enabled (1) by default. Set (0)
to disable.\
\
\|- \| 6 \|\| Wheel speed \|\| 1 \|\| Display of wheel speed, i.e.
current wheel speed, average wheel speed or peak wheel speed, in the
odometer field is enabled (1) by default. Set (0) to disable.\
\
\|- \| 7 \|\| Motor temperature \|\| 1 \|\| Display of motor temperature
in the odometer field is enabled (1) by default. Set (0) to disable.
This will only be shown if the motor temperature sensor is installed and
the function is enabled. Read more about this mod here. LINKLINKLINK\
\
\|- \| 8 \|\| Display target speed for cruise \|\| 0 \|\| Display of
user set target speed in which the cruise function will try to maintain.
This menu will only be shown if the function is enabled. Press UP or
DOWN buttons to increment or decrement target speed. The target speed is
displayed in the odometer field and is enabled (1) by default. Set (0)
to disable.\
\
\|- \| 9 \|\| Enable main screen power menu \|\| 1 \|\| When this
feature is enabled (1) a power menu can be displayed from the main
screen so the user can quickly set the motor power limit. Instead of
going to the Configuration Menu. This menu can be accessed from the main
screen by long pressing the ON/OFF and UP buttons. Press or hold the UP
or DOWN button to increase or decrease the power limit. Exit the menu by
holding the ON/OFF button. The main screen power menu can not be
accessed when Street Mode is enabled. Set (0) to disable this menu
altogether.\
\
\|- \| 10 \|\| Temperature field setup \|\| 0 \|\| In this sub menu it
is possible to set the temperature field to display different data
depending on user preference. Such as:\
\
(0) = Display nothing\
(1) = Motor temperature\
(2) = Battery state of charge in percent\
(3) = Instantaneous voltage on battery\
(4) = Instantaneous current drawn from battery\
(5) = Pedal cadence\
(6) = Average wheel speed since power on\
\
NOTE: If the motor temperature is hitting the temperature limits the
field will temporarily flash the motor temperature and override any
other data.\
\
\|}\

### 6: Startup BOOST function {#startup_boost_function}

Here you can enable, disable and configure the BOOST feature. This
feature helps from standstills where you might need greater assistance.
It gives more power during a set time and then fades the power back to
normal assistance. Configure the function after your own likening and
preference.

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | BOOST feature  | 0              | Set (1) to     |
|                |                |                | enable or (0)  |
|                |                |                | to disable.\   |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 1              | On startup     | 1              | Set (1) to     |
|                | only / every   |                | enable BOOST   |
|                | time           |                | feature every  |
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
|                |                |                | to zero.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 2              | Limit BOOST    | 0              | Set (1) to     |
|                | power to max   |                | enable BOOST   |
|                | battery power  |                | power limit to |
|                |                |                | the maximum    |
|                |                |                | battery power  |
|                |                |                | value. Set (0) |
|                |                |                | to disable.\   |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 3              | BOOST time     | 2.0 seconds    | Set time limit |
|                |                |                | of BOOST.\     |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 4              | Fade out BOOST | 3.5 seconds    | Set time limit |
|                |                |                | to transition  |
|                |                |                | of power from  |
|                |                |                | BOOST to       |
|                |                |                | regular        |
|                |                |                | power.\        |
|                |                |                | \              |
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
|                |                |                | multipliers.\  |
|                |                |                | \              |
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
|                |                |                | multipliers.\  |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+

\

### 7: Motor Controller Setup {#motor_controller_setup}

In this sub menu the motor controller can be setup to work as desired.
It is also possible to enable or disable the throttle or the motor
temperature protection function here and also various other settings.

**NOTES:**

-   The throttle and the motor temperature protection can not be active
    simultaneously. This is because they use the same hardware ports to
    operate.
-   If the motor temperature sensor is installed it is not possible to
    use the throttle. Do NOT enable throttle if that is the case.
-   Set the current ramp up to a lower value for a more smooth
    acceleration and lower strain on the drivetrain.

\

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Motor voltage  | 0              | Depending on   |
|                | type           |                | type of motor, |
|                |                |                | set            |
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
|                |                |                | \* Set (0) for |
|                |                |                | 48 V brushless |
|                |                |                | motor (TSDZ2   |
|                |                |                | 52 V version   |
|                |                |                | has a 48 V     |
|                |                |                | brushless      |
|                |                |                | motor).        |
|                |                |                |                |
|                |                |                | -   Set (1)    |
|                |                |                |     for 36 V   |
|                |                |                |     brushless  |
|                |                |                |     motor.     |
|                |                |                | -   Set (2)    |
|                |                |                |                |
|                |                |                | (EXPERIMENTAL) |
|                |                |                |     for the 48 |
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
|                |                |                | -   Set (3)    |
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
|                |                |                |                |
|                |                |                | \              |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 1              | Motor power    | 0              | Set value      |
|                | limit          |                | after user     |
|                |                |                | preference. A  |
|                |                |                | tip is to      |
|                |                |                | install the    |
|                |                |                | motor          |
|                |                |                | temperature    |
|                |                |                | sensor if a    |
|                |                |                | lot of power   |
|                |                |                | is frequently  |
|                |                |                | needed so as   |
|                |                |                | not to         |
|                |                |                | overheat the   |
|                |                |                | motor. Or set  |
|                |                |                | a lower motor  |
|                |                |                | power limit.   |
|                |                |                | If you setup   |
|                |                |                | Street Mode    |
|                |                |                | this will      |
|                |                |                | effectively be |
|                |                |                | the power      |
|                |                |                | limit when     |
|                |                |                | going offroad, |
|                |                |                | i.e. when      |
|                |                |                | using the bike |
|                |                |                | on non-public  |
|                |                |                | roads.\        |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 2              | Current ramp   | 5 amps per     | Set value      |
|                | up             | second         | after user     |
|                |                |                | preference.    |
|                |                |                | Higher value   |
|                |                |                | corresponds to |
|                |                |                | faster         |
|                |                |                | acceleration   |
|                |                |                | but also       |
|                |                |                | greater forces |
|                |                |                | on the mid     |
|                |                |                | drive. Be      |
|                |                |                | mindful not to |
|                |                |                | select too     |
|                |                |                | fast           |
|                |                |                | acceleration.\ |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 3              | Motor          | 0              | Select (1) to  |
|                | assistance     |                | enable or      |
|                | startup        |                | select (0) to  |
|                | without pedal  |                | disable.       |
|                | rotation       |                | Recommended to |
|                |                |                | keep disabled  |
|                |                |                | (0) if you do  |
|                |                |                | not have brake |
|                |                |                | sensors        |
|                |                |                | installed.\    |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 4              | Temperature    | 0              | This sub menu  |
|                | limit or       |                | is by default  |
|                | throttle       |                | set to (0).    |
|                |                |                | This means     |
|                |                |                | neither        |
|                |                |                | throttle nor   |
|                |                |                | motor          |
|                |                |                | temperature    |
|                |                |                | limit function |
|                |                |                | is enabled.    |
|                |                |                | Set (1) to     |
|                |                |                | enable the     |
|                |                |                | motor          |
|                |                |                | temperature    |
|                |                |                | control or set |
|                |                |                | (2) to enable  |
|                |                |                | the throttle.\ |
|                |                |                | \              |
|                |                |                | NOTE: Do NOT   |
|                |                |                | enable the     |
|                |                |                | throttle if    |
|                |                |                | you have       |
|                |                |                | installed the  |
|                |                |                | [motor         |
|                |                |                | temperature    |
|                |                |                | sens           |
|                |                |                | or](How_to_ins |
|                |                |                | tall_motor_tem |
|                |                |                | perature_senso |
|                |                |                | r "wikilink"). |
|                |                |                | If you have    |
|                |                |                | the sensor     |
|                |                |                | installed you  |
|                |                |                | need to either |
|                |                |                | have the motor |
|                |                |                | temperature    |
|                |                |                | limit function |
|                |                |                | enabled or     |
|                |                |                | everything     |
|                |                |                | disabled, i.e. |
|                |                |                | set to either  |
|                |                |                | (1) or (0).\   |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 5              | Minimum        | 75 °C          | Set the        |
|                | temperature    |                | minimum motor  |
|                |                |                | temperature at |
|                |                |                | which the      |
|                |                |                | power will     |
|                |                |                | start to be    |
|                |                |                | limited.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 6              | Maximum        | 85 °C          | Set the        |
|                | temperature    |                | maximum motor  |
|                |                |                | temperature at |
|                |                |                | which the      |
|                |                |                | power will be  |
|                |                |                | completely     |
|                |                |                | blocked, i.e.  |
|                |                |                | no motor       |
|                |                |                | assistance.\   |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+

\

### 8: Street Mode {#street_mode_1}

This function enables user to limit speed and power when using the bike
on public roads. It is also possible to disable the throttle function
when in Street Mode. Set parameters suitable for your country\'s
specific laws or personal preferences.

When the Street Mode function is activated it is possible to enable it
by pressing and holding the ONOFF and DOWN buttons until the \"ASSIST\"
symbol starts to blink. This indicates that Street Mode is enabled. To
disable Street Mode simply press and hold the ONOFF and DOWN buttons
once again until the \"ASSIST\" symbol is solid.

+----------------+----------------+----------------+----------------+
| **Submenu      | *              | **Default      | *              |
| number**       | *Configuration | value**        | *Description** |
|                | name**         |                |                |
+----------------+----------------+----------------+----------------+
| 0              | Enable Street  | 0              | Set (1) to     |
|                | Mode           |                | enable or (0)  |
|                |                |                | to disable.\   |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 1              | Active on      | 0              | Determines     |
|                | system startup |                | whether Street |
|                |                |                | mode should be |
|                |                |                | active on      |
|                |                |                | system         |
|                |                |                | startup.       |
|                |                |                | Select (1) to  |
|                |                |                | enable or      |
|                |                |                | select (0) to  |
|                |                |                | disable.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 2              | Street Mode    | 25 km/h        | Set speed      |
|                | Speed limit    |                | limit for when |
|                |                |                | Street Mode is |
|                |                |                | active. The    |
|                |                |                | motor will     |
|                |                |                | fade out power |
|                |                |                | from -0.5 km/h |
|                |                |                | to +2,0 km/h   |
|                |                |                | to prevent     |
|                |                |                | overspeeding.\ |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 3              | Limit power in | 0              | Determines     |
|                | Street Mode    |                | whether power  |
|                |                |                | should be      |
|                |                |                | limited when   |
|                |                |                | Street Mode is |
|                |                |                | active. Select |
|                |                |                | (1) to enable  |
|                |                |                | or (0) to      |
|                |                |                | disable.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 4              | Street Mode    | 250 W          | The power      |
|                | Power limit    |                | limit in watts |
|                |                |                | when Street    |
|                |                |                | Mode is        |
|                |                |                | active.\       |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+
| 5              | Throttle       | 0              | Determines if  |
|                | Enabled        |                | throttle is    |
|                |                |                | enabled in     |
|                |                |                | Street Mode.   |
|                |                |                | Select (1) to  |
|                |                |                | enable or      |
|                |                |                | select (0) to  |
|                |                |                | disable.\      |
|                |                |                | \              |
+----------------+----------------+----------------+----------------+

\

### 9: Advanced Technical Data {#advanced_technical_data}

+--------------------+-----------------------+-----------------------+
| **Submenu number** | **Configuration       | **Description**       |
|                    | name**                |                       |
+--------------------+-----------------------+-----------------------+
| 0                  | ADC throttle          | See the current       |
|                    |                       | value.\               |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
| 1                  | Throttle              | See the current       |
|                    |                       | value.\               |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
| 2                  | ADC pedal torque      | See the current       |
|                    | sensor                | value.\               |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
| 3                  | Pedal torque sensor   | See the current       |
|                    |                       | value.\               |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
| 4                  | Pedal cadence         | See the current       |
|                    |                       | value.\               |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
| 5                  | Pedal human power     | See the current       |
|                    |                       | value.\               |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
| 6                  | PWM duty cycle        | See the current       |
|                    |                       | value.\               |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
| 7                  | Motor speed in ERPs   | See the current       |
|                    |                       | value.\               |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
| 8                  | FOC angle             | See the current       |
|                    |                       | value. This value     |
|                    |                       | must be multiplied by |
|                    |                       | 1.4 to get angle      |
|                    |                       | value in degrees.\    |
|                    |                       | \                     |
+--------------------+-----------------------+-----------------------+
