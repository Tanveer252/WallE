const discord = require('discord.js'); // requiring discord modules
const moment = require('moment') // requiring moment

module.exports = {
    name: 'botinfo',
    description: "",
    execute: (message, args, cmd, client, Discord) => { 

        if(!message.content.startsWith(`_`)) return; // check if the cmd start with the prefix

    var botEmbed = new discord.MessageEmbed() // creates a embed that we gonna call botEmbed
    .setColor(`RANDOM`) // will set the color for the embed
    .setTitle(`WALL-E Info`) // make the title for the cmd
    .setThumbnail(client.user.displayAvatarURL()) // it will put the bot avatar (pfp) in the embed
    .addField(`**General**`, [ // say general then...
        `**Username:** ${client.user.username}`, // this will be the username of the bot
        `**Tag:** ${client.user.tag}`, // the actual name for the bot
        `**ID:** ${client.user.id}`, // this will be the ID for the bot
        `**Owner:** TrueBlue Gaming#2119`, // who created the bot
        '\u200b'
    ])
    .addField(`**Stats**`,[ // it will say stats then...
        `**Servers:** ${client.guilds.cache.size}`, // how many servers the bot is in
        `**Channels:** ${client.channels.cache.size}`, // how many channels the bot have access to
        `**Users:** ${client.users.cache.size}`, // how many users the bot serve on
    ])
    message.channel.send(botEmbed) // it sends the embed
}
}
module.exports.help = { // 5 my cmds handler
    name: "botinfo", // name of the cmd
    aliases: ['bot', 'bot-info'] // another name for the bot
}