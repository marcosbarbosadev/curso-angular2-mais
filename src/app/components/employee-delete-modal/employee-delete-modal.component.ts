import {Component, OnInit, Input, ElementRef, Output, EventEmitter} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {Modalable} from '../modal/modalable';

declare const $;

@Component({
  selector: 'app-employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent extends Modalable implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onDeleteModal: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, private employeeService: EmployeeService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  destroy() {
    this.employeeService.destroyEmployee(this.employee);
    this.onDeleteModal.emit(this.employee);
    this.hide();
  }

}
