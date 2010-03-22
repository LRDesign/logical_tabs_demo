require 'spec_helper'

describe "/foos/index" do
  before(:each) do
    render 'foos/index'
  end

  it "should succeed" do
    response.should be_success
  end
end
