const Discord = require('discord.js');


module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('server')
        .setDescription('Xem thông tin server'),
        /**
         * 
         * @param {Discord.ChatInputCommandInteraction} interaction 
         */
    async execute(interaction) {

        const description = interaction.guild.description;
        const owner = members.find(member => member.id === message.guild.ownerId);

        const serverInfoEmbed = new Discord.EmbedBuilder()
            .setColor('Aqua')
            .setTitle(`Thông tin về server ${interaction.guild.name}`)
            .setThumbnail(interaction.guild.iconURL())
            .setDescription(`
            __**CÁC THÔNG TIN:**__

            > **Mô tả về server:** ${description}

            > **:crown: Owner :** ${owner}

            > **:calendar: Ngày thành lập: ** ${interaction.guild.createdAt.toLocaleString()}

			> **:busts_in_silhouette: Thành viên :** ${interaction.guild.memberCount}

			> **MFA Level :** ${interaction.guild.mfaLevel}

			> **NSFW Level :** ${interaction.guild.nsfwLevel}
            
            `)
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
 		await interaction.reply({ embeds : [serverInfoEmbed] });
     }
}