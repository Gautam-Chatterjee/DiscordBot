const request = require('request')

const forecast = (latitude,longitude,callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=af86cae01490718f0d48e6b4d66ed64a&query='+ latitude+','+ longitude +'&units=f'

    request({url, json: true}, (error,{body}) => {
      if(error){
        callback('Unable to connect to weather API',undefined) 
      } else if(body.error){
           callback('unable to find location',undefined)
      }
      else{
      callback(body.current.weather_descriptions[0]+'. It is currently ' +body.current.temperature+ ' degrees out. ' + 'It feels like ' + body.current.feelslike +' degrees')
      } 
    })
}
 
module.exports = forecast 