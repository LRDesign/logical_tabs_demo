ActionController::Routing::Routes.draw do |map|
  map.resources :foos, :only => :index
  map.resources :bars, :only => :index  
  map.root :controller => :foos, :action => :index
end
