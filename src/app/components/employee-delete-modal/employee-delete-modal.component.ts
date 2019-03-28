import {Component, OnInit, Input, ElementRef, Output, EventEmitter} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';

declare const $;

@Component({
  selector: 'app-employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onDeleteModal: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  destroy() {
    this.employeeService.destroyEmployee(this.employee);
    this.onDeleteModal.emit(this.employee);
    this.hide();
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  hide() {
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  private getDivModal(): HTMLElement {
    const elementNative: HTMLElement = this.element.nativeElement;
    return elementNative.firstChild as HTMLElement;
  }


}
