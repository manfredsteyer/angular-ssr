import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Passenger } from '../../entities/passenger';
import { PassengerService } from '../passenger-search/passenger.service';

@Component({
    templateUrl: './passenger-edit.component.html'
})
export class PassengerEditComponent implements OnInit {

    id: string;
    passenger: Passenger;

    exitWarning = {
        show: false,
        resolve: null
    };

    message: string;

    constructor(private passengerService: PassengerService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(p => {
            this.id = p['id'];
        });

        this.route.data.subscribe(data => {
            let passenger = data['passenger'];
            if (passenger) {
              this.passenger = passenger;
            }
            else {
              this.passenger = <any>{};
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
