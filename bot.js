var token = '1057986331:AAEWweKZNcMIIF5MFViN04SLKfadLLcsiO8'

var Bot = require('node-telegram-bot-api')

bot = new Bot(token, {polling: true})

//console.log("Bot server started")

bot.onText(/^\/mighty_mighty$/,(msg)=>{
	bot.sendMessage(msg.chat.id,"yemit!")
})