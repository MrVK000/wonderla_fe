import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { ResortComponent } from './component/resort/resort.component';
import { ParkTicketComponent } from './component/park-ticket/park-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   component: HomeComponent
      // },
      // {
      //   path: 'bengaluru-resort',
      //   component: ResortComponent
      // },
      {
        path: '',
        component: HomeComponent
      },
    ]
  },
  {
    path: 'park-ticket',
    component: ParkTicketComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
