# liri-node-app

While SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface.

This is a Command-Line-Interface (CLI) Node Application that takes in user input and gives back data.

Retrieving the data that will power this app is accomplished by sending requests using the `axios` npm package to search APIs of bandsintown for concerts, Open Movie Database for movies, as well as the Spotify node API for songs.

This makes an easy to use format to quickly return desired information within the scope of the given parameters.

## Here is how to type into the terminal after it is opened:
### node liri.js movie-this movie name
#### to search for a movie
### node liri.js concert-this artist/band name
#### to search for artist concerts
### node liri.js spotify-this-song song name
#### to search for a song
### node liri.js then do-what-it-says
#### to display random.txt data from liri.js switch

The app code initiates in the liri.js file and requires module exports for movies, concert and spotify functions returning the desired information.

API keys are stored in environment variables with the dotenv package and fetched by requiring information in the keys file for module exports. 

One would need to supply their own `.env` file for the app to work if they copied this app code.

Specific code for given API calls are contained in individual files and exported for use by the LIRI file determined by switch/case based on user input at the command line. 

Requests are sent via Axios url or Spotify queries based on predefined parameters.

BandsInTown utilizes moment.js for time and date reference.

All data is formated to return and display in the log.txt, concert.txt and movies.txt as well as the console.

A Help command provides user guidance.

The text in random.txt is used by LIRI to call a command with *fs* Node package.

In the event a user does not specify a move title, song or artist, the app will default to a given output.

CLaughter developed this app as a coding bootcamp assignment.

Link to project: https://github.com/CLaughter/liri-node-app.git

YouTube Link: https://youtu.be/IObVgI5Hkgw