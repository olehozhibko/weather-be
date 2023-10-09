const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Weather {
        date: String!
        temperature: Float!
        description: String!
    }

    type Query {
        weeklyWeather(city: String!, days: Int!): [Weather!]!
        weatherDataFiles: [String!]!
        weatherDataFromFile(fileName: String!): [Weather]
    }

    type Mutation {
        writeWeatherData(city: String!, data: WeatherInput!): String
    }

    input WeatherInput {
        date: String!
        temperature: Float!
        description: String!
    }
`;

module.exports = typeDefs;