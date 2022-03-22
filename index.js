const { Client } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: ["GUILDS","GUILD_MESSAGES"] });
const { token } = require('./config.json');


let {PythonShell} = require('python-shell');

function cat(){
    PythonShell.run("test.py",null,function(err,results){
        console.log(results);
        return results;
    })
}

// Initialisation du Bot et information:
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
      activities: [{
          name: "SPAM VOS MERES !!! DU SANGGGGGGG BANDE DE NOOB !!!!"
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

        else if (message.content.toLowerCase().indexOf('nico') !== -1){
            message.reply("https://www.youtube.com/watch?v=OtF9c4dZyR0");
        }

        else if (message.content.toLowerCase().indexOf('damin') !== -1){
            message.reply({files: ["./image/damintroll.png"]});
        }

        else if (message.content.toLowerCase().indexOf('tchou') !== -1){
            for (let i = 0; i < 10; i++){
                message.reply("Tu va comprendre ta douleurs gros noob !\nhttps://tenor.com/view/prendre-sncf-prenez-palma-show-temps-gif-16421322");
                message.reply("https://tenor.com/view/pokemon-chammal-chamsin-metro-anime-gif-23982418");
            }
        }

        else if (message.content.startsWith("!")){
            PythonShell.run("test.py",null,function(err,results){
                console.log('resultat: %j', results);
                console.log("fin du code pyhton");
            })
            fs.readFile('data.txt', (err, data) => {
                if (err) throw err;
                console.log('test');
                message.reply(data.toString());
            })


        }        

    }
})



client.login(token);