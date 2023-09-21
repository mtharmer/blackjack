import consumer from "../channels/consumer";

export default function channelHelper({model, id}) {
  consumer.subscriptions.create({channel: "UpdatesChannel", model: model, id: id}, {
    connected() {
      console.log("connected");
      // Called when the subscription is ready for use on the server
    },

    disconnected() {
      console.log("disconnected");
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      console.log(data);
      // Called when there's incoming data on the websocket for this channel
    }
  });
}
