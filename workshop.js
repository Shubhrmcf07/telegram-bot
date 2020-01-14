var bot = require('./bot.js');

bot.onText(/\/Scientia/, (msg)=>{
    bot.sendMessage(msg.chat.id, "Please Enter your user ID", {
        reply_markup: JSON.stringify({force_reply: true})
    }).then(sentMessage=>{
        bot.onReplyToMessage(
            sentMessage.chat.id,
            sentMessage.message_id, 
            reply=>{
                if(reply.text=="" || parseInt(reply.text)==NaN)
                    console.log("That seems invalid, Please try again! /Scientia");

                else{
                    userid = reply.text;
                    bot.sendMessage(msg.chat.id, "Successfully registered!");

                    //INSERT INTO workshop (name, id) VALUES (msg.chat.first_name, userid);
                }
            }
        )
    })
})