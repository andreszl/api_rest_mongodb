'use strict'

const mongoose = require('mongoose'),
	  config = require('./db.conf.json'),
	  Schema = mongoose.Schema,
	  MovieSchema = new Schema({
	  	movie_id: "string",
	  	title: "string",
	  	release_year: "string",
	  	rating: "string",
	  	image: "string"
	  },
	  {
	  	collection: "movie"
	  }),

	  MovieModel = mongoose.model("Movie", MovieSchema)  
mongoose.connect(`mongodb://${config.mongo.host}/${config.mongo.db}`, { useMongoClient: true, promiseLibrary: global.Promise })

module.exports = MovieModel

