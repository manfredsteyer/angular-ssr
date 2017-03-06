import { Injectable, Inject } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { BASE_URL } from '../../app.tokens';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';

@Injectable()
export class FlightService {

    public flights: Array<Flight> = [];

    constructor(private http: Http,
                @Inject(BASE_URL) private baseUrl: string) {
    }

    delay() {
      const ONE_MINUTE = 1000 * 60;

      let firstFlight = this.flights[0];
      let oldDate: Date = new Date(firstFlight.date);

      oldDate.setTime(oldDate.getTime() + ONE_MINUTE * 15);
      firstFlight.date = oldDate.toISOString();

      /*
      let newDate: Date = new Date(oldDate.getTime() + 1000 * 60 * 15);
      let newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };
      let newFlights: Flight[] = [ newFlight, ...oldFlights.slice(1) ];

      this.flights = newFlights;
      */
    }

    findById(id: string): Observable<any> {

        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flight.json';
        let url = this.baseUrl + '/api/flight';

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let search = new URLSearchParams();
        search.set('id', id);

        return this
            .http
            .get(url, {headers, search})
            //.map(resp => resp.json());

    }

    find(from: string, to: string): void {

        let url = this.baseUrl + '/api/flight';
        // let url = this.baseUrl + '/api/secureflight';
        // let url = '/data/flights.json';

        let headers = new Headers();
        headers.set('Accept', 'text/json');

        let search = new URLSearchParams();
        search.set('from', from);
        search.set('to', to);

        this
            .http
            .get(url, {headers, search})
            //.map(resp => resp.json())
            .subscribe(
                (flights) => {
                    this.flights = flights.json();
                },
                (err) => {
                    console.warn(err);
                }
            );
    }
}
