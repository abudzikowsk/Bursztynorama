﻿using Bursztynorama.Database.Enums;

namespace Bursztynorama.Database.Entities;

public class WeatherData
{
	public int Id { get; set; }
	public Cities City { get; set; }
	public DateTime Date { get; set; }
	public double AirTemperature { get; set; }
	public double WindSpeed { get; set; }
	public string WindDirection { get; set; }
	public int? MoonPhase { get; set; }
	public double? SeaTemperature { get; set; }
}