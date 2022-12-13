const Discord = require('discord.js');
const moment  = require('moment')


module.exports = {
	data: new Discord.SlashCommandBuilder()
		.setName('user')
		.setDescription('Xem thông tin người dùng.')
		.addUserOption(option => 
			option
				.setName('tên')
				.setDescription('nhập tên người mà bạn muốn xem thông tin')
				.setRequired(true)),
		/**
		 * 
		 * @param {Discord.ChatInputCommandInteraction} interaction 
		 */
		
	async execute(interaction) {
		const user = interaction.options.getUser('tên');

		let checkbot
		if (user.bot) {
			checkbot = ' ✅';
		} else {
			checkbot = ' ❌'
		}

		const userinfoEmbed = new Discord.EmbedBuilder()
			.setColor('Aqua')
			.setTitle(`Vài thông tin về ${user.tag}`)
			.setThumbnail(user.displayAvatarURL(
				{
					dynamic: true
				}
			))
			.setDescription(`
			__**CÁC THÔNG TIN:**__

			> **Tên :** ${user.username}

			> **Biệt danh :** ${user.toString()}
			
			> **Số ID :** ${user.id}

			> **Ngày tham gia discord :** ${user.createdAt.toLocaleString()}

			> **Bot :** ${checkbot}	
				
			

			`)
			.setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
		await interaction.reply({ embeds : [userinfoEmbed] });
	},
};