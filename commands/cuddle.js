const Discord = require('discord.js');
const client = new Discord.Client()
const API = require('anime-images-api')
const images_api = new API() 
const{MessageEmbed} = require('discord.js')
 module.exports = {
            name: 'cuddle',
            description: "this mutes the person who is pinged!",
            execute: async (message, args, cmd, client, Discord) => { 
                if(!message.mentions.users.first()){
                    
                    message.channel.send({embed:{
                        description: `Pls Mention A  User`
                    }})

                }
                let User = message.mentions.users.first()
             
                let response = await images_api.sfw.cuddle();
                let Embed = new MessageEmbed()
                Embed.setTitle(`${message.author.tag} Cuddles ${User.tag}`)
                Embed.setImage(response.image)
                Embed.setColor(`RANDOM`)
                return message.channel.send(Embed)

            }}