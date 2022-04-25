module.exports = {
    name: "ping",
    description: "Devuelve el tiempo de respuesta del bot",
    async execute(client, message, args, discord) {
        message.channel.send("Pong! 🏓");
    },
};