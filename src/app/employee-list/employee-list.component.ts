import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  emp: any = [];
  detail = false;
  constructor(private data: EmpService) {}
  ngOnInit(): void {
    this.emp = this.data.getData();
  }
  onClick(i: number) {
    this.data.setIndex(i);
    this.detail = !this.detail;
  }
}
