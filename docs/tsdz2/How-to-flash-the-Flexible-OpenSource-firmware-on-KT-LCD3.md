Please follow the next steps to be able to flash the firmware.

\_\_TOC\_\_

# Buy STLinkV2 clone {#buy_stlinkv2_clone}

To be able to flash the firmware (both for TSDZ2 motor controller and
KT-LCD3), you will need the cheap clone of STLinkV2, that you can buy on
EBay as cheap as 2.3€.

**WARNING:** we found that some STLinkV2 clones can\'t flash very well
the motor controller while other do it well. A good idea is to buy like
3 different STLinkV2 clones, from different shops.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/STLinkV2_clone.png>

# Wire the STLinkV2 to the LCD3 {#wire_the_stlinkv2_to_the_lcd3}

Open the LCD3 and find the flashing pins top right side with label J7.
From left to right on J7 pins, connect the following pins:

-   pin1: connect to STLinkV2 5V pin
-   pin2: connect to STLinkV2 SWIM pin
-   pin3: connect to STLinkV2 GND pin
-   pin4: connect to STLinkV2 RST pin

Some pictures:
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-05.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-04.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-05.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-02.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/KT-LCD3_flash_firmware-01.jpg>

# Download and flash our firmware {#download_and_flash_our_firmware}

1.  [Download ST Visual Programming utility for Windows
    here](https://www.st.com/en/development-tools/stvp-stm32.html). This
    software is from the STM8S105 manufacture for flashing the firmware.
    NOTE: if you are on Linux or MAC, you can use other alternative
    tool. For instance, [on Linux you can use
    stm8flash](https://opensourceebikefirmware.bitbucket.io/development_tsdz2/Various--2018.04.18_-_original_firmware_and_debug_session_using_OpenOCD.html).
2.  A video tutorial is [1](https://youtu.be/bxEHDFCaKH8)
3.  [Download the firmware hex file from
    here](https://github.com/OpenSource-EBike-firmware/TSDZ2-Smart-EBike/releases).
    Pick the file with name KT_LCD3_xxxxxx.hex.
4.  Erase the STM8 as this way the read protection will be disabled. If
    you don\'t disable the read protection/erase, next step will fail.
5.  Finally, flash the firmware.

## Flash firmware on Linux {#flash_firmware_on_linux}

The process is the same as how to [Flash the firmware on
TSDZ2](Flash_the_firmware_on_TSDZ2 "wikilink"), using the appropriate
hex file for the LCD3
