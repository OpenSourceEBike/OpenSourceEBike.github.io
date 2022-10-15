Please follow the next steps to be able to flash the firmware.

\_\_TOC\_\_

**WARNING:** There is no way to backup the original bootloader and
firmware. Once you erase, both original bootloader and firmware you will
erased forever.

Download the firmware binary file
(Bafang_LCD_850C_firmware-for_bootloader-vxxx) from here:
<https://github.com/OpenSource-EBike-firmware/Color_LCD/releases>

# How to open the LCD {#how_to_open_the_lcd}

1.  use something thin to force open the front cover, by making force on
    the sides of the case
2.  remove the hard plastic layer that is on top of the LCD
3.  remove the 2 little screws that fix the LCD and the board to the
    case

# Flash the firmware {#flash_the_firmware}

## Buy STLinkV2 clone {#buy_stlinkv2_clone}

To be able to flash the firmware (both for TSDZ2 motor controller and
display), you will need the cheap clone of STLinkV2, that you can buy on
EBay as cheap as 2€.

**WARNING:** we found that some STLinkV2 clones can\'t flash very well
the motor controller while other do it well. A good idea is to buy like
3 different STLinkV2 clones, from different shops.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/STLinkV2_clone.png>

## JTAG SWD connector {#jtag_swd_connector}

The JTAG SWD pins are available on the board, on the pads as seen on
next picture, with the following JTAG pins that you should connect to
the STLinkV2:

+----------------------+---------------------------------------------------+
| **Pad number**\      | **JTAG name**                                     |
| (from left to right) |                                                   |
+----------------------+---------------------------------------------------+
| 1                    | GND                                               |
+----------------------+---------------------------------------------------+
| 2                    | NRST                                              |
+----------------------+---------------------------------------------------+
| 3                    | SWCLK                                             |
+----------------------+---------------------------------------------------+
| 4                    | SWDIO                                             |
+----------------------+---------------------------------------------------+
| 5                    | VCC 3.3V\                                         |
|                      | (no need to connect if LCD is already powered on) |
+----------------------+---------------------------------------------------+

<https://github.com/OpenSource-EBike-firmware/Color_LCD/raw/master/Bafang_color_LCD_850C/Bafang_850C_board-JTAG.jpg>

## Software to flash {#software_to_flash}

To flash the firmware, use the software tool that works on your
operation system to flash the STM32F103 microcontrollers.

On the very first time, you will need to first erase and/or unlock the
microcontroller.

### Linux

Use *OpenOCD*.\

### Windows

Use the **STM32 ST-LINK Utility**. Here the main steps:

-   Target Chip erase
-   Load bin file (load the firmware bin file)
-   Target program
