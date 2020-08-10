const { Message } = require("discord.js")

module.exports = {
    name: 'help',
    description: 'This is a help command',
    execute(message,args){
        message.channel.send('Find the weather for any location on the planet. \n   type: !weather "location"\nIf your location contains two words, write them with a comma in between. For example, Los Angeles should be written as Los,Angeles.')
    }
}