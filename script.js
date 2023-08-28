const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8e074d2e51msh784d20bd988413ep1e54a9jsne6a339d2448a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = async (city) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const url1 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'kolkata';
    const url2 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'Bhubaneswar';
    const url3 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'Delhi';
    const url4 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'Chennai';
    const url5 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'Bangalore';
    const url6 = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + 'Mumbai';

    cityName.innerHTML = city;

    try {
        const response = await fetch(url, options);
        const data = await response.json();

        cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        temp2.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        humidity2.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_speed2.innerHTML = data.wind_speed;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }

    try {
        const response = await fetch(url1, options);
        const data = await response.json();

        cloud_pct3.innerHTML = data.cloud_pct;
        temp3.innerHTML = data.temp;
        feels_like3.innerHTML = data.feels_like;
        humidity3.innerHTML = data.humidity;
        min_temp3.innerHTML = data.min_temp;
        max_temp3.innerHTML = data.max_temp;
        wind_speed3.innerHTML = data.wind_speed;
        sunrise3.innerHTML = data.sunrise;
        sunset3.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(url2, options);
        const data = await response.json();

        cloud_pct4.innerHTML = data.cloud_pct;
        temp4.innerHTML = data.temp;
        feels_like4.innerHTML = data.feels_like;
        humidity4.innerHTML = data.humidity;
        min_temp4.innerHTML = data.min_temp;
        max_temp4.innerHTML = data.max_temp;
        wind_speed4.innerHTML = data.wind_speed;
        sunrise4.innerHTML = data.sunrise;
        sunset4.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(url3, options);
        const data = await response.json();

        cloud_pct5.innerHTML = data.cloud_pct;
        temp5.innerHTML = data.temp;
        feels_like5.innerHTML = data.feels_like;
        humidity5.innerHTML = data.humidity;
        min_temp5.innerHTML = data.min_temp;
        max_temp5.innerHTML = data.max_temp;
        wind_speed5.innerHTML = data.wind_speed;
        sunrise5.innerHTML = data.sunrise;
        sunset5.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(url4, options);
        const data = await response.json();

        cloud_pct6.innerHTML = data.cloud_pct;
        temp6.innerHTML = data.temp;
        feels_like6.innerHTML = data.feels_like;
        humidity6.innerHTML = data.humidity;
        min_temp6.innerHTML = data.min_temp;
        max_temp6.innerHTML = data.max_temp;
        wind_speed6.innerHTML = data.wind_speed;
        sunrise6.innerHTML = data.sunrise;
        sunset6.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(url5, options);
        const data = await response.json();

        cloud_pct7.innerHTML = data.cloud_pct;
        temp7.innerHTML = data.temp;
        feels_like7.innerHTML = data.feels_like;
        humidity7.innerHTML = data.humidity;
        min_temp7.innerHTML = data.min_temp;
        max_temp7.innerHTML = data.max_temp;
        wind_speed7.innerHTML = data.wind_speed;
        sunrise7.innerHTML = data.sunrise;
        sunset7.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(url6, options);
        const data = await response.json();

        cloud_pct8.innerHTML = data.cloud_pct;
        temp8.innerHTML = data.temp;
        feels_like8.innerHTML = data.feels_like;
        humidity8.innerHTML = data.humidity;
        min_temp8.innerHTML = data.min_temp;
        max_temp8.innerHTML = data.max_temp;
        wind_speed8.innerHTML = data.wind_speed;
        sunrise8.innerHTML = data.sunrise;
        sunset8.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
};
submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = city.value;
    getWeather(cityInput);
});

// Initial weather fetch for default city
getWeather("Arambagh");

