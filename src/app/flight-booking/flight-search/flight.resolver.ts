import { Flight } from '../../entities/flight';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

@Injectable()
export class FlightResolver implements Resolve<Flight> {
    constructor(private flightService: FlightService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        let id = route.params['id'];
        if (id == '0') {
          return Observable.of(null);
        }
        return this.flightService.findById(id);
    }
}
