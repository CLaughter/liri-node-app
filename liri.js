// Require environment variable configuration
require('dotenv').config()

// Variables
// Require Movies function exported from movies.js
var myMovies = require('./movies.js');
// Require Concert function exported from concert.js
var myConcert = require('./concert.js');
// Require Spotify function exported from spotify.js
var mySpotify = require('./spotify.js');
var doWhatItSays = require('./doWhat');

// Create initial user command
var command1 = process.argv[2];
// Create user input
var command2 = process.argv.splice(3, process.argv.length).join(' ');

// Program conditions
switch(command1) {
  // Help function to clarify commands used
  case "help":
    console.log('Please type one of these commands without ""\n' +
    'node liri.js concert-this "your band" to search for an artist in town\n' +
    'node liri.js spotify-this-song "your song" to search for a song\n' +
    'node liri.js movie-this "your movie" to search for a movie\n' +
    'node liri.js do-what-it-says\n'
    )
  break;

  case 'movie-this':
    myMovie(command2)
  break;

  case 'concert-this':
    myConcert(command2);
  break;

  case 'spotify-this-song':
    mySpotify(command2);
  break;

  case 'do-what-it-says':
    doWhatItSays();
  break;

  default:
    console.log("Not a recognized command.")
    }

