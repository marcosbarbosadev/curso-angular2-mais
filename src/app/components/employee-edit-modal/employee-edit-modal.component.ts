import {Component, ElementRef, OnInit, Output, EventEmitter, Input, ViewChild} from '@angular/core';
import {Employee} from '../../services/employee.service';
import {ModalComponent} from '../modal/modal.component';
import {Modalable} from '../modal/modalable';

declare const $;

@Component({
  selector: 'app-employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent extends Modalable implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef) {
    super();
  }

  ngOnInit() {
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
    this.hide();
  }


}
