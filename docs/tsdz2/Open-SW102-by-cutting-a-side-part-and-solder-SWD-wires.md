To open SW102, cut a side part as seen on the following pictures. Please
be careful when removing this side part as in the end you will put it
back and glue it, so, avoid any damage to this part.

Use a hand saw for metal and to cut the side part:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_solder_SWD_wires-01.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_solder_SWD_wires-02.jpg>

Break the side part break, you can pull it with pliers. Here are exposed
the pads of SWD pins. I had to I pull with pliers a small rubber sheet
and had to cut a bit of the plastic with a cuter knife so I could have a
better access to the pads using a fine tip of a soldering iron:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_solder_SWD_wires-03.jpg>

Finally I soldered carefully the 3 wires for STLinkV2 and made sure
there was no short circuits on them before power up the SW102 from the
battery.

Solder the wires from the STLinkV2 as follows:

  SW102   ST-LINK
  ------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  GND     GND (pad number 4, when start counting from left side on the bellow picture, black wire)
  CLK     SWCLK (pad number 3, when start counting from left side on the bellow picture, white wire)
  DIO     SWDIO (pad number 2, when start counting from left side on the bellow picture, gray wire)
  3V3     3.3V (Optional, no need to wire if you are power up the SW102 from the battery. Pad number 1, when start counting from left side on the bellow picture, not connected on the picture)

Note that I am not using the 3V3 as I am powering the SW102 from battery
\-- I think this is better as it is one less wire to solder.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_solder_SWD_wires-04.jpg>

After flashing the bootloader and the firmware, it runs!! Now you can
remove the SWD wires as you should never need them again:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_solder_SWD_wires-05.jpg>

Finally you can use the side part previously removed and glue it with
black silicone (you can probably buy it on a local shop). After all
this, the key pad is working perfectly as original:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_solder_SWD_wires-06.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_solder_SWD_wires-07.jpg>
