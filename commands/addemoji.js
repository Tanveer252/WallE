const Discord = require('discord.js');

module.exports = {
    name:`addemoji`,
    description:``,
    execute: async (message, args, cmd, client, Discord) => {
         if(!message.member.permissions.has("MANAGE_EMOJIS")) return message.channel.send({ embed: {
          
      description: `You Don't have enough permissions`,
      color: 1310975
    }});
        if(!args.length)
        return message.channel.send(`pls specify some emoji to add`)

        for(const emojis of args){
            const getEmoji = Discord.Util.parseEmoji(emojis);

            if(getEmoji.id){
                const emojiExt = getEmoji.animated? '.gif' : '.png';
                const emojiURL = `https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`;
                message.guild.emojis
                .create(emojiURL , getEmoji.name)
                .then((emoji) =>
                message.channel.send(`successfully added :${emoji.name}: to the server`))
            }
        }
    }
}