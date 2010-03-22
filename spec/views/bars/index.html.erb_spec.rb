require 'spec_helper'

describe "/bars/index" do
  before(:each) do
    render 'bars/index'
  end

  #Delete this example and add some real ones or delete this file
  it "should tell you where to find the file" do
    response.should have_tag('p', %r[Find me in app/views/bars/index])
  end
end
