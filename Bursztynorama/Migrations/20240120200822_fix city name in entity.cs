using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bursztynorama.Migrations
{
    /// <inheritdoc />
    public partial class fixcitynameinentity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Cities",
                table: "WeatherHistoricalData",
                newName: "City");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "City",
                table: "WeatherHistoricalData",
                newName: "Cities");
        }
    }
}
