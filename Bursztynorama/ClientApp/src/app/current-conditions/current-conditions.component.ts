import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {Observable, Subscription} from "rxjs";
import {WeatherDataResponse} from "../models/weather-data.response";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [
    NavigationComponent,
    CommonModule
  ],
  templateUrl: './current-conditions.component.html',
  styleUrl: './current-conditions.component.scss'
})
export class CurrentConditionsComponent implements OnInit, OnDestroy {
  @Input() public city$!: Observable<string>;
  @Input() public data$!: Observable<WeatherDataResponse[]>;
  @Input() public prediction$!: Observable<number>;

  public city: string = "";
  public data: WeatherDataResponse | null = null;

  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(this.city$.subscribe((data) => {
      this.city = data;
    }));

    this.subscription.add(this.data$.subscribe((data) => {
      this.data = data[data.length - 1];
    }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
