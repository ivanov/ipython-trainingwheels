[Todo list on waffle &nbsp;](https://waffle.io/ivanov/ipython-trainingwheels) [![Stories in Ready](https://badge.waffle.io/ivanov/ipython-trainingwheels.png?label=ready&title=Ready)](https://waffle.io/ivanov/ipython-trainingwheels)
# IPython Training Wheels

This repository contains an alternative IPython Notebook profile
with a few bells and whistles taken out of the default profile 
(with some other features added).  To see the kinds of features we're adding,
see [the standard
imports button](https://github.com/ivanov/ipython-trainingwheels/pull/12).

![](https://cloud.githubusercontent.com/assets/118211/3665994/e24c8be4-11eb-11e4-856d-2506249ff261.png)

### Mozilla Science Lab Global Summer Sprint

Help us push forward on this project as part of [Mozilla Science Lab Global
Sprint](https://etherpad.mozilla.org/sciencelab-2014summersprint-ipython-novice-profile).  
Install the profile as described below, check the issue list, and start hacking.  

You can read more about [IPython configuration](http://ipython.org/ipython-doc/dev/config/intro.html)
for how to create a new profile.  The default template for the notebook (for reference) 
can be found [here](https://github.com/ipython/ipython/blob/master/IPython/html/templates/notebook.html).  
Most customizations in the profile are found in `custom/custom.js`.  

### What is an IPython Notebook profile?  

IPython Notebook comes with a set of a default configurations that 
can be modified. Loading the notebook with a different profile will enable a 
different set of configurations as described in that profile.  Profiles are 
typically stored in The IPython directory, but you can also keep a profile in the current 
working directory.  

### Using this Profile

To store this profile in your IPython directory, clone this repostory 
into your `~/.ipython` directory using the commands: 

    cd ~/.ipython
    git clone https://github.com/ivanov/ipython-trainingwheels.git profile_swc

Thereafter, just run `ipython notebook --profile=swc` in order to use the training-wheels
profile with the notebook.  

Alternatively, you can clone this repository wherever you want, and then just
specify the location in order to use the profile.  To do so, use the following commands:

    git clone https://github.com/ivanov/ipython-trainingwheels.git /path/to/some/dir
    ipython notebook --profile-dir=/path/to/some/dir

### Did it work?

We've added visual element to help you verify that you are running this profile,
The top of the Notebook will be "Software Carpentry Grey" as opposed to white,
like this:

![](/images/header.png)

The Help menu in the Notebook should have extra entries ("Training Wheels
Help" and "Software Carpentry"), like this:

![](/images/help_menu.png)

There will be an extra "Training Wheels" top level menu:

![](/images/top_menu.png)

### Other features:

* "Standard imports": create a cell with canned imports from the training
  wheels menu, along with a markdown cell above it that has links and a
  description of what each of the imports does.

* "System information": create and execute a cell that reports basic information
  about the user's machine (version of OS, Python, IPython, etc)

* A textual mode indicator (for displaying IPython's Command and Edit modes).
  Clicking on it brings up the keyboard shortcuts. See [screenshots in this Pull
  Request](https://github.com/ivanov/ipython-trainingwheels/pull/41).

* Digital "stickies": clicking on the top header of an open notebook will rotate
  it from being gray/neutral, red ('need help') and green ('good to go'):

  ![2014-07-28-174050_665x70_scrot](https://cloud.githubusercontent.com/assets/118211/3729229/1cf35c1a-16b9-11e4-9f07-638ba16d4e94.png)

  ![2014-07-28-174101_638x68_scrot](https://cloud.githubusercontent.com/assets/118211/3729228/1cf1a118-16b9-11e4-98cf-95872d2368c1.png)

  ![2014-07-28-174110_653x68_scrot](https://cloud.githubusercontent.com/assets/118211/3729227/1cf10f8c-16b9-11e4-96d6-e81783656032.png)

