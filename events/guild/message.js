const { DiscordAPIError } = require("discord.js");


const cooldowns = new Map()
module.exports = (Discord, client ,message) =>{
    const prefix = '_';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try{
        command.execute(message, args, cmd, client, Discord);
    }catch(err) {
        message.reply({embed: {
            description: "There was an error trying to execute this command",
            color: 1310975
        }});
        console.log(err)
    }
}