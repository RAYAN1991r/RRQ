const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === '>wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**Tos Join servar bka**'); 
 
} 

} 

});

client.on("message", msg => {
  if (msg.content === "REKLAM") {
    msg.reply(
      "bnera"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "reklam") {
    msg.reply(
      "bnera"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "Reklam") {
    msg.reply(
               
      "bnera" 
    );
  }
});

client.on("message", msg => {
  if (msg.content === "سڵاو ریکلام") {
    msg.reply(
      "bnera"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "سڵاو ڕیکلام") {
    msg.reply(
      "bnera"
    );
  }
});

client.on("message", msg => {
  if (msg.content === "ڕیکلام") {
    msg.reply(
      "bnera"
    );
  }
});

client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(` مـن دام نـا بـەس تـوش دایـنـەێ  https://discord.gg/nvPUrH7jsp`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("941450985811869696").send(
`> ئـەم گـوڵـە ڕیکـلامەکـەێ کـرد: <@${message.author.id}>
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`reklam bomn bnera `) 
});




client.login("OTUxNzg1NzM0OTA4NTQ3MDcy.Yishig.nycK_5l_cm_6aKDyWdB-H6-n-T4");// تـۆکیـن بـوت 

///Code By MrTiGER///
