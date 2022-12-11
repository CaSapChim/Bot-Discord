console.clear();

const Discord = require('discord.js');

const {Guilds, GuildMembers, GuildMessages, GuildMessageReactions, GuildBans } = Discord.GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember, Ban, Kick} = Discord.Partials;

const client = new Discord.Client({
	partials: [User, Message, GuildMember, ThreadMember, Ban, Kick],
	intents: [Guilds, GuildMembers, GuildMessages, GuildBans, GuildMessageReactions]
});

const { loadEvents } = require('./Handlers/eventHandler');
const {  loadCommands } = require('./Handlers/commandHandler')

client.config = require('./config.json');
client.commands = new Discord.Collection();

client.login(client.config.TOKEN).then(() => {
	loadEvents(client);
	loadCommands(client)
})
.catch(err => console.log(err))