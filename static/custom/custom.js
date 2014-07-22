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
        '<a href="http://software-carpentry.org/" target="_blank" ',
        'title="Software Carpentry Webiste">',
        '<i class="icon-external-link menu-icon pull-right"></i>',
        ' Software Carpentry</a> </li>',
        ].join("\n"));
	
	$([
		'<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">SWC</a>',
        '<ul id="SWC_menu" class="dropdown-menu">',
        '<li id="training_wheels"',
        'title="IPython Training Wheels">',
        '<a href="http://github.com/ivanov/ipython-trainingwheels">IPython Training Wheels</a></li>',
		'</ul>',
		'</li>',
        ].join("\n")).insertAfter($('#help_menu').parent());
		
});
