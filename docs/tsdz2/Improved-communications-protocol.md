See discussion here:
<https://github.com/OpenSource-EBike-firmware/TSDZ2-Smart-EBike/issues/125>

Motor controller side limitations:

\- the memory is VERY limited (we have free only 6K bytes from total of
32 kbytes and there are other important features as full torque sensor
calibration to be done and a wish for better high cadence mode). Let´s
not forget that original firmware even uses only 16 kbytes of flash
memory, that should be the official microcontroller memory amount.

\- it is very slow and has no interrupts when it sends data to the
display so it hangs waiting for full send. The processing power should
mainly be dedicated to the motor control and so keep a good energy
efficiency for FOC / battery range

# Needs

\- configurations data will increase more at least 40 bytes for the
torque sensor full calibration (10 points for each pedal, 2 bytes for
each point) and so they need to be sent at least one at startup and
every time they change, with a confirmation the motor controller
received it. The motor controller should not start the motor until
receive at least once the configurations.

\- motor controller firmware version

# Protocol

Display is the master and can send commands to the slave motor
controller. Although there is an exception: the slave sends periodically
at every 100ms a package to master and master then sends an answer in
response. The data exchange on this periodically command and answer, is
considered important and needed to be sent at this periodically rate of
100ms.\
When the slave sends the answer of a command, the next periodically
package is not sent but is sent instead the answer package.

## Commands

+---------------------+----------------------+----------------------+
| ID number\          | Name                 | description          |
| (type of the frame) |                      |                      |
+=====================+======================+======================+
| 0                   | periodically command |                      |
|                     | (sent only as answer |                      |
|                     | to the received      |                      |
|                     | periodically         |                      |
|                     | answer!)             |                      |
+---------------------+----------------------+----------------------+
| 1                   | configurations       | full configurations  |
|                     |                      | stream               |
+---------------------+----------------------+----------------------+
| 2                   | controller firmware  | get the motor        |
|                     | version              | controller firmware  |
|                     |                      | version              |
+---------------------+----------------------+----------------------+

## Answer

+---------------------+----------------------+----------------------+
| Answer ID\          | Name                 | Notes                |
| (type of the frame) |                      |                      |
+=====================+======================+======================+
| 0                   | periodically answer  | \[ 0 \]\             |
|                     | (sent automatically  | \[x\] motor          |
|                     | by the initiative of | controller status    |
|                     | the slave!)          | (first 8 bits)\      |
|                     |                      | \[x\] motor          |
|                     |                      | controller status    |
|                     |                      | (last 8 bits)\       |
|                     |                      | \[x\] battery        |
|                     |                      | voltage 10 bits      |
|                     |                      | (first 8 bits)\      |
|                     |                      | \[x\] battery        |
|                     |                      | current (6 bits) +   |
|                     |                      | battery voltage 10   |
|                     |                      | bits (last 2 bits)\  |
|                     |                      | \[x\] motor phase    |
|                     |                      | current (6 bits)\    |
|                     |                      | \[x\] wheel speed    |
|                     |                      | X10 (fist 8 bits)\   |
|                     |                      | \[x\] wheel speed    |
|                     |                      | X10 (last 8 bits)\   |
|                     |                      | \[x\] brake state +  |
|                     |                      | hall sensors state   |
|                     |                      | (3 bits) + pedal     |
|                     |                      | position\            |
|                     |                      | \[x\] throttle ADC   |
|                     |                      | value\               |
|                     |                      | \[x\] throttle value |
|                     |                      | or motor temperature |
|                     |                      | value\               |
|                     |                      | \[x\] torque sensor  |
|                     |                      | ADC value\           |
|                     |                      | \[x\] torque sensor  |
|                     |                      | weight value\        |
|                     |                      | \[x\] cadence\       |
|                     |                      | \[x\] pedal power    |
|                     |                      | (fist 8 bits)\       |
|                     |                      | \[x\] pedal power    |
|                     |                      | (last 8 bits)\       |
|                     |                      | \[x\] motor PWM      |
|                     |                      | duty-cycle\          |
|                     |                      | \[x\] motor speed in |
|                     |                      | ERPS (fist 8 bits)\  |
|                     |                      | \[x\] motor speed in |
|                     |                      | ERPS (last 8 bits)\  |
|                     |                      | \[x\] motor FOC      |
|                     |                      | angle\               |
|                     |                      | \[x\] motor          |
|                     |                      | temperature actual   |
|                     |                      | limiting value\      |
|                     |                      | \[x\] wheel speed    |
|                     |                      | tick counter (fist 8 |
|                     |                      | bits)\               |
|                     |                      | \[x\] wheel speed    |
|                     |                      | tick counter (middle |
|                     |                      | 8 bits)\             |
|                     |                      | \[x\] wheel speed    |
|                     |                      | tick counter (last 8 |
|                     |                      | bits)\               |
+---------------------+----------------------+----------------------+
| 1                   | configurations       | \[ 1 \] means the    |
|                     |                      | command was          |
|                     |                      | received, we should  |
|                     |                      | consider all went ok |
+---------------------+----------------------+----------------------+
| 2                   | controller firmware  | \[ 2 \] means the    |
|                     | version              | command was          |
|                     |                      | received\            |
|                     |                      | \[ x \] \[ x \] \[ x |
|                     |                      | \] version, example  |
|                     |                      | 0.5.1.               |
+---------------------+----------------------+----------------------+

## Schematic

**Motor controller to display**

  Byte number   Name              Value   Notes
  ------------- ----------------- ------- ---------------------------------
  1             start byte        0x43    always the same
  2             length of frame   xx      all following bytes
  3             type of frame     xx      
  4             payload           xx      including CRC always at the end

**Display to motor controller**

  Byte number   Name              Value   Notes
  ------------- ----------------- ------- ---------------------------------
  1             start byte        0x59    always the same
  2             length of frame   xx      all following bytes
  3             type of frame     xx      
  4             payload           xx      including CRC always at the end
