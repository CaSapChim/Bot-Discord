const Discord = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {Discord.CommandInteraction} interaction
     * @param {Discord.Client} client
     */
    async execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if(!command) return (
            interaction.reply({embeds: [new Discord.EmbedBuilder().setColor('Aqua').setDescription('Có lỗi xảy ra!!!')
        ], ephemeral: true
    }) && client.commands.delete(interaction.commandName)
    );

    if (
        command.permission && 
        !interaction.member.permissions.has(command.permission)
    ) {
        return interaction.reply({
            content: `Bạn ko có quyền để dùng lệnh này ${interaction.commandName}`,
            ephemeral: true
        })
    }

    command.execute(interaction, client);
    }
}