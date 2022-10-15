The torque sensor calibration coefficient is derived from a single unit measured by Casainho.

[Analysis of Torque Sensor design](https://www.pedelecforum.de/forum/index.php?threads/funktionsprinzip-drehmomentsensor-im-mittelmotor-sfm-du-250-p-tsdz2.45029/)  (in german)
[translate to english](https://translate.google.com/translate?sl=de&tl=en&js=y&prev=_t&hl=en&ie=UTF-8&u=https%3A%2F%2Fwww.pedelecforum.de%2Fforum%2Findex.php%3Fthreads%2Ffunktionsprinzip-drehmomentsensor-im-mittelmotor-sfm-du-250-p-tsdz2.45029%2F&edit-text=)

# Performance
* Interchangeability: Unknown
* Linearity and Interchangeability of TSDZ2 Sensors: Unknown
* Temperature Stability: unknown

# Static Torque Calibration Methods


## Spanner + Spring Balance

* Requires things you probably have directly on hand
* balance accuracy is needed
* difficult to get reproducible or accurate results

[Casainhos Technique](https://endless-sphere.com/forums/viewtopic.php?f=30&t=93818&p=1427541#p1427176)

## Weight + Lever Arm
* Accurate
* Reproducable
* No special calibrated equipment needed.
* Need to make simple jig and get 5kg weight.

 Make some hooks (or cable tie to the crank) so a wooden arm hangs off one pedal crank horizontally facing forward.
Hang a gym weight off the end. (This is a 2 person job)

You can zero by either unhooking the arm, or (if cable tied) , rotate until the arm is vertical so exerting no torque.
```
Torque= 9.8*N/kg * (GymWeight.kg** distance-from-axis.m + Wood-weight*WoodLength/2)
```

5kg at 1m + 2kg wood ~=60N.m 

     Power (W) = Torque (N.m) x Speed (RPM) 1000/ 9.5488


# Power Measurement

## Hill Climb

The hill climb seems a good way to measure power without needing anything to be calibrated. (as long as you live somewhere with hills, or a multi-storey carpark with tight ramps).
```
Energy(J)=mass(kg)*G(9.81)*height(m)
Power=E(J)/T(secs) 
PedalPower= Power/ efficiency. 
```
0.85 overall efficiency seems a reasonable guess for rolling resistance+powertrain loss+low speed wind resistance

So for my ride up the hills which is 514m climb, taking 60min, 

      514m*118kg*9.81*3600secs = 198W overall. (and 680cals food @25% efficency)

Made some measurements during todays ride: 31m climb at the start = 361W. 183m climb at the end=254W.
