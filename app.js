'use strict'

const express = require('express'),
	  restFull = require('express-method-override')('_method'),
	  serve_favicon = require('serve-favicon'),
	  bodyParser = require('body-parser'),
	  jade = require('jade'),
	  morgan = require('morgan'),
	  routes = require('./routes/movie.router'),
	  favicon = `${__dirname}/public/img/favicon.png`,
	  public_dir = express.static(`${__dirname}/public`),
	  views = `${__dirname}/views`,
	  port = (process.env.PORT || 3000),
	  app = express()

app 
	.set('views', views)
	.set('view engine', 'jade')
	.set('port', port)
	.use( serve_favicon(favicon) )
	.use( bodyParser.json() )
	.use( bodyParser.urlencoded({extended: false}) )
	.use(restFull)
	.use(morgan('dev'))
	.use(public_dir)
	.use(routes)
	


module.exports = app 