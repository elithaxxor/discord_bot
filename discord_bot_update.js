

// *javascript review, project scope and guidlines provisioned by freecodecamp.com.  

const application_id =  "1221265758055567360"
const public_key = "MTIyMTI2NTc1ODA1NTU2NzM2MA.Gc4AJL.urctOpQc7a1W9eA0GcxvQMk5Kdo-NxSvZ1_V9k"



const { Client, IntentsBitField } = require('discord.js');


const client = new Client({ intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMessages, 
        IntentsBitField.Flags.GuildMessageReactions, 
        IntentsBitField.Flags.MessageContent, 

        IntentsBitField.Flags.DirectMessages, 
        IntentsBitField.Flags.DirectMessageReactions
],
}); 

client.on('ready', (c) => { 
        console.log(`Logged in as ${client.user.tag}!`);
});

client.login('MTIyMTI2NTc1ODA1NTU2NzM2MA.Gc4AJL.urctOpQc7a1W9eA0GcxvQMk5Kdo-NxSvZ1_V9k');








// const { token } = require('./package.json');

// // const Discord=require('discord.js');
// // const fetch = require('node-fetch');
// const Database = require('@replit/database'); // require is node

// const sad_words = ['sad', 'angry','depressed','so-so',];
// const happy_words = ['happy', 'ecstatic','ebullient','maniac',];
// const starterEncouragements = ['cheer up', 'you will get through this'];
// const db = new Database();


// db.get('encouragements').then(encouragements => // .then => sets encouragements as a variable to parse in to db logic
//          { if (!encouragements || encouragements.length < 1){
//                 db.set('encouragements', starterEncouragements);
// }})

// // database response (verify db exists, if it does not- set it to an existing db)
// db.get('responding').then(response => {
//         console.log('Database is currently set to: ' + response);
//         if(response == null ){ //confirm this is first time program is null, and nothing is in the data base
//                 db.set('responding', true);
//                 console.log('Database is NOW currently set to: ' + response);
//         } 
// })

// function prettify(){
//         let multi = 30;
//         let str = "X";
//         return (str.repeat(multi));
// }


// function updateEncouragements(updatedEncourgement){
//         var today = new Date();
//         db.get('encouragements').then(encouragements => {
//                 db.set('encourgements', updatedEncourgement);
//                 console.log( `${today} Update Encouragements Called: \n
//                 ${prettify()}\n
//                 Fetched DB: ${encouragements} \n
//                 Updateded DB:  ${updatedEncourgement}`);
//         });
// }

// function deleteEncouragement(index){
//         var today = new Date();
//         db.get('encouragements').then(encouragements => {
//         if(encouragements.length > index){
//                 encouragements.splice(index, 1 );
//                 db.set('encouragements',encouragements)
//                 console.log( `${today} Update Encouragements Called: \n
//                 ${prettify()}\n
//                 Fetched DB: ${encouragements} \n
//                 Updateded DB:  ${encouragements}`);
        
//         }})};

// function getQuote(){
//         return fetch('https://zenquotes.io/api/random').then(res=> {
//                 return res.json(); 
//         })
//         .then(data=>{
//                 return data[0]['q'] + ' -' +data[0]['a']
//                 });
// }

// // Start of DiscordBot api :: (msg.content) (msg.author.not) (msg.channel.send)

// client.on('ready', () => `logged in as ${client.user.tag}`);


// client.on('message', msg => {
//         const date = new Date();
//         db.get('responding').then(responding=>{
//                 if (responding && sad_words.some(word => msg.content.includes(word))){ // loop thru array, and return true for matching vals 
//                         db.get('encouragements').then(encouragements => {
//                         const encouragement = encouragements[Math.floor(Math.random()*encouragements.length)];
//                         console.log('client needs to be encouraged'+ date);
//                         msg.reply(encouragement); 
//                         })}

//         if (msg.author.bot){ // exit function if author is bot 
//                 console.log('message from author bot');
//                 return
//         }
//         if (msg.content ==='help'){
//                 console.log('test post-response');
//                 msg.channel.send('del = delete db with new msg.. new = update db list = show available db');
//         } // array, find .some(val then create function for logic  )
//         if (sad_words.some(word => msg.content.includes(word))){ // loop thru array, and return true for matching vals 
//                 db.get('encouragements').then(encouragements => {
//                 const encouragement = encouragements[Math.floor(Math.random()*encouragements.length)];
//                 console.log('client needs to be encouraged'+ date);
//                 msg.reply(encouragement); 
//                 });
//         // update the encouragements array / db ( string splicing )
//         if (msg.content.startsWith('$new')){
//                 let encouragingMessage = msg.content.split('$new ')[1].toLowerCase; // string splicing 
//                 updateEncouragements(encouragingMessage);
//                 console.log('Client request db update' + date);
//                 msg.channel.send('updating db with new msg.. ');
//         };
//         if (msg.content.startsWith('$del')){
//                 let index = parseInt(msg.content.split('$del')[1]); // parseInt converts string to int 
//                 console.log(date + 'Client requested index: ' + index );
//                 deleteEncouragement(index).then(msg.channel.send('encouragement deleted: '))
//         }
//         if (msg.content.startsWith('$list')){
//                 db.get('encouragements').then(encouragements=>{
//                 msg.channel.send(encouragements);
//                 console.log('Client called list'+ date)
//                 })
//         }
//         if (msg.content.startsWith('$responding')){
//                 resp = msg.content.split(responding)[1];
//                 if ( resp.tolowerCase() == 'true'){
//                         console.log('client requested response set True.' + date)
//                         db.set('responding', true);
//                         msg.channel.send('bot response is on')
//                 }else{
//                         console.log('client requested response set False.' + date)
//                         db.set('responding', false);
//                         msg.channel.send('bot response is off')
//                 }
//         }
//         }
// });
// client.login(process.env.TOKEN);