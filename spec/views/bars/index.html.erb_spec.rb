require 'spec_helper'

describe "/bars/index" do
  before(:each) do
    render 'bars/index'
  end

  it "should succeed" do
    response.should be_success
  end
end
