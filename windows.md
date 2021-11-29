# Flashing with Windows

1. Download [openocd for windows](https://gnutoolchains.com/arm-eabi/openocd/) and unzip the file on your PC desktop
2. Copy the resulting folder to a convenient place on your PC. For ease of access use C:/
3. Rename the folder openocd
4. Copy the Wireless Bootloader .hex file you have previously downloaded into c:/openocd/bin
5. In the Windows search box enter cmd to open a command prompt
6. Enter cd C:/openocd/bin
7. Enter the following. (All in one line)

```openocd.exe -f ../share/openocd/scripts/interface/stlink.cfg -f ../share/openocd/scripts/target/nrf52.cfg -c "program bootloader.hex verify" -c "exit"```

8. This will flash and verify the write. If you see ** Verified OK **, the flashing has been successful.

### Congratulations!

 You now have the bootloader installed on the Nordic board.
 All future firmware upgrades can now be done wirelessly.

 For more information on how to use the bootloader's Device Firmware Update (DFU) process to install a bootloader update or the remote control firmware or the wireless controller firmware, see [Understanding The Bootloader DFU Process](./dfu.md).