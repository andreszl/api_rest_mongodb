'use strict'

const conn =  require('./movie.conn'),
	  MovieModel = () => {}

MovieModel.read = (callback) => 
{

	conn
		.find()
		.exec( (err, docs) => {
			if(err) throw err
			callback(docs)
		})	

}



MovieModel.getMovieById = (id, callback) => 
{
	conn
		.findOne({movie_id : id })
		.exec( (err, docs) => {
			if(err) throw err
			callback(docs)
		})	

}
MovieModel.save = (data, callback) => 
{

	conn
		.count({movie_id : data.movie_id})
		.exec( (err, count) => {
			if(err) throw err
			console.log(`Numero de Docs: ${count}`)

			if(count == 0){
				conn.create(data, (err) =>{
					if(err) throw err
					callback()
				})

			}else if(count == 1){
				conn.findOneAndUpdate(
					{
						movie_id : data.movie_id
					}, 
					{	
						title: data.title,
						release_year: data.release_year,
						rating : data.rating,
						image : data.image,
					},
					(err) => {
						if(err) throw err
						callback()
					}
				)
			}
		})
	

} 

MovieModel.delete = (id, callback) => 
{

	conn.remove({movie_id: id}, (err, docs) => {
		if(err) throw err
		callback()
	})

}
MovieModel.close = () => conn.end()


module.exports = MovieModel