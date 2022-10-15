\_\_TOC\_\_

# Wire the STLinkV2 to the TSDZ2 wheel speed sensor cable {#wire_the_stlinkv2_to_the_tsdz2_wheel_speed_sensor_cable}

The microcontroller chip that need to be flashed with the firmware is
the STM8S105. The needed wires from the STLinkV2 are GND, 5V and SWIM,
which are to be connected to pins on the plug for the wheel speed sensor
cable.

You can either connect directly to those pins, or acquire and set up a
plug to connect to that cable.

NOTE: the wires from the STLink should be short, like 10 centimeters, or
you will probably get errors while trying to flash. If you need a long
cable, try to use an USB extension instead.

## To connect directly: {#to_connect_directly}

This is quite straightforward using female-ended jumper cables as are
typically supplied with the STMLink adapter. See [this Youtube
video](https://youtu.be/S2SRKu6-Qyw), but in summary

1.  Remove the black plastic ends from one end of the jumper leads by
    lifting the small retaining tab and gently slipping them off to
    leave the metal connector underneath
2.  put heatshrink over the metal ends to prevent shorts (not essential,
    but wise)
3.  slightly enlarge the holes since the motor plug pins are a little
    thicker than male jumper lead ends, e.g. by inserting a male jumper
    rotated 45 degrees.
4.  **Disconnect your battery before connecting**. At least some ST Link
    clones will be damaged otherwise and will then appear to work, but
    will not connect.
5.  Connect them in as follows with the flat of the cable plug at the
    bottom:
    1.  GND to the bottom left pin
    2.  SWIM to the bottom right pin
    3.  5V to the top pin (note some users have found connecting to 3.3V
        output pin from ST Link to work if 5V does not)
    4.  SWIM_RST to bottom center pin (optional, can help in case
        flashing does not succeed)

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/TSDZ2_speed_Sensor_Pinout.jpg>

## To acquire and make a plug to connect: {#to_acquire_and_make_a_plug_to_connect}

You may wish to do this if you frequently flash your motor or dislike
the direct pin connection method above. Some options are:

1.  buy an extra speed sensor and cut the sensor from the cable and so
    you will have a cable with a connector that you can use only for
    programming - be careful, it appears some speed sensors (eg with Y
    Splitter for light cables) do not have the wires connected required
    for flashing
2.  buy a speed sensor extension cable (have not confirmed myself if all
    wires for flashing are present)
3.  cut the cable to wire the needed wires for flashing and keep the
    other wires intact - this will work perfectly and you can avoid to
    buy the extra wheel speed sensor

Here is the list of wires: The connections to STLinkV2 clone:

-   purple wire connect to STLinkV2 RST pin (Potentially optional, did
    not appear to be needed flashing from Windows)
-   orange wire connect to STLinkV2 GND pin
-   black wire connect to STLinkV2 SWIM pin
-   brown wire connect to STLinkV2 VCC/5V pin (Optional - For those who
    want to flash without a battery attached)

Example of my wiring:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/STLinkV2_to_TSDZ2_motor_controller-01.png>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/STLinkV2_to_TSDZ2_motor_controller-02.png>

# Download and flash the firmware {#download_and_flash_the_firmware}

1.  [Download STVP for Windows
    here](https://www.st.com/en/development-tools/stvp-stm32.html). This
    software is from the STM8S105 manufacture for flashing the firmware.
    NOTE: if you are on Linux or MAC, you can use other alternative
    tool. For instance, [on Linux you can use
    stm8flash](https://opensourceebikefirmware.bitbucket.io/development_tsdz2/Various--2018.04.18_-_original_firmware_and_debug_session_using_OpenOCD.html).
2.  [Download the firmware hex file from
    here](https://github.com/OpenSource-EBike-firmware/Color_LCD/releases).
    Pick the file with name TSDZ2_xxxxxxx.hex.
3.  Flash the firmware (Program Memory tab) with the motor controller
    powered on. Select the proper processor type, both the TSDZ2
    controller and the LCD3 display use a stm8s105x6 processor.

If flashing does not work, try turning on the display.

NOTE: sometimes the microcontroller on the TSDZ2 motor controllers stops
to working (this can happens when we disconnect the battery or something
like that), we can´t program it anymore. The way to recover is by
programming the option bytes to some default value.

## Flash firmware on Linux {#flash_firmware_on_linux}

Both the TSDZ2 and the LCD3 use a stm8s105x6 processor.\
NOTE: when running stm8flash and if you are using for instance Linux
Ubuntu, you may need to run it using \'sudo stm8flash xxx\' to get the
stm8flash working.

### Installing stm8flash on linux {#installing_stm8flash_on_linux}

I found that there was no package available to install stm8flash using
ubuntu. Instead I installed stm8flash from source. Do something like the
following:

`% git clone `[`https://github.com/vdudouyt/stm8flash.git`](https://github.com/vdudouyt/stm8flash.git)\
`% cd stm8flash`\
`% make`\
`% make install`\
You should then find that the smt8flash command is available:

`% stm8flash`\
`Usage: stm8flash [-c programmer] [-S serialno] [-p partno] [-s memtype] [-b bytes] [-r|-w|-v] ``<filename>`{=html}`...`\

### Backup existing firmware {#backup_existing_firmware}

First backup everything (just to be sure):\
`stm8flash -c stlinkv2 -p stm8s105?6 -s opt -r TSDZ_orig_opt.bin`\
`stm8flash -c stlinkv2 -p stm8s105?6 -r TSDZ_orig.bin`\
`stm8flash -c stlinkv2 -p stm8s105?6 -s eeprom -r TSDZ_orig_eeprom.bin`\
Erase protection:\
`echo "00 00 ff 20 df 00 ff 00 ff 00 ff 00 ff 00 ff" | xxd -r -p > option_bytes_pwm_n_channels_enabled.bin`\
`stm8flash -c stlinkv2 -p stm8s105?6 -s opt -w option_bytes_pwm_n_channels_enabled.bin`\

### Flash firmware {#flash_firmware}

`stm8flash -c stlinkv2 -p stm8s105?6 -w TSDZ2-vxxx.hex`\
NB: This did not work for me on linux ubuntu (buster/sid). I got the
following error:

`% stm8flash -c stlinkv2 -p stm8s105?6 -w TSDZ2-v1.1.1.hex`\
`Determine FLASH area`\
`Due to its file extension (or lack thereof), "TSDZ2-v1.1.1.hex" is considered as INTEL HEX format!`\
`30555 bytes at 0x8000... Tries exceeded`\
`%`\
I needed to convert the hex formatted file above ([intel hex
format](https://en.wikipedia.org/wiki/Intel_HEX)) to a binary file with
the following command:

`objcopy -I ihex -O binary TSDZ2-vx.y.z.hex TSDZ2-vx.y.z.hex.bin`\
You can now take this newly created file (TSDZ2-vx.y.z.hex**.bin**) and
use that to flash the microcontroller instead:

`stm8flash -c stlinkv2 -p stm8s105?6 -v TSDZ2-vx.y.z.hex.bin`\

### Restoring a backup {#restoring_a_backup}

`   # Erasing protection`\
`   echo "00 00 ff 20 df 00 ff 00 ff 00 ff 00 ff 00 ff" | xxd -r -p > option_bytes_$`

`   # programming option bytes`\
`   stm8flash -c stlinkv2 -p stm8s105?6 -s opt -w TSDZ_orig_opt.bin`

`   # programming eeprom`\
`   stm8flash -c stlinkv2 -p stm8s105?6 -s eeprom -w TSDZ_orig_eeprom.bin`

`   # Programming firmware`\
`   stm8flash -c stlinkv2 -p stm8s105?6 -w TSDZ_orig.bin`

### Troubleshooting

#### SWIM error 0x05 {#swim_error_0x05}

Make sure you have the SWIM_RST (reset) pin connected between controller
and STLINKv2.

#### SWIM error 0x04 {#swim_error_0x04}

Check the connection between controller and STLINKv2. A cable might be
loose or have bad connection.
