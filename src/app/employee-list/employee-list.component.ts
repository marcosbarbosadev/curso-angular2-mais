import { Component, OnInit, ViewChild } from '@angular/core';
import employees from '../employees';
import {EmployeeService} from '../employee.service';
import {EmployeeNewComponent} from '../employee-new/employee-new.component';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent;

  constructor(public employeeService: EmployeeService) {
  }

  ngOnInit() {
  }

  getSalaryStyle(salary) {

    return {
        'salary-expensive': salary > 20000,
        'salary-cheap': salary < 1000
    };
  }

  openNewModal() {
    this.employeeNewModal.show();
  }

}
