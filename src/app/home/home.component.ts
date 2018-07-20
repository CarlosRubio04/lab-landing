import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
    trigger('OneLine', [
        state('show', style({
            display: 'block',
            opacity: 1,
        })),
        state('hide',   style({
            display: 'none',
            opacity: 0,
        })),
        transition('show => hide', animate('300ms ease-out')),
        transition('hide => show', animate('100ms ease-in'))
        ])
    ]
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    showOne = false;
    showTow = false;
    visbleOne = false;
    visbleTow = false;

    item = 7;

    constructor() { }


    get showFirst(){
        return this.showOne ? 'show' : 'hide'
    }
    get showSecond(){
        return this.showTow ? 'show' : 'hide'
    }
    toggleOne() {
        this.showTow = false;
        this.visbleTow = false;

        this.showOne = true;
        this.visbleOne = true;
    }

    toggleSecond() {
        this.showOne = false;
        this.visbleOne = false;

        this.showTow = true;
        this.visbleTow = true;
        
        
    }

    ngOnInit() {}
}
