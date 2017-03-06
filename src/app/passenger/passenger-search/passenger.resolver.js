import * as tslib_1 from "tslib";
import { Observable } from 'rxjs/Observable';
import { PassengerService } from './passenger.service';
import { Injectable } from '@angular/core';
var PassengerResolver = (function () {
    function PassengerResolver(passengerService) {
        this.passengerService = passengerService;
    }
    PassengerResolver.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        if (id == '0') {
            return Observable.of(null);
        }
        return this.passengerService.findById(id);
    };
    return PassengerResolver;
}());
PassengerResolver = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [PassengerService])
], PassengerResolver);
export { PassengerResolver };
//# sourceMappingURL=passenger.resolver.js.map