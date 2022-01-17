const currentWeatherUrl = "http://api.weatherapi.com/v1/current.json";
const secretKey = "8b160acaafce4da49ff153744221701";

import * as axios from 'axios'
import {weatherData} from '../data/mockData.js'

//creating a date in the future
const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);
console.log(tomorrow)

//set to false to call from local object instead of API
const useMockData = false

//API call
export const getWeatherData = async (cityName) => {

  //palce cookie to remember selected city name
    document.cookie = `cityName=${cityName}; SameSite=None; secure; expires=Sun, 16 Jul 3567 06:23:41 GMT; domain=localhost`;

    if (!useMockData) {
       try {
        const response = await axios.get(`${currentWeatherUrl}?key=${secretKey}&q=${cityName}&aqi=no`);
        return response.data
       }
       catch (error) {
         console.log(error)
         return {}
       }
    }
    console.log('Mock data used for weather')
    return weatherData
  };