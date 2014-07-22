
standar_imports = [
		'import os',
        'import sys',
        'import numpy as np',
        'import matplotlib.pyplot as plt',
		'# these imports can be changed in IPython Training Wheels',
        ].join("\n")

function std_imports() {
    var cell = IPython.notebook.insert_cell_at_index('code', 0);
    cell.set_text(standar_imports);
    IPython.notebook.select(0);

    console.log("standard imports");

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
        '<li class="divider"></li>',
        '<li id="training_wheels" title="IPython Training Wheels">',
        '<a href="http://github.com/ivanov/ipython-trainingwheels" target="_blank" title="Training Wheels Website">',
        '<i class="icon-external-link menu-icon pull-right"></i>',
        ' IPython Traning Wheels &nbsp;&nbsp;&nbsp;&nbsp;       </a> </li>',
		'</ul>',
		'</li>',
        ].join("\n")).insertAfter($('#help_menu').parent());

});
