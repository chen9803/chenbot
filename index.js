// Dependencies
const Discord = require('discord.js');
const fs = require('fs');
require('dotenv').config();

// Launch
const client = new Discord.Client();

// Prefix
const prefix = 'c.';

// Create collection of commands
client.commands = new Discord.Collection();

// Announce on launch
client.once('ready', () => {
    console.log('chen-bot is online!');
    client.user.setActivity('A COMP', { type: 'STREAMING' }).catch(console.error);
});

// Check for correct filetype (JavaScript) and require command files when running given command
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// identify arguments by a space in the command and properly format
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

// THE FUN BEGINS

// Check to make sure a message starts with the c. prefix, and that it's not sent by a bot
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }

});

// Login
client.login(process.env.TOKEN);