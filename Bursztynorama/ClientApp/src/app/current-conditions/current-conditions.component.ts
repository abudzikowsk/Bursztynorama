import {Component, Input, OnInit} from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {Observable} from "rxjs";
import {WeatherDataResponse} from "../models/weather-data.response";

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './current-conditions.component.html',
  styleUrl: './current-conditions.component.scss'
})
export class CurrentConditionsComponent implements OnInit{
  @Input() public data!: Observable<string>;
  public city: string = "";

  ngOnInit(): void {
    this.data.subscribe((data) => {
      this.city = data;
    });
  }
}
