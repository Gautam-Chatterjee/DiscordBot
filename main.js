const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const time = require('./utils/time.js')
const geoTz = require('geo-tz')


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
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
        
    } 
    else if(command === 'mokugay'){
        message.channel.send('Not in my good christian server!')
    }
    else{
        let location = ''
       const address = command
      if(!address){
        message.channel.send('Where?, provide an address needle dick')
}
else{
  
  geocode(address,(error,{latitude,longitude,location}={})=>{
    time(geoTz(latitude,longitude),time =>{
      message.channel.send(time)
    })
  if(error){
    console.log(error)
    return message.channel.send(error)
    
    }
  message.channel.send(location)
  
  
  forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        return message.channel.send(error)
        
      }
 
     
      
    }) 
})
}
    }
    
});


client.login('NzQyMDQxMzgzNDM4NjQ3MzA3.XzAV5A.xazX2BqSpx7MO7cX9nmwhtyFYF0')