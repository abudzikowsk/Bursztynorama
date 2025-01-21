using Bursztynorama.Database.Entities;

namespace Bursztynorama.Services;

public class PredictionService
{
    public int GetPrediction(WeatherData data)
    {
        //0; 20; 40; 60; 80
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
                seaTemperaturePercentage = 70;
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
        if (data.WindDirection == "N" 
            || data.WindDirection == "NNE" 
            || data.WindDirection == "NE" 
            || data.WindDirection == "ENE" 
            || data.WindDirection == "E"
            || data.WindDirection == "NNW")
        {
            windDirectionPercentage = 100;
        }
        else if (data.WindDirection == "E"
                 || data.WindDirection == "NW")
        {
            windDirectionPercentage = 60;
        }
        else
        {
            windDirectionPercentage = 20;
        }
        
        return (windSpeedPercentage + seaTemperaturePercentage + windDirectionPercentage) / 3;
    }
}