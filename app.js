require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
});

// Codigo

client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler","eventHandler"].forEach((file) => {
    require(`./handlers/${file}`)(client, discord);
})

// Token

client.login(process.env.TOKEN);