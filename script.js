function getFormattedTime(timeStamp) {
  var time = new Date(timeStamp);
  return time.toLocaleTimeString();
}

async function getWeather(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "db316f47c0msh05d23c923302d75p101ecajsn93f4f4748d8f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.error == null) {
      city =
        city.substring(0, 1).toUpperCase() + city.substring(1).toLowerCase();
      cityName.innerHTML = city;
      console.log(data);
      temp.innerHTML = data.temp;
      temp2.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      wind_speed.innerHTML = data.wind_speed;
      wind_speed2.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      humidity2.innerHTML = data.humidity;
      sunrise.innerHTML = getFormattedTime(data.sunrise);
      sunset.innerHTML = getFormattedTime(data.sunset);
    }
  } catch (error) {
    console.error(error);
  }
}

// search
search.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(weatherCity.value);
});

// run method
getWeather("seattle");

// weather for other common places

// Shimla weather
async function getShimlaWeather() {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shimla`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "db316f47c0msh05d23c923302d75p101ecajsn93f4f4748d8f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.error == null) {
      console.log(data);
      Shimla_cloud_pct.innerHTML = data.cloud_pct;
      Shimla_temp.innerHTML = data.temp;
      Shimla_feels_like.innerHTML = data.feels_like;
      Shimla_humidity.innerHTML = data.humidity;
      Shimla_min_temp.innerHTML = data.min_temp;
      Shimla_max_temp.innerHTML = data.max_temp;
      Shimla_wind_speed.innerHTML = data.wind_speed;
      Shimla_wind_degrees.innerHTML = data.wind_degrees;
      Shimla_sunrise.innerHTML = getFormattedTime(data.sunrise);
      Shimla_sunset.innerHTML = getFormattedTime(data.sunset);
    }
  } catch (error) {
    console.error(error);
  }
}
getShimlaWeather();

// Bangalore weather
async function getBangaloreWeather() {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "db316f47c0msh05d23c923302d75p101ecajsn93f4f4748d8f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.error == null) {
      console.log(data);
      Bangalore_cloud_pct.innerHTML = data.cloud_pct;
      Bangalore_temp.innerHTML = data.temp;
      Bangalore_feels_like.innerHTML = data.feels_like;
      Bangalore_humidity.innerHTML = data.humidity;
      Bangalore_min_temp.innerHTML = data.min_temp;
      Bangalore_max_temp.innerHTML = data.max_temp;
      Bangalore_wind_speed.innerHTML = data.wind_speed;
      Bangalore_wind_degrees.innerHTML = data.wind_degrees;
      Bangalore_sunrise.innerHTML = getFormattedTime(data.sunrise);
      Bangalore_sunset.innerHTML = getFormattedTime(data.sunset);
    }
  } catch (error) {
    console.error(error);
  }
}
getBangaloreWeather();

// Lucknow weather
async function getLucknowWeather() {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "db316f47c0msh05d23c923302d75p101ecajsn93f4f4748d8f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.error == null) {
      console.log(data);
      Lucknow_cloud_pct.innerHTML = data.cloud_pct;
      Lucknow_temp.innerHTML = data.temp;
      Lucknow_feels_like.innerHTML = data.feels_like;
      Lucknow_humidity.innerHTML = data.humidity;
      Lucknow_min_temp.innerHTML = data.min_temp;
      Lucknow_max_temp.innerHTML = data.max_temp;
      Lucknow_wind_speed.innerHTML = data.wind_speed;
      Lucknow_wind_degrees.innerHTML = data.wind_degrees;
      Lucknow_sunrise.innerHTML = getFormattedTime(data.sunrise);
      Lucknow_sunset.innerHTML = getFormattedTime(data.sunset);
    }
  } catch (error) {
    console.error(error);
  }
}
getLucknowWeather();

// Kolkata weather
async function getKolkataWeather() {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "db316f47c0msh05d23c923302d75p101ecajsn93f4f4748d8f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.error == null) {
      console.log(data);
      Kolkata_cloud_pct.innerHTML = data.cloud_pct;
      Kolkata_temp.innerHTML = data.temp;
      Kolkata_feels_like.innerHTML = data.feels_like;
      Kolkata_humidity.innerHTML = data.humidity;
      Kolkata_min_temp.innerHTML = data.min_temp;
      Kolkata_max_temp.innerHTML = data.max_temp;
      Kolkata_wind_speed.innerHTML = data.wind_speed;
      Kolkata_wind_degrees.innerHTML = data.wind_degrees;
      Kolkata_sunrise.innerHTML = getFormattedTime(data.sunrise);
      Kolkata_sunset.innerHTML = getFormattedTime(data.sunset);
    }
  } catch (error) {
    console.error(error);
  }
}
getKolkataWeather();
