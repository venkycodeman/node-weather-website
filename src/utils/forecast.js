const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3e0b564ec9680ce02b9548b77a320836&query=${latitude},${longitude}&units=m`
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.current)
            callback(undefined, `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degrees out, but it feels like ${body.current.feelslike} degrees celsius. Humidity is ${body.current.humidity} percent. Wind speed is ${body.current.wind_speed} Kmph and wind direction is ${body.current.wind_dir}. Precipitation leve is ${body.current.precip} mm(milli meters) and cloud cover percent is ${body.current.cloudcover}. Pressure is ${body.current.pressure} mb(millibar).`)
        }
    })
}

module.exports = forecast