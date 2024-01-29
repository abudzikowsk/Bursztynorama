using Hangfire;

namespace Bursztynorama.Jobs;

public static class StartupConfiguration 
{
	public static void UseGetWeatherDataJob(this WebApplication webApplication)
	{
		var recurringJobManager =  webApplication.Services.GetRequiredService<IRecurringJobManager>();
		//command will run at the 0th minute of every hour, every day, every month, and every day of the week.
		recurringJobManager.AddOrUpdate<GetWeatherDataJob>("getWeatherDataJob", s => s.Run(), "0 * * * *");
	}

	public static void UseDeleteOldWeatherDataJob(this WebApplication webApplication)
	{

		var recurringJobManager =  webApplication.Services.GetRequiredService<IRecurringJobManager>();
		recurringJobManager.AddOrUpdate<DeleteOldWeatherDataJob>("deleteOldDataJob", d => d.Run(), Cron.Daily);
	}

}