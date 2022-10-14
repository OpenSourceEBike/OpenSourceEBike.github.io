# Wireless remote

## Schematic

`[![] (ebike_remote_wireless-schematic.png)] (ebike_remote_wireless-schematic.png)`

## How to build wireless remote
You will need to acquire the following components:
* **[Wireless board - nRF52840 Nordic USB Dongle](https://www.nordicsemi.com/Software-and-tools/Development-Kits/nRF52840-Dongle)**: costs 10€ and can be bought in many online shops.<br/>
![](NRF52840.png)<br/><br/>
* **VLCD5 Keypad**: costs 10€, this is the keypad from the TSDZ2 original display. Can be bought in many online shops like EBay".<br/>
`![](VLCD5_keypad.png)`<br/><br/>
* **CR2032 coin cell**: costs 1€, can be bought in any local shop or on EBay or other online shops.
* <br/>
![](cr2032.png)<br/><br/><br/>
## Firmware Installation

Once you have put the board assembled you are now ready to program the wireless bootloader.
follow the instructions [here](https://github.com/OpenSourceEBike/TSDZ2_wireless/tree/master/EBike_wireless_bootloader).
With the bootloader installed you can now program the Over the Air (OTA) updates for the wireless remote located [here](https://github.com/OpenSourceEBike/TSDZ2_wireless/releases)