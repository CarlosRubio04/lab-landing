import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { GoogleAnalyticsEventsService } from './services/ga.service';

declare let ga: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    modal: boolean = true;
    closeResult: string;
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;


    constructor( private renderer: Renderer,
        private router: Router,
        private route:ActivatedRoute,
        @Inject(DOCUMENT)private document: any,
        private element: ElementRef,
        public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {

            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {
                    ga('set', 'page', event.urlAfterRedirects);
                    ga('send', 'pageview', {
                        'page': location.pathname + location.search + location.hash,
                        'location': location.href,
                    });
                }
            });
        }

    modalOpen(data) {
        return this.modal = data;
    }

    ngOnInit() {

        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });

        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });

        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }
    }
}
