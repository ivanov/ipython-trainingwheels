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

inline_plotting_comments = [
                            '#Inline plotting',
			    'This command will enable plots created using [*matplotlib*](http://matplotlib.org/)',
			    'to be displayed inline',
			    ].join("\n");

inline_plotting = [
		   '%matplotlib inline',
		   ].join("\n");

pyplot_as_plt_comments = [
			  '#This command will import pyplot from matplotlib aliasing it as "plt"'
			  ];

pyplot_as_plt = [
	      'import matplotlib.pyplot as plt',
	      ].join("\n");

function std_imports() {
    if (IPython.notebook.get_cell(0).get_text() === standard_imports_comments &&
            IPython.notebook.get_cell(1).get_text() === standard_imports) {
        console.log("Avoided duplicate import");
    } else {
        var pre_cell = IPython.notebook.insert_cell_at_index('markdown', 0);
        pre_cell.set_text(standard_imports_comments);
        pre_cell.rendered = false; // XXX: workaround for IPython bug #6197
        IPython.notebook.select(0);
        IPython.notebook.execute_cell();

        var cell = IPython.notebook.insert_cell_at_index('code', 1);
        cell.set_text(standard_imports);                
    
        console.log("standard imports");
    }

    IPython.notebook.select(1);

}

function sys_info() {
    if (IPython.notebook.get_cell(0).get_text() === system_info) {
        console.log("Avoided duplicate sys_info");
    } else {
        var cell = IPython.notebook.insert_cell_at_index('code', 0);
        cell.set_text(system_info);
    
        console.log("system information");
    }
        IPython.notebook.select(0);
        IPython.notebook.execute_cell();

}


function inline_plot() {
    if (IPython.notebook.get_cell(0).get_text === inline_plotting_comments &&  
        IPython.notebook.get_cell(1).get_text() === inline_plotting) {
        console.log("Avoided duplicate import");
    } else {
        var pre_cell = IPython.notebook.insert_cell_at_index('markdown', 0);
        pre_cell.set_text(inline_plotting_comments);
        pre_cell.rendered = false; // XXX: workaround for IPython bug #6197                                                                                                                                        
        IPython.notebook.select(0);
        IPython.notebook.execute_cell();

        var cell = IPython.notebook.insert_cell_at_index('code', 1);
        cell.set_text(inline_plotting);

        console.log("inline plotting");
    }
    IPython.notebook.select(0);
    IPython.notebook.execute_cell();
}



function loud_command_switches() {
    $('<div id="wheels_mode" class="border-box-sizing indicator_area wheels_mode_indicator">' +
            '<a href="#" class="swc_command_mode" title="This is an extra indicator for what mode you are in. Click here to see the keyboard shortcuts">&nbsp;COMMAND</a></div>')
        .click(function() { $('#keyboard_shortcuts').click();})
        .insertAfter($('#kernel_indicator'));
    $([IPython.events]).on('command_mode.Cell', function () {
        $('#wheels_mode a').html("&nbsp;COMMAND")
        .addClass("swc_command_mode")
        .removeClass("swc_edit_mode");
    });
    $([IPython.events]).on('edit_mode.Cell', function () {
        $('#wheels_mode a').html("—&nbsp;EDITING&nbsp;—")
        .addClass("swc_edit_mode")
        .removeClass("swc_command_mode");
    });
    console.log("loaded loud mode indicator");
}

function digital_sticky_note() {
    var h = $('#header');
    var class_idx = 0;
    var classes = ["swc_neutral", "swc_help", "swc_ready"];
    h.click( function () {
        h.removeClass(classes[class_idx]);
        class_idx += 1;
        class_idx %= classes.length;
        h.addClass(classes[class_idx]);
    });

    console.log("loaded sticky notes");

}

$([IPython.events]).on('notebook_loaded.Notebook', function(){
	$([
	   '<li class="divider"></li>',
	   '<li id="SWC" title="Software Carpentry Website">',
	   '<a href="http://software-carpentry.org/" target="_blank"',
	   'title="Software Carpentry Website">',
	   '<i class="icon-external-link menu-icon pull-right"></i>',
	   ' Software Carpentry</a> </li>',
	   ].join("\n")).insertAfter($("a:contains('Notebook Help')").parent());


	$([
	   '<li id="SWC" title="Training Wheels Help">',
	   '<a href="http://github.com/ivanov/ipython-trainingwheels" target="_blank" ',
	   'title="Training Wheels Help">',
	   '<i class="icon-external-link menu-icon pull-right"></i>',
	   ' Training Wheels Help</a> </li>',
	   ].join("\n")).insertAfter($("a:contains('Notebook Help')").parent());

	console.log("Loaded Training Wheels Help");

      $([
	   '<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Training Wheels</a>',
	   '<ul id="training_wheels" class="dropdown-menu">',
	   '<li id="std-imports" title="Insert a new cell with imports of commonly used modules">',
	   '<a href="#" onclick="std_imports();">Standard imports </a></li>',
	   '<li id="inline-plot" title="Insert a new cell with matplotlib inline plotting command">',                                                                                                 
	   '<a href="#" onclick="inline_plot();">Inline plotting</a></li>',                                                                                                                           
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
    digital_sticky_note();
});
