const Discord = require('discord.js');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Lấy ảnh đại diện của 1 người') 
        .addUserOption(option =>
            option
                .setName('tên')
                .setDescription('Tên người muốn lấy ảnh')
                .setRequired(true)),

        /**
         * 
         * @param {Discord.CommandInteraction} interaction 
         * 
         */
    async execute(interaction) {
        const user = interaction.options.getUser('tên');

        const avatarEmbed = new Discord.EmbedBuilder()
        .setColor('Aqua')
            .setTitle(`Ảnh của ${user.username}`)
            .setImage(user.displayAvatarURL(
                {
                    dynamic: true,
                    size: 4096,
                    type: "png"
                }
            ))
            .setFooter({
                text: `• Yêu cầu bởi ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL(),
            })
        await interaction.reply({ embeds: [avatarEmbed]})
    }
};