const request = require('request')

const geocode = (address,callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHNzLTMyMSIsImEiOiJja2F2Nmx5YmgwaTd2MnhvOWlqeWIxbXNsIn0.YEw6fDt9MgIqdjMz0nH5Hg'

    request({url,json: true},(error,{body}) =>{
       if(error){
         callback('Unable to connect to location services')
       } else if(body.features.length === 0){
          callback('No such location, you fucking twat!')
       }else{
          callback(undefined,{
            latitude: body.features[0].center[1], 
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
          })
 
       }
    }) 
} 

module.exports = geocode