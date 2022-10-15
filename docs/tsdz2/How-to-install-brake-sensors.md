TSDZ2 supports the regular cheap ebike brake sensors, like levers brake
sensor, magnetic brake sensors or the \"hidden wire brakes sensor\".

You can buy brake sensors on online shops like BMSBattery or PSWPower,
at prices like 5€ each pair.

NOTE: it is really important to make sure the brake sensor installation
is complete and fully working before booting the display, otherwise it
cannot be properly initialized and the full digit and symbols will be
displayed.

# Circuitry

The brake sensors are to be wired in an [open
circuit](https://endless-sphere.com/forums/viewtopic.php?p=1521439#p1521439),
where closing the circuit indicates to the controller that a lever has
been pulled. This means that you can have one or more brake sensors
wired in parallel, and when any given switch is triggered the controller
will stop turning the motor.

If you\'re upgrading from the VLCD5, the brake sensors have plugs that
at first glance appear to have three pins - but only two are actually
molded into the plug. You can verify continuity with a multimeter when
the lever is pulled.

# Magnetic brake sensors {#magnetic_brake_sensors}

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/raw/master/magnetic_brake_sensor-01.jpg>

This are the most easy and flexible brake sensors to install, since they
will be glued to the original bicycle brake lever (a must on hydraulic
brakes). They also have only 2 wires to be connected. They act like a
mechanical switch, you don\'t need to care about which wires colors of
the brake sensor you connect to the motor controller wires \-- follow
the next table for the connections.

You can find on online shops that sell this sensors as \"BAFANG
Hydraulic Brake Sensor\" but don\'t worry because this are generic
sensor that work also on TSDZ2.

**Connections between brake sensor and TSDZ2 display cable:**

  ------------------ ------------------------------------
  **Brake sensor**   **TSDZ2 controller wire function**
  color 1            GND ground
  color 2            BRAKE
  ------------------ ------------------------------------

In order to keep the possibility to disconnect the magnetic brake
sensors it is recommended to adopt the following configuration:

-   Y-splitter (to be cut only at one end to isolate the two correct
    wires to be connected to GND and BRAKE)

```{=html}
<!-- -->
```
-   n.2 magnetic sensors (to be connected to the splitter above)

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/brake_sensor_schematic.png>

# Lever brake sensors {#lever_brake_sensors}

The lever brake sensors will substitute the original brake levers of the
original bicycle.

This type of brake sensors come with 2 wires and they act like a
mechanical switch, you don\'t need to care about which wires colors of
the brake sensor you connected to the motor controller wires \-- follow
the next table for the connections.

**Connections between brake sensor and TSDZ2 display cable:**

  ------------------ ------------------------------------
  **Brake sensor**   **TSDZ2 controller wire function**
  color 1            GND ground
  color 2            BRAKE
  ------------------ ------------------------------------

# \"HWB (hidden wire brakes) sensor\" {#hwb_hidden_wire_brakes_sensor}

Different from lever brake sensors and magnetic brake sensors, this ones
have 3 wires and they need to be connected with a specific combination.
Connect GND, 5V and BRAKE wires to the same wires of the motor
controller.

HWB sensor wires:

<https://github.com/OpenSource-EBike-firmware/TSDZ2_wiki/blob/master/HWB_brake_wires.jpg>

NOTE: The HWB sensor needed 5V wire is only available on the TSDZ2
throttle version - see next section for a possible solution on the TSDZ2
throttle no version.
