# 🌦️ Weather App

A simple and responsive **Weather App** built using **HTML**, **CSS (Tailwind CSS)**, and **JavaScript**. It fetches real-time weather data from a weather API and displays key parameters like temperature, weather description, humidity, and wind speed.

## 📚 **About the Project**
This application allows users to:
- Search for weather information by city name.
- View live updates of:
  - **Location**
  - **Temperature**
  - **Weather Description**
  - **Humidity**
  - **Wind Speed**

## 🚀 **API Details**
- **API Name:** Open Weather
- **Base URL:** [https://rapidapi.com/worldapi/api/open-weather13](https://rapidapi.com/worldapi/api/open-weather13)
- **API Provider:** RapidAPI
- **Data Fetched:**
  ```json
  {
  "coord": {
    "lon": -89.1028,
    "lat": 30.438
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 49.46,
    "feels_like": 44.89,
    "temp_min": 45.68,
    "temp_max": 51.8,
    "pressure": 1030,
    "humidity": 59
  },
  "visibility": 10000,
  "wind": {
    "speed": 11.5,
    "deg": 50,
    "gust": 20.71
  },
  "clouds": {
    "all": 0
  },
  "dt": 1702548828,
  "sys": {
    "type": 2,
    "id": 2015175,
    "country": "US",
    "sunrise": 1702557907,
    "sunset": 1702594622
  },
  "timezone": -21600,
  "id": 4429197,
  "name": "Landon",
  "cod": 200
}
  ```
- **Authentication:** Requires an API key from RapidAPI

## 🛠️ **Technologies Used**
- **Frontend:** HTML, Tailwind CSS
- **Backend Logic:** JavaScript (Fetch API)

## 🎯 **How it Works**
1. Enter a city name in the search bar.
2. Click the **Search** button.
3. The app fetches real-time weather data using the API.
4. Weather details are dynamically displayed on the webpage.