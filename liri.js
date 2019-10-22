// Require environment variable configuration
require('dotenv').config()
// get keys
var keys = require('./keys.js');
// Require data from File System npm pkg
var fs = require('fs');

// Test print anything in the .env file
// console.log(process.env);


// Require Movies function exported from movies.js
var myMovies = require('./movies.js');
// Require Concert function exported from concert.js
var myConcert = require('./concert.js');
// Require Spotify function exported from spotify.js
var mySpotify = require('./spotify.js');

// Create initial user command
var userCommand = process.argv[2];
// Create user input
var userInput = process.argv.splice(3, process.argv.length).join(' ');

// Program conditions
switch(userCommand) {
  // Help function to clarify commands used
  case "help":
    console.log("Please type one of these commands\n" +
    "'concert-this': to search for an artist in town\n" +
    "'spotify-this-song': to search for a song\n" +
    "'movie-this': to search for a movie\n" +
    "'do-what-it-says': using command from random.txt\n"
    )
  break;

  case myMovies:
    console.log(something)
  break;

  case myConcert:
    console.log(something);
  break;

  case mySpotify:
    console.log(something);
  break;

  default:
    console.log("Not a recognized command.")
    }

