const request = require('request')

const forecast = (latitude,longitude,callback) =>{
     
    const url = 'http://api.weatherstack.com/current?access_key=7711ee9ecd462c7b8d7b0fb8d0ed3e9f&query='+ latitude+','+ longitude +'&units=f'

    request({url, json: true}, (error,{body}) => {
      if(error){
        callback('Unable to connect to weather API',undefined) 
      } else if(body.error){
           callback('unable to find location',undefined)
      }
      else{
        let a = Math.floor(((parseInt(body.current.temperature)-32)*5)/9)
        let b = Math.floor((parseInt(body.current.feelslike-32)*5)/9)
      callback(body.current.weather_descriptions[0]+'. It is currently ' +String(a)+ ' degrees celsius out. ' + 'It feels like ' + String(b) +' degrees celsius')
      } 
    })
}
 
module.exports = forecast 