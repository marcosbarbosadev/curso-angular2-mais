import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { EmployeeNewComponent } from '../employee-new/employee-new.component';
import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from '../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent)
  employeeEditModal: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModal: EmployeeDeleteModalComponent;

  employeeToDelete: Employee;
  employeeToEdit: Employee;
  employee: Employee;
  showMessageSuccess = false;
  acao = '';

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

  openNewModal(employee: Employee) {
    this.employeeToEdit = employee;
    this.employeeNewModal.show();
  }

  openEditModal(employee: Employee) {
    this.employee = employee;
    this.employeeEditModal.show();
  }

  openDestroyModal(employee: Employee) {
    this.employee = employee;
    this.employeeDeleteModal.show();
  }

  onNewEmployee() {
    this.acao = 'cadastrado';
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee) {
    this.acao = 'alterado';
    this.showMessageSuccess = true;
  }

  onDestroyEmployee(employee: Employee) {
    this.acao = 'removido';
    this.showMessageSuccess = true;
  }
}
