//The config file is not part of the repository because
//your robot token must be kept secret.
var config = require('./config/config-local.json');

//Discord API
const Discord = require('discord.js');
const bot = new Discord.Client();

console.log('Hello, Discord Du Cul !');

//Login
console.log('Logging in...');
bot.login(config.robot.token);
console.log('Logged in !');

//Incomming messsage event
bot.on('message', message =>
{
    if(message.content === "_ping")
    {
        message.reply("Pong du cul !")
    }
})