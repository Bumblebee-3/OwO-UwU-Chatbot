const { Client } = require("discord.js");
var d = new Date(),
  dformat =
    [d.getMonth() + 1, d.getDate(), d.getFullYear()].join("/") +
    " " +
    [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
var x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by 0_0");
});
client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; // if the author of the message is a bot ignore the case
  message.content = message.content // let content ( a variable used to fetch response ) be equal to the message's content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.reply(
      `**:x: Please dont mention anyone while talking to me I feel attacked 😭**`
    );
  }
  message.channel.startTyping();
  if (!message.content)
    return message.channel.send("I can only reply to text messages");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "Zero", // Add Owner Name Here
    user: message.author.id,
    language: "auto"
  }).then(reply => {
    message.reply({
      embed: {
        color: "#5539cc",
        description: `${reply}`,
footer: {
		text: '',
		icon_url: 'https://i.imgur.com/wSTFkRM.png',
	}
      }
    });
  });
  message.channel.stopTyping();
});
client.login(process.env.TOKEN); //login using the token
