const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder, Component } = require("discord.js");


const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Nenhuma linguagem selecionada")
        .addOptions({
            label: "javascript",
            description: "Veja a documentação do javascript",
            value: "javascript"
            
        },
        {
            label: "python",
            description: "Veja a documentação do python",
            value: "python"
            
        },
        {
            label: "react",
            description: "Veja a documentação do react",
            value: "react"
        },
        {
            label: "C#",
            description: "Veja a documentação do C#",
            value: "C#"
        },

        {
            label: "discord.js",
            description: "Veja a documentação do discord.js",
            value: "discord.js"
        },
        
        )
    )

module.exports = {
data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Acesso a documentação da tecnologia desejada"),


async execute(interaction){
    await interaction.reply({content:"Selecione uma das tecnologias abaixo:", components: [row]})
}
}