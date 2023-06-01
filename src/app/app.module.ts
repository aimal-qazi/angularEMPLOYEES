import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, DetailComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: EmployeeListComponent,
      },
      {
        path: 'detail',
        component: DetailComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
