const request=require('request')
const forecast=(latitude,longitude,callback)=>
{
   const url='http://api.weatherstack.com/current?access_key=8c2c7e8306d6b9192ba4732a7bd661c6&query='+latitude+','+longitude+''
    // console.log(url)
    request(
        {
            url, // url instead of url:url (bcoz no other url define so uses above url value)
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









































// const request=require('request')
// const forecast=(latitude,longitude,callback)=>
// {
//    const url='http://api.weatherstack.com/current?access_key=decf053e8e27052fb908da5f32db5a27&query='+latitude+','+longitude+''
//     request(
//         {
//             url, // url instead of url:url (bcoz no other url define so uses above url value)
//             json:true
//         },
//         (error,response)=>
//         {
//             if(error)
//             {
              
//                 callback('unable to connect!',undefined)
//             }
//             else if(response.body.error)
//             {
//                 callback('unable to find data',undefined)
//             }
//             else
//             {
//                 callback(undefined,{
//                     body:response.body
//                 })
//             }
            
//         }
//     )
// }
// module.exports=forecast