var bot = require('./bot')

bot.onText(/\/Help/, (msg)=>{
    bot.sendMessage(msg.chat.id, "Hello, "+msg.chat.first_name+"! \nFor each level, tap on the commands I have listed for you, and leave the rest to me. If I am too much trouble, you can go to an alternative registration website <--website-->. \nPress /start to try again!")
})