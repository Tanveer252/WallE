const{MessageEmbed} = require('discord.js')
module.exports = {
    name:"av",
    description:"this shows ur or someone'S avatar",
    usage:"[user mention]",
    execute:async(message, args, cmd, client, Discord)=>{
        let Embed = new MessageEmbed()
        if(!message.mentions.users.first()){
            Embed.setTitle(`Your Avatar!`)
            Embed.setImage(message.author.displayAvatarURL({dynamic: true}))
            Embed.setColor(`RANDOM`)
            return message.channel.send(Embed)
        }else{
            let User = message.mentions.users.first()
            Embed.setTitle(`${User.tag}'S Avatar`)
            Embed.setImage(User.displayAvatarURL({dynamic: true}))
            Embed.setColor(`RANDOM`)
            return message.channel.send(Embed)
        }
    }
}