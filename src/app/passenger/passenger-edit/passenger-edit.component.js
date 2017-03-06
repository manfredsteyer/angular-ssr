import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from '../passenger-search/passenger.service';
var PassengerEditComponent = (function () {
    function PassengerEditComponent(passengerService, route) {
        this.passengerService = passengerService;
        this.route = route;
        this.exitWarning = {
            show: false,
            resolve: null
        };
    }
    PassengerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.id = p['id'];
        });
        this.route.data.subscribe(function (data) {
            var passenger = data['passenger'];
            if (passenger) {
                _this.passenger = passenger;
            }
            else {
                _this.passenger = {};
            }
        });
    };
    PassengerEditComponent.prototype.save = function () {
        console.warn('save is not implemented');
    };
    PassengerEditComponent.prototype.decide = function (decision) {
        this.exitWarning.show = false;
        this.exitWarning.resolve(decision);
    };
    PassengerEditComponent.prototype.canDeactivate = function () {
        var _this = this;
        this.exitWarning.show = true;
        return new Promise(function (resolve) {
            _this.exitWarning.resolve = resolve;
        });
    };
    PassengerEditComponent.prototype.remove = function () {
        console.log('remove is not implemented');
    };
    return PassengerEditComponent;
}());
PassengerEditComponent = tslib_1.__decorate([
    Component({
        templateUrl: './passenger-edit.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [PassengerService, ActivatedRoute])
], PassengerEditComponent);
export { PassengerEditComponent };
//# sourceMappingURL=passenger-edit.component.js.map