const axios = require('axios');

const API_KEY = process.env.WEATHER_API_KEY;
const getWeeklyWeather = async (_, { city, days }) => {
    try {
        const response = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
        );

        const weatherData = response.data.forecast.forecastday.map((item) => ({
            date: item.date,
            temperature: item.day.avgtemp_c,
            description: item.day.condition.text,
        }));

        return weatherData;
    } catch (error) {
        throw new Error('Unable to fetch weather data');
    }
};

module.exports = getWeeklyWeather;