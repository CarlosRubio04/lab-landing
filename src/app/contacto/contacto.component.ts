import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
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
    telefono:number;
    email:string;
    ruta:number;
    institucion:string;
    titleAlert:string = 'Este campo es obligatorio';

    campaignId:number = 19;
    partnerId:number = 1;
    tipo:string = "TEST";



    constructor(public el: ElementRef, 
        private fb: FormBuilder, 
        private http:Http,
        private router:Router, 
        private route: ActivatedRoute){

        this.partnerId = this.route.snapshot.queryParams['partnerId'];
        this.tipo = this.route.snapshot.queryParams['type'];

        this.rForm = fb.group({
            'nombre': [null, Validators.compose([
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(140),
                ])],
            'documento': [null, Validators.compose([
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(12),
                ])],
            'telefono': [null, Validators.compose([
                Validators.required, 
                Validators.minLength(7), 
                Validators.maxLength(12),
                ])],
            'email': [null, Validators.compose([
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
                ])],
            'ruta': [null],
            'institucion': [null]
        });
    }
    
    public sendData(lead){
        this.nombre = lead.nombre;

        console.log(this.nombre);
        this.http.get(`http://dxc.charlsdesigner.com/back/?campaignId=${this.campaignId}&partnerId=${this.partnerId}&type=${this.tipo}&nombre=${this.nombre}&documento=${this.documento}&telefono=${this.telefono}&email=${this.email}&ruta=${this.ruta}&institucion=${this.institucion}`)
        .subscribe((res: Response)=> {
            const backOffice = res;
            console.log(backOffice);
            if (backOffice.ok) {
                //this.router.navigate(['/gracias']);
            }else {
                console.log(backOffice);
            }
        })

    }
    
    ngOnInit() {}
}
