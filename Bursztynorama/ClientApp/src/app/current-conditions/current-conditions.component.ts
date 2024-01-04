import { Component } from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";

@Component({
  selector: 'app-current-conditions',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './current-conditions.component.html',
  styleUrl: './current-conditions.component.scss'
})
export class CurrentConditionsComponent {

}
