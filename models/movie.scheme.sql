DROP DATABASE IF EXISTS movies;


CREATE DATABASE IF NOT EXISTS movies;

USE movies;

CREATE TABLE IF NOT EXISTS movie(
	movie_id varchar(9) PRIMARY KEY,
	title varchar(100),
	release_year varchar(4),
	rating DECIMAL(2,1),
	image varchar(255)
);
