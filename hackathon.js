var bot = require('./bot')
bot.onText(/\/hackathon/, (msg) => {
    var str = "Name: "+msg.chat.first_name;
    bot.sendMessage(msg.chat.id, "Hello There, Please enter a team name!", {
        reply_markup: JSON.stringify({ force_reply: true })
      })
      .then(sentMessage => {
        bot.onReplyToMessage(
          sentMessage.chat.id,
          sentMessage.message_id,
          reply => {
            if(reply.text == "") {
              // enterEmail(msg.;
              console.log("error");  
            } else{
              tname = reply.text;
              str += "\nTeam name: "+tname;
              console.log(reply.text);
              bot.sendMessage(msg.chat.id, "That's nice! Now let us know your team size (max 4)", {
                  reply_markup: JSON.stringify({ force_reply: true })
                })
                .then(sentMessage => {
                  bot.onReplyToMessage(
                    sentMessage.chat.id,
                    sentMessage.message_id,
                    reply => {
                      if(parseInt(reply.text)==NaN || parseInt(reply.text)>4)
                      {
                        bot.sendMessage(msg.chat.id, "That seems invalid, try again! /hackathon");
                      }
                      else if (reply.text == "") {
                        console.log("error");
                      }else{
                        size = parseInt(reply.text);
                        str+="\nTeam Size: "+size;
                        console.log(reply.text)

                          bot.sendMessage(msg.chat.id, "Enter id1",{
                            reply_markup: JSON.stringify({force_reply: true})
                          })
                          .then(sentMessage=>{
                            bot.onReplyToMessage(
                              sentMessage.chat.id,
                              sentMessage.message_id,
                              reply=>{
                                if(parseInt(reply.text)==NaN)
                                {
                                  bot.sendMessage(msg.chat.id, "That seems invalid, Try again /hackathon");
                                }

                                else if(reply.text=="")
                                  console.log("error");

                                else{
                                  id1 = parseInt(reply.text);
                                  str+="\nid1: "+id1;
                                  console.log(reply.text);
                                  if(size===1){
                                    bot.sendMessage(msg.chat.id, "Confirm Details").then(()=>bot.sendMessage(msg.chat.id, str));

                                    //INSERT INTO hackathon (name, size, id1) VALUES (name, size, id1);
                                  }
                                  else if(size>1){
                                    bot.sendMessage(msg.chat.id, "Enter id2",{
                                      reply_markup: JSON.stringify({force_reply: true})
                                    })
                                    .then(sentMessage=>{
                                      bot.onReplyToMessage(
                                        sentMessage.chat.id,
                                        sentMessage.message_id,
                                        reply=>{
                                          if(parseInt(reply.text)==NaN)
                                          {
                                            bot.sendMessage(msg.chat.id, "That seems invalid, Try again");
                                          }
          
                                          else if(reply.text=="")
                                            console.log("error");
          
                                          else{
                                            id2 = parseInt(reply.text);
                                            str+="\nid2: "+id2;
                                            console.log(reply.text);
                                            if(size===2)
                                              {
                                                bot.sendMessage(msg.chat.id, "Confirm Details").then(()=>bot.sendMessage(msg.chat.id, str))

                                                //INSERT INTO hackathon (name, size, id1, id2) VALUES (name, size, id1, id2)
                                              }
                                            else if(size>2)
                                            {
                                              bot.sendMessage(msg.chat.id, "Enter id3",{
                                                reply_markup: JSON.stringify({force_reply: true})
                                              })
                                              .then(sentMessage=>{
                                                bot.onReplyToMessage(
                                                  sentMessage.chat.id,
                                                  sentMessage.message_id,
                                                  reply=>{
                                                    if(parseInt(reply.text)==NaN)
                                                    {
                                                      bot.sendMessage(msg.chat.id, "That seems invalid, Try again");
                                                    }
                    
                                                    else if(reply.text=="")
                                                      console.log("error");
                    
                                                    else{
                                                      id3 = parseInt(reply.text);
                                                      str+="\nid3: "+id3;
                                                      console.log(reply.text);
                                                      if(size===3)
                                                       {
                                                        bot.sendMessage(msg.chat.id, "Confirm Details").then(()=>bot.sendMessage(msg.chat.id, str))

                                                        //INSERT INTO hackathon (name, size, id1, id2, id3) VALUES (name, size, id1, id2, id3)
                                                       }
                                                      else if(size===4){
                                                        bot.sendMessage(msg.chat.id, "Enter id4",{
                                                          reply_markup: JSON.stringify({force_reply: true})
                                                        })
                                                        .then(sentMessage=>{
                                                          bot.onReplyToMessage(
                                                            sentMessage.chat.id,
                                                            sentMessage.message_id,
                                                            reply=>{
                                                              if(parseInt(reply.text)==NaN)
                                                              {
                                                                bot.sendMessage(msg.chat.id, "That seems invalid, Try again");
                                                              }
                              
                                                              else if(reply.text=="")
                                                                console.log("error");
                              
                                                              else{
                                                                id4 = parseInt(reply.text);
                                                                str+="\nid4: "+id4;
                                                                
                                                                bot.sendMessage(msg.chat.id, "Confirm Details").then(()=>bot.sendMessage(msg.chat.id, str))

                                                                //INSERT INTO hackathon VALUES (name, size, id1, id2, id3, id4)
                                                              }
                                                            }
                                                          )
                                                        })
                                                      }
                                                    }
                                                  }
                                                )
                                              })
                                            }
                                          }
                                        }
                                      )
                                    })
                                  }
                                }
                              }
                            )
                          })             
                      }
                    }
                  );
                });
            }
          }
        );
      });
  });