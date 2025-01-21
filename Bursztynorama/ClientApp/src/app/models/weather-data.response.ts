export interface WeatherDataResponse {
  id: string;
  date: string;
  city: string;
  airTemperature: number;
  windSpeed: number;
  windDirection: string;
  moonPhase: number;
  seaTemperature: number;
}
