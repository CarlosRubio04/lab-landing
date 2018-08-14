import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CalendarModule } from 'angular-calendar';
//import { DemoUtilsModule } from './demo-utils/module';

import { HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
//import { CalendarComponent } from './calendar/calendar.component';

import { HomeModule } from './home/home.module';

import { GoogleAnalyticsEventsService } from './services/ga.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    //CalendarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
    CommonModule,
    CalendarModule.forRoot(),
    //DemoUtilsModule
  ],
  providers: [GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
