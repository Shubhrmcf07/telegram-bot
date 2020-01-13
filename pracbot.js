var bot = require('./bot')
require('./hackathon.js')
require('./informalQuiz.js')
require('./csOffline.js')
require('./blackFlag.js')
require('./pp.js')
require('./magna.js')
require('./workshop.js')
require('./contact.js')
require('./aurora.js')
require('./scout.js')

bot.onText(/\/start/, (msg)=>{
  bot.sendMessage(msg.chat.id, "Hello "+msg.chat.first_name+". What Can I do for you?\n/userRegistration\n/EventDetails\n/EventRegistration");
})

bot.onText(/\/EventRegistration/, (msg)=>{
  bot.sendMessage(msg.chat.id, "Right away! What event do you wanna register for? \n/blackFlag\n/Aurora\n/ScoutAbout\n/inQuizitive\n/CodeQuest\n/Scientia\n/MagnaOdyssey\n/InnovativeEdge\n/hackathon")
})

bot.onText(/\/EventDetails/, (msg)=>{
  bot.sendMessage(msg.chat.id, "1. Black Flag – Bring your robot ship and navigate through unchartered territory. Prove your mettle in elimination battles and speed rounds,\n2. Scientia – A workshop on Arduino with hands on learning and interactive sessions. Build your basics and sharpen your skills in microcontrollers.\n3. Aurora – An electronics quiz event which will require critical thinking, logical reasoning and above all, wit. Answer correctly and win the grand prize.\n4. Expedition – The online coding competition hosted on Hackerrank. Arm yourself with logic and coding for this quest.\n5. CodeQuest - A team of 2 will answer questions based on coding skills and logic. The more you uncover in the map, the faster you win.\n6. Magna Odyssey – Depict your adventure through unknown lands using a limited set of tools. Emerge the victor and take away your design on a T-shirt.\n7. Hackathon – A 20 hour Hackathon based on the theme of ‘safety, security and surveillance’. Innovate, build and validate your idea in one go.\n8. The Innovative Edge – A paper presentation event focusing on modern problems. Showcase your paper and defend it in front of expert judges.\n9. Scout About – A treasure hunt event for teams. Hunt down locations by solving riddles and collect the puzzle pieces in a battle against time.\n10. InQUIZtive – A quiz event for teams. Answer questions and solve puzzles by travelling to different times and realities – finish the quest to win.")
})