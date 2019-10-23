var fs = require('fs');
// Require Spotify function exported from spotify.js
var mySpotify = require('./spotify.js');

function doWhatItSays() {
  fs.readFile('./random.txt', 'utf8', function(err, data) {
    if(err) {
      return
    }
    console.log(data)
  })
}

module.exports = doWhatItSays