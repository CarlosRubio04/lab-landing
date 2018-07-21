import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';
import { routeOne } from '../route-one/route-one.component';
import { routeTow } from '../route-tow/route-tow.component';
import { routeThree } from '../route-three/route-three.component';
import { routeFour } from '../route-four/route-four.component';


import { ComponentsModule } from '../components/components.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        NgbModule,
        BrowserAnimationsModule,
    ],
    declarations: [ HomeComponent, routeOne, routeTow, routeThree, routeFour ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
