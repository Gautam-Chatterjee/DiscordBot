const { Message } = require("discord.js")

module.exports = {
    name: 'weather',
    description: 'weather command',
    execute(message,args){
        console.log(args.Message)
    }
}