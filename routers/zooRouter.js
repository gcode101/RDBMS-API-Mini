const express = require('express');

const db = require('../controllers/zooController');

const zooRouter = express.Router(); //creates router


zooRouter.get('/', (req, res) => {
	db
		.getAll()
		.then((zoos) => {
			res.status(200).json(zoos);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error retreiving zoos' });
		});
});

zooRouter.get('/:id', (req, res) => {
	const { id } = req.params;
	db
		.getById(id)
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

zooRouter.post('/', (req, res) => {
	const zoo = req.body;
	db
		.addZoo(zoo)
		.then((ids) => {
			res.status(201).json(ids);
		})
		.catch(err => {
			res.status(500).json({ error: 'Error inserting zoo' });
		});
});

zooRouter.delete('/:id', (req, res) => {
	const { id } = req.params;
	db
		.destroy(id)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ success: true });
			} else {
				res.status(404).json({ msg: 'Not found by that id' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Cannot delete zoo ${err}` });
		});
});

zooRouter.put('/:id', (req, res) => {
	const { id } = req.params;
	const zoo = req.body;
	db
		.update(id, zoo)
		.then((count) => {
			if (count > 0) {
				res.status(200).json({ success: true });
			} else {
				res.status(404).json({ msg: 'Not found by that id' });
			}
		})
		.catch(err => {
			res.status(500).json({ error: `Cannot update zoo ${err}` });
		});
});

// zooRouter.put('/:id', (req, res) => {
// 	const { id } = req.params;
// 	const { name } = req.body;
// 	if (!name) {
// 		res.status(422).json({ error: 'Please provide name' });
// 	}
// 	knex('zoos').where('id', id).update(req.body)
// 		.then((zoo) => {
// 			if (zoo.length > 0) {
// 				res.status(200).json(zoo);
// 			} else {
// 				res.status(404).json({ msg: 'Zoo not found by that id' });
// 			}
// 		})
// 		.catch(err => {
// 			res.status(500).json({ error: 'Error retreiving zoos' });
// 		});
// });

module.exports = zooRouter;
