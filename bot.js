
require('dotenv').config();
var Bot = require('node-telegram-bot-api');
var {Client} = require('pg');
var bot = new Bot(process.env.TOKEN, {polling:true});
module.exports = bot;
