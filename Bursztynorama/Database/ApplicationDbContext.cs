using Bursztynorama.Database.Entities;
using Microsoft.EntityFrameworkCore;

namespace Bursztynorama.Database;

public class ApplicationDbContext : DbContext
{
	public DbSet<WeatherData> WeatherHistoricalData { get; set; }

	public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
	{
	}
}