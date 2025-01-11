using Bursztynorama.Database.Enums;
using Bursztynorama.Database.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Bursztynorama.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PredictionController(
    WeatherHistoricalDataRepository weatherHistoricalDataRepository)
    : ControllerBase
{
    [HttpGet]
    [Route("{city}")]
    public async Task<IActionResult> GetPrediction(Cities city)
    {
        //0; 20; 40; 60; 80
        var data = await weatherHistoricalDataRepository.GetLastData(city);
        
        int windSpeedPercentage = 0;
        if (data.WindSpeed < 10)
        {
            windSpeedPercentage = 0;
        }
        else if (data.WindSpeed >= 10 && data.WindSpeed < 20)
        {
            windSpeedPercentage = 30;
        }
        else if (data.WindSpeed >= 20 && data.WindSpeed < 30)
        {
            windSpeedPercentage = 60;
        }
        else if (data.WindSpeed >= 30 && data.WindSpeed < 40)
        {
            windSpeedPercentage = 80;
        }
        else if (data.WindSpeed >= 40 && data.WindSpeed < 50)
        {
            windSpeedPercentage = 90;
        }
        else
        {
            windSpeedPercentage = 100;
        }
        
        //-18 -1; 0 - 10; 10 - 20; 20 - 30; 30+ 
        int airTemperaturePercentage = 0;
        if (data.AirTemperature < 0)
        {
            airTemperaturePercentage = 80;
        }
        else if (data.AirTemperature >= 0 && data.AirTemperature < 10)
        {
            airTemperaturePercentage = 60;
        }
        else if (data.AirTemperature >= 10 && data.AirTemperature < 20)
        {
            airTemperaturePercentage = 40;
        }
        else if (data.AirTemperature >= 20 && data.AirTemperature < 30)
        {
            airTemperaturePercentage = 20;
        }
        else
        {
            airTemperaturePercentage = 0;
        }
        
        // >4; 4-6; 6-10; 10-18; <18
        int seaTemperaturePercentage = 0;
        if (data.SeaTemperature.HasValue)
        {
            if (data.SeaTemperature.Value < 4)
            {
                seaTemperaturePercentage = 80;
            }
            else if (data.SeaTemperature.Value >= 4 && data.SeaTemperature.Value < 6)
            {
                seaTemperaturePercentage = 60;
            }
            else if (data.SeaTemperature.Value >= 6 && data.SeaTemperature.Value < 10)
            {
                seaTemperaturePercentage = 40;
            }
            else if (data.SeaTemperature.Value >= 10 && data.SeaTemperature.Value < 18)
            {
                seaTemperaturePercentage = 20;
            }
            else
            {
                seaTemperaturePercentage = 0;
            }
        }
        
        //N NNE NE ENE E = 100; ESE NNW = 60; S SSW SW WSW W SE SSE WNW NW = 20
        int windDirectionPercentage = 0;
        if (data.WindDirection == "N" || data.WindDirection == "NNE" || data.WindDirection == "NE" || data.WindDirection == "ENE" || data.WindDirection == "E")
        {
            windDirectionPercentage = 100;
        }
        else if (data.WindDirection == "ESE" || data.WindDirection == "NNW")
        {
            windDirectionPercentage = 60;
        }
        else
        {
            windDirectionPercentage = 20;
        }
        
        int predictionPercentage = (windSpeedPercentage + airTemperaturePercentage + seaTemperaturePercentage + windDirectionPercentage) / 4;
        
        return Ok(predictionPercentage);
    }
}