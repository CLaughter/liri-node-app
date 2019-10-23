// Require environment variable configuration
require('dotenv').config()
// Fetch BandsInTown keys
var keys = require('./keys.js');
// Require data from File System npm pkg
var fs = require('fs');
// Require Axios npm pkg for url query
var axios = require('axios');
//  Require data from moment npm pkg
var moment = require('moment');

function myConcert(userInput) {
  var artist = userInput;
  var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=" + keys.concert.BIT;

  axios.get(url).then(
    function(response) {
      // Return response.data with moment format llll
      console.log("Concert Time: " + moment(response.data[0].datetime, 'YY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A'));
      console.log("Concert Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region + "' " + response.data[0].venue.country);
      console.log("Concert Venue: " + response.data[0].venue.name);
      console.log("---------------------------------------------------");

    // output data to a log.txt, append each command , does not overwrite file each time command is run
    fs.appendFileSync('log.txt', "\r\n" + "Concert Search Log-----------------------" + "\r\n", 'utf8');
    fs.appendFileSync('log.txt', "\r\n" +  "Name of Venue: " + response.data[0].venue.name  + "\r\n", 'utf8');
    fs.appendFileSync('log.txt', "\r\n" + "Venue Location: " + response.data[0].venue.city  + "\r\n", 'utf8');
    fs.appendFileSync('log.txt', "\r\n" + "Date of Event: " + moment(response.data[0].datetime, 'YY-MM-DDTHH:mm:ss').format('MM/DD/YYYY, h:mm A') + "\r\n", 'utf8');
    fs.appendFileSync('log.txt', "\r\n" + "---------------------------------------"  + "\r\n", 'utf8');
    })
  
    console.log("Concert.txt was updated!");
};

// Exporting function used in liri.js
module.exports = myConcert;