const Discord = require('discord.js');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('staff')
        .setDescription('Các lệnh của staff')
        .addSubcommand((subcommand) => 
        subcommand
            .setName('kick')
            .setDescription('kick một người')
            .addUserOption(option => 
            option
                .setName('tên')
                .setDescription('Tên người muốn kick')
                .setRequired(true)
            )
            .addStringOption(option => 
            option
                .setName('lý_do')
                .setDescription('Lý do muốn kick người đó')
                .setRequired(true)
            )
        ),
        /**
         * 
         * @param {Discord.ChatInputCommandInteraction} interaction
         */
    async execute(interaction) {
        const {guild , options} = interaction

        if (options.getSubcommand() === 'kick' ) {
            if(!interaction.memberPermissions.has(Discord.PermissionFlagsBits.BanMembers)) return interaction.reply({
                content: 'Bạn ko có quyền!'
            })
            const user = interaction.options.getUser('tên');
            const reason = interaction.options.getString('lý_do')

            let tên = interaction.guild.members.cache.get(user.id)
            tên;

            if (tên.bannable) {
                tên.send('Đã kick!').then(() => {
                    tên.ban({ reason })
                }).then(() => {
                    interaction.reply(`Đã kick thành công ${user.username} | ${user.id}`)
                })
            } else {
                interaction.reply('Ko tìm thấy **tên/id** người dùng')
            }
        }
    }
}