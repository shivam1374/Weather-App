const request=require('request')
const geocode= (address,callback)=>
{
    const url1='http://api.positionstack.com/v1/forward?access_key=217ebb8436e031dbb63698e6f7f0f4d9&query='+address+'&limit=1'
    request(
        {
            url:url1,
            json:true
            
        },
        function(error,{body})   
        {
            if(error)
            {
             callback('unable to connect!',undefined)
            }
            else if(body.error)
            {
                callback("unable to find location" ,undefined)
            }
            else
            {
                callback(undefined, 
                    {
                        body:body,
                    latitude:body.data[0].latitude,
                    longitude:body.data[0].longitude,
                    location:body.data[0].name,
                    region:body.data[0].region
                    }
                    )
            }
        }
    )
}


module.exports=geocode


























































// const request=require('request')
// const geocode= (address,callback)=>
// {
//     const url1='http://api.positionstack.com/v1/forward?access_key=8c2c7e8306d6b9192ba4732a7bd661c6&query='+address+'&limit=1'
//     //console.log(url1)
//     request(
//         {
//             url:url1,
//             json:true
            
//         },
//         function(error,response)   //response.body,response.x ,response.y => {body,x,y} //we extracting only body within response object
//         {
//             if(error)
//             {
//              callback('unable to connect!',undefined)
//             }
//             else if(response.body.data.error)
//             {
//                 callback("unable to find location" ,undefined)
//             }
//             else
//             {
//                 callback(undefined, 
//                     {
//                         latitude:response.data[0].latitude,
//                         longitude:response.data[0].longitude
//                     // latitude:body.data[0].latitude,
//                     // longitude:body.data[0].longitude,
//                     // location:body.data[0].name,
//                     // region:body.data[0].region,
//                     // label:body.data[0].label
//                     }
//                     )
//             }
//         }
//     )
// }


// module.exports=geocode
