const request = require("request");
const GEO_API_KEY = `NFMBf7dFjgeXagm7AJriFAwzL1wnjap3`;
// const GEO_URL = `https://api.tomtom.com/search/2/geocode/${"Giza"}.json?key=${GEO_API_KEY}`;

const geocode = (address, callback) => {
  const GEO_URL = `https://api.tomtom.com/search/2/geocode/${address}.json?key=${GEO_API_KEY}`;

  request({ url: GEO_URL, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to location services!");
    } else if (body.results.length < 1) {
      callback("Unable to find location. Try another search.");
    } else {
      callback(undefined, {
        latitude: body.results[0].position.lat,
        longitude: body.results[0].position.lon,
        location:
          body.results[0].address.country +
          ", " +
          body.results[0].address.municipality,
      });
    }

    // console.log(body.results[0]);
  });
};

module.exports = geocode;
