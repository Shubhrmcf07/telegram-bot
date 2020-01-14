var bot = require('./bot')

bot.onText(/\/contact/, (msg)=>{
    bot.sendMessage(msg.chat.id, "Contact Us: \nVineet: 9082318241\nChinmay: 8208405311")
})