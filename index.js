
const discord = require('discord.js');
const mySecret = process.env['TOKEN']
const keepAlive = require('./server.js')


const client = new discord.Client();


const prefix = '_';

const fs = require('fs');
const { type } = require('os');

client.commands = new discord.Collection();
client.events = new discord.Collection();
// client.SlashCommands = new discord.Collection();

['command_handler','event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client , discord);
})

// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command);
// }
keepAlive()
client.on('ready' , () => {
    client.user.setPresence({ activity: { name: '_help' }, status: 'online' })
    .then(console.log)
    .catch(console.error);
});


// client.on ('message',message =>{
//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     if(command === 'av'){
//         client.commands.get('avatar').execute(message, args);
//     }else if(command == 'play'){
//         client.commands.get('play').execute(message, args);
//     }else if(command == 'leave'){
//         client.commands.get('leave').execute(message, args);
//     }else if(command == 'kick'){
//         client.commands.get('kick').execute(message, args);
//     }else if(command == 'role'){
//         client.commands.get('role').execute(message, args);
//     }else if(command =='rules'){
//         client.commands.get('rules').execute(message, args);
//     }else if(command ==='mute'){
//         client.commands.get('mute').execute(message, args);
//     }else if(command =='unmute'){
//         client.commands.get('unmute').execute(message, args);
// }
//     });

client.login(mySecret);