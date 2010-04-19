require 'spec_helper'

describe "/foos/index" do
  before(:each) do
    render 'foos/index'
  end

  it "should succeed" do
    response.should be_success
  end
  
  # it "should allow have_tag on a string" do
  #   "foo".should have_tag("li")    
  # end
end
