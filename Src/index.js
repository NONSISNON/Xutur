//===================================================================================================================================================
//===================================================================================================================================================
//===================================================================================================================================================
 //  ____        _   
 // | __ )  ___ | |_ 
 // |  _ \ / _ \| __|
 // | |_) | (_) | |_ 
 // |____/ \___/ \__|
//===================================================================================================================================================

const { Client, Collection } = require("discord.js"); 
const Discord = require("discord.js");

const { GiveawaysManager } = require("discord-giveaways")
const db = require('megadb')
const client = new Discord.Client({ ws: {properties: {$browser: "Discord Android" }}})
client.queue = new Map()
const env = require('dotenv').config();

["alias", "commands"].forEach(x => client[x] = new Collection()); //Colocamos nuevas colecciones al Cliente
["comandos", "eventos"].forEach(x => require(`./handler/${x}`)(client)); //Hacemos un array con las carpetas que tendrá el handler NO TOCAR.

client.snipes = new Map()
const manager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        embedColor: "GREEN",
        reaction: "🎉"
    }
})

client.giveawaysManager = manager

client.on("guildMemberAdd", async (member) => {
let welcomerole = new db.crearDB('setwelcomerole', 'welcomeleave')   
if(!welcomerole.tiene(`${member.guild.id}`)) return;
let welcomerole2 = await welcomerole.obtener(`${member.guild.id}`);
console.log(welcomerole2)
member.roles.add(welcomerole2)
})

client.login(process.env.TOKEN);