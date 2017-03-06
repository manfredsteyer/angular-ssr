import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight-search/flight.service';
var FlightEditComponent = (function () {
    function FlightEditComponent(flightService, route) {
        this.flightService = flightService;
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null
        };
    }
    FlightEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
        this.route.data.subscribe(function (data) {
            var flight = data['flight'];
            if (flight) {
                _this.flight = flight;
            }
            else {
                _this.flight = {};
            }
        });
    };
    FlightEditComponent.prototype.save = function () {
        console.warn('save is not implemented');
    };
    FlightEditComponent.prototype.decide = function (decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    };
    FlightEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.exitWarning.show = true;
        return new Promise(function (resolve) {
            _this.exitWarning.resolve = resolve;
        });
    };
    FlightEditComponent.prototype.remove = function () {
        console.log('remove is not implemented');
    };
    return FlightEditComponent;
}());
FlightEditComponent = tslib_1.__decorate([
    Component({
        templateUrl: './flight-edit.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [FlightService, ActivatedRoute])
], FlightEditComponent);
export { FlightEditComponent };
//# sourceMappingURL=flight-edit.component.js.map