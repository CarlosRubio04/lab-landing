import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
    trigger('hoverState', [
        state('show', style({
            opacity: 1,
        })),
        state('hide',   style({
            opacity: 0
        })),
        transition('show => hide', animate('600ms ease-out')),
        transition('hide => show', animate('1000ms ease-in'))
        ])
    ]
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    show = false;

    constructor() { }

    get stateName() {
        return this.show ? 'show' : 'hide'
    }


    mouseenter(e) {
        console.log(e.type);
        console.log(e.toElement.nextElementSibling)
        this.show = true;
        
    }
    mouseleave(e) {
        console.log(e.type);
        console.log(e);
        this.show = false;
    }

    ngOnInit() {}
}
