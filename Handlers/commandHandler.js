function loadCommands(client) {
    const ascii = require('ascii-table')
    const fs = require('fs')
    const table = new ascii().setHeading("Events", "Status");

    let commandsArray =[];
    let developerArray = [];

    const commandsFolders = fs.readdirSync('./Commands');
    for (const folder of commandsFolders) {
        const commandsFiles = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith('.js'));

        for (const file of commandsFiles) {
            const commandFile = require(`../Commands/${folder}/${file}`);

            client.commands.set(commandFile.data.name, commandFile);

            if(commandFile.developer) developerArray.push(commandFile.data.toJSON())
            else commandsArray.push(commandFile.data.toJSON());

            table.addRow(file, ' ✅')
            continue;
        }
    }

    client.application.commands.set(commandsArray);

    const developerGuild = client.guilds.cache.get(client.config.developerGuild);

    developerGuild.commands.set(developerArray);

    return console.log(table.toString(), '\nLoaded commands')
}

module.exports = {loadCommands}