const { Client, Intents } = require('discord.js');
require('dotenv').config()

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// Codigo

client.once("ready", (bot) => {
    console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status}`);
});

// Token

client.login(process.env.TOKEN);