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
		
			let guild = client.guilds.cache.get('1051472149417824336')
		
			client.channels.cache.get('1053701127041990796').setName(` Tổng - ${guild.memberCount}`)
			client.channels.cache.get('1053701142309261314').setName(` Thành viên - ${guild.members.cache.filter(member => !member.user.bot).size}`)
			client.channels.cache.get('1053701155378700388').setName(`🤖 Bot - ${guild.members.cache.filter(member => member.user.bot).size}`)
		
}};

