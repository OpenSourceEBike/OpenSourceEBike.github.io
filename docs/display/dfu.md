---
sidebar_position: 5
---
# Device Firmware Update (DFU)

The DFU process is done using the [nRF Connect mobile app](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp).

## DFU Procedure


1.  **Start DFU firmware update mode**<br/>
     You can initiate DFU mode by holding the UP and DOWN buttons of the remote while it is off. Then turn it on / power on but keep pressing the UP and DOWN buttons for at least 10 seconds.
     
     Verify the bootloader starts advertising on your phone Bluetooth devices list as "TSDZ2_DFU". Now, connect to the DFU target.

2. **Copy the DFU firmware file .zip to the phone or to the folder on PC of your choice**<br/>
     [First download from here the firmware .ZIP file](https://github.com/OpenSourceEBike/ev_display_bluetooth_ant/releases).
     This can be done by simply emailing the update file to your device.

3. **Use nRFConnect app to connect and do an OTA DFU using the .zip file you copied**<br/>
     To start the process, press the DFU button. Then click “Open Document Picker”Choose the .zip file.

4. **Click the “Start” button**<br/> 
     The DFU will begin.

5. **the DFU process is now complete**<br/> 
   Once the DFU process has completed, you should see that your new application (that was part of the DFU package) is now running.

Here is a video showing a wireless DFU:
[![video](https://img.youtube.com/vi/va3LJoiosoc/hqdefault.jpg)](https://youtu.be/va3LJoiosoc)

