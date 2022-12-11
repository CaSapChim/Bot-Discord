const { SlashCommandBuilder, EmbedBuilder, Guild } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Xem thông tin server'),
    async execute(interaction) {
        const serverInfoEmbed = new EmbedBuilder()
            .setColor('Aqua')
            .setTitle(`Thông tin về server ${guild.name}`)
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
 		await interaction.reply({ embeds : [serverInfoEmbed] });
     }
}