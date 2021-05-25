const Discord = require('discord.js');
const client = new Discord.Client();
const ön_ek = require('./ön_ek.json')
const { Client, MessageEmbed } = require('discord.js')
const hedefimiz = require('./hedef.json')

var prefix = ön_ek.prefix
var hedef = hedefimiz.hedef

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya girdi ve artık aktif !!!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.author.send('as');
  }
});

  //küfürengel başlangıç//

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'pipitos') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aptal') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gerzek') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'gerizekalı') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'götütos') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amc') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananı sikem') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'çükütos') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'çükütost') {
    msg.delete()
    msg.channel.send('bu Kelimeyi Lütfen Yazma !!!');
  }
});

  //küfürengel son//

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'logo') {
    msg.reply('Benim logom https://i.hizliresim.com/8s7hixh.png');
  }
});
const db = require("quick.db");
const discord = require("discord.js");
const fetch = require("node-fetch");
const fs = require("fs");
require("express")().listen(1343);

//UPTİME

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log("Pinglenmedi.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


setInterval(() => {
  var links = db.get("linkler");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
    try {
      fetch(link);
    } catch (e) {
      console.log("" + e);
    }
  });
  console.log("Pinglendi.");
}, 60000);

client.on("ready", () => {
  if (!Array.isArray(db.get("linkler"))) {
    db.set("linkler", []);
  }
});

//embed hazırlıkları

const help = new discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`komutlar : up!ekle up!göster`);

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "up!ekle") {
    var link = spl[1];
    fetch(link)
      .then(() => {
        if (
          db
            .get("linkler")
            .map(z => z.url)
            .includes(link)
        )
          return message.channel.send(
            new discord.MessageEmbed()
              .setFooter("uptime bot")
              .setColor("RED")
              .setDescription("Projeniz Sistemimizde Zaten Var")
          );
        message.channel.send(
          new discord.MessageEmbed()
            .setFooter("uptime bot")
            .setColor("RED")
            .setDescription("Projeniz Sistemimize Başarıyla Eklendi.")
        );
        db.push("linkler", { url: link, owner: message.author.id });
      })
      .catch(e => {
        return message.channel.send(
          new discord.MessageEmbed()
            .setFooter("uptime bot")
            .setColor("RED")
            .setDescription("komuttan sonraki mesajınız bir link olmalı")
        );
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "up!göster") {
    var link = spl[1];
    message.channel.send(
      new discord.MessageEmbed()
        .setFooter("uptime bot")
        .setColor("RED")
        .setDescription(`${db.get("linkler").length} Proje Aktif Tutuluyor!`)
    );
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "up!yardım") {
    var link = spl[1];
    message.channel.send(help);
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "up!linkler") {
    var link = spl[1];
    message.channel.send(
      new discord.MessageEmbed()
        .setFooter("uptime bot")
        .setColor("RED")
        .setDescription(`${db.get("linkler")}`)
    );
  }
});

  //UPTİME SON//

  client.on('message', message => {
    if (message.content.toLowerCase() === 'gamerayaz') {
      const kanal = new MessageEmbed()

      .setTitle('Gamer Ayaz')
      .setDescription('Botu beğendiyseniz beğendim diyin.')
      .setAuthor('Frosty Bot')
      .setColor("RANDOM")
      .setThumbnail('https://i.hizliresim.com/8s7hixh.png')
      .addField(':hearts: seviliyorsun !!', 'Frosty Bot');
      message.channel.send(kanal);
    }
  });

client.on('guildMemberAdd', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === '「🚪」gelen-giden');
  girişçıkış.send('Aramıza hoş geldin, ${member}');
  member.send('${member} pşşşt ben gamer ayazın botuyum !!!')
});

client.on('guildMemberRemove', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === '「🚪」gelen-giden');
  girişçıkış.send('${member} aramızdan ayrıldı !! :()');
});

 client.on("guildMemberAdd", member => {
  try {
  let role = member.guild.roles.cache.find(role => role.name === 'Üye')
  member.roles.add(role);
} catch(e) {
  console.log(e)
}
});



client.on("message", message => {
  if (message.content.startsWith('rolver')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();
    member.roles.add(role)
  }
});

client.on('guildMemberAdd', member => {
try {
const Sayaç = member.guild;
Sayaç.setName(`Ayaz (${member.guild.memberCount}/${hedef}`);
}
catch (e) {
console.log(e);
}
});

client.on('guildMemberRemove', member => {
try {
const Sayaç = member.guild;
Sayaç.setName(`Ayaz (${member.guild.memberCount}/${hedef}`);
}
catch (e) {
console.log(e);
}
});



client.on('guildMemberAdd', member => {
try {
const Sayaç = member.guild.channels.cache.find(channel => channel.id === '846414335886884884');
Sayaç.setName(`Üye Sayısı: ${member.guild.memberCount}`);
}
catch (e) {
console.log(e);
}
});

client.on('guildMemberRemove', member => {
try {
const Sayaç = member.guild.channels.cache.find(channel => channel.id === '846414335886884884');
Sayaç.setName(`Üye Sayısı: ${member.guild.memberCount}`);
}
catch (e) {
console.log(e);
}
});

//music

client.on('message', async message => {
  if (message.content.startsWith('f!play')) {
    const args = message.content.split(' ').slice(1)
    const botmesajı = args.join(" ")
    if (!botmesajı) return message.reply('URL koymadınız')
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const ytdl = require('ytdl-core');
      connection.play(ytdl('${botmesajı}', { filter: 'audioonly' }))
    } else {
message.reply('Bir ses kanalına katıl.')
    }
  }
  });

//music son

client.on('guildMemberAdd', member => {
const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'sayaç');
girişçıkış.send(`${member} sunucumuza katıldı. Üye Sayımız ${member.guild.memberCount}, Üye Hedefimiz ${hedef}`);
});

//Kick Komutu

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('f!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
           log.send(`${user.tag} kişisi kicklenmiştir`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Atılacak kişiyi yazmadın");
    }
  }
});

//Ban
client.on('message', message => {
  if (!message.guild) return;
if (message.content.startsWith('f!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban()
          .then(() => {
          const log = message.guild.channels.cache.find(channel => channel.name === 'log-kanalı')
           log.send(`${user.tag} kişisi banlanmıştır.`);
          })
          .catch(err => {
            message.reply('Bunu yapamam.');
            console.error(err);
          });
      } else {
        message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
      }
    } else {
      message.reply("Yasaklanacak kişiyi yazmadın.");
    }
  }
});

client.login(process.env.token);
