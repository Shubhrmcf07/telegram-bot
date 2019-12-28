require('dotenv').config()
var {Client} = require('pg')

var Bot = require('node-telegram-bot-api')

bot = new Bot(process.env.TOKEN, {polling:true})

bot.onText(/^\/start$/,(msg)=>{
	var functions = "/mighty_mighty \n /random_ \n /all_ \n";
		var client = new Client({
			connectionString: process.env.DATABASE_URL,
			ssl:true
		});

		client.connect();

		query = "SELECT COUNT(*), genre FROM quotes GROUP BY GENRE"

		client.query(query, (err, data)=>{
			if(err) throw err;

			console.log(data.rows);

			for(let x in data.rows)
			{
				functions+='/all'+data.rows[x].genre+'\n';
			}

			for(let x in data.rows)
				functions+='/random'+data.rows[x].genre+'\n'


			functions+='/help \n'
			bot.sendMessage(msg.chat.id, functions)

			client.end()
		})
})

bot.onText(/^\/mighty_mighty$/,(msg)=>{
	bot.sendMessage(msg.chat.id,"yemit!")
})

bot.onText(/^\/help$/,(msg)=>{
	bot.sendMessage(msg.chat.id,"/start for all commands")
})

var flag = 0;

bot.onText(/^\/random(.+)/,(msg,match)=>{
	var client = new Client({
		connectionString : process.env.DATABASE_URL,
		ssl : true
	});

	client.connect();

	if(match[1]=='_')
	{
		query = "SELECT * FROM quotes"
		client.query(query, (err,result)=>{
				if(err) throw err;

				bot.sendMessage(msg.chat.id,result.rows[Math.floor(Math.random()*result.rows.length)].quote)

		return;

	})
	}
	else{
	query = "SELECT genre FROM quotes GROUP BY genre"
	client.query(query, (err, data)=>{
		if(err) throw err;

		for(let x in data.rows)
		{
			if(data.rows[x].genre == match[1])
				flag=1;
		}

		if(flag==0)
		{
			bot.sendMessage(msg.chat.id,"NO MATCH")
		}


		if(flag==1)
		{
			q2 = "SELECT quote FROM quotes WHERE genre="+"'"+match[1]+"'"

			client.query(q2, (err,result)=>{
				if(err) throw err;

			bot.sendMessage(msg.chat.id,result.rows[Math.floor(Math.random()*result.rows.length)].quote)

			client.end();
			})
		}
	})
}
})

bot.onText(/^\/all(.+)/,(msg,match)=>{
	var client = new Client({
		connectionString : process.env.DATABASE_URL,
		ssl : true
	})

	client.connect();

	if(match[1]=='_')
	{
		query = "SELECT * FROM quotes"

		client.query(query,(err,result)=>{
			if(err) throw err;

			for(let i in result.rows)
				bot.sendMessage(msg.chat.id, result.rows[i].quote)
		})

		return;
	}

	else
	{
		query = "SELECT genre FROM quotes GROUP BY genre"
	client.query(query, (err, data)=>{
		if(err) throw err;

		for(let x in data.rows)
		{
			if(data.rows[x].genre == match[1])
				flag=1;
		}

		if(flag==0)
		{
			bot.sendMessage(msg.chat.id,"NO MATCH")
		}


		if(flag==1)
		{
			q2 = "SELECT quote FROM quotes WHERE genre="+"'"+match[1]+"'"

			client.query(q2, (err,result)=>{
				if(err) throw err;
			for(let i in result.rows)
				bot.sendMessage(msg.chat.id,result.rows[i].quote)

			client.end()
			})
		}
	})
	}
})