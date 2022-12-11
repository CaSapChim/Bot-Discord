const Discord = require('discord.js');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Xem độ trễ!'),
        /**
         * 
         * @param {Discord.CommandInteraction} interaction 
         */
    async execute(interaction) {
        const pingEmbed = new Discord.EmbedBuilder()
            .setColor("Red")
            .setTitle("**Đang check ping...**")

        const sent = await interaction.reply({ embeds: [pingEmbed], fetchReply: true })
        
        const ping = Date.now() - sent.createdTimestamp
        
        const pingEmbed1 = new Discord.EmbedBuilder()
            .setColor('Green')
            .setTitle(`**🏓  Pong!!**`)
            .setDescription(`**・⌛ Bot Ping : ${ping} ms**\n\n**・⏲️ API Ping : ${sent.createdTimestamp - interaction.createdTimestamp} ms**\n`)
            .setFooter({
                text: `• Yêu cầu bởi ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL(),
            })
            .setTimestamp()
        await interaction.editReply({
            embeds: [pingEmbed1]
        })
    },
};