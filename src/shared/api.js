const currentWeatherUrl =
  "http://dataservice.accuweather.com/currentconditions/v1/";
const currentLocationUrl =
  "http://dataservice.accuweather.com/locations/v1/";
const secretKey = "GX6Bwh4YFRyT2VOGbHbwbRiDp98uVCi5";

import * as axios from 'axios'
import {locationData, weatherData} from '../data/mockData.js'

const useMockData = false
export const getWeatherData = async (key) => {
    if (!useMockData) {
       try {
        const response = await axios.get(`${currentWeatherUrl}${key}?apikey=${secretKey}&details=true`);
        return response.data[0]
       }
       catch (error) {
         console.log(error)
       }
    }
    console.log('Mock data used for weather')
    return weatherData [0]
  };

  export const getLocationData = async (key) => {
    if (!useMockData) {
       try {
        const response = await axios.get(`${currentLocationUrl}${key}?apikey=${secretKey}&language=en-us&details=true`);
        return response.data
       }
       catch (error) {
         console.log(error)
       }
    }
    console.log('Mock data used for location')
    return locationData
  };