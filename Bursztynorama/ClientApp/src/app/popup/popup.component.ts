import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() public text = '';
  @ViewChild('popup', { static: false }) popup!: ElementRef;

  showPopup() {
    this.popup.nativeElement.classList.toggle("show");
  }
}

