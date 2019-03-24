import { Component, OnInit } from '@angular/core';
import employees from '../employees';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = 'Marcos Barbosa';
  salary = 0;
  bonus = 0;
  emplyees = employees;

  constructor() { }

  ngOnInit() {
  }

  addEmployee() {
    this.emplyees.push({name: this.name, salary: this.salary, bonus: this.bonus});
  }

}
