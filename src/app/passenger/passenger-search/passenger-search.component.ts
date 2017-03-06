import { Component, AnimationTransitionEvent } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from './passenger.service';
import { Passenger } from '../../entities/passenger';

@Component({
    selector: 'passenger-search',
    templateUrl: './passenger-search.component.html',
    styleUrls: ['./passenger-search.component.css']
})
export class PassengerSearchComponent {

    public name: string = "Doe";
    public selectedPassenger: Passenger;

    constructor(private passengerService: PassengerService, route: ActivatedRoute) {
        route.queryParams.subscribe((p) => {
            // console.debug('queryParams', p);
        });
    }

    // cmp.passengers
    public get passengers() {
        return this.passengerService.passengers;
    }

    public select(f: Passenger): void {
        this.selectedPassenger = f;
    }

    public search(): void {
        this.passengerService.find(this.name);
    }

    public disableButton(event: AnimationTransitionEvent): void {
        console.log(event);
    }
}
