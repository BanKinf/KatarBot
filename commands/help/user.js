module.exports = {
    name: "user",
    aliases: ["userinfo", "usuario", "persona"],
    description: "Muestra información de un usuario",
    async execute(client, message, args, discord) {
        const usuarioMencionado = message.mentions.users.first();
        
        if (!usuarioMencionado) {
            const user = message.author;
            const member = message.member;
            const membersStatus = member.presence.status
            const embed = new discord.MessageEmbed()
            .setColor('WHITE')
            .setAuthor({
                name: 'Username: ' + user.tag,
                iconURL: user.avatarURL()
            })
            .setThumbnail(user.avatarURL())
            .addField('Creación de la cuenta', user.createdAt.toLocaleDateString(), true)
            .addField('Estado', membersStatus, true)
            .addField('Apodo', member.nickname ? member.nickname : 'No tiene', true)
            .addField('Roles', 
                message.member.roles.cache.map(rol => '`' + rol.name + '`').join(', ')
            )
            .setFooter({
                text: 'ID: ' + user.id,
            })
            message.channel.send({ embeds: [embed] });
        } else {
            const usuarioMencionado = message.mentions.users.first();
            const member = message.member;
            const membersStatus = member.presence.status
            const embed = new discord.MessageEmbed()
            .setColor('WHITE')
            .setAuthor({
                name: 'Username: ' + usuarioMencionado.tag,
                iconURL: usuarioMencionado.avatarURL()
            })
            .setThumbnail(usuarioMencionado.avatarURL())
            .addField('Creación de la cuenta', usuarioMencionado.createdAt.toLocaleDateString(), true)
            .addField('Estado', membersStatus, true)
            .addField('Apodo', member.nickname ? member.nickname : 'No tiene', true)
            .addField('Roles', 
                message.member.roles.cache.map(rol => '`' + rol.name + '`').join(', ')
            )
            .setFooter({
                text: 'ID: ' + usuarioMencionado.id
            })
            message.channel.send({ embeds: [embed] });
        }

    }
}