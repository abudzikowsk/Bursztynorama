using Hangfire;

namespace Bursztynorama.Jobs;

public static class StartupConfiguration 
{
	public static void UseGetWeatherDataJob(this WebApplication webApplication)
	{
		//command will run at the 0th minute of every hour, every day, every month, and every day of the week.
		RecurringJob.AddOrUpdate<GetWeatherDataJob>("getWeatherDataJob", s => s.Run(), "0 * * * *");
	}

	public static void UseDeleteOldWeatherDataJob(this WebApplication webApplication)
	{
		RecurringJob.AddOrUpdate<DeleteOldWeatherDataJob>("deleteOldDataJob", d => d.Run(), Cron.Daily);
	}

}