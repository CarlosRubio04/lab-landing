import { Component, OnInit, ElementRef } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Http, Headers, Response} from "@angular/http";

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
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    rForm: FormGroup;
    post:any;
    nombre:string = '';
    documento:number;
    titleAlert:string = 'Este campo es obligatorio';


    constructor(public el: ElementRef, 
        private fb: FormBuilder, 
        private http:Http){


        this.rForm = fb.group({
            'nombre': [null, Validators.compose([
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(140),
                //Validators.pattern('[\\w\\-\\s\\/]+')
                ])],
            'documento': [null, Validators.compose([
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(12),
                //Validators.pattern('[\\w\\-\\s\\/]+')
                ])]
        });
    }
    
    public sendData(lead){
        this.nombre = lead.nombre;

        console.log(this.nombre);
        // this.http.get(`http://javerianaeducacioncontinua.com/back/?campaignId=${this.campaignId}&partnerId=${this.partnerId}&type=${this.tipo}&nombre=${this.nombre}&telefono=${this.celular}&correo=${this.correo}&programa=${this.programa}`)
        // .subscribe((res: Response)=> {
        //     const backOffice = res;
        //     console.log(backOffice);
        //     if (backOffice.ok) {
        //         //this.router.navigate(['/gracias']);
        //         //window.location.href = "http://javerianaeducacioncontinua.com/gracias.html";
        //     }else {
        //         console.log(backOffice);
        //     }
        // })

    }
    
    ngOnInit() {}
}
