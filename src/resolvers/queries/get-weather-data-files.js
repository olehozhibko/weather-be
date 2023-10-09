const util = require('util');
const fs = require('fs');
const path = require('path'); // Add this line to import the 'path' module

const DATA_DIRECTORY = process.env.DATA_DIRECTORY;

const readdirAsync = util.promisify(fs.readdir);
const getWeatherDataFiles = async () => {
    try {
        const files = await readdirAsync(DATA_DIRECTORY);
        const jsonFiles = files.filter((file) => path.extname(file) === '.json');
        return jsonFiles;
    } catch (error) {
        console.error('Error fetching weather data files:', error);
        throw new Error('Unable to fetch weather data files');
    }
}

module.exports = getWeatherDataFiles;