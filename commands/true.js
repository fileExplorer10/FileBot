const { SlashCommandBuilder, Integration } = require("discord.js");


module.exports = {


data: new SlashCommandBuilder()
    .setName("true")
    .setDescription("A décima verdade do mundo, este ser virtual irá lhe dizer"),


async execute(interaction){
    await interaction.reply("Gadar mulher não trás felicidade.")
}
}