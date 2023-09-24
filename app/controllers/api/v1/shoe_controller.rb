# frozen_string_literal: true

module Api
  module V1
    class ShoeController < ApplicationController
      def new
        render json: Shoe.new_shoe
      end
    end
  end
end
