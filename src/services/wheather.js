import { ajax } from "../tools/ajax";

export const getCityWheather = async (cityCode) => {
    const optionsRequest = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          q: cityCode ?? 'Santiago',
          appid: 'd9324c102728845ae63479fdb939704b',
          type: 'CITY',
          units: 'metric',
    

        }
      };
    return await ajax(optionsRequest);
}