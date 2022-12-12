const Discord = require('discord.js');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('servericon')
        .setDescription('Lấy icon của server'),
        /**
         * 
         * @param {Discord.CommandInteraction} interaction
         * @param {Discord.Message}  message
         * @param {Discord.Guild} guild
         */
    async execute(interaction, message) {
        const servericonEmbed = new Discord.EmbedBuilder()
            .setColor('Aqua')
            .setTitle(`Icon của server ${message.guild.name}`)
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
        await interaction.reply({ embeds : [servericonEmbed] })
    }
}