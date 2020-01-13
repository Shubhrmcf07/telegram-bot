var bot = require('./bot')
bot.onText(/\/ScoutAbout/, (msg) => {
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
              bot.sendMessage(msg.chat.id, "That's nice! Now let us know your team size (3 to 5)", {
                  reply_markup: JSON.stringify({ force_reply: true })
                })
                .then(sentMessage => {
                  bot.onReplyToMessage(
                    sentMessage.chat.id,
                    sentMessage.message_id,
                    reply => {
                      if(parseInt(reply.text)==NaN || parseInt(reply.text)<3 || parseInt(reply.text)>5)
                      {
                        bot.sendMessage(msg.chat.id, "That seems invalid, try again! /ScoutAbout");
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
                                  bot.sendMessage(msg.chat.id, "That seems invalid, Try again /ScoutAbout");
                                }

                                else if(reply.text=="")
                                  console.log("error");

                                else{
                                  id1 = parseInt(reply.text);
                                  str+="\nid1: "+id1;
                                  console.log(reply.text);
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
                                                        bot.sendMessage(msg.chat.id, "confirm details").then(()=>bot.sendMessage(msg.chat.id, str))

                                                        //INSERT INTO scout (name,size,id1,id2,id3) VALUES (name, size, id1,id2,id3);
                                                       }
                                                      else if(size>3){
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
                              
                                                              else {
                                                                id4 = parseInt(reply.text);
                                                                str+="\nid4: "+id4;
                                                                if(size===4){ 
                                                                    bot.sendMessage(msg.chat.id, "confirm details").then(()=>bot.sendMessage(msg.chat.id, str))

                                                                    //INSERT INTO scout (name,size,id1,id2,id3,id4) VALUES (name, size, id1,id2,id3, id4);
                                                                }

                                                                else if(size===5)
                                                                {
                                                                    bot.sendMessage(msg.chat.id, "Enter id4",{
                                                                        reply_markup: JSON.stringify({force_reply: true})
                                                                      }).then(sentMessage=>{
                                                                          bot.onReplyToMessage(
                                                                              sentMessage.chat.id,
                                                                              sentMessage.message_id,
                                                                              reply=>{
                                                                                  if(parseInt(reply.text)==NaN){
                                                                                      bot.sendMessage(msg.chat.id, "That seems invalid, Try again! /ScoutAbout")
                                                                                  }

                                                                                  else if(reply.text=="")
                                                                                    console.log(error)

                                                                                else{
                                                                                    id5 = parseInt(reply.text);
                                                                                    str+="\id5: "+id5;
                                                                                    bot.sendMessage(msg.chat.id, "confirm details").then(()=>bot.sendMessage(msg.chat.id, str))

                                                                                    //INSERT INTO scout (name,size,id1,id2,id3,id4,id5) VALUES (name, size, id1,id2,id3, id4, id5);
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
                                      )
                                    })
                                  
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
