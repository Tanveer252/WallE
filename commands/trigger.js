const canvacord = require("canvacord");
const Discord = require('discord.js');

module.exports = {
    name: "trigger",
    description: "Trigegr yourself",


    async execute(message, args, cmd, client, Discord){
        if(!message.mentions.users.first()){

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
            
    }
    else{
        let User = message.mentions.users.first()
        let avatar = User.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.trigger(avatar);
        let attachment = new Discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
    }

}