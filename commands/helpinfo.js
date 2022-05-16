module.exports = {
    name: 'helpinfo',
    description: "",
    execute: (message, args, cmd, client, Discord) => { 

    const Embed = new Discord.MessageEmbed()
    Embed.setTitle(`WALL-E Help`)
    Embed.setThumbnail(`https://media.discordapp.net/attachments/818381259096588298/844172279658577940/wall-e.jpg?width=591&height=473`)
    Embed.addFields({
            name: 'Server Info',
            value: `Use _serverinfo To View The Current Server'S Stats\n Usage: \n _serverinfo`,

        },{
            name: 'Discord Badges Command',
            value: `Use _badges To View Your Or Someone else's Badges \n Usage: \n _badges \n _badges {user}`,
        },{
            name:`Invite Command`,
            value: `Use _invite to Invite Me To Your Server\n Usage: \n _invite`
        },{
            name: `Covid Command`,
            value:`Use _Covid To View The Amount Worldwide Covid Patients Or Amount Of Covid Patients In A Specifc Country \n Usage: \n _covid all \n _covid {country}`
        },{
            name:`Minecraft Server Status`,
            value:`Use _mcserver To View A Minecraft Server's Status\n Usage: \n _mcserver {IP Adress Of The Server} {Port Of The Server}`
        },{
        name:`WALL-E'S WEBSITE IS OUT MAKE SURE TO CHECK IT OUT:`,
        value:`https://www.wallebot.xyz`
    }
)
    Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
    Embed.setTimestamp()

    message.channel.send(Embed)



    }}

