import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { WindDirectionModel } from '../models/wind-direction.model';
import {NgClass, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-wind-direction',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './wind-direction.component.html',
  styleUrl: './wind-direction.component.scss'
})
export class WindDirectionComponent implements AfterViewInit {
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

  data: WindDirectionModel[] = [
    {
      id: 1,
      direction: 'N',
      date: '01.01 12:00'
    },
    {
      id: 2,
      direction: 'NNE',
      date: '01.02 13:00'
    },
    {
      id: 3,
      direction: 'NE',
      date: '01.03 14:00'
    },
    {
      id: 4,
      direction: 'ENE',
      date: '01.04 15:00'
    },
    {
      id: 5,
      direction: 'E',
      date: '01.05 16:00'
    },
    {
      id: 6,
      direction: 'ESE',
      date: '01.06 17:00'
    },
    {
      id: 7,
      direction: 'SE',
      date: '01.07 18:00'
    },
    {
      id: 8,
      direction: 'SSE',
      date: '01.08 19:00'
    },
    {
      id: 9,
      direction: 'S',
      date: '01.09 20:00'
    },
    {
      id: 10,
      direction: 'SSW',
      date: '01.10 21:00'
    },
    {
      id: 11,
      direction: 'SW',
      date: '01.11 22:00'
    },
    {
      id: 12,
      direction: 'WSW',
      date: '01.12 23:00'
    },
    {
      id: 13,
      direction: 'W',
      date: '01.13 00:00'
    },
    {
      id: 14,
      direction: 'WNW',
      date: '01.14 01:00'
    },
    {
      id: 15,
      direction: 'NW',
      date: '01.15 02:00'
    },
    {
      id: 16,
      direction: 'NNW',
      date: '01.16 03:00'
    },
    {
      id: 17,
      direction: 'N',
      date: '01.17 04:00'
    },
  ];
}
