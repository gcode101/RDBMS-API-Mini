const express = require('express');
const bodyParser = require('body-parser');

const knex = require('./database/db');

const server = express();

server.use(bodyParser.json());

// endpoints here
server.get('/', (req, res) => {
	res.status(200).json({ api: 'running.....' });
});

server.get('/zoos', (req, res) => {
	knex('zoos')
		.then((zoos) => {
			res.status(200).json(zoos);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error retreiving zoos' });
		});
});

server.get('/zoos/:id', (req, res) => {
	const { id } = req.params;
	knex('zoos').where('id', id)
		.then((zoo) => {
			if (zoo.length > 0) {
				res.status(200).json(zoo);
			} else {
				res.status(404).json({ msg: 'Zoo not found by that id' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'Error retreiving zoos' });
		});
});

server.post('/zoos', (req, res) => {
	const zoo = req.body;
	knex.insert(zoo).into('zoos')
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error inserting zoo' });
		});
});

const port = 3000;
server.listen(port, function() {
    console.log(`Server Listening on ${port}`);
});
