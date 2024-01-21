import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import { WindDirectionModel } from '../models/wind-direction.model';
import {AsyncPipe, NgClass, NgOptimizedImage} from "@angular/common";
import {Observable} from "rxjs";
import {WeatherDataResponse} from "../models/weather-data.response";

@Component({
  selector: 'app-wind-direction',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './wind-direction.component.html',
  styleUrl: './wind-direction.component.scss'
})
export class WindDirectionComponent implements AfterViewInit {
  @Input() public data!: Observable<WeatherDataResponse[]>;
  @ViewChild('windDirectionContainer') windDirectionContainer!: ElementRef;
  isLeftArrowGrayedOut = false;
  isRightArrowGrayedOut = true;

  ngAfterViewInit(): void {
      this.windDirectionContainer.nativeElement.scrollLeft = this.windDirectionContainer.nativeElement.scrollWidth;
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
