import { Injectable } from '@angular/core';

export interface Employee {
  name: string;
  salary: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = [
    {name: 'Marcos Barbosa', salary: 5500, bonus: 0},
    {name: 'Fulano Silva', salary: 2000, bonus: 0},
    {name: 'Beltrano Costa', salary: 998, bonus: 150}
  ];

  constructor() { }

  addEmployee(employee: Employee) {
    employee.bonus = employee.salary > 1000 ? 0 : employee.bonus;
    this.employees.push(employee);
  }
}
