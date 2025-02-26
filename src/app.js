const searchBtn = document.getElementById('searchBtn');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind_speed');


searchBtn.addEventListener('click', async () => {
	const city = document.getElementById('cityInput').value.trim();

	if (!city) {
		alert('Please enter a city name!');
		return;
	}

	const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'c698fa66c1mshe9086792029e391p1249ffjsnac78c71329ab',
			'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json();
		console.log(result);

		locationElement.innerHTML = result.name
		temperatureElement.innerHTML = parseFloat(((result.main.temp - 32) * 5/9).toFixed(2))
		descriptionElement.innerHTML = result.weather[0].description
		humidityElement.innerHTML = result.main.humidity
		windSpeedElement.innerHTML = result.wind.speed

	} catch (error) {
		console.error(error);
		alert('Failed to fetch weather data. Please try again.');
	}
})
