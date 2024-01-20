using Bursztynorama.Database.Entities;
using Bursztynorama.Database.Enums;
using Bursztynorama.Database.Repositories;
using Bursztynorama.Helpers;
using Bursztynorama.Services;

namespace Bursztynorama.Jobs;

public class GetWeatherDataJob
{
    private readonly WeatherService weatherService;
    private readonly WeatherHistoricalDataRepository weatherHistoricalDataRepository;

    public GetWeatherDataJob(WeatherService weatherService, WeatherHistoricalDataRepository weatherHistoricalDataRepository)
    {
        this.weatherService = weatherService;
        this.weatherHistoricalDataRepository = weatherHistoricalDataRepository;
    }
    public async Task Run()
    {
        foreach (var city in Enum.GetValues(typeof(Cities)).Cast<Cities>())
        {
            var weatherData = weatherService.GetWeatherData(city);
            var seaTemperature = weatherService.GetSeaTemperature(city);
            var moonPhase = weatherService.GetMoonPhase();
            await Task.WhenAll(weatherData, seaTemperature, moonPhase);
            
            var historicalData = new WeatherData
            {
                City = city,
                AirTemperature = weatherData.Result.Main.Temp,
                WindDirection = WeatherDataHelpers.GetWindDirection(weatherData.Result.Wind.Deg),
                WindSpeed = WeatherDataHelpers.GetWindSpeedInKmPerHours(weatherData.Result.Wind.Speed),
                SeaTemperature = seaTemperature.Result,
                MoonPhase = moonPhase.Result
            };

            await weatherHistoricalDataRepository.Create(historicalData);
        }
    }
}