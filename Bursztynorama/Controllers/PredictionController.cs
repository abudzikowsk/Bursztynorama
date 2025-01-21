using Bursztynorama.Database.Enums;
using Bursztynorama.Database.Repositories;
using Bursztynorama.Services;
using Microsoft.AspNetCore.Mvc;

namespace Bursztynorama.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PredictionController(
    WeatherHistoricalDataRepository weatherHistoricalDataRepository, 
    PredictionService predictionService)
    : ControllerBase
{
    [HttpGet]
    [Route("{city}")]
    public async Task<IActionResult> GetPrediction(Cities city)
    {
        var data = await weatherHistoricalDataRepository.GetLastData(city);
        if (data == null)
        {
            return NotFound();
        }
        
        return Ok(predictionService.GetPrediction(data));
    }
}