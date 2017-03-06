import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from './flight.service';
var FlightSearchComponent = (function () {
    function FlightSearchComponent(flightService, route) {
        this.flightService = flightService;
        this.from = 'Hamburg';
        this.to = 'Graz';
        this.date = (new Date()).toISOString();
        route.queryParams.subscribe(function (p) {
            // console.debug('queryParams', p);
        });
    }
    FlightSearchComponent.prototype.delay = function () {
        this.flightService.delay();
    };
    Object.defineProperty(FlightSearchComponent.prototype, "flights", {
        // cmp.flights
        get: function () {
            return this.flightService.flights;
        },
        enumerable: true,
        configurable: true
    });
    FlightSearchComponent.prototype.select = function (f) {
        this.selectedFlight = f;
    };
    FlightSearchComponent.prototype.search = function () {
        this.flightService
            .find(this.from, this.to);
        // .map(function(resp) { return resp.json() })
    };
    FlightSearchComponent.prototype.disableButton = function (event) {
        console.log(event);
    };
    return FlightSearchComponent;
}());
FlightSearchComponent = tslib_1.__decorate([
    Component({
        selector: 'flight-search',
        templateUrl: './flight-search.component.html',
        styleUrls: ['./flight-search.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [FlightService, ActivatedRoute])
], FlightSearchComponent);
export { FlightSearchComponent };
//# sourceMappingURL=flight-search.component.js.map