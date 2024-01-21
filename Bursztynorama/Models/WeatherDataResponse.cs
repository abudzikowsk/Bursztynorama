namespace Bursztynorama.Models;

public class WeatherDataResponse
{
	public int Id { get; set; }
	public DateTime Date { get; set; }
	public double AirTemperature { get; set; }
	public double WindSpeed { get; set; }
	public string WindDirection { get; set; }
	public int? MoonPhase { get; set; }
	public double SeaTemperature { get; set; }
}