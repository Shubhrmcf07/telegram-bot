require('dotenv').config()
const {Client} = require('pg')

const client = new Client({
	connectionString: process.env.DATABASE_URL,
	ssl: true,
});

client.connect();

client.query("SELECT * FROM quotes",(err,res)=>{
	if(err) throw err;

	console.log(JSON.stringify(res.rows[0].genre))

	client.end();
});