class Api::V1::PlayersController < ApplicationController
  before_action :set_player, except: [:join]
  def hit
    ActionCable.server.broadcast("table_updates_#{@player.table_id}:player-hit", @player.hit)
    head :ok
  end

  def join
    ActionCable.server.broadcast("table_updates_#{params[:table]}:join", Player.join_table(params[:table], params[:username], params[:balance]))
    head :ok
  end

  def leave
    ActionCable.server.broadcast("table_updates_#{@player.table_id}:leave", @player.leave)
    head :ok
  end

  private

  def set_player
    @player = Player.find_by(username: params[:username])
  end
end
