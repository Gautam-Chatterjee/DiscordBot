const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const time = require('./utils/time.js')
const geoTz = require('geo-tz')
const talkedRecently = new Set();


const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '!weather ';
const prefix2 ='!marius '
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('WeatherBot is online!');
});
 
client.on('message', message =>{
   
    if (talkedRecently.has(message.author.id)) {
      message.channel.send("Slow down! Try again after 10 seconds.");
} else {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
        
    } 
    
    else if(command ==='mokustraight'){
      message.channel.send('Interested? drop a message to Mokushiroku#8180 :kissing_heart:')
    }
    else{
        let location = ''
       const address = command
      if(!address){
        message.channel.send('Where?, provide an address needle dick')
}
else{
  
  geocode(address,(error,{latitude,longitude,location}={})=>{
    
  if(error){
    return message.channel.send(error)
  }
  else{
  message.channel.send(location)
  time(geoTz(latitude,longitude),time =>{
    message.channel.send(time)
  })
}
  
  
  forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        return message.channel.send(error)
        
      }
 
     
      
    }) 
})
}
    }
    talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 10000);
    }
    
});



client.login('NzQyMDQxMzgzNDM4NjQ3MzA3.XzAV5A.msBDM7tkethrblKgSrDE5mRcx-k')