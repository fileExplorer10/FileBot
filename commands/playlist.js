const { SlashCommandBuilder, Integration } = require("discord.js");


module.exports = {


data: new SlashCommandBuilder()
    .setName("playlist")
    .setDescription("ouça uma playlist de qualidade"),


async execute(interaction){
    await interaction.reply("https://open.spotify.com/playlist/5ffCd9njvNWnu7MZzFMvsR?si=fccaa6b8dcf34029")
}
}