const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Bot pour Luminex");
    console.log("Connecter");
});

bot.login(process.env.TOKEN)


bot.on('message', message =>{
    if (message.content ==="Salut"){
        message.reply("Salut a toi :)");
        console.log("Commande reply salut faite !")
	    
        if (message.content ==="Yo"){
        message.reply("Yo mon rheys !");
        console.log("Commande reply salut faite !")
    }
});

bot.on ("guildMemberAdd", member => {
	member.guild.channels.find("name", "acceuil").send('Un luminex est aparue ! Bienvenue sur Luminex !')

});
