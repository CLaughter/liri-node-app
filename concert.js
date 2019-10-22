// Require environment variable configuration
require('dotenv').config()
// Import keys file
var keys = require('./keys.js');
// Require data from File System npm pkg
var fs = require('fs');
// Require Axios npm pkg for url query
var axios = require('axios');
// Access BandsInTown keys information
var concert = concert(keys.concert);
//  Require data from moment npm pkg
var moment = require('moment');

function myConcert(userInput) {
  var artist = userInput;
  var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.BIT;

  axios.get(url).then(
    function(response) {
      // Return response.data with moment format llll
      console.log("Concert Time: " +moment(resposnse.data[i].datetime, 'YY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
      console.log("Concert Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + "' " + response.data[i].venue.country);
      console.log("Concert Venue: " + response.data[i].venue.name);
      console.log("---------------------------------------------------");

        // Add text to log.txt 
    fs.appendFileSync('log.txt', "\r\n" + "Concert Search Log-----------------------" + "\r\n", 'utf8');
    fs.appendFileSync('log.txt', "\r\n" + "Name of Venue: " + response.data[i].venue.name  + "\r\n", 'utf8');
    fs.appendFileSync('log.txt', "\r\n" + "Venue Location: " + response.data.venue.city  + "\r\n", 'utf8');
    fs.appendFileSync('log.txt', "\r\n" + "Date of Event: " + moment(response.data[i].datetime, 'YY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A') + "\r\n", 'utf8');
    fs.appendFileSync('log.txt', "\r\n" + "---------------------------------------"  + "\r\n", 'utf8');
    })
};

// Exporting function used in liri.js
module.exports = myConcert