import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { PassengerCardComponent } from './passenger-card/passenger.card.component';
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PassengerBookingRouterModule } from './passenger.routes';
import { PassengerComponent } from './passenger.component';
import { PassengerService } from './passenger-search/passenger.service';
import { PassengerResolver } from './passenger-search/passenger.resolver';
var PassengerModule = (function () {
    function PassengerModule() {
    }
    return PassengerModule;
}());
PassengerModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule,
            PassengerBookingRouterModule
        ],
        declarations: [
            PassengerSearchComponent,
            PassengerCardComponent,
            PassengerEditComponent,
            PassengerComponent,
        ],
        providers: [
            PassengerService,
            PassengerResolver
        ],
        exports: []
    })
], PassengerModule);
export { PassengerModule };
//# sourceMappingURL=passenger.module.js.map