import {Component, inject, OnInit, signal, Signal, WritableSignal} from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {CurrentConditionsComponent} from "../current-conditions/current-conditions.component";
import {WindSpeedComponent} from "../wind-speed/wind-speed.component";
import {AirTemperatureComponent} from "../air-temperature/air-temperature.component";
import {SeaTemperatureComponent} from "../sea-temperature/sea-temperature.component";
import {WindDirectionComponent} from "../wind-direction/wind-direction.component";
import {AirTemperatureGaugeComponent} from "../air-temperature-gauge/air-temperature-gauge.component";
import {WindSpeedGaugeComponent} from "../wind-speed-gauge/wind-speed-gauge.component";
import {MoonPhaseComponent} from "../moon-phase/moon-phase.component";
import {MapComponent} from "../map/map.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {WeatherDataResponse} from "../models/weather-data.response";
import {Subject} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavigationComponent,
    CurrentConditionsComponent,
    WindSpeedComponent,
    AirTemperatureComponent,
    SeaTemperatureComponent,
    WindDirectionComponent,
    AirTemperatureGaugeComponent,
    WindSpeedGaugeComponent,
    MoonPhaseComponent,
    MapComponent,
    HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public data: Subject<WeatherDataResponse[]> = new Subject<WeatherDataResponse[]>();
  public moonPhase: Subject<number> = new Subject<number>();
  public city: Subject<string> = new Subject<string>();

  private readonly httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient.get<WeatherDataResponse[]>('api/WeatherData/3')
      .subscribe((data) => {
        this.data.next(data);
        const latestData = data[data.length - 1];
        this.moonPhase.next(latestData.moonPhase);
        this.city.next(latestData.city);
      });
  }

}
