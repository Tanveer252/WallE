module.exports = {
    name: 'help',
    description: "",
    execute: (message, args, cmd, client, Discord) => { 

    const Embed = new Discord.MessageEmbed()
    Embed.setTitle(`WALL-E Help`)
    Embed.setThumbnail(`https://media.discordapp.net/attachments/818381259096588298/844172279658577940/wall-e.jpg?width=591&height=473`)
    Embed.addFields({
        name: 'Fun Commands',
        value: 'Use _helpfun To View All The Fun Commands',
    },{
        name: 'Info Commands',
        value: 'Use _helpinfo To View All The Info Commands',
     },{
    //     name: 'Music Commands',
    //     value: `Use _helpmusic To View All The Music Commands`
        name:`Anime Commands`,
        value:`Use _helpanime To View All Anime Commands`
    },{
        name:`WALL-E'S WEBSITE IS OUT MAKE SURE TO CHECK IT OUT:`,
        value:`https://www.wallebot.xyz`
    }
    )
    Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
    Embed.setTimestamp()

    message.channel.send(Embed)



    }}

