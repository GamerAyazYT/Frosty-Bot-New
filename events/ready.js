
client.on("ready", () => {
  console.log("Bot Aktif");
  let playing = client.voice.connections.size;

  client.user.setPresence({
    activity: {
      name: "Frosty Bot",
      type: "PLAYİNG",
      url: "URL"
    }
  });
});
