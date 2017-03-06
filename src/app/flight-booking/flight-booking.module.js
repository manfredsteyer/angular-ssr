import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight.card.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightBookingRouterModule } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightService } from './flight-search/flight.service';
import { FlightResolver } from './flight-search/flight.resolver';
var FlightBookingModule = (function () {
    function FlightBookingModule() {
    }
    return FlightBookingModule;
}());
FlightBookingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule,
            FlightBookingRouterModule
        ],
        declarations: [
            FlightSearchComponent,
            FlightCardComponent,
            FlightEditComponent,
            FlightBookingComponent,
        ],
        providers: [
            FlightService,
            FlightResolver
        ],
        exports: []
    })
], FlightBookingModule);
export { FlightBookingModule };
//# sourceMappingURL=flight-booking.module.js.map