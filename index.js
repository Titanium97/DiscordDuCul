//The config file is not part of the repository because
//your robot token must be kept secret.
var config = require('./config/config-local.json');
var COMMAND_START = '_';

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
    if(message.author.bot)
        return;
    
    console.log(message.author+' send \''+message.content+'\'');
    
    //Check command
    if(message.content.startsWith(COMMAND_START))
    {
     var command = message.content.substr(1);
     
                switch (command)
                {
                    case "ping" :
                        message.reply("Pong du cul !");
                        break;
                }
    }
})