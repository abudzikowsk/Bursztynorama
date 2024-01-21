namespace Bursztynorama.Models;

public class WeatherDataResponse
{
	public int Id { get; set; }
	public string Date { get; set; }
	public string City { get; set; }
	public double AirTemperature { get; set; }
	public double WindSpeed { get; set; }
	public string WindDirection { get; set; }
	public int? MoonPhase { get; set; }
	public double SeaTemperature { get; set; }
}