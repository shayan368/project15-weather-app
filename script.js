
  let city = document.querySelector(".city")
  let btn = document.querySelector(".btn")

  let temp = document.getElementById("temperature")
  let humi = document.getElementById("humidity")
  let cond = document.getElementById("condition")
  let err = document.getElementById("err")

  btn.addEventListener("click" , weather)
  
  let apikey = 'ec88e8e871021ecd96f790279f539dd4'
    function weather() {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}&units=metric`)
  .then(function (response) {
    // handle success
    console.log(response .data.main.temp);
    console.log(response .data.main.humidity);
    console.log(response.data.weather[0].main);

    temp.textContent = `temperature : ${response .data.main.temp}°C`
    humi.textContent = `Humidity : ${response .data.main.humidity}%`
    cond.textContent = `Condition : ${response.data.weather[0].main}`
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    err.textContent = `IN-VALID COUNTRY NAME(country not found)`
  }) 

  }