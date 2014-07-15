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
});
