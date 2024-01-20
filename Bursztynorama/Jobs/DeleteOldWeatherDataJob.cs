using Bursztynorama.Database.Repositories;

namespace Bursztynorama.Jobs;

public class DeleteOldWeatherDataJob
{
	private readonly WeatherHistoricalDataRepository weatherHistoricalDataRepository;

	public DeleteOldWeatherDataJob(WeatherHistoricalDataRepository weatherHistoricalDataRepository)
	{
		this.weatherHistoricalDataRepository = weatherHistoricalDataRepository;
	}

	public async Task Run()
	{
		await weatherHistoricalDataRepository.DeleteOldData();
	}
}