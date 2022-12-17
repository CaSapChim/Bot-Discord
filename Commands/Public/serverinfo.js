const Discord = require('discord.js');


module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('server')
        .setDescription('Xem thông tin server'),
        /**
         * 
         * @param {Discord.ChatInputCommandInteraction} interaction 
         * 
         */
    async execute(interaction) {
        const channel = interaction.guild.channels.cache
        const role = interaction.guild.roles.cache

        const serverInfoEmbed = new Discord.EmbedBuilder()
            .setColor('Aqua')
            .setTitle(`Thông tin về server ${interaction.guild.name}`)
            .setThumbnail(interaction.guild.iconURL())
            .setDescription(`
            __**CÁC THÔNG TIN:**__

            > **:id: ID server:** ${interaction.guildId}

            > **:crown: Owner :** <@${interaction.guild.ownerId}>

            > **:calendar: Ngày thành lập: ** ${interaction.guild.createdAt.toLocaleString()}

			> **:busts_in_silhouette: Thành viên :** ${interaction.guild.memberCount}

            > **:robot: Bot :** 

			> **MFA Level :** ${interaction.guild.mfaLevel}

			> **NSFW Level :** ${interaction.guild.nsfwLevel}

            > **Text Channels:**  ${interaction.guild.roles.highest}

            > **Voice Channels:** ${channel.filter(channel => channel.type === "voice").size}
            
            `)
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
 		await interaction.reply({ embeds : [serverInfoEmbed] });
     }
}