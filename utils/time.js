const request = require('request')


const time = (address,callback)=>{
  const url = 'http://worldtimeapi.org/api/timezone/'+address
  request({url, json: true}, (error,{body}) => {
      if(error){
          callback('Cannot connect to WorldTime API')
      }
      else{
        let a =''
          for(i=11;i<16;i++){
             a = a + body.datetime[i];
          }
        callback('Local Time: '+a)
        

      }
  }) 
}



module.exports =time