using System.Globalization;
using System.Text.Json;
using System.Text.RegularExpressions;
using Bursztynorama.Database.Enums;
using Bursztynorama.Models.OpenWeather;
using HtmlAgilityPack;

namespace Bursztynorama.Services;

public class WeatherService
{
    private readonly HttpClient httpClient;
    private readonly Regex regexSeaTemperature = new(@"([0-9]+.?[0-9]?)&deg;C");
    private readonly string urlSeaTemperature = "https://www.seatemperature.org/europe/poland/{0}.htm";
    private readonly Regex regexMoonPhase = new(@"It is currently (\d*.?\d*)");
    private readonly string urlMoonPhase = "https://phasesmoon.com";
    private readonly Dictionary<Cities, double[]> cityToLocation = new()
    {
        {Cities.Chlapowo, [54.803650, 18.373520] },
        {Cities.Dziwnow, [54.028190, 14.766910] },
        {Cities.Gdansk, [54.352050, 18.646370] },
        {Cities.Gdynia, [54.518890, 18.531880] },
        {Cities.Grzybowo, [54.158920, 15.485570] },
        {Cities.Hel, [54.608140, 18.801300] },
        {Cities.KamienPomorski, [53.968490, 14.772620] },
        {Cities.KrynicaMorska, [54.380510, 19.444130] },
        {Cities.Mielno, [54.260860, 16.062100] },
        {Cities.Mrzezyno, [54.143840, 15.291420] },
        {Cities.NoweWarpno, [53.722560, 14.289610] },
        {Cities.Puck, [54.717900, 18.408410] },
        {Cities.Sopot, [54.441800, 18.560030] },
        {Cities.Stepnica, [53.651870, 14.625550] },
        {Cities.Tolkmicko, [54.320380, 19.526950] },
        {Cities.Wolin, [53.842140, 14.614650] }
    };
    
    private readonly Dictionary<Cities, string> cityToApiCity = new()
    {
        {Cities.Chlapowo, "chlapowo" },
        {Cities.Dziwnow, "dziwnow" },
        {Cities.Gdansk, "gdask" },
        {Cities.Gdynia, "gdynia" },
        {Cities.Grzybowo, "grzybowo" },
        {Cities.Hel, "hel" },
        {Cities.KamienPomorski, "kamien-pomorski" },
        {Cities.KrynicaMorska, "krynica-morska" },
        {Cities.Mielno, "mielno" },
        {Cities.Mrzezyno, "mrzezyno" },
        {Cities.NoweWarpno, "nowe-warpno" },
        {Cities.Puck, "puck" },
        {Cities.Sopot, "sopot" },
        {Cities.Stepnica, "stepnica" },
        {Cities.Tolkmicko, "tolkmicko"},
        {Cities.Wolin, "wolin"}
    };
    
    public WeatherService(HttpClient httpClient)
    {
        this.httpClient = httpClient;
    }

    public async Task<OpenWeatherResponse> GetWeatherData(Cities city)
    {
        var location = cityToLocation[city];
        var response = await httpClient.GetAsync($"https://api.openweathermap.org/data/2.5/weather?lat={location[0]}&lon={location[1]}&appid=e786afb775c09fd77cf5e682e1901660&units=metric");
        var stringResponse = await response.Content.ReadAsStringAsync();
        return JsonSerializer.Deserialize<OpenWeatherResponse>(stringResponse, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
    }

    public async Task<double?> GetSeaTemperature(Cities city)
    {
        var apiCity = cityToApiCity[city];
        var cityUrl = string.Format(urlSeaTemperature, apiCity);
        var html = await httpClient.GetStringAsync(cityUrl);
        var htmlDocument = new HtmlDocument();
        htmlDocument.LoadHtml(html);

        var node = htmlDocument.DocumentNode.SelectSingleNode("//*[@id='sea-temperature']");

        if (node != null)
        {
            var temperatureUnparsed = node.ChildNodes[1].InnerText;
            var match = regexSeaTemperature.Match(temperatureUnparsed);

            if (double.TryParse(match.Groups[1].Value, NumberStyles.Any, CultureInfo.InvariantCulture, out var temperature))
            {
                return Math.Round(temperature, 2);
            }
        }

        return null;
    }

    public async Task<int?> GetMoonPhase()
    {
        var html = await httpClient.GetStringAsync(urlMoonPhase);

        var htmlDocument = new HtmlDocument();
        htmlDocument.LoadHtml(html);

        var node = htmlDocument.DocumentNode.SelectSingleNode("//*[@class='pargraph']");

        if (node != null)
        {
            var match = regexMoonPhase.Match(node.InnerText);

            if (double.TryParse(match.Groups[1].Value, NumberStyles.Any, CultureInfo.InvariantCulture, out var phase))
            {
                return (int)Math.Round(phase);
            }
        }

        return null;
    }
}