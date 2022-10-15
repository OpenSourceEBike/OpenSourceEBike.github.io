\_\_TOC\_\_

You can install the firmware using a \"bootloader box\" connected to the
display connector (the one the connects to TSDZ2 motor) and to PC.

# DIY bootloader box {#diy_bootloader_box}

If you don\'t want to buy the original bootloader box from the
manufacturer or some shops, you can always use any USB\<-\>UART 3.3V,
like the cheap ones used on Arduino. Also you will need to power the
display with your ebike battery or with a \"power booster board\".

If you decide to use a power booster board, please note that is probably
rated to output 35V max, make sure you stay within the 27-35V range
(unlike the picture below shows) for the output, or you\'ll most likely
strain the on-board voltage regulator for the USB-TTL module and
irreversibly damage it.

User elfnino
[<https://endless-sphere.com/forums/viewtopic.php?f=30&t=93818&start=3875#p1504093>](wrote_on_the_forum "wikilink")
about his own DIY bootloader box that you can take as an example:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/850C-bootloader_box-1.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/850C-bootloader_box-2.jpg>

-   **Display connector**: I recommend to get male to male version of
    the Bafang display extension cable, and use one connector for the
    bootloader box and other to connect 860C/850C with TSDZ2:
    [1](https://www.aliexpress.com/item/32861639327.html). See more
    detailed specification of the connector in the
    `<a href="#Connector">`{=html}next section`</a>`{=html}.
-   **USBtoUART adapter**: there are more types available (for instance,
    search on Ebay for Arduino FTDI cable) I recommend the one on the
    picture (CP2102 USB-TTL board) with diamond like chip placement.
    Other types might be more sensitive to AC power supply of your PC or
    laptop: [2](https://www.aliexpress.com/item/32288431622.html)
-   **power booster board (Step Up buck DC booster)**: (optional, only
    needed if your prefer to not use your ebike battery to power the
    display) needed to power 860C/850C directly from the USB 5V supply,
    make sure there is at least 27V available on the booster output:
    [3](https://www.aliexpress.com/item/32807600304.html)

## Connector

The connector on the display is the HIGO mini-B (also known as Julet
Gen-1, or simply e-bike 6 mm round waterproof connector) 5-pin
(green---this series of connectors is colour-coded according to the
number of pins (both male and female are the same colour)). The display
has a female connector, so you will need to buy a
`<b>`{=html}male`</b>`{=html} connector. You can find one on Ebay or
Aliexpress, and also on many other online shops.

  ---------------------------- ------------------------------------
  **Bafang 860C/850C wires**   **motor controller wire function**
  brown wire                   (P+) battery voltage
  orange wire                  Vin
  black wire                   GND ground
  green wire                   UART TX motor controller
  white wire                   UART RX motor controller
  ---------------------------- ------------------------------------

Note that \"PL\" label on the following image is the same as \"Vin\":\
<https://github.com/OpenSource-EBike-firmware/Color_LCD/raw/master/Bafang_color_LCD_860C/850C_860C_connector.jpg>

# Flash firmware {#flash_firmware}

0\. Your operating system may or may not have automatically installed a
driver for the USB to UART adapter. If you are using the one recommended
above, it is either the same or similar as the one used in the Eco
Cycles box, so the driver download they recommend will also work for us
(https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers).

1\. download our most recent firmware here (860C /
850C_vx.x.x-bootloader.bin):
<https://github.com/OpenSource-EBike-firmware/Color_LCD/releases>

2\. follow the guide written Eco Cycles (sorry, Windows software only)
for how to install the firmware (use version you did download on 1.):
<https://www.eco-ebike.com/blogs/eco-cycles-instructionals/850c-tsdz2-open-source-firmware-bootloader-update-tutorial>

After you have selected the firmware file for 850c display with the
\"OpenFirmWare\" button and pushed the \"UpdateFirmWare\" button, if the
Activity Log shows \"waiting\...\" repeatedly, even after a quick press
of the power button on the display, check that the display LCD screen
shows nothing but black. If the flashing does not start and the message
in the program kept repeating \"waiting\...\", you might be able to get
some information from your USB to UART device (for example, some devices
have LEDs that can show voltage present on transmit or receive. If you
power the display on and off with a long press of the power button, you
may see LED behavior to help you determine the problem). Also, while the
APT software is waiting, the numbers values near the APT window at the
bottom labelled \"Tx\" are constantly increasing, while number near the
window labelled \"Rx\" stays at \"0\". This means that there is a
problem with Tx and/or Rx connection. Check your wiring for breaks or
reversal and try again.

(The Tx count was going up, while the Rx stayed at zero, however, after
switching the display on using the remote power button, the Rx count
started going up. I kept switching the display on and off until the
update started proceeding. It only took several power cycles.)
