/***
 * DiscordDuCul
 * ------------
 *
 * Note : The config file is not part of the repository because
 *        your robot token must be kept secret.
 */

/*
 * Configuration
 */

const config_local = require('./config/config-local.json');
const config = require('./config/config.json');

/*
 * Load modules
 */

const fs = require('fs');
const discord = require('discord.js');

/*
 * Use Discord API
 */

const bot = new discord.Client();

//Login
console.log('Logging in...');
bot.login(config_local.robot.token);
console.log('Logged in !');

//Incomming message event
bot.on('message', message =>
{
    //Avoid botception
    if (message.author.bot)
        return;

    //Ignore non-command messages
    if (!message.content.startsWith(config.prefix))
        return;

    //Log
    console.log(message.author + ' sent \'' + message.content + '\'');

    //Separate command and args
    var arguments = message.content.split(" ");
    const command = arguments[0].substr(config.prefix.length).trim();
    arguments.shift();

    switch (command)
    {
        case "ping" :
            message.reply("Pong du cul !");
            break;
        case "ducul" :
            message.channel.sendMessage(getRandomLine() + " du cul");
            break;
        case "demerde" :
            message.channel.sendMessage(getRandomLine() + " de merde");
            break;
        case "detesmorts" :
            message.channel.sendMessage(getRandomLine() + " de tes morts");
            break;
        case "question" :
            message.reply(message.content.substr(command.length+1)+", "+crystallBall()+"...");
            break;
        case "fuckingragequit" :
            message.channel.sendMessage("Oh no...");
            process.exit();
            break;
        default :
            message.channel.sendMessage(config.unknown_command);
    }
});

/*
 * Functions
 */

/***
 * Get a random line from dictionnary
 * @returns Random String from dictionnary
 */
function getRandomLine() {
    var lines = fs.readFileSync('./config/'+config.dictionnary).toString().split("\n");
    return lines[Math.floor(Math.random() * lines.length)].trim();
};

function crystallBall() {
    return config.answers[Math.floor(Math.random() * config.answers.length)];
}
