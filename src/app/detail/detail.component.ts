import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  dataDetail: any[] = [];
  index = 0;
  constructor(private data: EmpService) {}
  ngOnInit(): void {
    this.dataDetail = this.data.getData();
    this.index = this.data.getIndex();
  }
}
