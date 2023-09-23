class Api::V1::TablesController < ApplicationController
  before_action :set_table, except: [:index, :deal]
  def index
    tables = Table.where(table_type: params[:id]).to_a
    render json: tables
  end

  def show
    # players = @table.players.map do |player|
    #   cards = player.cards.map { |card| card.attributes }
    #   np = player.attributes
    #   np["cards"] = cards
    #   np
    # end
    # dealer = @table.dealer.attributes
    # dealer["cards"] = @table.dealer.cards.map { |card| card.attributes }
    render json: { table: @table, dealer_cards: @table.dealer_cards, players: @table.players.to_a, player_cards: @table.player_cards }
  end

  def deal
    ActionCable.server.broadcast("table_updates_#{params[:id]}:base", Table.deal(params[:id]) )
    head :ok
  end

  private

  def set_table
    @table = Table.find_by_id(params[:id])
    # @table = Table.eager_load(dealer: :cards, players: :cards, shoe: :cards).find_by_id(params[:id])
  end
end
