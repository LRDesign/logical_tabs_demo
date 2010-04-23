   
window.onload = function() {
	$$('.tabbed_panel li.tab a.tab_link').invoke('observe', 'click', handleTabClick);  	
}

function handleTabClick(event) {  
	tab_id = Event.element(event).up().identify();

	// extract the tabbed panel's ID from the tab's ID
	tabbed_panel_id = tab_id.substring(0, tab_id.indexOf("_tp_"));

  // iterate the tabs of this panel and set them and their panes
  // selected or not based on whether they match the clicked-on
  // tab.
	$(tabbed_panel_id).select('li.tab').each(function(tab, index){				
		pane_id = tab.identify().replace(/_tab$/,"_pane");
		pane = $(pane_id);
		if(tab.identify() == tab_id) {
			tab.removeClassName('tab_unselected');
			tab.addClassName('tab_selected');
			pane.removeClassName('pane_unselected');
			pane.addClassName('pane_selected');			
		} else {
			tab.removeClassName('tab_selected');
			tab.addClassName('tab_unselected');
			pane.removeClassName('pane_selected');
			pane.addClassName('pane_unselected');			
		}
	});
}