// Dependencies
const Discord = require('discord.js');

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

// THE FUN BEGINS

// Actually login maybe?
client.login(process.env.TOKEN);