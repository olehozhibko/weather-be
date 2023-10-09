const fs = require('fs');
const util = require('util');
const path = require('path'); // Add this line to import the 'path' module

const DATA_DIRECTORY = process.env.DATA_DIRECTORY;

const writeFileAsync = util.promisify(fs.writeFile);
const addWeatherData = async (_, { city, data }) => {
    try {
        let message = 'Data written successfully';
        const filePath = path.join(DATA_DIRECTORY, `${city}_weather.json`);
        let existingData = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath)) : [];

        if(!existingData.find(res => res.date === data.date)){
            existingData.push(data);
        } else {
            message = 'weather already exist';
        }

        await writeFileAsync(filePath, JSON.stringify(existingData, null, 2));

        return message;
    } catch (error) {
        console.error('Error writing data to file:', error);
        throw new Error('Unable to write data');
    }
};

module.exports = addWeatherData;