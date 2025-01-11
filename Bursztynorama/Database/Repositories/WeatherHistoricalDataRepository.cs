using Bursztynorama.Database.Entities;
using Bursztynorama.Database.Enums;
using Microsoft.EntityFrameworkCore;

namespace Bursztynorama.Database.Repositories;

public class WeatherHistoricalDataRepository
{
    private readonly ApplicationDbContext applicationDbContext;

    public WeatherHistoricalDataRepository(ApplicationDbContext applicationDbContext)
    {
        this.applicationDbContext = applicationDbContext; 
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
    
    public async Task<WeatherData?> GetLastData(Cities city)
    {
        return await applicationDbContext.WeatherHistoricalData
            .Where(i => i.City == city)
            .OrderByDescending(i => i.Date)
            .FirstOrDefaultAsync();
    }
}