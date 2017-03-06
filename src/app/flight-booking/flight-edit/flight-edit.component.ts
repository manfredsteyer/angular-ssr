import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flight } from '../../entities/flight';
import { FlightService } from '../flight-search/flight.service';

@Component({
    templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {

    id: string;
    flight: Flight;

    exitWarning = {
        show: false,
        resolve: null
    };

    message: string;

    constructor(private flightService: FlightService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.id = p['id'];
        });

        this.route.data.subscribe(data => {
            let flight = data['flight'];
            if (flight) {
              this.flight = flight;
            }
            else {
              this.flight = <any>{};
            }
        });
    }

    save() {
        console.warn('save is not implemented');
    }

    decide(decision: boolean) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    }

    canDeactivate() {
        this.exitWarning.show = true;
        return new Promise((resolve) => {
            this.exitWarning.resolve = resolve;
        });
    }

    remove() {
        console.log('remove is not implemented');
    }
}
