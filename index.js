
//The config file is not part of the repository because
//your robot token must be kept secret.
var config = require('./config/config-local.json');

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(config.robot.token);
