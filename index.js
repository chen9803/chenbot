/* **************************************************

chenbot in disguise
- let's update the "server" count every update
- - ideally something cursed incrementally, 1939, 1945, etc.
- - if not, just by one every commit should do it
- - - our "version" number lmao
- - - actually hold up ok added serverCount
- - - ngl this is actually a good way of discreetly verifying if the update worked in "production"
- clean code mmm tasty code
- I'm sorry Aidan it's like 11:30pm

"changelog"
- v1.0.0 1923: PING
- v1.0.1 1939: ping update (idk something must've happened to jump 16 years)
- v1.0.2 1940: serverCount, comments
- v1.0.3 1941: changelog, removed local assets folder, gitignore

************************************************** */


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

// "Version"
const serverCount = '1941';

// Announce on launch
client.once('ready', () => {
    console.log('chen-bot is online!');
    client.user.setActivity(`on ${serverCount} servers!`, { type: 'PLAYING' }).catch(console.error);
});

// Check for correct filetype (JavaScript) and require command files when running given command
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// THE FUN BEGINS

// Check to make sure a message starts with the c. prefix, and that it's not sent by a bot
client.on('message', async message => {

    // Identify arguments by a space in the command and properly format
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }

});

// Login
client.login(process.env.TOKEN);