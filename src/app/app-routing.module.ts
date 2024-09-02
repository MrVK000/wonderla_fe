import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { ResortComponent } from './component/resort/resort.component';
import { ParkTicketComponent } from './component/park-ticket/park-ticket.component';
import { LocationComponent } from './component/location/location.component';
import { DateComponent } from './component/date/date.component';
import { AddonsComponent } from './component/addons/addons.component';
import { RulesComponent } from './component/rules/rules.component';
import { BillingComponent } from './component/billing/billing.component';

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
    component: ParkTicketComponent,
    // children: [
    //   {
    //     path: '',
    //     component: LocationComponent
    //   },
    //   {
    //     path: 'date',
    //     component: DateComponent
    //   },
    //   {
    //     path: 'tickets',
    //     component: ticketsComponent
    //   },
    //   {
    //     path: 'addons',
    //     component: AddonsComponent
    //   },
    //   {
    //     path: 'rules',
    //     component: RulesComponent
    //   },
    //   {
    //     path: 'billing',
    //     component: BillingComponent
    //   },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
