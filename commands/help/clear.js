module.exports = {
    name: 'clear',
    aliases: ['del' ,'borrar', 'limpiar', 'borrar mensajes', 'limpiar mensajes', 'quitar mensajes'],
    description: 'Borra una cierta cantidad de mensajes',
    async execute(client, message, args, discord){
        if(!args[0]) return message.channel.send('Debes especificar la cantidad de mensajes a borrar');
        if(isNaN(args[0])) return message.channel.send('Debes especificar un número');
        if(args[0] > 100) return message.channel.send('No puedes borrar más de 100 mensajes');
        if(args[0] < 1) return message.channel.send('No puedes borrar menos de 1 mensaje');

        await message.channel.messages
        .fetch({ limit: args[0]})
        .then((messages) => {
            message.channel.bulkDelete(messages);
        });
    },
};