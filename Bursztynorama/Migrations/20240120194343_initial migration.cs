using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bursztynorama.Migrations
{
    /// <inheritdoc />
    public partial class initialmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WeatherHistoricalData",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Cities = table.Column<int>(type: "INTEGER", nullable: false),
                    Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    AirTemperature = table.Column<double>(type: "REAL", nullable: false),
                    WindSpeed = table.Column<double>(type: "REAL", nullable: false),
                    WindDirection = table.Column<string>(type: "TEXT", nullable: false),
                    MoonPhase = table.Column<int>(type: "INTEGER", nullable: true),
                    SeaTemperature = table.Column<double>(type: "REAL", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WeatherHistoricalData", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WeatherHistoricalData");
        }
    }
}
