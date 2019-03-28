import {Component, ElementRef, OnInit} from '@angular/core';

declare const $;

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
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
