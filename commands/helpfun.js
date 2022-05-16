module.exports = {
    name: 'helpfun',
    description: "",
    execute: (message, args, cmd, client, Discord) => { 

    const Embed = new Discord.MessageEmbed()
    Embed.setTitle(`WALL-E Help`)
    Embed.setThumbnail(`https://media.discordapp.net/attachments/818381259096588298/844172279658577940/wall-e.jpg?width=591&height=473`)
    Embed.setColor(``)
    Embed.addFields({
        name: 'Avatar Command',
        value: `Use _av To View Your Or Someone Else's Avatar\n Usage: \n _av \n _av {user}`,
    },{
        name: 'Trigger Command',
        value: 'Use _trigger to Trigger yourself Or Someone Else\n Usage: \n _trigger \n _trigger {user}',
    },{
        name: 'Say Command',
        value: 'Use _say {content} \n To Send A Msg Through The Bot\n Usage: \n _say {content}',
    },{
        name: 'Meme Command',
        value: 'Use _meme To See A meme \n Usage: \n _meme',
    },{
        name:`WALL-E'S WEBSITE IS OUT MAKE SURE TO CHECK IT OUT:`,
        value:`https://www.wallebot.xyz`
    }
    )
    Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
    Embed.setTimestamp()
    

    message.channel.send(Embed)



    }}

