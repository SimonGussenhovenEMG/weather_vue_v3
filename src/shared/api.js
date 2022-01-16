const hilversumKey = "249538";
const currentWeatherUrl =
  "http://dataservice.accuweather.com/currentconditions/v1/";
const currentLocationUrl =
  "http://dataservice.accuweather.com/locations/v1/";
const secretKey = "GX6Bwh4YFRyT2VOGbHbwbRiDp98uVCi5";
import * as axios from 'axios'

export const getWeatherData = async () => {
    const response = await axios.get(`${currentWeatherUrl}${hilversumKey}?apikey=${secretKey}&details=true`);
    console.log(response.data);
    return response.data[0]
  };

  export const getLocationData = async () => {
    const response = await axios.get(`${currentLocationUrl}${hilversumKey}?apikey=${secretKey}&language=en-us&details=true`);
    console.log(response.data);
    return response.data
  };