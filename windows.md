# Flashing with Windows

1. Install [openocd for windows](https://gnutoolchains.com/arm-eabi/openocd/)
2.  From the command window, navigate to the openocd directory, and enter the following command to start the openocd server:
   
    ```
    openocd.exe -f stlink.cfg -f nrf52.cfg -c "program TSDZ2_wireless-bootloader_with_sd-v0.9.0.hex verify" -c "exit"
    ```  
   
    This will flash and verify the write.
    If you see ** Verified OK **, the flashing has been successful.

###Congratulations!

 You now have the bootloader installed on the Nordic board.
 All future firmware upgrades can now be done wirelessly.

 For more information on how to use the bootloader's Device Firmware Update (DFU) process to install a bootloader update or the remote control firmware or the wireless controller firmware, see [Understanding The Bootloader DFU Process](./dfu.md).


## [back](getting_started.md)
