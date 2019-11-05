# Weather Collector

This simple app, allow you to collect weather data of any city, and store it in MongoDB.

## Installation

First you have to install on your machine:

- node.js
- mongoDB

Then install dependencies by running from main folder of project:

> npm install

## Launching

From main folder run:

> npm start

## Configuration

In ./config/config.ts you can configure application:

You can use your own api key for [Weather API](https://openweathermap.org/api):

    export const API_KEY = "f5f10cc1b766f33abf21d36cf6c60248";

You can configure for which city data will be collected (for presented example, data will be stored in "weather-gdynia" mongoDB collection):

    export const CITY_NAME = "gdynia";

You can choose units you prefer (metric, imperial, standard):

    export const UNITS = "metric";

You can configure delay of worker requests in millisecond:

    export const WORKER_DELAY_IN_MSEC = 1000;
