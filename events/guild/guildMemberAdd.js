require('dotenv').config();

module.exports = (client, discord, member) => {
    //? ROL
    const guild = member.guild;
    const rol = guild.roles.cache.find((role) => role.name === 'Member');
    member.roles.add(rol);
    //? ROL
   
    // const channel = member.guild.channels.cache.find(
    //     (channel) => channel.id === process.env.BIENVENIDA_ID
    // );
    
    // const me = new discord.MessageEmbed()
    //     .setColor('WHITE')
    //     .setTitle('Bienvenido')
    //     .setAuthor({
    //         name: member.user.username, // Nombre del usuario
    //         icon_url: member.user.displayAvatarURL(), // Imagen del usuario
    //     })
    //     .setDescription(`Se bienvenido al servidor ${member.guild.name}`)
    //     .setThumbnail(member.guild.iconURL())
    //     .setTimestamp()
    //     .setFooter({
    //         text: member.guild.name,
    //         icon_url: member.guild.iconURL()
    //     });

    // channel.send({ embeds: [me] });
};