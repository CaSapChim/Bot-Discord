const { Events } = require('discord.js');
const { ActivityType} = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	/**
	 * 
	 * @param {client} client
	 *  
	 */
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`)
		const activities = [
			'version 1.0',
			'Bot đc làm bởi Kry'
		];
		
		setInterval(() => {
			const statuss = activities[Math.floor(Math.random() * activities.length)];
			client.user.setPresence({ activities: [{name: `${statuss}`}], status: 'idle'});
		}, 3000)		
}};

