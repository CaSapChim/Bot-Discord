const Discord = require('discord.js');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('servericon')
        .setDescription('Lấy icon của server'),
        /**
         * 
         * @param {Discord.CommandInteraction} interaction
         */
    async execute(interaction) {
        const servericonEmbed = new Discord.EmbedBuilder()
            .setColor('Aqua')
            .setTitle(`Icon của server ${interaction.guild.icon}`)
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
        await interaction.reply({ embeds : [servericonEmbed] })
    }
}