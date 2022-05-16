const { MessageEmbed, User } = require("discord.js");

        module.exports = {
            name: 'say',
            description: "this mutes the person who is pinged!",
            execute: (message, args, cmd, client, Discord) => { 
            
                const sayMessage = args.join(" ");
                
                  message.delete().catch(err => console.log(err));
                  let Embed = new MessageEmbed()
                  Embed.setDescription(`${sayMessage}`)
            Embed.setColor(`RANDOM`)
            Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
            Embed.setTimestamp()
            return message.channel.send(Embed)
            .catch((error) =>{
                  message.channel.send('error Occurred \n Pls Try Again');
                  throw error;
              })}}
                //   message.channel.send({ embed: {
                //     description: `${sayMessage}\n\n Message By ${message.author}`,
                //     color: `#bb00ff`,
                //     footer: `${message.author}`
                //   }})}};