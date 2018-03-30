const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./settings.json");
const fs = require('fs');


bot.login(config.discord_token);


bot.on('message', function (message) {
    
});

bot.on('ready', function () {
        console.log('Bot en ligne !!')
});
