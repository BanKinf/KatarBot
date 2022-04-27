//!PAQUETES
const { createCanvas, loadImage } = require('canvas');
const { join } = require('path');
//!PAQUETES

require('dotenv').config();

module.exports = async (client, discord, member) => {

    //!CANVAS

    const canvas = createCanvas(1200, 635); //Tamaño de la imagen
    const ctx = canvas.getContext('2d'); //Si es 2d o 3d

    const background = await loadImage(join(__dirname, "../../img", "bg1.jpg")); //Imagen de fondo

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height); //Dibujar la imagen

    ctx.strokeStyle = "#000000"; //Color Borde
    ctx.strokeRect(0, 0, canvas.width, canvas.height); //Borde

    const name = member.user.username;

    if (name.length >= 16) {
        ctx.font = "bold 100px Sans";
        ctx.fillStyle = "#FF9B00";
        ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 100);
    } else {
        ctx.font = "bold 110px Sans";
        ctx.fillStyle = "#FF9B00";
        ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 100);
    }

    const server = "Bienvenido a: \n" + member.guild.name;

    ctx.font = "bold 75px sans-serif";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(server, canvas.width / 2, canvas.height / 2 - 100);

    ctx.beginPath();
    ctx.arc(315, canvas.height / 2, 250, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    
    const avatar = await loadImage(
        member.user.displayAvatarURL({ format: 'png' })
    );

    ctx.drawImage(avatar, 65, canvas.height / 2 - 250, 500, 500);

    const imagen = new discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');

    //!CANVAS

    //? ROL
    const guild = member.guild;
    const rol = guild.roles.cache.find((role) => role.name === 'Member');
    member.roles.add(rol);
    //? ROL
   
    const channel = member.guild.channels.cache.find(
        (channel) => channel.id === process.env.BIENVENIDA_ID
    );

    const reglas = member.guild.channels.cache.find(
        (channel) => channel.id === process.env.REGLAS_ID
    );
    
    const me = new discord.MessageEmbed()
        .setColor('WHITE')
        .setTitle('Bienvenido')
        .setDescription(`Lee las reglas en ${reglas}`)
        .setImage("attachment://welcome.png")
        .setTimestamp()
        .setFooter({
            text: member.guild.name,
            icon_url: member.guild.iconURL()
        });

    channel.send({ embeds: [me], files: [imagen] });
};