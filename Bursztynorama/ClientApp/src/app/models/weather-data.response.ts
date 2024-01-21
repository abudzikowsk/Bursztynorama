export interface WeatherDataResponse {
  id: number;
  date: string;
  city: string;
  airTemperature: number;
  windSpeed: number;
  windDirection: string;
  moonPhase: number;
  seaTemperature: number;
}
