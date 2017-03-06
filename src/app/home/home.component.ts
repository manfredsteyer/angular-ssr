import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnvService } from '../shared/env/env.service';

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    needLogin: boolean;
    env: string;

    constructor(
        private route: ActivatedRoute, 
        private envService: EnvService
        ) {
            this.env = envService.env;
    }


    ngOnInit() {
        this.route.params.subscribe((p) => {
            this.needLogin = (p['needLogin'] === 'true');
        });
    }
}
