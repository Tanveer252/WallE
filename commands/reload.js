module.exports = {
    name: 'reload',
    usage: `reload <command>`,
    description: 'Reloads a command',
    execute: async (message, args, cmd, client, Discord) => {
        if(message.author.id !== '817656295145996308') return message.channel.send('You are?');//Add your id there so that only you can run this command.
        if(!args[0]) return message.channel.send('You need to include the name of the command!');

        let command = args[0].toLowerCase();
        try {
            delete require.cache[require.resolve(`/home/runner/commands/${command}.js`)]//Change the path depending on how are your folders located.
            client.commands.delete(command);
            const pull = require(`commands/${command}.js`);
            client.commands.set(command, pull);

            return message.channel.send(`**${command}** was reloaded succesfully!`);
        } catch (error) {
            return message.channel.send(`There was an error trying to reload **${command}**: \`${error.message}\``);
        }
    }
}