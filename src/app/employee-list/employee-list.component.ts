import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  display = false;
  display0 = false;
  display1 = false;
  display2 = false;
  display3 = false;
  display4 = false;
  display5 = false;
  display6 = false;
  display7 = false;
  display8 = false;
  display9 = false;

  employee: any[] = [
    {
      id: 1,
      name: 'aimal',
    },
    {
      id: 2,
      name: 'kamil',
    },
    {
      id: 3,
      name: 'mohsin',
    },
    {
      id: 4,
      name: 'moez',
    },
    {
      id: 5,
      name: 'asad',
    },
    {
      id: 6,
      name: 'hamid',
    },
    {
      id: 7,
      name: 'huzaifa',
    },
    {
      id: 8,
      name: 'ghani',
    },
    {
      id: 9,
      name: 'athar',
    },
    {
      id: 10,
      name: 'hassan',
    },
  ];

  employeeDetail: any[] = [
    {
      id: 1,
      name: 'aimal',
      email: 'aimal@test.com',
      phone: '001329918230983',
      status: 'Available',
    },
    {
      id: 2,
      name: 'kamil',
      email: 'kamil@test.com',
      phone: '001329918230983',
      status: 'Not Available',
    },
    {
      id: 3,
      name: 'mohsin',
      email: 'mohsin@test.com',
      phone: '001329918230983',
      status: 'Available',
    },
    {
      id: 4,
      name: 'moez',
      email: 'moez@test.com',
      phone: '001329918230983',
      status: 'Not Available',
    },
    {
      id: 5,
      name: 'asad',
      email: 'asad@test.com',
      phone: '001329918230983',
      status: 'Available',
    },
    {
      id: 6,
      name: 'hamid',
      email: 'hamid@test.com',
      phone: '001329918230983',
      status: 'Not Available',
    },
    {
      id: 7,
      name: 'huzaifa',
      email: 'huzaifa@test.com',
      phone: '001329918230983',
      status: 'Available',
    },
    {
      id: 8,
      name: 'ghani',
      email: 'ghani@test.com',
      phone: '001329918230983',
      status: 'Not Available',
    },
    {
      id: 9,
      name: 'athar',
      email: 'athar@test.com',
      phone: '001329918230983',
      status: 'Not Available',
    },
    {
      id: 10,
      name: 'hassan',
      email: 'hassan@test.com',
      phone: '001329918230983',
      status: 'Available',
    },
  ];

  show0() {
    this.display = true;
    this.display0 = true;
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
    this.display6 = false;
    this.display7 = false;
    this.display8 = false;
    this.display9 = false;
  }
  show1() {
    this.display = true;
    this.display0 = false;
    this.display1 = true;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
    this.display6 = false;
    this.display7 = false;
    this.display8 = false;
    this.display9 = false;
  }
  show2() {
    this.display = true;
    this.display0 = false;
    this.display1 = false;
    this.display2 = true;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
    this.display6 = false;
    this.display7 = false;
    this.display8 = false;
    this.display9 = false;
  }
  show3() {
    this.display = true;
    this.display0 = false;
    this.display1 = false;
    this.display2 = false;
    this.display3 = true;
    this.display4 = false;
    this.display5 = false;
    this.display6 = false;
    this.display7 = false;
    this.display8 = false;
    this.display9 = false;
  }
  show4() {
    this.display = true;
    this.display0 = false;
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = true;
    this.display5 = false;
    this.display6 = false;
    this.display7 = false;
    this.display8 = false;
    this.display9 = false;
  }
  show5() {
    this.display = true;
    this.display0 = false;
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = true;
    this.display6 = false;
    this.display7 = false;
    this.display8 = false;
    this.display9 = false;
  }
  show6() {
    this.display = true;
    this.display0 = false;
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
    this.display6 = true;
    this.display7 = false;
    this.display8 = false;
    this.display9 = false;
  }
  show7() {
    this.display = true;
    this.display0 = false;
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
    this.display6 = false;
    this.display7 = true;
    this.display8 = false;
    this.display9 = false;
  }
  show8() {
    this.display = true;
    this.display0 = false;
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
    this.display6 = false;
    this.display7 = false;
    this.display8 = true;
    this.display9 = false;
  }
  show9() {
    this.display = true;
    this.display0 = false;
    this.display1 = false;
    this.display2 = false;
    this.display3 = false;
    this.display4 = false;
    this.display5 = false;
    this.display6 = false;
    this.display7 = false;
    this.display8 = false;
    this.display9 = true;
  }
}
