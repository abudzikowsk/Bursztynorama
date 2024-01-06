import { Component } from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {CurrentConditionsComponent} from "../current-conditions/current-conditions.component";
import {WindSpeedComponent} from "../wind-speed/wind-speed.component";
import {AirTemperatureComponent} from "../air-temperature/air-temperature.component";
import {SeaTemperatureComponent} from "../sea-temperature/sea-temperature.component";
import {WindDirectionComponent} from "../wind-direction/wind-direction.component";
import {AirTemperatureGaugeComponent} from "../air-temperature-gauge/air-temperature-gauge.component";

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
