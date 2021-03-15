const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('./config.json'))

if (config.token.length == 0){
    console.error('Please paste your bot token in the config.json file!')
    process.exit(1)
}

client.login(config.token)


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    
})

client.on('message', message => {
    const prefix = config.prefix

    const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    console.log(message.author.tag + ' used command ' + command + ' with args: ' + args)

    const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        require(`./cmds/${file}`)(message, client, command, args, prefix);
    }
    
})