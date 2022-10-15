Please follow the next steps to be able to flash the firmware.

\_\_TOC\_\_

**WARNING:** There is no way to backup the original bootloader and
firmware. Once you erase, booth original bootloader and firmware you
will be erased forever.

# Open the SW102 and solder SWD wires {#open_the_sw102_and_solder_swd_wires}

There are 2 ways to open and the recommended one is by cutting a side
part because in the end the SW102 will be same water resistant just like
original. Also developers will be able to debug while use the keypad.

1.  [Open SW102 by cutting a side part and solder SWD
    wires](Open_SW102_by_cutting_a_side_part_and_solder_SWD_wires "wikilink")
2.  [Open SW102 by cutting keypad base and solder SWD
    wires](Open_SW102_by_cutting_keypad_base_and_solder_SWD_wires "wikilink")

# Download the firmware {#download_the_firmware}

Download the latest version of the firmware from
[1](https://github.com/OpenSourceEBike/SW102_LCD_Bluetooth/releases).
You will only need the \`sw102-full-x.y.z.hex\` file for now (the latest
as of writing this line is \`sw102-full-0.19.17.hex\`). For any later
updates you\'ll just use our bluetooth bootloader and update the
software via your Android or iOS phone.

# ST-LINK driver (Windows only) {#st_link_driver_windows_only}

Before connecting the ST-LINK to your machine, download the driver
[2](https://www.st.com/en/development-tools/stsw-link009.html). Scroll
down to the bottom of the page to the \"GET SOFTWARE\" section and
download \"STSW-LINK009\".

# Standalone flash method (Windows only) {#standalone_flash_method_windows_only}

For Windows we packed a stand alone flash program. Download [this zip
file](https://github.com/OpenSource-EBike-firmware/Color_LCD/blob/master/Bafang_LCD_SW102/SW102_First_Install_Windows.zip)
and unzip it somewhere on your computer. Download the latest full
version hex file from
[3](https://github.com/OpenSource-EBike-firmware/SW102_LCD_Bluetooth/releases)
into the unzipped \"SW102_First_Install_Windows\" folder.\
Now you can hit \"start.bat\" and follow the instructions on the
screen!\
Common error message are:\
\
No STLink connected at all (or no drivers installed):
<https://github.com/OpenSource-EBike-firmware/Color_LCD/blob/master/Bafang_LCD_SW102/STLink_ErrorNoDevice.jpg>

Connection to the SW102 wrong or bad:
<https://github.com/OpenSource-EBike-firmware/Color_LCD/blob/master/Bafang_LCD_SW102/STLink_ErrorWires.jpg>

If everything went well it should look like this:
<https://github.com/OpenSource-EBike-firmware/Color_LCD/blob/master/Bafang_LCD_SW102/STLink_FlashingOK.jpg>

# Manual flash method (Windows/Linux/MacOS) {#manual_flash_method_windowslinuxmacos}

## Install OpenOCD {#install_openocd}

OpenOCD is a great free tool that we will use to talk to the SW102 with
the ST-LINK.

Windows: [the binaries from
here](http://gnutoolchains.com/arm-eabi/openocd/%7Cdownload).

Linux: e.g. on ubuntu/debian \`\`\` sudo apt install openocd \`\`\`

MacOS: e.g. with Homebrew \`\`\` brew install open-ocd \`\`\`

## Test the electrical connection {#test_the_electrical_connection}

It\'s time to connect your ST-LINK, your SW102 and your machine! Your
SW102 will turn on (it will take Windows a minute to install the
drivers). If you have the SW102 already connected to your battery pack,
make sure the battery is \*\*OFF\*\* while doing this installation. The
power for your SW102 will come from the ST-LINK \*\*ONLY\*\*.

Windows: \`\`\` openocd -f
..\\share\\openocd\\scripts\\interface\\stlink.cfg -f
..\\share\\openocd\\scripts\\target\\nrf51.cfg \`\`\` Linux/MaxOS:
\`\`\` openocd -f \$(dirname \$(which
openocd))/../share/openocd/scripts/interface/stlink-v2.cfg -f \$(dirname
\$(which openocd))/../share/openocd/scripts/target/nrf51.cfg \`\`\`

You should then see something like this:

\`\`\` Open On-Chip Debugger 0.10.0 \[\...\] Info : STLINK v2 JTAG v29
API v2 SWIM v7 VID 0x0483 PID 0x3748 Info : using stlink api v2 Info :
Target voltage: 3.242857 Info : nrf51.cpu: hardware has 4 breakpoints, 2
watchpoints \`\`\`

If it instead says: \`\`\` Error: open failed \`\`\`

That means your ST-LINK is not found via USB

If it says: \`\`\` Error: init mode failed (unable to connect to the
target) \`\`\`

That means there is something wrong with the four wires from the ST-LINK
to the SW-102.

After confirming OpenOCD can see your board, press ctrl-C to exit.

## Erase/flash

Tip (Linux only): if trying the solderless install option, the utility
\`run-one-until-success\` is very helpful to wrap the command and have
it perpetually retry until it succeeds.

Windows: \`\`\` openocd -f
..\\share\\openocd\\scripts\\interface\\stlink.cfg -f
..\\share\\openocd\\scripts\\target\\nrf51.cfg -c \"init; reset init;
nrf51 mass_erase; flash write_image sw102-full-0.19.xxx.hex;
verify_image sw102-full-0.19.xxx.hex; echo FLASHED; reset halt; resume;
shutdown\" \`\`\`

Linux/MacOS: \`\`\` IMG=\~/Downloads/sw102-full-0.19.17.hex openocd -f
\$(dirname \$(which
openocd))/../share/openocd/scripts/interface/stlink-v2.cfg -f \$(dirname
\$(which openocd))/../share/openocd/scripts/target/nrf51.cfg -c \"init;
reset init; nrf51 mass_erase; flash write_image \$IMG; verify_image
\$IMG; echo FLASHED; reset halt; resume; shutdown\" \`\`\`

Example output from a successful erase/flash: \`\`\` Open On-Chip
Debugger 0.10.0 Licensed under GNU GPL v2 For bug reports, read

`   `[`http://openocd.org/doc/doxygen/bugs.html`](http://openocd.org/doc/doxygen/bugs.html)

Info : auto-selecting first available session transport \"hla_swd\". To
override use \'transport select `<transport>`{=html}\'. Info : The
selected transport took over low-level target control. The results might
differ compared to plain JTAG/SWD adapter speed: 1000 kHz Info : Unable
to match requested speed 1000 kHz, using 950 kHz Info : Unable to match
requested speed 1000 kHz, using 950 kHz Info : clock speed 950 kHz Info
: STLINK v2 JTAG v29 API v2 SWIM v7 VID 0x0483 PID 0x3748 Info : using
stlink api v2 Info : Target voltage: 3.254183 Info : nrf51.cpu: hardware
has 4 breakpoints, 2 watchpoints target halted due to debug-request,
current mode: Thread xPSR: 0xc1000000 pc: 0xfffffffe msp: 0xfffffffc
Warn : Unknown device (HWID 0x000000d6) Info : Padding image section 0
with 2112 bytes Info : Padding image section 1 with 32 bytes Info :
Padding image section 2 with 17680 bytes Info : Padding image section 3
with 428 bytes Warn : using fast async flash loader. This is currently
supported Warn : only with ST-Link and CMSIS-DAP. If you have issues,
add Warn : \"set WORKAREASIZE 0\" before sourcing nrf51.cfg to disable
it target halted due to breakpoint, current mode: Thread xPSR:
0x61000000 pc: 0x2000001e msp: 0xfffffffc Warn : using fast async flash
loader. This is currently supported Warn : only with ST-Link and
CMSIS-DAP. If you have issues, add Warn : \"set WORKAREASIZE 0\" before
sourcing nrf51.cfg to disable it target halted due to breakpoint,
current mode: Thread xPSR: 0x61000000 pc: 0x2000001e msp: 0xfffffffc
wrote 261216 bytes from file \~/Downloads/sw102-full-0.19.17.hex in
5.122993s (49.794 KiB/s) target halted due to breakpoint, current mode:
Thread xPSR: 0x61000000 pc: 0x2000002e msp: 0xfffffffc target halted due
to breakpoint, current mode: Thread xPSR: 0x61000000 pc: 0x2000002e msp:
0xfffffffc target halted due to breakpoint, current mode: Thread xPSR:
0x61000000 pc: 0x2000002e msp: 0xfffffffc target halted due to
breakpoint, current mode: Thread xPSR: 0x61000000 pc: 0x2000002e msp:
0xfffffffc target halted due to breakpoint, current mode: Thread xPSR:
0x61000000 pc: 0x2000002e msp: 0xfffffffc verified 240964 bytes in
1.595816s (147.458 KiB/s) FLASHED target halted due to debug-request,
current mode: Thread xPSR: 0xc1000000 pc: 0x000006d0 msp: 0x000007c0
shutdown command invoked \`\`\`

# Done!

If all went well you can now see the GUI running on our device (with a
simulated motor). If something doesn\'t work please capture any console
output, and describe what happened in a [bug
report](https://github.com/OpenSource-EBike-firmware/SW102_LCD_Bluetooth/issues%7Cgithub) -
we will help.
