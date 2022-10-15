# Adventure Touring Bike {#adventure_touring_bike}

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/bikesnobyyc-adventure_touring_bike/Lynskey_Ridgeline_2.jpg>

In late 2019, I converted my adventure touring bike to electric using a
TSDZ2 motor with open-source firmware. This bike was originally built
for rougher touring trips and was my trusty companion on a lengthy trip
from Victoria Falls to Cape Town in 2015. I'm quite attached to this
bike because of that trip, but since it wasn't seeing much use recently,
I decided to convert it to electric to breathe some new life into it. I
now use it regularly as a heavy-duty commuter/winter bike, and plan to
do some more touring with it in the future.\
<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/bikesnobyyc-adventure_touring_bike/Lynskey_Ridgeline_1.jpg>

The bike is based on a 2015 Lynskey Ridgeline 29 hard-tail titanium
frame with a 100mm travel fork. To make sure the bike worked for
long-distance adventures, it needed to meet the following objectives:\
\
a) A wide gear range to handle loaded touring, be able to climb steep
hills, and maintain a good pace on flat terrain. The gear range also
needed to be useable in case the motor ever failed or the battery ran
out.\
b) A torque-sensing system to make the bike feel like a normal bike and
only apply power based on pedal input.\
c) A minimum range of 100km on a charge.\
d) Complete flexibility with battery options as I might need to change
batteries while on tour or arrange alternate batteries when I travel by
plane.\
e) Good reliability and available of spare parts.\
f) Although this is specific to this bike, the motor needed to fit into
a PF30 bottom bracket (more discussion on this below).\
\
I decided to go with the TSDZ2 motor with OSF as I felt it would provide
an efficient and reliable solution that met the above objectives. Below
are some notes specific to this build; these would be relevant to other
touring bikes as well, even if they're based on a road bike vs a
hard-tail mountain bike.\
\
1. First, I would recommend a 48V motor and large 52V battery for this
purpose. The TSDZ2 can't handle excessive amperage as that will generate
too much heat for loaded touring. With a 52V battery and the battery
current cutoff set to 15A, this motor can realistically run up to 400W
all day with short peaks of up to 750W. Given the wide gearing (see
below), this keeps the motor cool as long as you use the low gears when
under a lot of load. Although more powerful motor options are out there,
I purposely avoided them due to their weight, lack of torque-sensing,
higher battery draw, and ultimately lower range. To me, the TSDZ2 seems
more than adequate to handle loaded touring as long as you're mindful of
not overworking it. That said, I have not yet tested it in real-world
touring conditions.\
2. I settled on using a double chainring setup with 42/34T front
chainrings and a new 11-42T cassette. This gives the bike a gear range
of roughly 23-109 gear inches (using 700x50c tires), compared to 19-109
before the conversion. That's fine for long-distance touring and gives
plenty of low gears for steep hills or when pedaling without motor
assist (say if you run out of battery charge). The gearing isn't quite
as low as I would want without a motor, but it's low enough to get you
where you need to go if the motor stops for any reason, and it's also
low enough to keep the motor in an efficient gear that avoids
overheating. You can purchase the necessary double spider for the TSDZ2
online and then use regular chainrings for that BCD (bolt circle
diameter). I used a 110BCD spider, but they also come in 104 and 130BCD.
You may see some options available for a triple setup, but I think the
chainline would get too distorted, I would recommend a double setup with
a wider range cassette instead.\
3. Mounting a double chainring has a few considerations. First, it will
throw the chainline outward in the big chainring and this may or may not
be a problem; on my bike, it's best that I avoid using the big chainring
and any of the larger cogs on the cassette as the chainline is quite
off, but this doesn't really matter when riding as there are other
similar gear combinations available in the smaller chainring that work
fine. Second, the current front derailleur will not work with the
chainrings pushed outward as much as they are. For my build, I purchased
a new direct-mount double front derailleur and an extension adapter from
Problem Solvers (see picture) to mount the derailleur sufficiently
outboard to work. These come in various offsets (mine was offset 39.5mm)
so you'll need to work out the right measurement on your own bike.
Third, when installing the motor, you will want to mount the right side
as close as possible to the BB shell and avoid using any spacers on that
side if you can; this is to minimize the chainline distortions.\
4. I mentioned a new cassette above. The bike started out as a 3x10
setup with an 11-36T 10-Speed cassette, but I changed the cassette to an
11-42T to maintain the low gearing with the new chainrings. Converting
an older 10-speed to such a wide cassette can cause problems with
reaching the large cog, and I used a
[GoatLink](https://www.wolftoothcomponents.com/products/goatlink) (see
picture) to improve my derailleur capacity and get it to work. You may
also be able to get away with just a longer B-screw. Either of these
solutions can be a bit hit and miss, but it should work. Make sure to
keep enough chain in contact with the smaller cogs to avoid slippage
under load. Another alternative is to upgrade your derailleur and
cassette together.\
5. I highly recommend the metal gear to replace the blue plastic gear. A
loaded touring bike will see more load than a normal street bike and
also requires the reliability that comes with a metal gear.\
6. I also highly recommend a straight right crank arm to reduce the
Q-factor of the cranks (the width between the pedals). The standard
TSDZ2 crank arms result in the right pedal being farther away from the
frame than the left pedal. On my build, I invested in some [custom crank
arms from
Lekkie](https://lekkie.bike/product/buzz-bars-left-offset-170mm-v2-1/),
although you can also just use a Bafang straight right crank arm for
much less money.\
7. I installed a left thumb throttle on this build. I don't see that as
a necessity and a temperature sensor is probably a wiser option in place
of the throttle, especially for long-distance touring.\
8. Finally, a peculiarity of this build is that the bike has a PF30
bottom bracket. A TSDZ2 is not designed to fit a PF30 BB so this
required modifications of the housing and using a PF30-\>BSA BB adapter.
These adapters come in a few styles -- 68mm vs 73mm and one-piece vs
two-piece. For my bike, which has a 73mm BB shell, it was essential that
I used a onepiece adapter as a two-piece doesn't leave enough threads to
tighten the lock-ring on the motor; it also makes the chainline worse by
another few of millimeters. Keep in mind, though, that a one-piece
adapter can quickly become permanent if it seizes inside the BB shell --
I didn't use Loctite for that reason. As for fitting the motor through
the BB, I needed to file off quite a bit of material on the motor
housing to get it to fit (see picture). This definitely makes a PF30
conversion more challenging, but it is possible, and one positive is
that the motor has a very tight fit within the BB shell so it doesn't
move around at all.\
\
I have put several hundred kilometers on this bike since it was
converted and it has worked perfectly. The gearing is excellent, with
the ability to climb steep hills and also reach speeds of over 40 kmh.
Battery consumption has also been excellent. I use a 52V 17.5Ah battery
for approximately 900Wh. I haven't had any problem with range and I'm
certain the bike can go over 100km per charge, although I haven't fully
tested that. Some 52V batteries are now available with \>20Ah, so loaded
long-distance touring is entirely feasible with a TSDZ2.\
\
One last thing to mention is the flexibility of the open-source
firmware. When travelling, you may need to rent or replace a battery,
and large capacity batteries simply can't be taken on airplanes. The
OSF, however, has tremendous flexibility and one can realistically find
a battery almost anywhere that will work with the TSDZ2; it just takes
the right connector and a couple adjustments in the settings and you're
good to go. This is a real advantage of touring with an OSF TSDZ2 vs any
proprietary OEM system.

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/bikesnobyyc-adventure_touring_bike/Lynskey_Ridgeline_3.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/bikesnobyyc-adventure_touring_bike/Lynskey_Ridgeline_4.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/bikesnobyyc-adventure_touring_bike/Lynskey_Ridgeline_5.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/bikesnobyyc-adventure_touring_bike/Lynskey_Ridgeline_6.jpg>

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/install_TSDZ2/bikesnobyyc-adventure_touring_bike/Lynskey_Ridgeline_7.jpg>
