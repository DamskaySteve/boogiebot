const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Bot pour BoogieWars");
    console.log("Connecter");
});

bot.login(process.env.TOKEN)


bot.on('message', message =>{
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes arrives !");

    }

    if (message.content ==="Salut"){
        message.reply("Salut a toi :)");
        console.log("Commande reply salut faite !")
    }
});

bot.on ("guildMemberAdd", member => {
	member.guild.channels.find("name", "acceuil").send('Bienvenue {member} sur BoogieWars ! sois actif et respectueux !')

});


