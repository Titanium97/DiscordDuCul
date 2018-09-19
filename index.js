//The config file is not part of the repository because
//your robot token must be kept secret.
var config = require('./config/config-local.json');
var fs = require('fs');

const COMMAND_PREFIX = '_';
//const WORDS_COUNT = 22740;

//Discord API
const Discord = require('discord.js');
const bot = new Discord.Client();

console.log('Hello, Discord Du Cul !');

//Login
console.log('Logging in...');
bot.login(config.robot.token);
console.log('Logged in !');

//Incomming message event
bot.on('message', message =>
{
    //Avoid botception
    if (message.author.bot)
        return;

    //Ignore non-command messages
    if (!message.content.startsWith(COMMAND_PREFIX))
        return;

    //Log
    console.log(message.author + ' sent \'' + message.content + '\'');

    //Separate command and args
    const command = message.content.substr(1);
    const arguments = message.content.slice(COMMAND_PREFIX.length);

    switch (command)
    {
        case "ping" :
            message.reply("Pong du cul !");
            break;
        case "ducul" :
            message.reply(getRandomLine().trim() + " du cul");
            break;
        case "demerde" :
            message.reply(getRandomLine().trim() + " de merde");
            break;
        case "detesmorts" :
            message.reply(getRandomLine().trim() + " de tes morts");
            break;
    }
});

//Get a random line from de dictionnary
function getRandomLine() {
    var lines = fs.readFileSync('./config/words_fr.txt').toString().split("\n");
    return lines[Math.floor(Math.random() * lines.length)];
};