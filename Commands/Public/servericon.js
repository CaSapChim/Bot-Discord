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

        if (interaction.guild.iconURL()) {
            const servericonEmbed_true = new Discord.EmbedBuilder()
            .setColor('Aqua')
            .setTitle(`Icon của server ${interaction.guild.name}`)
            .setImage(`${interaction.guild.iconURL({
                dynamic: true,
                size: 4096,
                type: "png"
            })}`)
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
        await interaction.reply({ embeds : [servericonEmbed_true] })
        } else {
            const servericonEmbed_false = new Discord.EmbedBuilder()
            .setColor('Aqua')
            .setTitle(`Ko tìm thấy icon của server`)
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
        await interaction.reply({ embeds : [servericonEmbed_false] })
        }
    }
}