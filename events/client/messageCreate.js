require("dotenv").config();
const prefix = process.env.PREFIX;

module.exports = async (client, discord, message) => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, discord);
    if (message.content.startsWith(prefix)) {
        if (!command) return message.channel.send("Este comando no existe");
    }
};