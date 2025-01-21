using Bursztynorama.Database.Enums;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Bursztynorama.Database.Entities;

public class WeatherData
{
	[BsonId]
	[BsonRepresentation(BsonType.ObjectId)]
	public string Id { get; set; }
	public Cities City { get; set; }
	public DateTime Date { get; set; }
	public double AirTemperature { get; set; }
	public double WindSpeed { get; set; }
	public string WindDirection { get; set; }
	public int? MoonPhase { get; set; }
	public double? SeaTemperature { get; set; }
}