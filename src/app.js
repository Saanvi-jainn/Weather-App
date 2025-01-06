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

	const url = `https://weatherapi230.p.rapidapi.com/current?units=metric&location=${city}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'c698fa66c1mshe9086792029e391p1249ffjsnac78c71329ab',
			'x-rapidapi-host': 'weatherapi230.p.rapidapi.com'
		}
	};


	try {
		const response = await fetch(url, options);
		
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const result = await response.json();
		console.log(result);

		locationElement.innerHTML = result.location
		temperatureElement.innerHTML = result.temperature
		descriptionElement.innerHTML = result.description
		humidityElement.innerHTML = result.humidity
		windSpeedElement.innerHTML = result.wind_speed

	} catch (error) {
		console.error(error);
		alert('Failed to fetch weather data. Please try again.');
	}
})
