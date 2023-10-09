// resolvers.js
const writeWeatherData = require('./mutations/add-weather-data');
const weeklyWeather = require('./queries/get-weekly-weather');
const weatherDataFiles = require('./queries/get-weather-data-files');
const weatherDataFromFile = require('./queries/get-weather-data-from-file');

const util = require('util');
const fs = require('fs');
const path = require('path'); // Add this line to import the 'path' module

const DATA_DIRECTORY = './statistics';
const readdirAsync = util.promisify(fs.readdir);

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