require "test_helper"

class Api::V1::ShoeControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_v1_shoe_new_url
    assert_response :success
  end
end
