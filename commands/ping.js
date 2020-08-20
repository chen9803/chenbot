/*
module.exports = {
    name: 'ping',
    description: "The ping command.",
    execute(message, args) {
        const Discord = require('discord.js');
        const pingEmbed = new Discord.MessageEmbed()
            .setColor('#000000')
            .setTitle('THE PING COMMAND')
            //.setURL('https://community.dcraft.net/support')
            .setAuthor(message.channel.lastMessage.member, message.channel.lastMessage.author.avatar)
            .setDescription('Here is the ping command!')
            //.setThumbnail('https://dcraft.net/wp-content/uploads/2020/06/dtechlogo-transparent.png')
            .addFields(
                {name: 'A field!', value: 'A value!'},
                {name: '\u200B', value: '\u200B'},
                {name: 'Inline field!', value: 'Inline value!', inline: true},
                {name: 'Inline field!', value: 'Inline value!', inline: true},
            )
            .addField('Ping', ':ping_pong: Pong!')
            .setImage('../assets/pong.jpg')
            //.setTimestamp()
            .setFooter('This was the ping command!', 'https://www.pngmart.com/files/2/Pokeball-PNG-Photos.png');
        message.channel.send(pingEmbed);
    }
};
 */

module.exports = {
    name: 'ping',
    description: "The ping command.",
    execute(message, args) {
        message.channel.send('Pong!');
    }
};