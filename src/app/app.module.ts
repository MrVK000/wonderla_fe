import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ResortComponent } from './component/resort/resort.component';
import { ParkTicketComponent } from './component/park-ticket/park-ticket.component';
import { LocationComponent } from './component/location/location.component';
import { DateComponent } from './component/date/date.component';
import { AddonsComponent } from './component/addons/addons.component';
import { RulesComponent } from './component/rules/rules.component';
import { BillingComponent } from './component/billing/billing.component'; // Import this
import { ticketsComponent } from './component/ticktes/tickets.component';
import { PaymentSuccessfulComponent } from './component/payment-successful/payment-successful.component';
import { ParkDatePipe } from './pipe/park-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ResortComponent,
    ParkTicketComponent,
    LocationComponent,
    DateComponent,
    ticketsComponent,
    AddonsComponent,
    RulesComponent,
    BillingComponent,
    PaymentSuccessfulComponent,
    ParkDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
