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
    public async Task<WeatherDataResponse[]> GetWeatherData()
    {
        var data = await weatherHistoricalDataRepository.GetAll();

        var mappedData = new List<WeatherDataResponse>();

        foreach (var d in data)
        {
            mappedData.Add(new WeatherDataResponse
            {
                Id = d.Id,
                Date = d.Date,
                AirTemperature = d.AirTemperature,
                WindDirection = d.WindDirection,
                WindSpeed = d.WindSpeed
            });
        }
        return mappedData.ToArray();
    }

}