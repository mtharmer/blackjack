class UpdatesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "#{params[:model]}_updates_#{params[:id]}:#{params[:type]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
