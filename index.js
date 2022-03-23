const { Client } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: ["GUILDS","GUILD_MESSAGES"] });
const { token } = require('./config.json');
const { prefix } = require('./config.json');

let {PythonShell} = require('python-shell');
//const { resolve } = require('path');

// Initialisation du Bot et information:
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
      activities: [{
          name: "AU RAPPORT! PRET A TE SPAM !"
      }]
    })
});

// Ecouteur d'événement des messages:
client.on("messageCreate", async message => {
    if (message.member.id !== client.user.id){

        if (message.content.toLowerCase().indexOf('touati') !== -1){
            message.reply({files: ["./image/Touati.png"]});
        }

        else if (message.content.toLowerCase().indexOf('celine') !== -1){
            message.reply({files: ["https://images-ext-2.discordapp.net/external/OcMZfF-B0nhw3smHyKRu4n_0NdOmEX_DXRTwo6hye88/%3Fc%3DVjFfZGlzY29yZA/https/media.tenor.com/G36_ldR4F3MAAAPo/youjo-senki-tanya-degurechaff.mp4"]});
        }

        else if (message.content.toLowerCase().indexOf('kounalis') !== -1){
            message.reply({files: ["./image/Kounalis.png"]});
        }

        else if (message.content.toLowerCase().indexOf('+1') !== -1){
            message.reply({files: ["./image/Kounalis2.png"]});
        }

        else if (message.content.toLowerCase().indexOf('ambre') !== -1){
            message.reply("Imposante et Menaçante !!! \n https://tenor.com/view/red-panda-roter-panda-running-panda-fight-gif-22074676");
        }

        else if (message.content.toLowerCase().indexOf('fanny') !== -1){
            message.reply("https://www.youtube.com/watch?v=wyU4Oa7t6SE");
        }

        else if (message.content.toLowerCase().indexOf('matthieu') !== -1){
            message.reply("https://tenor.com/view/je-mennuie-ennuyer-sennuyer-gif-12160582");
        }

        else if (message.content.toLowerCase().indexOf('nico') !== -1){
            message.reply("https://www.youtube.com/watch?v=OtF9c4dZyR0");
        }

        else if (message.content.toLowerCase().indexOf('damin') !== -1){
            message.reply({files: ["./image/damintroll.png"]});
        }

        else if (message.content.toLowerCase().indexOf('tchou') !== -1){
            for (let i = 0; i < 10; i++){
                // Mettre tchoutchou en image pour plus de vitesse
                message.reply("Tu va comprendre ta douleurs gros noob !\nhttps://tenor.com/view/prendre-sncf-prenez-palma-show-temps-gif-16421322");
                message.reply("https://tenor.com/view/pokemon-chammal-chamsin-metro-anime-gif-23982418");
            }
        }

        else if (message.content.startsWith(prefix)){
            // Information des commandes:
            const commandBody = message.content.slice(prefix.length); // NomdeCommande param1 param2 paramN
            const ARGS = commandBody.split(' '); // Liste de caractère ['param1', ..., paramN]
            const command = ARGS.shift().toLowerCase(); //NomdeCommande

            // Liste des commandes:

            if (command === "cat"){

                function Lecture(){
                    fs.readFile('data.txt','utf8', (err, data) => {
                        if (err) throw err;
                    
                        message.reply(data.toString());
                        console.log('FIN -> Javascript code\n\n');
                    })
                }

                function Ecriture(){
                    let option = { args: ['cat']}
                    PythonShell.run("gif.py",option,function(err,results){
                        console.log('resultat: %j', results);
                        console.log("fin du code pyhton");
                        Lecture();
                    })
                }

                // On appel La fonction de lecture:
                Ecriture();
            }

            if (command === "gif"){

                function Lecture(){
                    fs.readFile('data.txt','utf8', (err, data) => {
                        if (err) throw err;
                    
                        message.reply(data.toString());
                        console.log('FIN -> Javascript code\n\n');
                    })
                }

                function Ecriture(){
                    let option = { args: ARGS}
                    PythonShell.run("gif.py",option,function(err,results){
                        console.log('resultat: %j', results);
                        console.log("fin du code pyhton");
                        Lecture();
                    })
                } 
                // On appel La fonction de lecture:
                Ecriture();
                
               
            }

            if (command === "kiwi"){

                function Ecriture(){
                    try {
                        console.log(message.attachments.toJSON()[0]["url"]);
                    } catch (e) {
                        console.log(e.name + ": " + e.message);
                        message.reply("Ta oublier l'image");
                    }

                    if (ARGS.length >= 2 ){
                        let option = { args: [ ARGS[0], ARGS[1], message.attachments.toJSON()[0]["url"]]}
                        PythonShell.run("kiwi.py",option,function(err,results){
                            console.log('resultat: %j', results);
                            console.log("fin du code pyhton");
                            message.reply({files: ["./kiwi.png"]});
                        })
                    }
                    else{
                        message.reply("Nan, j'ai la flemme ;)\n https://tenor.com/view/carte-kiwi-sncf-kiwi-mister-j-day-j-day-gif-19975329 ");
                    }
                } 
                // On appel La fonction Ecriture:
                Ecriture();
            }

            if (command === "kiwiception") {
                function Ecriture(){
                    try {
                        console.log(message.attachments.toJSON()[0]["url"]);
                    } catch (e) {
                        console.log(e.name + ": " + e.message);
                        message.reply("Ta oublier l'image");
                    }

                    if (ARGS.length >= 2 ){
                        let option = { args: [ command, ARGS[0], message.attachments.toJSON()[0]["url"], ARGS[1], ARGS[2]]}
                        PythonShell.run("kiwi.py",option,function(err,results){
                            console.log('resultat: %j', results);
                            console.log("fin du code pyhton");
                            message.reply({files: ["./kiwi.png"]});
                        })
                    }
                    else{
                        message.reply("Nan, j'ai la flemme ;)\n https://tenor.com/view/carte-kiwi-sncf-kiwi-mister-j-day-j-day-gif-19975329 ");
                    }
                } 
                // On appel La fonction Ecriture:
                Ecriture();               
            }
            
            if (command === "help") {
                message.reply(
                    "Voici la liste des commandes:\n\n   !cat => Répond avec un gif de chat aléatoire\n   !gif Paramètre1 Paramètre2 ... ParamètreN => Répond avec un gif rechercher aléatoirement, on peut avec les paramètres orienté la recherche\n   !kiwi NOM PRENOM IMAGE => Renvoie une image carte kiwi, ne pas oublier d'uplod une image (3ème argument)\n   !kiwiception Nom Prenom Nb IMAGE => Baser sur le model de !kiwi, rèpete le motife de la carte dans l'emplacement photo un nombre Nb de fois"
                );
            }



        }
        

    }
})



client.login(token);