const Discord = require('discord.js');

module.exports = {
    info: {
        name: "addemoji",
        description: "Add emoji.",
        usage: "addemoji [emoji]",
        aliases: []
    },

    run: async function(client, message, args){

      try{
if (!message.member.permissions.has("MANAGE_EMOJIS")) return message.reply("Do you need permission **MANAGE_EMOJIS**.");

if(!message.guild.me.permissions.has("MANAGE_EMOJIS")) return message.reply("I need permission **MANAGE_EMOJIS**.")

if (!args[0]) {
      return message.reply('You must put an emoji.')
        message.delete({timeout: 6000})
        .catch()
    }
    
const emoticon = require('discord.js').Util.parseEmoji(args[0]);

if(emoticon.id == null) return message.channel.send('I could not find this emoji, make sure it is not a default discord emoji.');
if(message.guild.emojis.cache.has(emoticon.id)) return message.reply("That emoji is already on the server")

const emoji = `https://cdn.discordapp.com/emojis/${emoticon.id}.${emoticon.animated  ? 'gif' : 'png'}`

message.guild.emojis.create(emoji, emoticon.name)

await message.reply(`The emoji has been added successfully **\`${emoticon.name}\`**`)
}catch(error){
  return message.channel.send(`An error has occurred ${error}`)
}

    }
}

/// rtx#3317
