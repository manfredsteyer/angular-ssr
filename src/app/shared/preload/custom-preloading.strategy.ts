import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export class CustomPreloadingStrategy implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        // return Observable.of(true).delay(7000).flatMap(_ => fn());

        if (true) {
            return fn();
        }

    }

}
