import { RouterModule } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightResolver } from './flight-search/flight.resolver';
import { LeaveComponentGuard } from '../shared/deactivation/leave-component-guard';
var FLIGHT_BOOKING_ROUTES = [
    {
        path: '',
        component: FlightBookingComponent,
        // canActivateChild: [AuthChildGuard],
        children: [
            {
                path: '',
                redirectTo: 'flight-search',
                pathMatch: 'full'
            },
            {
                path: 'flight-search',
                component: FlightSearchComponent
            },
            {
                path: 'flight-edit/:id',
                component: FlightEditComponent,
                // canActivate: [AuthGuard],
                canDeactivate: [LeaveComponentGuard],
                data: {
                    restricted: true // Custom Property
                },
                resolve: {
                    flight: FlightResolver
                }
            }
        ]
    }
];
export var FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
//# sourceMappingURL=flight-booking.routes.js.map