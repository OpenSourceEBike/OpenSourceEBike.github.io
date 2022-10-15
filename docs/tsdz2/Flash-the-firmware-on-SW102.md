The firmware on SW102 can be flashed by Bluetooth (and you will do that
every time you will want to update the firmware to a new version), BUT,
only after our bootloader and firmware are flashed a first time using
SWD connection \-- see here how to do it: [Flash the bootloader and
firmware on SW102 using
SWD](Flash_the_bootloader_and_firmware_on_SW102_using_SWD "wikilink").

# Flash SW102 firmware using bootloader {#flash_sw102_firmware_using_bootloader}

Follow the next steps every time you want to update the firmware to a
new version:

1.  install \"nRF Connect\" from your appstore of choice
2.  [download our sw102-otauptdate-xxx.zip file onto your phone (do not
    unzip)](https://github.com/OpenSource-EBike-firmware/Color_LCD/releases)
3.  press and hold the M key on the SW102, then press and hold the power
    button. Keep both buttons pressed down for at least eight seconds.
    You can then release the buttons. You will know you are in the
    bootloader if the screen stays dark.
4.  run the \"nRF Toolbox\" app, click on SW102_DFU connect and then
    click on \"DFU\" (for device firmware upgrade) as seen on next
    pictures:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_firmware_flash_Bluetooth-1.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_firmware_flash_Bluetooth-2.jpg>

1.  when it prompts you to ask what sort of \"scope\" choose
    \"application only\" and then select our ZIP file
2.  click on \"ok\" and the firmware will be uploaded and flashed in the
    end, as seen on next picture:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/SW102_firmware_flash_Bluetooth-3.jpg>

1.  after the upload and flash completes, turn your bike completely off
2.  then start your new SW102 load as normal (a long press on the power
    button)
