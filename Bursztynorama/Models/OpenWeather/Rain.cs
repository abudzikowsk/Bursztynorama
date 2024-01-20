using System.Text.Json.Serialization;

namespace Bursztynorama.Models.OpenWeather;

public class Rain
{
	[JsonPropertyName("1h")]
	public double Oneh { get; set; }
}