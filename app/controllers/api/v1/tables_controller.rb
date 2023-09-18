class Api::V1::TablesController < ApplicationController
  def index
    tables = Table.where(table_type: params[:id]).all.entries
    render json: tables
  end

  def show
    table = Table.find_by(unique_id: params[:id])
    render json: table
  end
end
