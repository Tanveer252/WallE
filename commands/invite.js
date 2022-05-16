module.exports = {
    name: 'invite',
    description: "",
    execute: (message, args, cmd, client, Discord) => { 

    const Embed = new Discord.MessageEmbed()
    Embed.setTitle(`Invite Me To Your Server`)
    Embed.setThumbnail(`https://media.discordapp.net/attachments/818381259096588298/844172279658577940/wall-e.jpg?width=591&height=473`)
    Embed.setDescription(`https://discord.com/api/oauth2/authorize?client_id=844173611283775538&permissions=8&scope=bot`)
    Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
    Embed.setTimestamp()

    message.channel.send(Embed)

    }}

