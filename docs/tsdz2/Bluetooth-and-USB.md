Serial comms happen at 9600bd, 5V-TTL, binary. 

[Protocol Information](https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/wiki/Communication-Protocol)

# Connecting a Bluetooth Module

# Connecting a USB-Serial Module

# Phone / PC Control software

[EBMDisplay](http://www.wptm.hu/ebmdisplay/) can log on Android to CSV
Tamas writes: 

> I've made two Android apps:
one for original factory firmware
and a very similar but with voltage, ampere, cadence and watts for a slightly modified original factory firmware I call VOAMCA version
Therefore they are not for "casainho's" opensource firmware.
My Android apps can communicate via Bluetooth and USB Serial module, and all data can be logged into .csv. I've already made graphs in Excel out of such .csv.

> it should be clear that my Android apps are compatible with original, or with the VOAMCA firmware versions. 
I have github pages where I share bluetooth module schematic, VOAMCA firmware code with comprehensive documentation. https://github.com/wptm

> My Android apps are not open source, but free for personal use.

# Logging Data

Realterm can log raw data on a PC

[EBMDisplay](http://www.wptm.hu/ebmdisplay/) can log on Android to CSV

## Graphing Data
# Updating Firmware
STM8/32 have a bootloader rom that can update formware through the serial port AFTER it has been enabled using the SWIM/Programmer. Bootloader runs at 115kbd

