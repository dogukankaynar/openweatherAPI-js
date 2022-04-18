const key = "3398852d61ec5408e0e2692ed3888b53"
const searchBarInput=document.querySelector('.searchbar-input');
console.log(searchBarInput)
let callApi =(e)=>{
    if(e.key==='Enter'){
        const api =`https://api.openweathermap.org/data/2.5/weather?q=${searchBarInput.value.trim()}&appid=${key}&lang=tr`
        const request = new Request();
        request.get(api)
        .then(response =>{
            document.getElementById('cityName').textContent=response.name;
            document.getElementById('cityTemperature').textContent=response.weather[0].description
            document.getElementById('cityDescription').textContent=`${(Math.round(response.main.temp-273.15))}°C`
        })
        .catch(err =>{console.log(err)})
    }

}


searchBarInput.addEventListener('keypress',callApi)