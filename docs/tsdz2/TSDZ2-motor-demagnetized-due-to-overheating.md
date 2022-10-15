2018.08.01:

I was trying to discharge fast and fully my battery and for that I was
running TSDZ2 motor at max current possible, near the 18 amps. I
verified that my motor got very hot and I even got cut offs from the
motor controller because it knows that motor is very hot in some way. On
the next day, I noted that my motor was asking the same power as usual
but it had only like half of the force/torque!! After some comparison
with other ebike running with same TSDZ2, I found that my motor wasn\'t
working properly and so I decided to open it.

I think the motor got to much heat because there is signs of that (seems
it get the higher temperature on the side of phase wires, probably
because currents are strong there). Although the coils could be in short
circuit, they aren\'t but I verified that the magnets are much weak on
the more brown/burned side (I verified the attraction to a piece of
metal) and searching on google I found:

*The Curie temperature of high-grade Neodymium (with added terbium and
dysprosium) is 320C / 600F. However, common neo magnets are made from
the cheapest grade, and can start to lose some of their magnetism at
around 80C (170F).*

*E-bike motor magnets are a grade that is slightly higher than the
cheapest variety, because they are often subjected to higher temps than
they should be by unsuspecting customers. Years of posted experiments by
real E-bikers on endless-sphere have produced a commonly held
rule-of-thumb to avoid heating your E-bike motor to above 95C (200F).*

In: <https://www.electricbike.com/motor-tech-learn-the-terms-part-1>

Next I went and exchanged the motor for a new one I had in stock and I
got back the full torque of TSDZ2!!

Pictures of the demagnetized motor that clearly got to much hot:

<https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-01.jpg>

<https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-02.jpg>

<https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-03.jpg>

<https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-04.jpg>

<https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-05.jpg>

<https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-06.jpg>

<https://raw.githubusercontent.com/OpenSource-EBike-firmware/TSDZ2_wiki/master/TSDZ2_demagnetized_motor-07.jpg>

As a reference, this is a picture of a new motor:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/TSDZ2_48V_motor_magnets.jpg>
