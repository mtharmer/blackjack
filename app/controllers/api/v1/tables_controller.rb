# frozen_string_literal: true

module Api
  module V1
    class TablesController < ApplicationController
      before_action :set_table, except: [:index]
      def index
        tables = Table.where(table_type: params[:id]).to_a
        render json: tables
      end

      def show
        render json: { table: @table, dealer_cards: @table.dealer_cards, players: @table.players.to_a,
                       player_cards: @table.player_cards }
      end

      def deal
        ActionCable.server.broadcast("table_updates_#{params[:id]}:base", @table.deal)
        head :ok
      end

      private

      def set_table
        @table = Table.find_by(id: params[:id])
      end
    end
  end
end
