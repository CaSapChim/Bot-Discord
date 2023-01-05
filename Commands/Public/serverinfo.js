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

        if(!interaction.guild.description) {
            description = 'Ko có mô tả gì về server này!'
        } else {
            description = interaction.guild.description
        }

        const serverInfoEmbed = new Discord.EmbedBuilder()
            .setColor('Aqua')
            .setTitle(`Thông tin về server ${interaction.guild.name}`)
            .setThumbnail(interaction.guild.iconURL())
            .setDescription(`
            __**CÁC THÔNG TIN:**__

            > **:bookmark_tabs:  Mô tả :** ${description}

            > **🌍 Khu vực :** ${interaction.guildLocale}

            > **:id: ID server:** ${interaction.guildId}

            > **:crown: Owner :** <@${interaction.guild.ownerId}>

            > **:calendar: Ngày thành lập: ** ${interaction.guild.createdAt.toLocaleString()}

			> **:busts_in_silhouette: Thành viên :** ${interaction.guild.memberCount}

            > **:closed_lock_with_key: Role cao nhất: ** ${interaction.guild.roles.highest} 

            > **🔞 NSFW Level :** ${interaction.guild.nsfwLevel}

            > **🛡️ MFA Level :** ${interaction.guild.mfaLevel}

            `)
    
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
 		await interaction.reply({ embeds : [serverInfoEmbed] });
     }
}