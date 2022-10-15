# Various

See here technical notes about TSDZ2:
<https://opensourceebikefirmware.bitbucket.io/development_tsdz2>

-   [How TSDZ2 torque sensor
    works](How_TSDZ2_torque_sensor_works "wikilink")
-   [TSZD2 Hardware Information](TSZD2_Hardware_Information "wikilink")

# Development Software {#development_software}

On this wiki page the development software for the
OpenSource-EBike-firmware is discribed. Although the examples are shown
for OSX these steps are also applicable for other operating systems like
Linux and Windows.

## Step 1 - Install the toolchain {#step_1___install_the_toolchain}

### For STM8 {#for_stm8}

Download and install the Small Device C Compiler (SDCC) toolchain the
[website](http://sdcc.sourceforge.net/) For Windows use version 3.7 or
3.8 (NOTE: 3.9 has a bug which causes it to crash while building LCD3).
Make sure to add it to your PATH (option in one of the last screens of
the installer\... ) Install/unpack the package to a separate folder,
I\'ve put all my development tools in a folder in my HomeFolder called
\"Development\". Use your command line tool of choice to go to this
folder and dive into the \"bin\" folder, run the command \"sdcc -v\". If
this shows the below code then the toolchain is working.

    user@pc:~/Development/sdcc-3.9.0/bin$ ./sdcc -v
    SDCC : mcs51/z80/z180/r2k/r3ka/gbz80/tlcs90/ez80_z80/ds390/pic16/pic14/TININative/ds400/hc08/s08/stm8/pdk14/pdk15 3.9.0 #11195 (Mac OS X x86_64)
    published under GNU General Public License (GPL)

For Linux user there is an alternative: The stm8 eforth project is
developed on linux
([1](https://github.com/TG9541/stm8ef/wiki/STM8S-Programming))

### For STM32 (ARM) {#for_stm32_arm}

Download and install the GNU ARM toolchain from the
[website](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm/downloads).
Move the package to a separate folder, I\'ve put all my development
tools in a folder in my HomeFolder called \"Development\". There you can
unpack the package. Use your command line tool of choice to go to this
folder and dive into the \"bin\" folder, run the command
\"arm-none-eabi-gcc \--version\". If this shows the below code then the
toolchain is working.

    $ bin/arm-none-eabi-gcc --version
    arm-none-eabi-gcc (GNU Tools for Arm Embedded Processors 8-2019-q3-update)
    8.3.1 20190703 (release) [gcc-8-branch revision 273027]
    Copyright (C) 2018 Free Software Foundation, Inc.
    This is free software; see the source for copying conditions.  There is NO
    warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

#### Install Toolchain on Windows {#install_toolchain_on_windows}

Currently the build did not work for me on Windows (even after
installing gnu make and find and placing them to the PATH). Easiest way
to at least compile (not debug) on Windows for me was by using the [The
Linux
Subsystem](https://www.windowscentral.com/install-windows-subsystem-linux-windows-10).
After install issue

    apt update
    apt install wget bzip2 make
    wget "https://developer.arm.com/-/media/Files/downloads/gnu-rm/9-2019q4/gcc-arm-none-eabi-9-2019-q4-major-x86_64-linux.tar.bz2?revision=108bd959-44bd-4619-9c19-26187abf5225&la=en&hash=E788CE92E5DFD64B2A8C246BBA91A249CB8E2D2D" -O gcc-arm-none-eabi.tar.bz2
    tar xvf gcc-arm-none-eabi.tar.bz2
    mv gcc-arm-none-eabi-*-major /opt/gcc-arm-none-eabi
    echo "export PATH=\"/opt/gcc-arm-none-eabi/bin:$PATH\"" >> ~/.bashrc
    source ~/.bashrc

you can now cd to the place where the sourcecode is located on your
windows under /mnt/c/ and run make all or one of the release\*.sh
scripts.

## Step 2 - Install JDK {#step_2___install_jdk}

Download and install the most current version of jdk (Java Development
Kit) from the Oracle
[website](https://www.oracle.com/technetwork/java/javase/downloads/index.html).

## Step 3 - Install Eclipse {#step_3___install_eclipse}

Download and install Eclipse prepared for C/C++ development: \"Eclipse
IDE for C/C++ Developers\" from the
[website](https://www.eclipse.org/downloads/packages/). After installing
you can close Eclipse.

## Step 4 - MCU communication {#step_4___mcu_communication}

### Eclipse Install GNU MCU tools {#eclipse_install_gnu_mcu_tools}

Start Eclipse and go to Help-\>Marketplace, wait for the marketplace to
update.
[images/Eclipse_Help_Marketplace.png](images/Eclipse_Help_Marketplace.png "wikilink")

Then type \"GNU ARM\" in the search field, the top result should show
\"GNU MCU Eclipse\" press the install button. Wait for it to install,
Eclipse will ask for a restart, you can do so.
[images/Eclipse_Marketplace.png](images/Eclipse_Marketplace.png "wikilink")

When Eclipse is restarted close the welcome screen and click in the
toolbar on the icon \"Packs\".
[images/Eclipse_Packages_Open.png](images/Eclipse_Packages_Open.png "wikilink")
In the new window click on the double arrow sync icon called \"Update
the packages definitions from all repositories\". Wait for it to sync.
[images/Eclipse_Packages_Sync.png](images/Eclipse_Packages_Sync.png "wikilink")
Once the sync is completed you can find in the left pane in the tree the
\"STMicroelectronics\" folder, unfold it and search for \"STM32F1
Series\". In the middle pane right click on the STM32F1xx file and click
install. When the installation is done you can close the packs windows
(on the right most icon right mouse click a choose close)
[images/Eclipse_Packages_Close.png](images/Eclipse_Packages_Close.png "wikilink")

### OpenOCD

Visit the OpenOCD [website](https://gnu-mcu-eclipse.github.io/) for more
information. Once there you can
[download](https://github.com/ilg-archived/openocd/releases/tag/v0.10.0-12-20190422)
the package for your platform. Move the package to a separate folder,
I\'ve put all my development tools in a folder in my HomeFolder called
\"Development\". There you can unpack the package. Use your command line
tool of choice to go to this folder and dive into the \"bin\" folder,
run the command \"openocd \--version\". If this shows the below code
then the toolchain is working.

    $ ./openocd -v
    GNU MCU Eclipse OpenOCD, 64-bitOpen On-Chip Debugger 0.10.0+dev-00593-g23ad80df4 (2019-04-23-00:01)
    Licensed under GNU GPL v2
    For bug reports, read
        http://openocd.org/doc/doxygen/bugs.html

## Step 5 - Eclipse Import project from Github {#step_5___eclipse_import_project_from_github}

Open a browser and navigate to the github site and into the
\"OpenSource-EBike-firmware/Color_LCD\" click on the clone/copy dropdown
arrow and copy the \"url\".\
Open Eclipse and click in the menu bar on \"File\" and navigate to
\"import\".
[images/Eclipse_Import-01.png](images/Eclipse_Import-01.png "wikilink")
Search for the option \"Git\", unfold it and select \"Projects from Git
(with smart import)\" click \"Next\".
[images/Eclipse_Import-02_Git-smart.png](images/Eclipse_Import-02_Git-smart.png "wikilink")
Select the option \"Clone URL\", click \"Next\".
[images/Eclipse_Import-03_Git_url.png](images/Eclipse_Import-03_Git_url.png "wikilink")
The URL is automatically pasted, if not, copy and paste it yourself.
Click \"Next\".
[images/Eclipse_Import-04_Git_settings.png](images/Eclipse_Import-04_Git_settings.png "wikilink")
Select the \"master\" repository, click \"Next\".
[images/Eclipse_Import-05_Git_master_1.png](images/Eclipse_Import-05_Git_master_1.png "wikilink")
Change the location as you like and make sure the \"master\" branch is
selected. Click \"Next\".
[images/Eclipse_Import-06_Git_master_2.png](images/Eclipse_Import-06_Git_master_2.png "wikilink")
Uncheck the \"search for nested projects\" and click \"Finish\".
[images/Eclipse_Import-07_Git_master_3.png](images/Eclipse_Import-07_Git_master_3.png "wikilink")

## Step 6 - Compile Code {#step_6___compile_code}

### Graphical with Eclipse {#graphical_with_eclipse}

Once the project is added to Eclipse the project has to be converted to
a C/C++ project. Right click on the project folder and select \"New\"
and then \"Convert to a C/C++ project\", select the \"Makefile project\"
and \"ARM Cross GCC\" and click \"Finish\"
[images/Eclipse_Projects_Convert-to-C.png](images/Eclipse_Projects_Convert-to-C.png "wikilink")
[images/Eclipse_Projects_Convert-to-C-settings.png](images/Eclipse_Projects_Convert-to-C-settings.png "wikilink")

Then go to the project properties:
[images/Eclipse_Projects_Properties.png](images/Eclipse_Projects_Properties.png "wikilink")

There a few settings have to be set:

1.  \"build tools\"
2.  \"make settings\"

Set the build tools to the location of the \"ARM toolchain\" in \'Step
2\'
[images/Eclipse_Projects_Properties_BuildTools.png](images/Eclipse_Projects_Properties_BuildTools.png "wikilink")

Uncheck the \"Use default build command\" and add the command: \"make
all\" in the box below. At the bottom make sure the path is set to the
\"firmware\" path, this is where the Makefile lives.
[images/Eclipse_Projects_Properties_make_settings.png](images/Eclipse_Projects_Properties_make_settings.png "wikilink")

Now go to \"Project\" in the toolbar and click \"Build All\", if
everything is set correctly the project will build and the compile
message will be shown in the console window.
[images/Eclipse_Project_Build-all.png](images/Eclipse_Project_Build-all.png "wikilink")
[images/Eclipse_Project_Compile.png](images/Eclipse_Project_Compile.png "wikilink")

### Command Line (OSX and Linux) {#command_line_osx_and_linux}

You don\'t need to use Eclipse, you can use any text editor you like.
After editing the code to your needs, just open a terminal and change
directory to the \"firmware\" folder. There you run \"make all\". This
will make the \"main.bin\" file. This file can then be flashed to the
hardware.

If you receive an error that the arm tool chain can not be found:

    user@pc:~/git/OpenSource-EBike-firmware/Color_LCD/firmware$ make all
    # cd SW102; make
    cd 850C/src; make clean; make
    rm -f main.lst main.elf main.bin
    rm ../../common/src/*.o
    find *.o | xargs rm
    find spl/src/*.o | xargs rm
    find spl/CMSIS/*.o | xargs rm
    .compiling
    arm-none-eabi-gcc -I./GD32F10x_standard_peripheral/Include -I./ -I./spl/CMSIS -I./spl/CMSIS/inc -I./spl/inc -DUSE_FULL_ASSERT -DSTM32F10X_MD -DUSE_STDPERIPH_DRIVER -c -fno-common -O0 -g -mcpu=cortex-m3 -mthumb -ffunction-sections -fdata-sections -l libgcc  -fno-builtin -std=c99 --specs=nano.specs --specs=nosys.specs -Wall -Werror -I../../common/include -DVERSION_STRING=\"0.19.17\" spl/CMSIS/system_stm32f10x.c -o spl/CMSIS/system_stm32f10x.o
    make[1]: arm-none-eabi-gcc: No such file or directory
    make[1]: *** [spl/CMSIS/system_stm32f10x.o] Error 1
    make: *** [all] Error 2

This is caused by the \"Makefile\", in there the toolchain is expected
to be in the firmware directory, this can be changed by editing the
\"Makefile\", for the \'850C LCD\' search for this line in the
\"Makefile\" of the \'850C LCD\' directory:

    TCPREFIX = arm-none-eabi-

and change it to:

    ARM_GCC = /path/to/your/arm-tool-chain/bin/
    TCPREFIX = $(ARM_GCC)arm-none-eabi-

And for the \'SW102 LCD\' search for the line below in the
Makefile.windows in the
directory:\"⁨./git⁩/OpenSource-EBike-firmware⁩/Color_LCD⁩/firmware⁩/SW102⁩/⁨nRF5_SDK_12.3.0⁩/⁨components⁩/toolchain⁩/gcc⁩\"
change it to reflect your GNU-ARM directory from Step 1.

    GNU_INSTALL_ROOT := /path/to/the/toolchain/bin/

### On Windows {#on_windows}

1.  Double-click Start_Compiling.bat to compile the firmware. The
    resulting main.ihx can be programmed in the controller.

## Step 7 - Flashing {#step_7___flashing}

### Graphical with Eclipse {#graphical_with_eclipse_1}

### Command line {#command_line}
