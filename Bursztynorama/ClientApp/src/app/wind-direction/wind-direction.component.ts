import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AsyncPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {Observable} from "rxjs";
import {WeatherDataResponse} from "../models/weather-data.response";
import {PopupComponent} from "../popup/popup.component";

@Component({
  selector: 'app-wind-direction',
  standalone: true,
    imports: [
        NgOptimizedImage,
        NgClass,
        AsyncPipe,
        PopupComponent
    ],
  templateUrl: './wind-direction.component.html',
  styleUrl: './wind-direction.component.scss'
})
export class WindDirectionComponent implements OnInit {
  @Input() public data!: Observable<WeatherDataResponse[]>;
  @ViewChild('windDirectionContainer') windDirectionContainer!: ElementRef;
  isLeftArrowGrayedOut = false;
  isRightArrowGrayedOut = true;
  public currentWindDirection: string = "";

  ngOnInit(): void {
    this.data.subscribe((data) => {
      this.currentWindDirection = data[data.length - 1].windDirection;

      setTimeout(() => {
        this.windDirectionContainer.nativeElement.scrollLeft = this.windDirectionContainer.nativeElement.scrollWidth;
      },0);
    });
  }

  scrollLeft() {
    this.windDirectionContainer.nativeElement.scrollLeft -= 200;
  }

  scrollRight() {
    this.windDirectionContainer.nativeElement.scrollLeft += 200;
  }

  checkScrollEnd(event: Event) {
    const target = event.target as HTMLElement;
    if (target.scrollLeft + target.offsetWidth >= target.scrollWidth) {
      this.isRightArrowGrayedOut = true;
    } else if(target.scrollLeft === 0) {
      this.isLeftArrowGrayedOut = true;
    } else {
      this.isLeftArrowGrayedOut = false;
      this.isRightArrowGrayedOut = false;
    }
  }
}
