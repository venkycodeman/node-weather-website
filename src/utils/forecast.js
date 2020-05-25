const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3e0b564ec9680ce02b9548b77a320836&query=${latitude},${longitude}&units=f`
    //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + 'degrees.')
        }
    })
}

module.exports = forecast