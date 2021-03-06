const express=require('express')
const app=express()
const path=require('path')
const port=process.env.PORT || 3000
const geocode=require('./util/geocode')
const forecast=require('./util/forecast')

//define path for express 
const dir_path=path.join(__dirname,'../public')

app.use(express.static(dir_path))

//Response from a sever
app.get('',(req,res)=> 
{         
    res.send('index')
}
)

app.get('/weather',(req,res)=>
{
    if(!req.query.address)
    {
        return res.send({
            error:'you must provide an address'
        })
    }
    const address= req.query.address
    geocode(address,(error,data)=>
        {
            if(error)
            return res.send({error})
            else
            forecast(data.latitude,data.longitude,(error,forecastData)=>   
            {
                if(error)
                return res.send({
                    error:'error'
                })
                else
                {
                    res.send({
                        temperature:forecastData.current.temperature,
                        location:forecastData.location.name,
                        weather:forecastData.current.weather_descriptions,
                        region:forecastData.location.region,
                        country:forecastData.location.country
                    })
                }
            })

        })
})

app.get('*',(req,res)=>
{
    res.send('404')
})

app.listen(port,()=>
{
console.log("Server is Listening on port :" +port)
})