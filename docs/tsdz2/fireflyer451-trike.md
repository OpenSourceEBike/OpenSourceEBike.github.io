<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/fireflyer451_trike/ICE-Adventure-2B.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/fireflyer451_trike/ICE-Adventure-4B.jpg>

[Notes by fireflyer451 on
forum](https://endless-sphere.com/forums/viewtopic.php?f=28&t=79788&p=1534492#p1534492):

TSDZ2 with OSF - Recumbent Trike Settings

I am new to the TSDZ2 and this OSF software. So keep this in mind when
reading, feedback is appreciated.

Riding Goals: My riding style is pretty casual. Mainly paved bike paths
and gravel trails around the Denver area, of which there are plenty of
nice ones. My wife also rides a trike, so we use the trikes as a way to
get outside year round, enjoy the trails and scenery, and cover some
nice distances. The very top speeds on these bike trails are 20 mph, and
normally between 10 and 16 mph. So a top end 25+ mph riding speed on
level ground is not my goal. Biking is NOT our primary form of exercise.
Also, my knees are not in good shape, so mashing pedals is just no fun
for me. I want to ride with light to medium pressure on the pedals. My
comfortable cadence is between 70 & 75.

My previous trike has a Bafang BBS02 750 watt motor, and I spent time
tuning it, and like riding it very much. The tuned Bafang is now not
that much different in feel from the TSDZ2, but it definitely uses more
battery. But with the e-assist I can go out and ride 40 miles and enjoy
it the whole time. And better yet, afterwards I can still walk, because
my knees still work!

I want an e-assist to augment the leg forces, but not require me to
crush the pedals to make it all work. I do not want a moped either, the
pedaling and spinning is actually very good for my knees/legs. So with
that, here goes my process.

Initial Testing - Human power: test riding on level ground at a
comfortable cadence of 70 - 75 resulted in about 70 Watts of human
power. This is well below the 100 Watts mentioned in the Endless Sphere
(ES) discussion. This makes sense, because I am \'sitting down\' :)
while riding. I can provide more force by pressing harder on the pedals,
but this is not the way I want to ride.

Installed Components: TSDZ2 48 volt system, 48 volt 17.5AH battery, ICE
Adventure trike with full suspension, Big Apple 2.1\" tires 26\" in
rear, 20\" up front, TSDZ2 750 watt motor, 42T Wide/Narrow chain ring,
10 speed 11-36 Shimano cassette, no front derailleur, Brake sensors on
both brake handles, Gear sensor

Torque Sensor Calibration: I followed the steps here:
<https://github.com/OpenSource-EBike-fir> \... que-sensor The
interesting points here are that the testing method assumes an upright
bike, where the forces are vertical. With a trike you are sitting and
peak forces seem to be horizontal, when the pedal is furthest away from
your body. Given this, I tried to measure forces/weight using a digital
bathroom scale. Awkward at best trying to balance the scale on the pedal
and push\.... it really did not work. So I pressed on the pedal and
developed a \'feel\' for that pressure. Then I pressed on the digital
scale in the same way. The result being when pushing hard resulted in
about 90 lbs of force. Also I did rotate the pedals through 360 degrees
to get the ADC values at minimum and maximum, then interpolate the 8
values in between.

What I found was that the ADC curve was much flatter than the values
casainho (OSF developer) used. My ADC range is 137 to 160.

Assist Level Settings: The corresponding Assist levels are tuned to my
needs (read: my knees!). I would say I feel light pressure on the
pedals, depending on the gear I am using. When I feel like the pedal
pressure is rising I simply shift to a lower gear.

The result is that for my comfortable cadence of 70 - 75, riding on
fairly level ground in Assist level 3 or 4 gives me a speed of between
12 - 15 mph, and assist power of 170 watts. Pedal pressure is light and
comfortable but definitely present. I started with higher weight values
(100 lbs max) in the \'Torque Sensor\' settings, but reduced it to make
the knee pressure more comfortable. I rode 20 miles with the 100 lbs
maximum weight value (and other default values), and the result was
uncomfortable afterwards. More tuning and reduction in pedal pressure
was the next step.

The 850c display is great in that it displays \'Human\' and \'Assist\'
power in Watts, so you can clearly see the boosted assistance while
riding. My goals are to keep the continuous boosted watts below 400,
which is very easy to do. I only see this when climbing very steep
inclines AND I mash on the pedals. Staying in a low gear and pedaling
comfortably keeps the Watts used down. It may be slow but it gets up the
hills, no problem.

I hope this helps in tuning your recumbent trike with the TSDZ2 and OSF.
