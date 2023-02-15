const request = require("request");

const WEATHER_API_KEY = "3fda990e6e3ac52c172906162c2c1fbf";
const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${"Giza"}&appid=${WEATHER_API_KEY}&units=metric`;
// const WEATHER_URL_2 = `https://api.openweathermap.org/data/2.5/weather?lat=${"30.01365"}&lon=${"31.20814"}&appid=${WEATHER_API_KEY}&units=metric`;

const forecast = (latitude, longitude, callback) => {
  const WEATHER_URL_2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`;

  request({ url: WEATHER_URL_2, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to weather services!");
    } else if (body.message) {
      callback("Unable to find location!");
    } else {
      callback(
        undefined,
        `${
          body.weather[0].description
        }, It's currently ${body.main.temp.toFixed(
          0
        )}℃  out. It feels like ${body.main.feels_like.toFixed(
          0
        )}℃  out. The humidity is ${body.main.humidity}%`
      );
    }

    /*console.log(
      `${body.weather[0].description}, It's currently ${body.main.temp.toFixed(
        0
      )}℃  out. It feels like ${body.main.feels_like.toFixed(
        0
      )}℃  out. The humidity is ${body.main.humidity}%`
    );*/
  });
};

module.exports = forecast;
