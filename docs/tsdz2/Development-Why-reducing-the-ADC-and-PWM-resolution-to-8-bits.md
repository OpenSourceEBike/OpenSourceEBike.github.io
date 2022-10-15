This notes were written on 2019.06.17 by Casainho.

When I started this firmware, I had already developed a lot of it on the
KT motor controllers OpenSource firmware. The TSDZ2 motor controller
uses the same 8 bits 16MHz microcontroller STM8S105xx and so I just
reused the most part of the code. The mainly big difference is the way
the \"low resolution FOC\" algorithm is implemented because KT motor
controllers has a specific part of the hardware to do it and on TSDZ2 it
was to be done on a different way.

The STM8S105xx PWM channels that are in use have 16 bits resolution but
I decided to use only 8 bits. The ADC channels have the resolution of 10
bits but I decided to use only 8 bits. The main advantages of using 8
bits are:\
\
**1. Faster processing speed**\
This microcontroller is very limited in terms of processing speed and to
handle FOC we need to do it fast as possible. Also, we would like to
increase the PWM frequency to make possible the motor to rotate faster
with higher voltage and for that, we need more processing speed.

If not using the 8 bits resolution, the variables would be of 16 bits
and the processing time would increase to a factor like x5 \-- this
would mean that probably FOC could not be implemented or would be worst
resulting in the motor having less torque and the battery range would be
lower.\
\
**2. Low pass filter of analog signals**\
This motor has wires with high peak currents and PWM high frequency,
meaning the electric signals should be noisy.

On the analog signals measured by the ADC, the first 2 bits of the 10
bits are being discarded and this results in a fast way that filters the
noisy analog signals.\
\
\'\'\'3. Reducing programming memory usage\
This microcontroller has very low memory size and so we need to save it
if we want to implement advanced features like FOC.

The operations with 16 bits would increase to a factor like x4 the
programming memory usage comparing to the 8 bits.\
