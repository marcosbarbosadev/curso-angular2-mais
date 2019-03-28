import {Component, ElementRef, OnInit} from '@angular/core';

declare const $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  show() {
    $(this.divModal).modal('show');
  }

  hide() {
    $(this.divModal).modal('hide');
  }

  private get divModal(): HTMLElement {
    const elementNative: HTMLElement = this.element.nativeElement;
    console.log(elementNative);
    return elementNative.firstChild as HTMLElement;
  }

}
