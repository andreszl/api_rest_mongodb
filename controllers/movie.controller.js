'use strict'

const Model =  require('../models/movie.model'),
	  MovieController = () => {}

MovieController.index = (req, res, next) => 
{

	Model.read( (docs) => {
		let locals = {
				title: 'Movies List',
				data: docs
			}
		res.render('index', locals)
	
	})

}

MovieController.create = (req, res, next) => 
{

	res.render('create',{title: "New Movie"})

}

MovieController.save = (req, res , next) => 
{
	let movie = {
		movie_id: req.body.movie_id,
		title: req.body.title,
		release_year: req.body.release_year,
		rating: req.body.rating,
		image: req.body.poster
	}
	console.log(movie)

	Model.save(movie, (docs) => res.redirect('/') )

}

MovieController.edit = (req, res, next) => 
{
	let movie_id = req.params.movie_id
	
	console.log(movie_id)
		
	Model.getMovieById(movie_id, (docs) => {
		
   		let locals = {
   			title: "Edit Movie",
   			data: docs
   		}

   		res.render('edit', locals)

		
	})

}


MovieController.delete = (req, res, next) => 
{

	let movie_id = req.params.movie_id
	console.log(movie_id)

	
	Model.delete(movie_id, () => res.redirect('/'))


}



MovieController.error404 = (req, res, next) => 
{
	let error = new Error(),
		locals = {
			title : 'Error 404',
			description : 'Recurso No Encontrado',
			error : error
		}
	error.status = 404

	res.render('error', locals)
	
	next()	

}

module.exports = MovieController