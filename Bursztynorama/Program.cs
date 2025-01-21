using Bursztynorama.Database.Repositories;
using Bursztynorama.Filters;
using Bursztynorama.Jobs;
using Bursztynorama.Services;
using Hangfire;
using Hangfire.Mongo;
using Hangfire.Mongo.Migration.Strategies;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();
builder.Services.AddHttpClient();
builder.Services.AddScoped<WeatherService>();
builder.Services.AddScoped<PredictionService>();
builder.Services.AddScoped<WeatherHistoricalDataRepository>();
builder.Services.AddSingleton<CityMapper>();
builder.Services.AddHangfire(a => a.SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
    .UseSimpleAssemblyNameTypeSerializer()
    .UseRecommendedSerializerSettings()
    .UseMongoStorage(
        builder.Configuration.GetConnectionString("DefaultConnection"), 
        "Hangfire",
        new MongoStorageOptions
        {
            MigrationOptions = new MongoMigrationOptions
            {
                MigrationStrategy = new MigrateMongoMigrationStrategy(),
            },
            CheckQueuedJobsStrategy = CheckQueuedJobsStrategy.TailNotificationsCollection
        }));
builder.Services.AddHangfireServer();
builder.Services.AddScoped<GetWeatherDataJob>();
builder.Services.AddScoped<DeleteOldWeatherDataJob>();
builder.Services.AddSwaggerGen();
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/dist/browser";
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

if (app.Environment.IsDevelopment())
{
    app.UseHangfireDashboard("/hangfire", new DashboardOptions
    {
        Authorization = new[] { new HangfireAuthorizationFilter() }
    });

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseEndpoints(opts =>
{
    opts.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}");
});

app.UseStaticFiles();

if (!app.Environment.IsDevelopment())
{
    app.UseStaticFiles(new StaticFileOptions()
    {
        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "ClientApp/dist/browser")),
        RequestPath = new PathString(string.Empty)
    });
}

app.UseSpa(spa =>
{
    spa.Options.SourcePath = "ClientApp";
    if (app.Environment.IsDevelopment())
    {
        spa.UseProxyToSpaDevelopmentServer("http://localhost:4200");
    }
});

app.UseGetWeatherDataJob();
app.UseDeleteOldWeatherDataJob();

app.Run();

