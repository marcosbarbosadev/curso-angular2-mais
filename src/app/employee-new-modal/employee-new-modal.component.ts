import {Component, ElementRef, OnInit} from '@angular/core';
import {Employee} from '../employee.service';

declare const $;

@Component({
  selector: 'app-employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  };

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  show() {
      const divModal = this.getDivModal();
      $(divModal).modal('show');
  }

  private getDivModal(): HTMLElement {
    const elementNative: HTMLElement = this.element.nativeElement;
    return elementNative.firstChild as HTMLElement;
  }

}
