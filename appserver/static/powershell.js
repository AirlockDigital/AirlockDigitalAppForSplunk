 require(['jquery', 'splunkjs/mvc/simplexml/ready!'], function($) {
      // Grab the DOM for the first dashboard row
      var firstRow = $('.dashboard-row').first();
      var secondRow = firstRow.next();
      var thirdRow = secondRow.next();
 
      
      // Get the dashboard cells (which are the parent elements of the actual panels and define the panel size)
      var panelCells = $(firstRow).children('.dashboard-cell');
      var panelCells2 = $(secondRow).children('.dashboard-cell');
      var panelCells3 = $(thirdRow).children('.dashboard-cell');
 
      // Adjust the cells' width
	$(panelCells3[0]).css('width', '70%');
    $(panelCells3[1]).css('width', '30%');
      
  });
