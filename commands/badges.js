const { MessageEmbed, User } = require("discord.js");

module.exports = {
    name: 'badges',
    description: "shows the badges a user has",
    execute: async (message, args, cmd, client, Discord) => {

const user = message.mentions.users.first() || message.author;

const flags = user.flags.toArray();

console.log(flags)

message.channel.send({ embed: {
        
    description: `${user}'S badges: ${flags.join(', ')}`,
    color: 1310975
  }})
    }}