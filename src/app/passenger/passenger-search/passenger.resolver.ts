import { Passenger } from '../../entities/passenger';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PassengerService } from './passenger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PassengerResolver implements Resolve<Passenger> {
    constructor(private passengerService: PassengerService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        let id = route.params['id'];
        if (id == '0') {
          return Observable.of(null);
        }
        return this.passengerService.findById(id);
    }
}
