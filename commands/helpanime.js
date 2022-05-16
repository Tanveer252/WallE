module.exports = {
    name: 'helpanime',
    description: "",
    execute: (message, args, cmd, client, Discord) => { 

    const Embed = new Discord.MessageEmbed()
    Embed.setTitle(`WALL-E Help`)
    Embed.setThumbnail(`https://media.discordapp.net/attachments/818381259096588298/844172279658577940/wall-e.jpg?width=591&height=473`)
    Embed.addFields({
            name: 'Hug Command',
            value: `Use _hug To Hug Someone \n Usage: \n _hug {user}`,

        },{

            name:`Kiss Command`,

            value: `Use _kiss To Kiss Someone \n Usage: \n _kiss {user}`

        },{
            name:`Slap Command`,
            value: `Use _slap To Slap Someone \n Usage: \n _slap {user}`
        },{
            name:`Pat Command`,
            value:`Use _pat To Pat Someone \n Usage: \n _pat {user}`
        },{
            name:`Cuddle Command`,
            value:`Use _Cuddle To Cuddle Someone \n Usage: \n _cuddle {user}`
        },{
            name:`Kill Command`,
            value:`Use _kill To Kill Someone \n Usage: \n _kill {user}`
        },{
        name:`WALL-E'S WEBSITE IS OUT MAKE SURE TO CHECK IT OUT:`,
        value:`https://www.wallebot.xyz`
    }

)
    Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
    Embed.setTimestamp()

    message.channel.send(Embed)



    }}

