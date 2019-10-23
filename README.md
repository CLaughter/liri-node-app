# liri-node-app

While SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface.

This is a Command-Line-Interface (CLI) Node Application that takes in parameters and gives back data.

Retrieving the data that will power this app is accomplished by sending requests using the `axios` package to search APIs of Bands in Town for concerts and Open Movie Database for movies, as well as the Spotify node API for songs,

This makes an easy to use format to quickly return desired information withing the scope of the given parameters.

Here is how to type into the terminal
* node liri.js movie-this movie name
  * to search for a movie
* node liri.js concert-this artist/band name
  * to search for artist concerts
* node liri.js spotify-this-song song name
  * to search for a song
* node liri.js (then do-what-it-says)
  * using command from random.txt

The app code initiates in the liri.js file. API keys are stored in environment variables and fetched utilizing require to input the information in the keys file. 
All code for a given API call is contained in it's own file and exported for use by the liri file switch/case based on user input at the command line. The app then
sends requests via Axios url or Spotify searches based on predefined parameters. All data is formated to return and display in the console as well as log.txt
In the event a user does
not specify a move title, the app will default to a given output.
3. Start to finish steps on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'



4. `node liri.js do-what-it-says`

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

Edit the text in random.txt to test out the feature for movie-this and concert-this.