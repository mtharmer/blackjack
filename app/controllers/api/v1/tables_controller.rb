class Api::V1::TablesController < ApplicationController
  before_action :set_table, except: [:index]
  def index
    tables = Table.where(table_type: params[:id]).to_a
    render json: tables
  end

  def show
    render json: { table: @table, dealer: @table.dealer, players: @table.players }
  end

  def join
    new_table = @table.join(params[:username])
    dealer = @table.dealer
    players = @table.players
    render json: @table.join(params[:username]) # { table: @table, dealer: dealer, players: players }
  end

  def leave
    new_table = @table.leave(params[:username])
    dealer = @table.dealer
    players = @table.players
    render json: @table.leave(params[:username]) # { table: @table, dealer: dealer, players: players }
  end

  def deal
    room = "table"
    ActionCable.server.broadcast("table_updates_#{@table.id}:base", { body: "some update" })
    render json: @table.deal
  end

  def hit
    render json: @table.hit(params[:username])
  end

  private

  def set_table
    @table = Table.find_by(_id: params[:id])
  end
end
