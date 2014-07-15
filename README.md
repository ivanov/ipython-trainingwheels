# IPython Training Wheels

An IPython Notebook profile with a few bells and whistles taken out (and others added) .

You can read more about [IPython configuration](http://ipython.org/ipython-doc/dev/config/intro.html) for how to create a new profile.


To test running this profile, you can either clone the repo into your `~/.ipython` directory like so:

    cd ~/.ipython
    git clone https://github.com/ivanov/ipython-trainingwheels.git profile_swc


Thereafter, just run `ipython --profile=swc`

Alternatively, you can clone this repository wherever you want, and then just specify the path to it like so:

    git clone https://github.com/ivanov/ipython-trainingwheels.git /path/to/some/dir
    ipython notebook --profile-dir=/path/to/some/dir


# Did it work?

We've added some visual feedback to allow you to verify that you are running
this profile, as opposed to some other one. 

The top of the Notebook will be "Software Carpentry Blue" as opposed to white:

![](/images/header.png)

Additionally, the Help menu in the Notebook should have extra entries:
"Training Wheels Help" and "Software Carpentry":

![](/images/help_menu.png)
