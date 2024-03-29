﻿// <auto-generated />
using System;
using Bursztynorama.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Bursztynorama.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.1");

            modelBuilder.Entity("Bursztynorama.Database.Entities.WeatherData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("AirTemperature")
                        .HasColumnType("REAL");

                    b.Property<int>("City")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<int?>("MoonPhase")
                        .HasColumnType("INTEGER");

                    b.Property<double?>("SeaTemperature")
                        .HasColumnType("REAL");

                    b.Property<string>("WindDirection")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<double>("WindSpeed")
                        .HasColumnType("REAL");

                    b.HasKey("Id");

                    b.ToTable("WeatherHistoricalData");
                });
#pragma warning restore 612, 618
        }
    }
}
