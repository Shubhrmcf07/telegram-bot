var bot = require('./bot.js');

bot.onText(/\/MagnaOdeyssey/, (msg)=>{
    bot.sendMessage(msg.chat.id, "Please Enter your user ID", {
        reply_markup: JSON.stringify({force_reply: true})
    }).then(sentMessage=>{
        bot.onReplyToMessage(
            sentMessage.chat.id,
            sentMessage.message_id, 
            reply=>{
                if(reply.text=="" || parseInt(reply.text)==NaN)
                    console.log("That seems invalid, Please try again! /MagnaOdeyssey");

                else{
                    userid = reply.text;
                    bot.sendMessage(msg.chat.id, "Successfully registered!");

                    //INSERT INTO innoedge (name, id) VALUES (msg.chat.first_name, userid);
                }
            }
        )
    })
})