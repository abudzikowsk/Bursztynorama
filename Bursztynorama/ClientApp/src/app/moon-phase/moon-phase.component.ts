import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {WeatherDataResponse} from "../models/weather-data.response";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-moon-phase',
  standalone: true,
  imports: [
    PopupComponent
  ],
  templateUrl: './moon-phase.component.html',
  styleUrl: './moon-phase.component.scss'
})
export class MoonPhaseComponent implements OnInit {
  @Input() public data!: Observable<number>;
  moonPhase = 1;

  ngOnInit(): void {
    this.data.subscribe((data) => {
      this.moonPhase = data;
    });
  }

  getMoonPhaseFileName(moonPhase: number): string {
    switch (moonPhase) {
      case 1:
        return `assets/moon-phases/moon1.png`;
      case 2:
        return `assets/moon-phases/moon2.png`;
      case 3:
        return `assets/moon-phases/moon3.png`;
      case 4:
        return `assets/moon-phases/moon4.png`;
      case 5:
        return `assets/moon-phases/moon5.png`;
      case 6:
        return `assets/moon-phases/moon6.png`;
      case 7:
        return `assets/moon-phases/moon7.png`;
      case 8:
        return `assets/moon-phases/moon8.png`;
      case 9:
        return `assets/moon-phases/moon9.png`;
      case 10:
        return `assets/moon-phases/moon10.png`;
      case 11:
        return `assets/moon-phases/moon11.png`;
      case 12:
        return `assets/moon-phases/moon12.png`;
      case 13:
        return `assets/moon-phases/moon13.png`;
      case 14:
        return `assets/moon-phases/moon14.png`;
      case 15:
        return `assets/moon-phases/moon15.png`;
      case 16:
        return `assets/moon-phases/moon16.png`;
      case 17:
        return `assets/moon-phases/moon17.png`;
      case 18:
        return `assets/moon-phases/moon18.png`;
      case 19:
        return `assets/moon-phases/moon19.png`;
      case 20:
        return `assets/moon-phases/moon20.png`;
      case 21:
        return `assets/moon-phases/moon21.png`;
      case 22:
        return `assets/moon-phases/moon22.png`;
      case 23:
        return `assets/moon-phases/moon23.png`;
      case 24:
        return `assets/moon-phases/moon24.png`;
      case 25:
        return `assets/moon-phases/moon25.png`;
      case 26:
        return `assets/moon-phases/moon26.png`;
      case 27:
        return `assets/moon-phases/moon27.png`;
      case 28:
        return `assets/moon-phases/moon28.png`;
      case 29:
        return `assets/moon-phases/moon29.png`;
      case 30:
        return `assets/moon-phases/moon30.png`;
      default:
        throw new Error(`Invalid moon phase: ${moonPhase}`);
    }
  }
}
