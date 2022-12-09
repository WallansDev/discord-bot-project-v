const Discord = require('discord.js');
const client = new Discord.Client();
let { tokenBot1 } = require("./token.json");

client.login(tokenBot1);

client.on("ready", () => {
    console.log(`////////////////////////////////`);
    console.log(`////// Le BOT est prêt !  //////`);
    console.log(`////////////////////////////////`);
    client.user.setActivity("Netflix", { type: "WATCHING", name: "itt" });
});

// Commande +say
client.on('message', message => {
    if (message.content.startsWith('+say')) {
        let text = message.content.slice(5, message.content.length); // Texte de l'auteur de la commande

        message.channel.send(text);
        message.delete();
    }
});

// Mettre quand le serveur est ouvert ou éteint...
client.on('message', message => {
    if (message.content === ('+on')) {
        client.user.setActivity("Project V RolePlay | FiveM | En Dev", { type: "PLAYING", name: "itt" });
    } else if (message.content === ('+off')) {
        client.user.setActivity("le serveur éteint...", { type: "WATCHING", name: "itt" });
    }
});

// Math.random sur 100000
function Token(max) {
    return Math.floor(Math.random() * Math.floor(100000));
}


client.on('message', message => {
    if (message.content === ('+token')) {
        message.channel.send('Génération de votre token...');
        setTimeout(function() {
            message.channel.send({
                embed: {
                    color: 3447003,
                    title: `**Token : ||${Math.floor(Math.random() * Math.floor(100000))}||**`,
                    url: "",
                    description: "__Faites attention de ne pas partager votre code token il est unique.__"
                }
            });
        }, 2000);
    }
});


// Donner l'avatar de la personne
client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === '+avatar') {
        // Send the user's avatar URL
        message.reply(message.author.displayAvatarURL());
    }
});


// Commande +aide
client.on('message', msg => {
    if (msg.content === '+aide') {
        msg.channel.send({
            embed: {
                color: 3447003,
                title: "__Toutes les commandes :__",
                url: "",
                description: "**+aide : Pour obtenir toutes les commandes disponibles.\n+boutique : Pour obtenir le lien de la boutique.\n+forum : Pour obtenir le lien du forum.**",
                thumbnail: "https://zupimages.net/up/21/07/68l5.png"
            }
        });
    };

    // Commande +boutique
    if (msg.content === '+boutique') {
        msg.reply("Notre boutique n'est pas encore disponible. Nous vous en informerons lorsque qu'elle le sera.");


        msg.channel.send({
            embed: {
                color: 3447003,
                title: "__Boutique Project-V__",
                url: "https://www.google.com/",
                description: "La boutique de project-v.",
                thumbnail: "https://zupimages.net/up/21/07/68l5.png"
            }
        });

    };

    // Commande +forum
    if (msg.content === '+forum') {
        msg.reply("Notre forum n'est pas encore disponible. Nous vous en informerons lorsque qu'il le sera.");

        /* A mettre quand le forum sera fait

        msg.channel.send({embed: {
          color: 15158332,
          title: "__Forum Project-V__",
          url: "https://www.google.com/",
          description: "Le forum de project-v."
        }})
        */
    }

});

// Blague du 21
client.on('message', message => {
    if (message.content === ('Selon toi petit bot, Billy est ?')) {
        message.channel.send('Un trisomique 21')
        setTimeout(function() {
            message.channel.send('https://tenor.com/view/downs-down-syndrome-huh-look-back-what-gif-12361802')
        }, 1000);
    }
});


// Blague du coiffeur
client.on('message', message => {
    if (message.content.endsWith('quoi')) {
        message.channel.send(`Feur 🤣`)
        setTimeout(function() {
            message.channel.send(`https://tenor.com/view/%C3%A9ric-zemmour-rire-mdr-laugh-lol-gif-12592892`)
        }, 1000);
    } else if (message.content.endsWith('quoi ?')) {
        message.channel.send(`Feur 🤣`)
        setTimeout(function() {
            message.channel.send(`https://tenor.com/view/fall-stairs-gif-12539685`)
        }, 1000);
    }
});

// Blague de dona
client.on('message', message => {
    if (message.content === ('!blague_dona')) {
        message.channel.send('https://tenor.com/view/gorila-ass-culo-de-gorilla-monkey-rascar-culo-gif-15809484')
        setTimeout(function() {
            message.channel.send('https://zupimages.net/up/21/08/d393.jpg')
        }, 1000);
    }
});