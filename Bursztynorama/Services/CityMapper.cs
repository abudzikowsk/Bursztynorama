using Bursztynorama.Database.Enums;

namespace Bursztynorama.Services;

public class CityMapper
{
    private readonly Dictionary<Cities, string> enumToString = new()
    {
        {Cities.Chlapowo, "Chłapowo"},
        { Cities.Dziwnow, "Dziwnów"},
        {Cities.Gdansk, "Gdańsk"},
        {Cities.Gdynia, "Gdynia"},
        {Cities.Grzybowo, "Grzybowo"},
        {Cities.Hel, "Hel"},
        {Cities.KamienPomorski, "Kamień Pomorski"},
        {Cities.KrynicaMorska, "Krynica Morska"},
        {Cities.Mielno, "Mielno"},
        {Cities.Mrzezyno, "Mrzezyno"},
        {Cities.NoweWarpno, "Nowe Warpno"},
        {Cities.Puck, "Puck"},
        {Cities.Sopot, "Sopot"},
        {Cities.Stepnica, "Stępnica"},
        {Cities.Tolkmicko, "Tolkmicko"},
        {Cities.Wolin, "Wolin"}
    };
    
    public string Map(Cities city)
    {
        return enumToString[city];
    }
}