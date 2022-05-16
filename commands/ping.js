module.exports = {
    name: 'ping',
    description: "this is a ping cmd",
execute(message, args, cmd, client, Discord){
    
    if(!message.member.id === '817656295145996308') return;
             const embed = new Discord.MessageEmbed()
            .setTitle('Pong')
            .setColor('RANDOM')
            .setDescription(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. 
            📚API Latency is ${Math.round(client.ws.ping)}ms`); 

        message.channel.send(embed)              
    }
    }