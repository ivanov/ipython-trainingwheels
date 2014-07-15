# IPython Training Wheels

An IPython Notebook profile with a few bells and whistles taken out (and others
added).

You can read more about [IPython configuration](http://ipython.org/ipython-doc/dev/config/intro.html)
for how to create a new profile.

### Mozilla Science Lab Global Summer Sprint

Help us push forward on this project as part of [Mozilla Science Lab Global
Sprint](https://etherpad.mozilla.org/sciencelab-2014summersprint-ipython-novice-profile).


### Start hacking

To test running this profile, you can either clone the repo into your
`~/.ipython` directory like so:

    cd ~/.ipython
    git clone https://github.com/ivanov/ipython-trainingwheels.git profile_swc


Thereafter, just run `ipython --profile=swc`

Alternatively, you can clone this repository wherever you want, and then just
specify the path to it like so:

    git clone https://github.com/ivanov/ipython-trainingwheels.git /path/to/some/dir
    ipython notebook --profile-dir=/path/to/some/dir


### Did it work?

We've added visual element to help you verify that you are running this profile,
The top of the Notebook will be "Software Carpentry Blue" as opposed to white,
like this:

![](/images/header.png)

Also, the Help menu in the Notebook should have extra entries ("Training Wheels
Help" and "Software Carpentry"), like this:

![](/images/help_menu.png)
