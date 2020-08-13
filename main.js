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
    if(message.content.toLowerCase().startsWith("pls rob") || (message.content.startsWith('pls steal'))){
      message.channel.send("Are you saving up for a boob job?")
    }  
    if(message.content.toLowerCase().startsWith('pls kill')){
      message.channel.send('LOL. do everyone a favour and kill yourself :axe:')
    }
    if(message.content.toLowerCase().startsWith('pls beg')){
      message.channel.send('Why? spent everything on the boob job?')
    }
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'help'){
        client.commands.get('help').execute(message, args);
        
    } 
    else if(command === 'mokugay'){
        message.channel.send('Not in my good christian server!')
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
    
});


client.login('NzQyMDQxMzgzNDM4NjQ3MzA3.XzAV5A.eP0hxt5V7BDW7P_ji-8EU0kfUUM')