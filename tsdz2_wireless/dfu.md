# The Device Firmware Update (DFU) Process
The DFU process is done using the [nRF Connect mobile app](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp).

DFU Procedure
------
1.  **Start DFU mode**
     This can be done by entering 0x99 as a configuration variable in either the remote control or wireless controller firmware using bluetooth control.
     You can also initiate DFU mode by holding the board button down for several seconds during a reset. (ie: when power cycling, or pressing the reset button on the board)
   
     Verify the bootloader starts advertising as "TSDZ2_DFU".You’ll need to make sure the package you created in step #7 is accessible on the mobile phone you’re using. Now, connect to the DFU target:

2. **Copy the DFU .zip file for the wireless remote to the phone or to the folder on PC of your choice** 
     This can be done by simply emailing the update file to your device.
   
3. **Use nRFConnect app to connect and do an OTA DFU using the .zip file you copied** 
     To start the process, press the DFU button. Then click “Open Document Picker”Choose the .zip file  
4. **Click the “Start” button** 
     The DFU will begin
   
5. **the DFU process is now complete** 
   Once the DFU process has completed, you should see that your new application (that was part of the DFU package) is now running.

Here is a video showing a wireless DFU for the TZDZ2 remote control:
[![video](https://img.youtube.com/vi/va3LJoiosoc/hqdefault.jpg)](https://youtu.be/va3LJoiosoc)

## [back](getting_started.md)
