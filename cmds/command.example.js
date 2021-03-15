const Discord = require('discord.js')

module.exports = function(message, client, command, args, prefix){
    if (command == 'example'){
        // Do your code here!
        
        message.reply('Hello! This is a command output, and I am ' + client.user.username)
    }
}