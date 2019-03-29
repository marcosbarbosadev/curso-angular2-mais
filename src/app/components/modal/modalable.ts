import {EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from './modal.component';

export class Modalable implements OnInit {

    @ViewChild(ModalComponent)
    modalComponent: ModalComponent;

    @Output()
    onShow: eventEmitter<any> = new EventEmitter();

    @Output()
    onHide: eventEmitter<any> = new EventEmitter();

    ngOnInit() {
        this.modalComponent.onShow.subscribe(event => {
            this.onShow.emit(event);
        });
        this.modalComponent.onHide.subscribe(event => {
            this.onHide.emit(event);
        });
    }

    show() {
        this.modalComponent.show();
    }

    hide() {
        this.modalComponent.hide();
    }

}
