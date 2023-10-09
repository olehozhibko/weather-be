const writeWeatherData = require('./mutations/add-weather-data');
const weeklyWeather = require('./queries/get-weekly-weather');
const weatherDataFiles = require('./queries/get-weather-data-files');
const weatherDataFromFile = require('./queries/get-weather-data-from-file');

const resolvers = {
    Query: {
        weeklyWeather,
        weatherDataFiles,
        weatherDataFromFile,
    },
    Mutation: {
        writeWeatherData
    },
};

module.exports = resolvers;