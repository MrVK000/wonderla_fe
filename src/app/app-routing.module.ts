import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard-module', pathMatch: 'full' }, //default route
  // { path: 'home', component: HomeComponent },
  { path: 'dashboard-module', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
