var bot = require('./bot')

bot.onText(/\/contact/, (msg)=>{
    bot.sendMessage(msg.chat.id, "Chinmay: 8208405311")
})