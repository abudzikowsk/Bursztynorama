using Bursztynorama.Database.Entities;
using Bursztynorama.Database.Enums;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Bursztynorama.Database.Repositories;

public class WeatherHistoricalDataRepository
{
    private readonly ApplicationDbContext applicationDbContext;

    public WeatherHistoricalDataRepository(IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("DefaultConnection");
        var mongoClient = new MongoClient(connectionString);
        this.applicationDbContext = ApplicationDbContext.Create(mongoClient.GetDatabase("Bursztynorama"));
        applicationDbContext.Database.EnsureCreated();
    }

    public async Task<WeatherData[]> GetAllByCity(Cities city)
    {
        return await applicationDbContext.WeatherHistoricalData
            .Where(i => i.City == city)
            .OrderBy(i => i.Date)
            .ToArrayAsync();
    }

    public async Task Create(WeatherData weatherData)
    {
        var utcTime = DateTime.UtcNow;
        var warsawZone = TimeZoneInfo.FindSystemTimeZoneById("Central European Standard Time");
        var warsawTime = TimeZoneInfo.ConvertTimeFromUtc(utcTime, warsawZone);
        weatherData.Date = warsawTime;
        weatherData.Id = ObjectId.GenerateNewId().ToString();
        applicationDbContext.WeatherHistoricalData.Add(weatherData);
        await applicationDbContext.SaveChangesAsync();
    }

    public async Task DeleteOldData()
    {
        var oldData = await applicationDbContext.WeatherHistoricalData
            .Where(o => o.Date < DateTime.Today.AddDays(-7)).ToArrayAsync();
        applicationDbContext.WeatherHistoricalData.RemoveRange(oldData);
        await applicationDbContext.SaveChangesAsync();
    }
    
    public async Task<WeatherData?> GetData24HoursBack(Cities city)
    {
        return await applicationDbContext.WeatherHistoricalData
            .Where(i => i.City == city && i.Date.Date <= DateTime.Now.AddDays(-1))
            .OrderByDescending(i => i.Date)
            .FirstOrDefaultAsync();
    }
}