const { Client } = require('discord.js');
const client = new Client({ intents: ["GUILDS","GUILD_MESSAGES"] });
const { token } = require('./config.json');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setPresence({
      activities: [{
          name: "Bot connnecter et en cours de production..."
      }]
    })
});

// Ecouteur d'événement des messages:
client.on("messageCreate", async message => {
    if (message.member.id !== client.user.id){
        if (message.content.toLowerCase().indexOf('touati') !== -1){
            message.reply({files: ["./image/Touati.png"]});
        }

        else if (message.content.toLowerCase().indexOf('kounalis') !== -1){
            message.reply({files: ["./image/Kounalis.png"]});
        }

        else if (message.content.toLowerCase().indexOf('ambre') !== -1){
            message.reply("blabla");
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

    }
})

client.login(token);