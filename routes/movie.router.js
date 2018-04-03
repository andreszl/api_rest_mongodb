'use strict'

const MovieController = require('../controllers/movie.controller'),
	  express = require('express'),
	  router = express.Router()


router
	.get('/', MovieController.index)
	.get('/create', MovieController.create)
	.post('/store', MovieController.save)
	.get('/edit/:movie_id', MovieController.edit)
	.put('/update', MovieController.save)
	.delete('/delete/:movie_id', MovieController.delete)
	.use(MovieController.error404)
	
module.exports = router