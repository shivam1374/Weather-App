const WeatherForm=document.querySelector('form')
const search=document.querySelector('input')
const message_one=document.querySelector('#p1')
const message_two=document.querySelector('#p2')
const message_three=document.querySelector('#p3')
// message_one.textContent='Loading Data'
WeatherForm.addEventListener('submit',(event)=>
{
   event.preventDefault()
   const input_value=search.value

   message_one.textContent='Loading Data....'
   message_two.textContent=''
   message_three.textContent=''

   fetch('/weather?address='+input_value).then((response)=>
   {
      response.json().then((data)=>
         {
            if(data.error)
            {
               message_one.textContent='Unable To Fetch Data'
               message_two.textContent=''
               message_three.textContent=''
            }
            else
            {
               message_one.textContent='Region:'+data.region+','+data.country
               message_two.textContent= 'Temperature:'+data.temperature+'Degree'
               message_three.textContent='Weather:'+data.weather
            }  
         }
      )
   }
   )

})
