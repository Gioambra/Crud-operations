const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
	client: 'pg',
	connection: {
		host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		database: process.env.DATABASE,
	},
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CORS implemented so that we don't get errors when trying to access the server from a different server location
app.use(cors());
// GET: Fetch all users from the database
app.get('/', (req, res) => {
	db.select('*')
		.from('utenti')
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

// POST: Create movies and add them to the database
app.post('/newAccount', (req, res) => {
	const { id, username, password } = req.body;
	db.insert({
		id: id,
		username: username,
		password: password,
	})
		.from('public.utenti')
		.then(() => {
			console.log('User Added');
			return res.json({ msg: 'User Created' });
		})
		.catch((err) => {
			console.log(err);
		});
});


// select all TODO
app.get('/todo', (req, res) => {
	db.select('*')
		.from('TODO')
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
		});
});


// POST: Create movies and add them to the database
app.post('/newTodo', (req, res) => {
	const { ownerID, Content, TodoID, isdone } = req.body;
	db.insert({
		ownerID: ownerID,
		Content: Content,
		TodoID: TodoID,
		isdone: isdone
	})
		.from('TODO')
		.then(() => {
			console.log('TODO Added');
			return res.json({ msg: 'TODO Created' });
		})
		.catch((err) => {
			console.log(err);
		});
});

// PUT: Update Todo
app.put('/updatetodo', (req, res) => {

	const { Content, oldContent } = req.body
	console.log(oldContent, Content)
	db('TODO')
		.where('Content', oldContent)
		.update({ Content: Content })
		.then(() => {
			console.log('todo Updated');
			return res.json({ msg: 'todo Updated' });
		})
		.catch((err) => {
			console.log(err);
		});
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));