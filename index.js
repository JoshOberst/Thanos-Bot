const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");

client.on('message', (msg) => {
    var num = Math.floor(Math.random() * 100);
    
    if(msg.isMemberMentioned(client.user) == true){
        console.log("yesssir!");
        request();
    }
    else if (num <= 9) {
		request();
    }
});
 function request(){
    fetch('https://thanosapi.herokuapp.com/random/')
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            msg.channel.send(data.quote);
        });
 };



client.on('ready', () => {
	console.log('Bot is now online!');
});

client.login(process.env.token);
