using Bursztynorama.Database.Enums;
using Bursztynorama.Database.Repositories;
using Bursztynorama.Models;
using Bursztynorama.Services;
using Microsoft.AspNetCore.Mvc;

namespace Bursztynorama.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherDataController(
    WeatherHistoricalDataRepository weatherHistoricalDataRepository, 
    CityMapper cityMapper)
    : ControllerBase
{
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
                Date = d.Date.ToString("dd/MM HH:mm"),
                City = cityMapper.Map(d.City),
                AirTemperature = Math.Round(d.AirTemperature, 1),
                WindDirection = d.WindDirection,
                WindSpeed = Math.Round(d.WindSpeed),
                SeaTemperature = d.SeaTemperature.HasValue ? Math.Round(d.SeaTemperature.Value, 1) : 0,
                MoonPhase = d.MoonPhase
            });
        }
        return mappedData.ToArray();
    }

}