using Bursztynorama.Database.Enums;
using Bursztynorama.Database.Repositories;
using Bursztynorama.Models;
using Microsoft.AspNetCore.Mvc;

namespace Bursztynorama.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherDataController : ControllerBase
{
    private readonly WeatherHistoricalDataRepository weatherHistoricalDataRepository;

    public WeatherDataController(WeatherHistoricalDataRepository weatherHistoricalDataRepository)
    {
        this.weatherHistoricalDataRepository = weatherHistoricalDataRepository;
    }

    [HttpGet]
    [Route("{city}")]
    public async Task<WeatherDataResponse[]> GetWeatherData(Cities city)
    {
        var data = await weatherHistoricalDataRepository.GetAllByCity(city);

        var mappedData = new List<WeatherDataResponse>();

        foreach (var d in data)
        {
            mappedData.Add(new WeatherDataResponse
            {
                Id = d.Id,
                Date = d.Date,
                AirTemperature = d.AirTemperature,
                WindDirection = d.WindDirection,
                WindSpeed = d.WindSpeed,
                SeaTemperature = d.SeaTemperature.HasValue ? d.SeaTemperature.Value : 0,
                MoonPhase = d.MoonPhase
            });
        }
        return mappedData.ToArray();
    }

}