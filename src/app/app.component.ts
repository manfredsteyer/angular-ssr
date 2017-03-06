import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


@Component({
    selector: 'flight-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public info: string = 'Welt';
    public showWaitInfo: boolean = true;

    constructor(
        private router: Router) {
    }

    ngOnInit() {
        this.initNgTranslate();
        this.initRouterEvents();
        this.initAuth();
    }

    private initNgTranslate() {
        /*
        this.translate.addLangs(['en', 'de']);
        this.translate.setDefaultLang('de');
        this.translate.use('de');
        */
    }

    private initRouterEvents() {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showWaitInfo = true;
                }
                if (event instanceof NavigationEnd
                    || event instanceof NavigationCancel
                    || event instanceof NavigationError) {
                    this.showWaitInfo = false;
                }
            }
        );
    }

    private initAuth() {
    }

}



