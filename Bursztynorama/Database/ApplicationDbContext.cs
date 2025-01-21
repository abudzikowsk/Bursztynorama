using Bursztynorama.Database.Entities;
using Microsoft.EntityFrameworkCore;
using MongoDB.Driver;
using MongoDB.EntityFrameworkCore.Extensions;

namespace Bursztynorama.Database;

public class ApplicationDbContext : DbContext
{
	public DbSet<WeatherData> WeatherHistoricalData { get; set; }
	
	public static ApplicationDbContext Create(IMongoDatabase database) =>
		new(new DbContextOptionsBuilder<ApplicationDbContext>()
			.UseMongoDB(database.Client, database.DatabaseNamespace.DatabaseName)
			.Options);
	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		base.OnModelCreating(modelBuilder);
		modelBuilder.Entity<WeatherData>().ToCollection("weatherHistoricalData");
	}
	
	public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
	{
	}
}