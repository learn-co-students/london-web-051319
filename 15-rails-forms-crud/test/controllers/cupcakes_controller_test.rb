require 'test_helper'

class CupcakesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cupcakes_index_url
    assert_response :success
  end

  test "should get show" do
    get cupcakes_show_url
    assert_response :success
  end

end
