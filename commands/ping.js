module.exports = {
    name: 'ping',
    description: "The ping command.",
    execute(message, args) {
        const Discord = require('discord.js');
        const pingEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('THE PING COMMAND')
            //.setURL('https://community.dcraft.net/support')
            .setAuthor(message.channel.lastMessage.member.displayName, message.channel.lastMessage.author.avatarURL())
            .setDescription('Here is the ping command!')
            //.setThumbnail('https://dcraft.net/wp-content/uploads/2020/06/dtechlogo-transparent.png')
            /*.addFields(
                {name: 'A field!', value: 'A value!'},
                {name: '\u200B', value: '\u200B'},
                {name: 'Inline field!', value: 'Inline value!', inline: true},
                {name: 'Inline field!', value: 'Inline value!', inline: true},
            )*/
            .addField('Ping', ':ping_pong: Pong!')
            .setImage('https://media.istockphoto.com/photos/active-senior-playing-pingpong-picture-id516718348')
            //.setTimestamp()
            .setFooter('This was the ping command!', 'https://www.pngmart.com/files/2/Pokeball-PNG-Photos.png');
        message.channel.send(pingEmbed);
    }
};