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
        const members = interaction.guild.members.cache;
        const channels = interaction.guild.channels.cache;

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

            > **:robot: Bot :** ${members.filter(member => member.user.bot).size}

			> **MFA Level :** ${interaction.guild.mfaLevel}

			> **NSFW Level :** ${interaction.guild.nsfwLevel}

            > **Text Channels:** ${channels.filter(channel => channel.type === 'text').size}

            > **Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}
            
            `)
            .setFooter({
				text: `• Yêu cầu bởi ${interaction.user.tag}`,
				iconURL: interaction.user.displayAvatarURL(),
			})
			.setTimestamp()
 		await interaction.reply({ embeds : [serverInfoEmbed] });
     }
}