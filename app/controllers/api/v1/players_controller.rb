class Api::V1::PlayersController < ApplicationController
  before_action :set_player
  def hit
    ActionCable.server.broadcast("table_updates_#{@player.table_id}:player", @player.hit)
    # render json: table.hit(@player.username)
  end

  private

  def set_player
    @player = Player.find_by(username: params[:username])
  end
end
