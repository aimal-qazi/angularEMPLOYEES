import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  constructor() {}

  employeeDetail = [
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

  index = 0;

  setIndex(i: any) {
    this.index = i;
  }

  getIndex() {
    return this.index;
  }

  getData() {
    return this.employeeDetail;
  }
}
