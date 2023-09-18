class Api::V1::ShoeController < ApplicationController
  def new
    render json: Shoe.new_shoe
  end
end
