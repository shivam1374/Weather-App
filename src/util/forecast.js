const request=require('request')
const forecast=(latitude,longitude,callback)=>
{
   const url='http://api.weatherstack.com/current?access_key=8c2c7e8306d6b9192ba4732a7bd661c6&query='+latitude+','+longitude+''
    request(
        {
            url, 
            json:true
        },
        (error,{body})=>
        {
            if(error)
            {
                callback('unable to connect!',undefined)
            }
            else if(body.error)
            {
                callback('unable to find data',undefined)
            }
            else
            {
                callback(undefined,body)
            }
            
        }
    )
    }
module.exports=forecast


