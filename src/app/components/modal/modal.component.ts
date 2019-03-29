import {Component, ElementRef, OnInit, Output} from '@angular/core';

declare const $;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Output()
  onShow: eventEmitter<any> = new EventEmitter();

  @Output()
  onHide: eventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.querySelector('[modal-title]').classList.add('modal-title');
    nativeElement.querySelector('[modal-body]').classList.add('modal-body');
    nativeElement.querySelector('[modal-footer]').classList.add('modal-footer');

    $(this.divModal).on('shown.bs.modal', (e) => {
      this.onShow.emit(e);
    });
    $(this.divModal).on('hidden.bs.modal', (e) => {
      this.onHide.emit(e);
    });
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
