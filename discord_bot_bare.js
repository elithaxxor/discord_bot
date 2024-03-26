const Discord=require('discord.js');
const fetch = require('node-fetch');
constDatabase = require('@replit/database'); // require is node

const client = new Discord.Client(); 

const sad_words = ['sad', 'angry','depressed','so-so',]
const happy_words = ['happy', 'ecstatic','ebullient','maniac',]
const encouragements = ['cheer up', 'you will get through this']

function getQuote(){
        return fetch('https://zenquotes.io/api/random').then(res=> {
                return res.json(); 
        })
        .then(data=>{
                return data[0]['q'] + ' -' +data[0]['a']
                })
}


client.on('ready', () => `logged in as ${client.user.tag}`)
client.on('ready', msg => {
        if (msg.content ==='post'){
                msg.reply('reply')
        }
})

client.login(process.env.TOKEN)
