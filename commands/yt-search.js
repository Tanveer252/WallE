const yts = require('yt-search');

module.exports = {
    name: 'youtube',
    aliases:['yt'],
    description: "Search on YouTube",
    async execute(message, args, cmd, client, Discord) {
       if(!message.member.permissions.has("EMBED_LINKS")) return message.channel.send({ embed: {
          
      description: `You Need Embed Links Perm To Access this Command`,
      color: 1310975
    }});

        if (!args.length) return message.reply('No search query given') //Checks if the user gave any search queries
        const searched = await yts.search(args.join(' ')); //Searches for videos
        message.reply(!searched.videos.length ? 'No Results' : searched.videos[0].url); //Sends the result
    }
}