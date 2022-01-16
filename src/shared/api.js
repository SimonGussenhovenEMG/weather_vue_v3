const hilversumKey = "249538";
const currentWeatherUrl =
  "http://dataservice.accuweather.com/currentconditions/v1/";
const currentLocationUrl =
  "http://dataservice.accuweather.com/locations/v1/";
const secretKey = "GX6Bwh4YFRyT2VOGbHbwbRiDp98uVCi5";

import * as axios from 'axios'
import {locationData, weatherData} from '../data/mockData.js'

const useMockData = true

export const getWeatherData = async () => {
    if (!useMockData) {
        const response = await axios.get(`${currentWeatherUrl}${hilversumKey}?apikey=${secretKey}&details=true`);
        return response.data[0]
    }
    console.log('Mock data used for weather')
    return weatherData [0]
  };

  export const getLocationData = async () => {
    if (!useMockData) {
        const response = await axios.get(`${currentLocationUrl}${hilversumKey}?apikey=${secretKey}&language=en-us&details=true`);
        return response.data
    }
    console.log('Mock data used for location')
    return locationData
  };