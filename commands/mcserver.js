const util = require('minecraft-server-util');

module.exports = {
        name: 'mcserver',
        aliases: ['mc','mccheck','minecraft'],
        description: 'get info abt a minecraft server',
        execute(message, args, cmd, client, Discord){
            if(!args[0]) return message.channel.send('Please Enter a minecraft server IP');
            if(!args[1]) return message.channel.send('Please enter a minecraft server port');

            util.status(args[0], {port: parseInt(args[1])}).then((response)=>{
                console.log(response);
                    const embed = new Discord.MessageEmbed()
                    .setColor('#a200ff')
                    .setTitle('Mc Server status')
                    .addFields(
                        {name: 'Server IP', value: response.host},
                        {name: 'Online Players', value: response.onlinePlayers},
                        {name: 'Max Players', value: response.maxPlayers},
                        {name: 'Version', value:response.version}
                    )
                    .setFooter('Mc server util by TrueBlue Gaming#9999');

                    message.channel.send(embed);
            })
            .catch((error) =>{
                message.channel.send('there was an error finding this server');
                throw error;
            })
        }
}