const fs = require('fs');
const path = require('path'); // Add this line to import the 'path' module

const DATA_DIRECTORY = process.env.DATA_DIRECTORY;
const getWeatherDataFromFile = (_, { fileName }) => {
    try {
        const filePath = path.join(DATA_DIRECTORY, fileName);

        if (!fs.existsSync(filePath)) {
            throw new Error('File not found');
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContent);

        return data;
    } catch (error) {
        console.error('Error fetching weather data from file:', error);
        throw new Error('Unable to fetch weather data from file');
    }
}

module.exports = getWeatherDataFromFile;