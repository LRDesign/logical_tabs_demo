/**
 * Javascript code to support switching, memorizing, and preselecting
 * tabs in a tabbed_panel structure for the plugin logical_tabs.
 * 
 * NOTE: Includes a full copy of CookieJar by Lalit Patel, see below.
 * 
 * Author : Evan Dorn
 * Website: http://lrdesign.com/tools
 * License: MIT License, see included LICENSE file.
 * Version: 1.0
 * Updated: April 29, 2010
 * 
 */   
  
// Set up the click observer on the tabs, and 
$(document).ready( function(){  
	$('a').click(function(){ handle_tab_click($(this))});  	  
});           

// Select a tab that's been clicked on and store that preference in a cookie.
function handle_tab_click(element) {               
  tab = element.parents("li.tab");
  select_tab(tab);    
  // store_tab_preference(tab_id);
}
              

// Handle the display changes necessary for selecting a new tab.
// iterate the tabs of the parent tabbed_panel and set them and their panes
// selected or not based on whether they match the clicked-on
// tab.
function select_tab(tab) {
  pane_id = tab.attr('id').replace(/_tab$/,"_pane");
  pane = $("#"+pane_id);    
  tab.removeClass('tab_unselected').addClass('tab_selected');
  tab.siblings().removeClass('tab_selected').addClass('tab_unselected');    
  pane.removeClass('pane_unselected').addClass('pane_selected');
  pane.siblings().removeClass('pane_selected').addClass('pane_unselected');    
}