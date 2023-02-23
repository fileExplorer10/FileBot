const { SlashCommandBuilder, Integration } = require("discord.js");


module.exports = {


data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("ele vai falar pong"),


async execute(interaction){
    await interaction.reply("Pong!")
}
}