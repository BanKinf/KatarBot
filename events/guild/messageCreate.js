require("dotenv").config();
const prefix = process.env.PREFIX;

module.exports = async (client, discord, message) => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = 
    client.commands.get(cmd) || 
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, args, discord);
    if (message.content.startsWith(prefix)) {
        embed = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle("❌ | Comando no encontrado")
            .setDescription(`"El comando ${cmd} no existe."`)
            .setTimestamp()
        if (!command) return message.channel.send({ embeds: [embed] });
    }
};