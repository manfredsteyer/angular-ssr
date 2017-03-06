import * as tslib_1 from "tslib";
import { Observable } from 'rxjs/Observable';
import { FlightService } from './flight.service';
import { Injectable } from '@angular/core';
var FlightResolver = (function () {
    function FlightResolver(flightService) {
        this.flightService = flightService;
    }
    FlightResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return Observable.of(null);
        }
        return this.flightService.findById(id);
    };
    return FlightResolver;
}());
FlightResolver = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [FlightService])
], FlightResolver);
export { FlightResolver };
//# sourceMappingURL=flight.resolver.js.map