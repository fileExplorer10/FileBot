const { Client, Events, GatewayIntentBits, Collection, Integration } = require('discord.js');

//dotenv
const dotenv= require('dotenv');
 dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env 



//importação dos comandos

const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({intents: [GatewayIntentBits.Guilds]});
client.commands = new Collection()

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const commands = require(filePath)
    if ("data" in commands && "execute" in commands){
        client.commands.set(commands.data.name, commands)
    }else{
        console.log(`Esse comando em ${filePath} está com "data" ou "execute"`)
    }
    
}

//client  do bot   
client.once(Events.ClientReady, c => {
    console.log(`Pronto! Login realizado como ${c.user.tag}`);

});
 
client.login(TOKEN);




//listener de interação do bot
client.on(Events.InteractionCreate, async interaction =>{
    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if (selected == "javascript"){
            await interaction.reply("Documentação do javascript:https://developer.mozilla.org/en-US/docs/Web/JavaScript")
        }else if (selected == "python"){
            await interaction.reply("Documentação do python: https://docs.python.org/3/")
        } else if (selected == "react"){
            await interaction.reply("Documentação do react: https://reactjs.org/docs/getting-started.html")

        } else if (selected == "C#"){
            await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
        } else if (selected == "discord.js"){
            await interaction.reply("Documentação do discord.js: https://discord.js.org/#/docs/discord.js/main/general/welcome")
        }
    }


    if(!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("comando não encontrado")
        return
    }
    try{
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        await interaction.reply("houve um erro no comando")
    }
})