STLinkV2 is the programmer to use to flash the TSDZ2 motor firmware and the NRF52840 board bootloader.

![stlink](stlinkv2.png)

You can buy STLinkV2 clones on EBay or Aliexpress for very cheap prices like 2€ (shipping included)

Whilst the cases look the same, there appear to be several different designs of boards inside with different microcontrollers. A few users have reported problems. If you buy one that has issues - you may be able to fix it by updating the firmware - see Troubleshooting below.

Some suggestions to buy STLinkV2:
* you can buy from EBay or Aliexpress and search for "STLinkV2"
* since they are really cheap, buy a few units
  * buy from different sellers and only 1 unit from each seller in case one doesn't work.

## Troubleshooting

If you have issues using your STLinkV2 clone adapter - try updating the firmware to the latest version.

You can get firmware from STMicroelectronics' [website](https://www.st.com/en/development-tools/stsw-link007.html). Note - if you are using a clone this is not supported by the manufacturer. **Use at your own risk.**



The update tool will show you the current firmware version of your adapter:

![firmware](stlink_fwupdate.png)

### Known issues using STLinkV2 clones to update OpenSourceEBike firmware.
If openocd throws the below error when trying to flash any of the EBike firmware then update the STlinkv2 firmware to the latest version using the instructions above.

`Error: ST-Link version does not support DAP direct transport`

If you get the below error when running openocd to update EBike firmware - make sure you are using the full paths for all referenced target/device scripts as arguments for the openocd command line. The exact paths depend on how you have installed or compiled openocd - and the OS you are using.

`Error: invalid command name "dap"`

See the following link for more information and other solutions for the above error : https://stackoverflow.com/questions/53714503/openocd-error-invalid-command-name-dap-cant-connect-blue-pill-via-st-link
