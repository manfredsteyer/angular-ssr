import { RouterModule } from '@angular/router';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { PassengerComponent } from './passenger.component';
import { PassengerResolver } from './passenger-search/passenger.resolver';
import { LeaveComponentGuard } from '../shared/deactivation/leave-component-guard';
var FLIGHT_BOOKING_ROUTES = [
    {
        path: 'passenger',
        component: PassengerComponent,
        // canActivateChild: [AuthChildGuard],
        children: [
            {
                path: '',
                redirectTo: 'passenger-search',
                pathMatch: 'full'
            },
            {
                path: 'passenger-search',
                component: PassengerSearchComponent
            },
            {
                path: 'passenger-edit/:id',
                component: PassengerEditComponent,
                // canActivate: [AuthGuard],
                canDeactivate: [LeaveComponentGuard],
                data: {
                    restricted: true // Custom Property
                },
                resolve: {
                    passenger: PassengerResolver
                }
            }
        ]
    }
];
export var PassengerBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
//# sourceMappingURL=passenger.routes.js.map