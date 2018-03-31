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
	member.guild.channels.find("name", "acceuil").send('Bienvenue sur BoogieWars ! sois actif et respectueux !')

});

if (message.content === prefix + help){
	var embed = new Discord.RichEmbed()
		.setTitle("**Liste des commandes**")
		.setDescription("Commandes du bot :")
		.addField("!pc","Vous ajoute le grade PC","**!ps4**","Vous ajoute le grade ps4", true)
		.setColor("0x2E64FE")
		.setFooter("Bonne aventure sur BoogieWars !")
	message.channel.sendEmbed(embed);
	}
});

