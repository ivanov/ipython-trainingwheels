standard_imports_comments = [
        '## SWC Standard Imports',
        '### [*os*](https://docs.python.org/2/library/os.html) \n This allows you to easily interact with the operating system, eg to navigate the file system.',
        '### [*sys*](https://docs.python.org/2/library/sys.html) \n The system library lets you interact with the command line.',
        '### [*numpy*](http://www.numpy.org/) \n is the standard library for numerical and scientific computing in python. It is usually abbreviated *np*.',
        '### [*matplotlib.pyplot*](http://matplotlib.org/) \n is a plotting library that works very well with *numpy*. It is usually abbreviated *plt*.',
        ].join("\n\n");

standard_imports = [
		'import os',
        'import sys',
        'import numpy as np',
        'import matplotlib.pyplot as plt',
		'# these imports can be changed in IPython Training Wheels',
        ].join("\n");

system_info = [
		'# these commands will produce a list of information about',
		'# your computer that you can use for troubleshooting or other purposes',
		'import IPython',
		'print IPython.sys_info()',
		].join("\n");

function std_imports() {
    var pre_cell = IPython.notebook.insert_cell_at_index('markdown', 0);
    pre_cell.set_text(standard_imports_comments);
    pre_cell.rendered = false; // XXX: workaround for IPython bug #6197
    IPython.notebook.select(0);
    IPython.notebook.execute_cell();

    var cell = IPython.notebook.insert_cell_at_index('code', 1);
    cell.set_text(standard_imports);

    IPython.notebook.select(1);

    console.log("standard imports");

}

function sys_info() {
    var cell = IPython.notebook.insert_cell_at_index('code', 0);
    cell.set_text(system_info);
    IPython.notebook.select(0);
    IPython.notebook.execute_cell();

    console.log("system information");

}

function loud_command_switches() {
    $('<div id="wheels_mode" class="border-box-sizing indicator_area wheels_mode_indicator">'
            + '<a href="#" title="This is an extra indicator for what mode you are in. Click here to see the keyboard shortcuts"> COMMAND&nbsp;MODE</a></div>')
        .click(function() { $('#keyboard_shortcuts').click() })
        .insertAfter($('#kernel_indicator'));
    $([IPython.events]).on('command_mode.Cell', function () {
        $('#wheels_mode a').html("COMMAND&nbsp;MODE") ;
    });
    $([IPython.events]).on('edit_mode.Cell', function () {
        $('#wheels_mode a').html("--&nbsp;EDITING&nbsp;--");
    });
}

$([IPython.events]).on('notebook_loaded.Notebook', function(){

    $([
        '<li id="SWC" title="Training Wheels Help">',
        '<a href="http://github.com/ivanov/ipython-trainingwheels" target="_blank" ',
        'title="Training Wheels Help">',
        '<i class="icon-external-link menu-icon pull-right"></i>',
        ' Training Wheels Help</a> </li>',
        ].join("\n")).insertAfter($("a:contains('Notebook Help')").parent());

    $('#help_menu').append([
        '<li class="divider"></li>',
        '<li id="SWC" title="Software Carpentry Website">',
        '<a href="http://software-carpentry.org/" target="_blank"',
        'title="Software Carpentry Website">',
        '<i class="icon-external-link menu-icon pull-right"></i>',
        ' Software Carpentry</a> </li>',
        ].join("\n"));
	
	$([
		'<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Training Wheels</a>',
        '<ul id="training_wheels" class="dropdown-menu">',
        '<li id="std-imports" title="Insert a new cell with imports of commonly used modules">',
        '<a href="#" onclick="std_imports();">Standard imports </a></li>',
		'<li id="sys-info" title="Insert a new cell that prints system information">',
        '<a href="#" onclick="sys_info();">System information</a></li>',
        '<li class="divider"></li>',
        '<li id="training_wheels" title="IPython Training Wheels">',
        '<a href="http://github.com/ivanov/ipython-trainingwheels" target="_blank" title="Training Wheels Website">',
        '<i class="icon-external-link menu-icon pull-right"></i>',
        ' IPython Training Wheels &nbsp;&nbsp;&nbsp;&nbsp;       </a> </li>',
		'</ul>',
		'</li>',
        ].join("\n")).insertAfter($('#help_menu').parent());

    loud_command_switches();
});
