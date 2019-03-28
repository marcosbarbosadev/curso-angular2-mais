import {Component, ElementRef, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Employee} from '../../services/employee.service';

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

  constructor(private element: ElementRef) { }

  ngOnInit() {
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
    return elementNative.firstChild.firstChild as HTMLElement;
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
    this.hide();
  }


}
