const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=4f623d718b7757dab53a6460e7781694&query=' + latitude + ',' + longitude + '&units=f'

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to weather servide.', undefined)
    } else if (body.error) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, `${body.current.weather_descriptions[0]}. The current temperature is ${body.current.temperature}F degress.  It feels like ${body.current.feelslike}F degress.`
      )
    }
  })
}


module.exports = forecast