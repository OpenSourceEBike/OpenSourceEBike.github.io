# **Remote operation**
## Getting started with your new remote 

**To get started , follow this simple four step process:**

1. Ensure that the second wireless board is powered up and connected to the TSDZ2 motor controller.
2. To turn on the motor from the remote control, press and hold the **POWER** key on the remote control. A **RED** LED will briefly flash, followed by a flashing **RED+BLUE** LED. This LED will continue flashing until a connection is established with the wireless controller.
3. press the **PLUS/MINUS** keys briefly to increase/decrease the motor assist level. The **GREEN** LED wil briefly flash on every press of the key. There are 7 levels of assist. When you reach level 7 (maximum assist) or level 0 (motor off) the **RED** LED will rapidly flash.
4. To turn off the motor, press and hold the **POWER** key on the remote control.
A **RED** LED will briefly flash, followed by a flashing **GREEN** LED. This LED will indicate the current state of charge of the battery by one flash for every 10% of charge. When the motor is off, pressing the PLUS or MINUS keys will do nothing and they will briefly flash **RED** when pressed.

**That's basically all you need to use the remote for basic operation**.

Read the "**Button Operation**" section below for more details on the remote's operation.

If you would like to configure the remote, please read the "**Remote Operating Modes**" section next. 

Enjoy!!

## Remote Operating Modes
The remote has two modes of operation; **CONFIGURATION MODE** and **NORMAL MODE**, for configuration and normal operation, respectively.

----

## Button Operation (CONFIGURATION MODE)

----
In **CONFIGURATION MODE**, the remote has a 2 configuration options, namely specifying a specific ANT ID for use with the ebike and setting up ANT LEV control options. Both of these settings are optional as the remote will default to control the TSDZ2 wireless controller without the need to set anything.

* The ANT ID allows you to pair the remote to a specific TSDZ2 motor. The default ANT ID of 0 allows the remote to pair with any TSDZ2 motor within range. Any other number will cause the remote to ONLY pair with a motor with the same ANT ID. This is a useful option if you have multiple ebikes. The ANT ID can be changed by a bluetooth connection to the remote.
* The ANT LEV control options allow you to pair the remote to an ebike alone, (the default option) , a bike computer (like the Garmin Edge series) , or any combination of these devices.
to enter and exit **CONFIGURATION MODE**, Press the **ENTER** key for a more than 5 seconds. The BLUE LED will light for 3 seconds followed by a visual display of ANT  options. The RED LED will light for 3 seconds to indicate TSDZ2 motor control is active, followed by the GREEN LED to indicate that control of Garmin bike computers is active <br>
Button control:
* Short press the **PLUS/MINUS** keys to enable/disable garmin control. (The **GREEN** LED will light for 3 seconds to indicate that garmin control is active)
* Long Press PLUS/MINUS keys\ will enable/disable TSDZ2 motor control(The **RED** LED will light for 3 seconds to indicate that motor control is active)
* Short press the ENTER key to display configuration options.The **GREEN** LED will light for 3 seconds to indicate that garmin control is active and the **RED** LED will light for 3 seconds to indicate that motor control is active
* * A Long Press the [**POWER**] button will initate Device Firmware Update (DFU) mode.  Either the remote or bootloader firmware can be updated to a new version using a provided upgrade packet zip file in DFU mode. For more information click [here](dfu.md).
* Long press the ENTER key to leave **CONFIGURATION**  mode. The **BLUE** LED will light for 3 seconds to indicate you are entering **NORMAL** mode


----

## Button Operation (NORMAL MODE)

----

* Short Press the [**POWER**] button to display the motor battery state of charge. Battery state is indicated by flashing the **GREEN LED**. The number of flashes will indicate battery charge state from from 1 flash (10% charge) to 10 flashes (100% charge). (Motor On **ONLY**.)  
* Long Press the [**POWER**] button to turn on/off the motor. See **LED Signalling** below for a description of operation.
* Short Press the [**ENTER**] button to **PAGE UP** on a connected garmin bike computer. (Works **ONLY** if garmin control is activated)
* Long Press the [**ENTER**] button to **PAGE DOWN** on a connected garmin bike computer. (Works **ONLY** if garmin control is activated)
* Short press the [**PLUS**] button to increase the motor assist level (Wireless TSDZ2 and supported **ANT+ LEV** enabled e-bikes)
* Long press the [**PLUS**] button to toggle the lights on/off (Light support is a planned feature, not yet implemented)
* Short press the [**MINUS**] button to decrease the motor assist level (Wireless TSDZ2 and supported **ANT+ LEV** enabled e-bikes)
* Long press and hold the [**MINUS**] button to start the motor walk assist. Releasing the [**MINUS**] button stops walk assist (Wlak assist is a planned feature, not yet implemented)
* Long press the [**MINUS**] + [**PLUS**] buttons to put the remote control in 'deep sleep' low power mode.
* A very long press (more than 5 seconds) of the [**ENTER**] button will enter **CONFIGURATION MODE**
  
----

----
## LED Signalling (NORMAL MODE)

----

1. ANT Searching/Connection
   When the remote is searching for either an ANT+ LEV or an ANT+ Controls connection, the **RED LED** will slowly flash. When a connection is made, the **RED LED** will quickly flash and then go out.
2. The **GREEN LED** will flash once briefly when the [**PLUS**] or [**MINUS**] keys are pressed to indicate the assist level is changing. if the assist level has reached either 0 or 7, pressing the [**PLUS**] or [**MINUS**] keys key will cause the led to briefly flash **RED** multiple times to indicate the limit has been reached. 
3. If the motor is off, pressing the [**PLUS**] or [**MINUS**] keys will cause a **RED** LED to flash. The assist level will NOT change with the motor off. 
4. The **RED LED** will briefly flash to indicate a long press has been made
5. A very long press (> 5 seconds) of the [**ENTER**] key will flash the BLUE LED for 2 seconds when entering the configuration mode.
6. A long press of the [**POWER**] key will turn the motor ON or OFF. When the motor is initializing, the leds will flash [**OFF-WHITE**]. When the motor is on, the **OFF-WHITE LED** will rapidly flash. If the motor is turning off, the battery state will be displayed. Battery state is indicated by flashing the **GREEN LED**. The number of flashes will indicate battery charge state from from 1 flash (10% charge) to 10 flashes (100% charge).
7. When walk mode is active the **BLUE LED** will flash slowly.

----


----

See controlling a Garmin 1030 bike computer for assist levels and page control using a simulated ANT+ LEV Ebike in this video:

[![video](https://img.youtube.com/vi/s7URIMVzcwc/hqdefault.jpg)](https://www.youtube.com/watch?v=s7URIMVzcwc)

----

See changing the ANT+ LEV Device Number (to connect to only one specific eBike) using the Nordic nRF Connect app in this video:

[![video](https://img.youtube.com/vi/_ALauuDxZuQ/hqdefault.jpg)](https://youtu.be/_ALauuDxZuQ) 

----

nRFConnect is available on the play store [here](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en_CA&gl=US)

----
## [back](./index.md)