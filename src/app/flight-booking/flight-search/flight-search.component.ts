import { Component, AnimationTransitionEvent, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from './flight.service';
import { Flight } from '../../entities/flight';
import { EnvService } from '../../shared/env/env.service';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

    public from: string = 'Hamburg';
    public to: string = 'Graz';
    public date: string = (new Date()).toISOString();
    public selectedFlight: Flight;

    public env: string;

    constructor(
        private flightService: FlightService, 
        private route: ActivatedRoute,
        private envService: EnvService) {
        
        this.env = envService.env;
        
        /*
        route.queryParams.subscribe((p) => {
            // do sth with p
        });
        */
    }

    ngOnInit() {
        this.search();
    }

    delay() {
      this.flightService.delay();
    }

    public get flights() {
        return this.flightService.flights;
    }

    public select(f: Flight): void {
        this.selectedFlight = f;
    }

    public search(): void {

        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    }

    public disableButton(event: AnimationTransitionEvent): void {
        console.log(event);
    }
}
