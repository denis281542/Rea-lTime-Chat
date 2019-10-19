import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('yiha, we are ready!')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  $('#msg').append('')
  received(data) {
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});
