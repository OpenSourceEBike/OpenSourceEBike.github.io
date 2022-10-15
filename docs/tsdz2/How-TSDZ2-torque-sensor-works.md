Video illustration on how the torque sensor works: https://www.youtube.com/watch?v=mK3fbxvDF3I

sysrq wrote: ↑Mar 11 2019 12:20pm
Does anybody know how the tsdz2 torque sensor rotary transformer can work only with two wires?
https://www.omega.com/literature/transa ... orce3.html
http://www.sensorland.com/HowPage075.html
I showed it to a very smart electrical engineer at work, and he was impressed by the simplicity.

Here is what he said in non-technical language:

The two coils are, as you said, a transformer. An alternating current on the bike side induces an alternating current in the rotating coil. The controller feeds an alternating current to the fixed coil. It has to be alternating current because transformers only work with alternating current.

The fact one coil is rotating and the other is stationary makes no difference. The power across the transformer is unchanged with rotation.

The distance between the coils is important. That is why they are faced with low friction material and rub. Contact keeps the distance constant and is not a problem at crank rpm levels.

The torque is sensed by a hall effect sensor and a magnet, arranged and mounted so torque on the cranks flexes the steel in a way that moves the two with respect to each other. A hall sensor and magnetic can be very sensitive to very small movements.

The sensor sensor draws more and less power with magnet position. In effect the sensor is an electrical load that varies with torque. The load is powered by the current passed through the transformer.

The controller reads the torque by measuring the current going to the sensor. Since electrical load varies with torque current varies as well. So the signal is the power draw. Clever! No separate signal connection needed.

In the most basic terms:
1. Use a transformer to carry power across a moving interface without sliding contacts.
2. Make an AC torque sensor that varies electrical load with torque.
3. Measure current to the sensor.

It is well designed for an ebike, robust and inexpensive. It is not how an instrumentation grade sensor would be made. Hall effect sensors are susceptible to nearby magnetic fields, strain gages would be more linear and resistant to magnetic interference. The rubbing coils might bounce or generate heat at high rpm, precision guidance and an air gap could be added. The mechanical design of the axle could be improved to improve linearity. But these changes cost money and add weight and complexity. Accuracy is fine for ebike assist. Many ebike torque sensors make worse compromises.

Some only measure torque applied to one crank, the TSDZ2 sensors measures both. Some ebike sensors measure bending forces on the axle as well as torque. The TSDZ2 mechanical isolates torque pretty well. If it was being sold as a separate torque sensor I think it would be towards the high end.

A lot of good electrical and mechanical design went into the TSDZ2.