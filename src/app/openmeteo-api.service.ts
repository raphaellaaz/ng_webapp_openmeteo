import { Injectable } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';

@Injectable({
  providedIn: 'root'
})
export class OpenmeteoApiService {

  constructor() { }

  async getDataWeather(lat: number, lon: number, hour: Array<string>, timez: string): Promise<any> {
    const params = {
      "latitude": lat,
      "longitude": lon,
      "hourly": hour,
      "timezone": timez,
    };
    try {
      const url = "https://api.open-meteo.com/v1/forecast";
      const responses = await fetchWeatherApi(url, params);

      // Helper function to form time ranges
      const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

      // Process first location. Add a for-loop for multiple locations or weather models
      const response = responses[0];

      // Attributes for timezone and location
      const utcOffsetSeconds = response.utcOffsetSeconds();
      const timezone = response.timezone();
      const timezoneAbbreviation = response.timezoneAbbreviation();
      const latitude = response.latitude();
      const longitude = response.longitude();

      const hourly = response.hourly()!;

      // Note: The order of weather variables in the URL query and the indices below need to match!
      const weatherData = {

        hourly: {
          time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
          ),
          temperature2m: hourly.variables(0)!.valuesArray()!,
          relativeHumidity2m: hourly.variables(1)!.valuesArray()!,
          rain: hourly.variables(2)!.valuesArray()!,
        },

      };

      // `weatherData` now contains a simple structure with arrays for datetime and weather data
      for (let i = 0; i < weatherData.hourly.time.length; i++) {
        console.log(
          weatherData.hourly.time[i].toISOString(),
          weatherData.hourly.temperature2m[i],
          weatherData.hourly.relativeHumidity2m[i],
          weatherData.hourly.rain[i]
        );
      }
    } catch (error) {
      console.error("Error in openmeteots: ", error);
      throw error;
    }
  }


}
