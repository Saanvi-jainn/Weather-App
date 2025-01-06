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
- **API Name:** WeatherAPI230
- **Base URL:** [https://rapidapi.com/Cloudops80/api/weatherapi230](https://weatherapi230.p.rapidapi.com)
- **API Provider:** RapidAPI
- **Data Fetched:**
  ```json
  {
    "location": "Seattle",
    "temperature": 8.27,
    "description": "mist",
    "humidity": 94,
    "wind_speed": 2.24
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