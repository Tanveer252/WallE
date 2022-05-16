const { MessageEmbed, User } = require("discord.js");

        module.exports = {
            name: 'serverinfo',
            description: "",
            execute: (message, args, cmd, client, Discord) => { 
            const {guild} = message
            // console.log(guild)

            const {name, region, memberCount, owner, afkTimeout, rulesChannel, createdAt} = guild
            const icon = guild.iconURL()


            const Embed = new Discord.MessageEmbed()
            Embed.setTitle(`Server Info for ${name}`)
            Embed.setThumbnail(icon)
            Embed.addFields({
                name: 'Region',
                value: region
            },{
                name: 'Members',
                value: memberCount,
            },{
                name: 'Owner',
                value: owner.user.tag,
            },{
                name: 'AFK Timeout',
                value: afkTimeout/60,
            },
            {
                name: 'Rules Channel',
                value: rulesChannel,
            },{
                name: 'The Server Was Created On',
                value: createdAt,
            }
            )
            Embed.setFooter(`${message.author.tag}` , message.author.displayAvatarURL({dynamic: true}))
            Embed.setTimestamp()

            message.channel.send(Embed)

        

            }}

