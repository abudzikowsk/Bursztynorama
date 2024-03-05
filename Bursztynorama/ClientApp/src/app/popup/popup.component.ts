import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';

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
  @ViewChild('icon', { static: false }) icon!: ElementRef;

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.icon.nativeElement.contains(event.target)) {
      this.hidePopup();
    }
  }

  showPopup() {
    this.popup.nativeElement.classList.toggle("show");
  }

  hidePopup() {
    this.popup.nativeElement.classList.remove("show");
  }
}

