import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { Observable } from 'rxjs/Observable';
import { Passenger } from '../../entities/passenger';

@Injectable()
export class PassengerService {

    public passengers: Array<Passenger> = [];

    constructor(private http: Http,
                @Inject(BASE_URL) private baseUrl: string) {
    }

    findById(id: string): Observable<any> {

        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passenger.json';
        let url = this.baseUrl + '/api/passenger';

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let search = new URLSearchParams();
        search.set('id', id);

        return this
            .http
            .get(url, {headers, search})
            //.map(resp => resp.json());

    }

    find(name: string): void {

        let url = this.baseUrl + '/api/passenger';
        // let url = this.baseUrl + '/api/securepassenger';
        // let url = '/data/passengers.json';

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let search = new URLSearchParams();
        search.set('name', name);

        this
            .http
            .get(url, {headers, search})
            //.map(resp => resp.json())
            .subscribe(
                (passengers) => {
                    this.passengers = passengers.json();
                },
                (err) => {
                    console.warn(err);
                }
            );
    }
}
