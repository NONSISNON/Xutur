const megadb = require('megadb')
const level = new megadb.crearDB('levels', 'level');
const rep = new megadb.crearDB('rep', 'level')
const personal = new megadb.crearDB('textopersonal', 'level')
const balance = new megadb.crearDB('balance', 'level')
const color = new megadb.crearDB('color', 'level')
const marry = new megadb.crearDB('marry', 'level')
const levelac = new megadb.crearDB('levelac', 'level')
const lvlup_db = new megadb.crearDB("LevelUps", "sets")

const Discord = require('discord.js')

module.exports = {
  conexionlevel: async(client, message) =>{
 let random = Math.floor(Math.random() * 30) + 1
 var randomfull = [1, 2, 3, 4, 5, 0, 0, 0]
    if(!level.tiene(`${message.author.id}`)){ level.establecer(`${message.author.id}`, {xp: 0, nivel: 1})}
    
   let  xp = await level.obtener(`${message.author.id}.xp`)
   let nivel = await level.obtener(`${message.author.id}.nivel`)
   let subirlvl = 5 * (nivel ** 2) + 50 * nivel + 100 
   
       if(!color.tiene(`${message.author.id}`)) color.establecer(`${message.author.id}`, "#5b00ff") 
       if(!balance.tiene(`${message.author.id}`)) balance.establecer(`${message.author.id}`, 0) 
       if(!personal.tiene(`${message.author.id}`)) personal.establecer(`${message.author.id}`, "No tiene texto personal") 
       if(!rep.tiene(`${message.author.id}`)) rep.establecer(`${message.author.id}`, 0) 
    
   if(levelac.tiene(`${message.guild.id}`)) return;    
   if(!levelac.tiene(`${message.guild.id}`)) {
   if((xp + random) >= subirlvl){ 
   level.establecer(`${message.author.id}`, {xp: 0, nivel: parseInt(nivel+1)})
     
     let dato = await lvlup_db.get(message.guild.id)
     
     if(!dato){
return;
     } else {
     
    const embed = new Discord.MessageEmbed()
    .setTitle('Level UP <a:UpGif:665965218467414096>')
    .setDescription(`${message.member} Has subido al nivel ${parseInt(nivel+1)}`)
    .setColor("#5b00ff")
    return message.channel.send(embed)
     }
    }else{
      
      let ultrarandom = randomfull[Math.floor(Math.random() * randomfull.length)]
     // let skere = client.channels.get("681860864340656142")
      balance.sumar(`${message.author.id}`, ultrarandom) 
      level.sumar(`${message.author.id}.xp`, random) 
      rep.sumar(`${message.author.id}`, 0) 

     // console.log(`${message.author.tag} subió ${random} de XP`) 
      return
    }
  }
}
}
//   },
  
//   toprango: async(users, message)=>{
//   let lista = []
//   for(var key in users){
//     let user = message.guild.member.has(key) ? message.guild.member.get(key).user.tag : `[Usuario abandono el servidor] (${key})`
//     user.push([user, users[key].nivel, users[key].xp])
//   }
//     lista.sort((x1, x2) =>{
//       return x2[1] - x1[1] || x2[2] - x1[2] 
      
//     });
//     return lista 
// }
  
//}