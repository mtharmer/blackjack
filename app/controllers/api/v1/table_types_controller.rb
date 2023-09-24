# frozen_string_literal: true

module Api
  module V1
    class TableTypesController < ApplicationController
      def index
        tables = TableType.all
        render json: tables
      end

      def show
        table = TableType.find_by(id: params[:id])
        if table
          render json: table
        else
          render json: table.errors
        end
      end

      private

      def table_params
        params.permit(:id)
      end
    end
  end
end
