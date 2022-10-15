# BESST Software

BESST is the name for both the official BAFANG diagnostic software and the associated software tool.

Included are Binaries for different BESST versions and the (Javascript) sourcecode residing inside the app.asar electron application (the actuall BESST software sourcecode)

## Login Bypass

Included is a special bypass program to login to BESST with every credential you want and get unlimited access to the tools.
It requires python3 and the following python (pip) packages: simplejson and socketserver
To run the script, edit your system hostfile (`C:\windows\system32\drivers\etc\hosts` for example) to point `api.besst.bafang-service.com` to `127.0.0.1`


## BESST Reverse Engineerd

*aka Parameters 6011/6012/6017/6018*

This is the procedure to read and write the operating parameters of the controller, for the moment we have not been able to make it work.

### Can messages to read the parameters from the controller

```
05116011
05116012
05116017
05116018
```

### Can messages to write the parameters to the controller

```
05106011 + Bytes Value
05106012 + Bytes Value
05106017 + Bytes Value
05106018 + Bytes Value
```

### Description of the parameters

***
| Battery | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Nominal voltage DCV | 0 | 1 | 6011 | 36/43/48 |
| Maximum current limit when the battery is full A | 1 | 1 | 6011 |
| Overvoltage DCV | 2 | 1 | 6011 |
| undervoltage DCV | 3 | 1 | 6011 |
| Dynamic driving undervoltage DCV | 4 | 1 | 6011 |
| Undervoltage recovery voltage DCV | 5 | 1 | 6011 |
| Battery capacity mAh | 7-8 | 2 | 6011 |
| Maximum current limit when battery is low A | 9 | 1 | 6011 |
| Battery value threshold when the current begins to decrease % | 10 | 1 | 6011 |
| Percentage coefficient of power when the current begins to decay % | 11 | 1 | 6011 |
| Display of the complete mileage of the battery Km | 12 | 1 | 6011 |
***
| Pedal sensor | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Sensor type | 13 | 1 | 6011 | 0/1/2 |
| Reverse brake function | 14 | 1 | 6011 | 0/1 |
| Speed Code Disc Teeth | 15 | 1 | 6011 | 1/2 |
| Number of speed signal channels | 16 | 1 | 6011 | 1/2 |
| Anti-heel pair controls the number of teeth | 17 | 1 | 6011 |
***
| Motor | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Motor type | 18 | 1 | 6011 | 0/1/2 |
| Number of pole pairs | 19 | 1 | 6011 |
| Number of speed magnets | 20 | 1 | 6011 |
| Temperature sensor signal | 21 | 1 | 6011 | 0/1/2 |
| Reduction ratio | 22-23 | 2 | 6011 |
| Maximum speed of rail movement RPM | 24-25 | 2 | 6011 |
| Inductance of the D axis uH | 26-27 | 2 | 6011 |
| Inductance of the Q axis uH | 28-29 | 2 | 6011 |
| Phase limit resistance mΩ | 30-31 | 3 | 6011 |
| Rear EMF coefficient 0.001V/RPM | 32-33 | 3 | 6011 |
| Motor derating temperature °C | 54 | 1 | 6012 |
| Motor overheating temperature °C | 55 | 1 | 6012 |
***
| Throttle | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Start voltage 0.1DCV | 34 | 1 | 6011 |
| End voltage 0.1DCV | 35 | 1 | 6011 |
| Speed limited | 36 | 1 | 6011 | 0/1 |
***
| Speed sensor | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Dinamic current % | 37 | 1 | 6011 |
| Current loading time 100ms | 38 | 1 | 6011 |
| Current load shedding time 100ms | 39 | 1 | 6011 |
***
| Level | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Level 1 - Current Limit % | 40 | 1 | 6011 |
| Level 2 - Current Limit % | 41 | 1 | 6011 |
| Level 3 - Current Limit % | 42 | 1 | 6011 |
| Level 4 - Current Limit % | 43 | 1 | 6011 |
| Level 5 - Current Limit % | 44 | 1 | 6011 |
| Level 6 - Current Limit % | 45 | 1 | 6011 |
| Level 7 - Current Limit % | 46 | 1 | 6011 |
| Level 8 - Current Limit % | 47 | 1 | 6011 |
| Level 9 - Current Limit % | 48 | 1 | 6011 |
| Level 1 - Speed limit % | 49 | 1 | 6011 |
| Level 2 - Speed limit % | 50 | 1 | 6011 |
| Level 3 - Speed limit % | 51 | 1 | 6011 |
| Level 4 - Speed limit % | 52 | 1 | 6011 |
| Level 5 - Speed limit % | 53 | 1 | 6011 |
| Level 6 - Speed limit % | 54 | 1 | 6011 |
| Level 7 - Speed limit % | 55 | 1 | 6011 |
| Level 8 - Speed limit % | 56 | 1 | 6011 |
| Level 9 - Speed limit % | 57 | 1 | 6011 |
***
| System | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| With or without display | 58 | 1 | 6011 | 0/1 |
| The headlights are always on | 59 | 1 | 6011 | 0/1 |
| Boost speed | 60-61 | 2 | 6011 |
***
| Torque sensor | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Starting torque value - 0 Kg | 0 | 1 | 6012 |
| Starting torque value - 1 Kg | 1 | 1 | 6012 |
| Starting torque value - 2 Kg | 2 | 1 | 6012 |
| Starting torque value - 3 Kg | 3 | 1 | 6012 |
| Starting torque value - 4 Kg | 4 | 1 | 6012 |
| Starting torque value - 5 Kg | 5 | 1 | 6012 |
| Torque value at full load - 0 Kg | 6 | 1 | 6012 |
| Torque value at full load - 1 Kg | 7 | 1 | 6012 |
| Torque value at full load - 2 Kg | 8 | 1 | 6012 |
| Torque value at full load - 3 Kg | 9 | 1 | 6012 |
| Torque value at full load - 4 Kg | 10 | 1 | 6012 |
| Torque value at full load - 5 Kg | 11 | 1 | 6012 |
| Return torque value - 0 Kg | 12 | 1 | 6012 |
| Return torque value - 1 Kg | 13 | 1 | 6012 |
| Return torque value - 2 Kg | 14 | 1 | 6012 |
| Return torque value - 3 Kg | 15 | 1 | 6012 |
| Return torque value - 4 Kg | 16 | 1 | 6012 |
| Return torque value - 5 Kg | 17 | 1 | 6012 |
| Maximum current - 0 % | 18 | 1 | 6012 |
| Maximum current - 1 % | 19 | 1 | 6012 |
| Maximum current - 2 % | 20 | 1 | 6012 |
| Maximum current - 3 % | 21 | 1 | 6012 |
| Maximum current - 4 % | 22 | 1 | 6012 |
| Maximum current - 5 % | 23 | 1 | 6012 |
| Minimum current - 0 % | 24 | 1 | 6012 |
| Minimum current - 1 % | 25 | 1 | 6012 |
| Minimum current - 2 % | 26 | 1 | 6012 |
| Minimum current - 3 % | 27 | 1 | 6012 |
| Minimum current - 4 % | 28 | 1 | 6012 |
| Minimum current - 5 % | 29 | 1 | 6012 |
| Decay time of the torque - 0 10ms | 30 | 1 | 6012 |
| Decay time of the torque - 1 10ms | 31 | 1 | 6012 |
| Decay time of the torque - 2 10ms | 32 | 1 | 6012 |
| Decay time of the torque - 3 10ms | 33 | 1 | 6012 |
| Decay time of the torque - 4 10ms | 34 | 1 | 6012 |
| Decay time of the torque - 5 10ms | 35 | 1 | 6012 |
| Start pulse number - 0 | 36 | 1 | 6012 |
| Start pulse number - 1 | 37 | 1 | 6012 |
| Start pulse number - 2 | 38 | 1 | 6012 |
| Start pulse number - 3 | 39 | 1 | 6012 |
| Start pulse number - 4 | 40 | 1 | 6012 |
| Start pulse number - 5 | 41 | 1 | 6012 |
| Current decay time - 0 5ms | 42 | 1 | 6012 |
| Current decay time - 1 5ms | 43 | 1 | 6012 |
| Current decay time - 2 5ms | 44 | 1 | 6012 |
| Current decay time - 3 5ms | 45 | 1 | 6012 |
| Current decay time - 4 5ms | 46 | 1 | 6012 |
| Current decay time - 5 5ms | 47 | 1 | 6012 |
| Maximum pulse Width of pedal speed - 0 2ms | 48 | 1 | 6012 |
| Maximum pulse Width of pedal speed - 1 2ms | 49 | 1 | 6012 |
| Maximum Pulse Width of pedal speed - 2 2ms | 50 | 1 | 6012 |
| Maximum pulse width of pedal speed - 3 2ms | 51 | 1 | 6012 |
| Maximum pulse Width of pedal speed - 4 2ms | 52 | 1 | 6012 |
| Maximum pulse Width of pedal speed - 5 2ms | 53 | 1 | 6012 |
***
| Mountain | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Current loading initial value ms | 48 | 1 | 6017 |
| Relationship between current loading and cadence K1 ms | 49 | 1 | 6017 |
| Relationship between current loading and cadence K2 ms | 50 | 1 | 6017 |
| Relationship between current loading and cadence k3 ms | 51 | 1 | 6017 |
| Relationship between current loading and cadence K4 ms | 52 | 1 | 6017 |
| Constant torque start value mV | 53 | 1 | 6017 |
| Relationship between torque start and cadence K5 mV | 54-55 | 2 | 6017 |
| Minimum torque constant mV | 56-57 | 2 | 6017 |
| Relationship between minimum torque and cadence K6 mV | 58-59 | 2 | 6017 |
| Magnification of the couple | 60-61 | 2 | 6017 |
***
| Do-it-yourself | Bit | Len | Param | Value allowed |
|:--- |:---:|:---:|:---:|:---:|
| Speed limit and current limit 1 Total battery capacity 0.1 Ah | 0-1 | 2 | 6018 |
| Speed limit and current limit 2 Total battery capacity 0.1 Ah | 2-3 | 2 | 6018 |
| Speed limit 1 0.1Km/h | 4-5 | 2 | 6018 |
| Current limit 1 0.1Ah | 6-7 | 2 | 6018 |
| Speed limit 2 0.1Km/h | 8-9 | 2 | 6018 |
| Current limit 2 0.1Ah | 10-11 | 2 | 6018 |
