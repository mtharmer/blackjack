class Api::V1::TableTypesController < ApplicationController
  def index
    tables = TableType.all
    render json: tables
  end

  def show
    table = TableType.find(params[:id])
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
