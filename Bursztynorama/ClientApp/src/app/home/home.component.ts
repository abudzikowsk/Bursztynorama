import { Component } from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {CurrentConditionsComponent} from "../current-conditions/current-conditions.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavigationComponent,
    CurrentConditionsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
