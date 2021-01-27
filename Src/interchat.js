module.exports = {
  interchat: async(client, message, args) =>{
    let user = message.author
    const Discord = require("discord.js")
    
    
      let canal = client.channels.cache.filter(c => c.name == "interchat");
      const db = require("megadb")
      const color = new db.crearDB("color", "level");
      const blacks = new db.crearDB("blacks", "blacks")
const black = await blacks.obtener("blacks")
const devs_db = new db.crearDB("devs", "devs")
const devstag = new db.crearDB("devstags", "devs")
const helpers_db = new db.crearDB("helpers", "helpers")
const helpertags = new db.crearDB("helpertags", "helpers")
let staff = await devs_db.obtener("devs")
let helpers = await helpers_db.obtener("helpers")

let owners = ["602698302164697098", "699379685401952287", "607620224732102717"]
let usuario =
      message.mentions.members.first() ||
      client.users.resolve(args[0]) ||
      message.author;
let colorxd = await color.obtener(`${usuario.id}`);
const vips_db = new db.crearDB("vips", "vips")
const vipstag = new db.crearDB("viptags", "vips")
let vips = await vips_db.obtener("vips")

 if(message.channel.name == "interchat"){
  if(black.includes(message.author.id) == true) return message.channel.send(new Discord.MessageEmbed()
                                              .setDescription(":Cancel: | No puedes usar el InterChat por quee estás en la Black List del BOT")
                                              .setColor("RED"))

    const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag} - ${message.author.id}`, message.author.avatarURL()) 
    .setFooter(message.guild.name+" - "+message.guild.id, message.guild.iconURL())
   // .setThumbnail(message.author.avatarURL)
    .setDescription(message)
    .setColor("RANDOM")

    const embedowner = new Discord.MessageEmbed()
        .setThumbnail(user.avatarURL({dynamic: true}))
.addField(`${message.author.tag}`, `<:Creador:735969509764235415> **Owner** <:Creador:735969509764235415>`, true)
    .setFooter(message.guild.name+" - "+message.guild.id, message.guild.iconURL())
    .addField('Mensaje:', message)
    .setColor(colorxd)

    const embedstaff = new Discord.MessageEmbed()
    .setThumbnail(user.avatarURL({dynamic: true}))
.addField(`${message.author.tag} - ${message.author.id}`, `<:Admins:735970078000152658> **Admin** <:Admins:735970078000152658>`, true)
    .setFooter(message.guild.name+" - "+message.guild.id, message.guild.iconURL())
    .addField('Mensaje:', message)
    .setColor(colorxd)
    
    const embedhelper = new Discord.MessageEmbed()
    .setThumbnail(user.avatarURL({dynamic: true}))
.addField(`${message.author.tag} - ${message.author.id}`, `<:Helpers:735970486835609751> **Helper** <:Helpers:735970486835609751>`, true)
    .setFooter(message.guild.name+" - "+message.guild.id, message.guild.iconURL())
    .addField('Mensaje:', message)
    .setColor(colorxd)

    const embedvip = new Discord.MessageEmbed()
    .setThumbnail(user.avatarURL({dynamic: true}))
.addField(`${message.author.tag} - ${message.author.id}`, `<a:Beer:719552210790252594>**VIP**<a:Beer:719552210790252594>`, true)
    .setFooter(message.guild.name+" - "+message.guild.id, message.guild.iconURL())
    .addField('Mensaje:', message)
    .setColor(colorxd)

       const array = ["discord.gg", "discord.me", "discord.io/", "discordapp.com/invite", "https:", ".com", ".net", "http:"]
 if(message.channel.name == "interchat"){

    if(array.some(word =>

                 message.content.toLowerCase().includes(word))){
      message.delete(100)

      message.reply('No se permiten invitaciones en este chat').then(response =>{

        response.delete(5000) 

                });
    }else{
      
         canal.forEach(m => {
if(!message.guild.me.permissionsIn(m).has('VIEW_CHANNEL')) return;
if(!message.member.permissionsIn(m).has('SEND_MESSAGES')) return;

          if(owners.includes(message.author.id) == true) return client.channels.resolve(m.id).send(embedowner)
          if(staff.includes(message.author.id) == true) return client.channels.resolve(m.id).send(embedstaff)
          if(vips.includes(message.author.id) == true) return client.channels.resolve(m.id).send(embedvip) 
          if(helpers.includes(message.author.id) == true) return client.channels.resolve(m.id).send(embedhelper) 
         client.channels.resolve(m.id).send(embed)
         });
    }
    }
 }
    if(!message.channel.name == "interchat") return;



  if(message.channel.name == "interchat") return message.delete()

  }
}
