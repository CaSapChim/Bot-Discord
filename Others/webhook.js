const { WebhookClient } = require('discord.js');
const readline = require('readline-sync');

var name = readline.question('say')

const webhook = new WebhookClient({
    token: 'your token webhook',
    id: 'your id webhook',
    url: 'your _webhook'
})

webhook.send(name)
