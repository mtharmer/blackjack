class UpdatesChannel < ApplicationCable::Channel
  def subscribed
    puts "\n\n\nStream: #{params[:model]}, #{params[:id]}, #{params[:type]}\n\n\n"
    stream_from "#{params[:model]}_updates_#{params[:id]}:#{params[:type]}"
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
