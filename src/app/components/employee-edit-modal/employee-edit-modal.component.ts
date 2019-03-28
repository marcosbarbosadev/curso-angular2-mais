import {Component, ElementRef, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import {Employee} from '../../services/employee.service';
import {ModalComponent} from '../modal/modal.component';

declare const $;

@Component({
  selector: 'app-employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  @ViewChild(ModalComponent)
  modalComponent: ModalComponent;

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  show() {
      this.modalComponent.show();
  }

  hide() {
    this.modalComponent.hide();
  }


  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
    this.hide();
  }


}
