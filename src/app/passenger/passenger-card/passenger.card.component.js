import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Passenger } from '../../entities/passenger';
var PassengerCardComponent = (function () {
    function PassengerCardComponent() {
        this.selectedItemChange = new EventEmitter();
    }
    PassengerCardComponent.prototype.isSelected = function () {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    };
    PassengerCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    return PassengerCardComponent;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Passenger)
], PassengerCardComponent.prototype, "item", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Passenger)
], PassengerCardComponent.prototype, "selectedItem", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], PassengerCardComponent.prototype, "selectedItemChange", void 0);
PassengerCardComponent = tslib_1.__decorate([
    Component({
        selector: 'passenger-card',
        templateUrl: './passenger-card.component.html'
    })
], PassengerCardComponent);
export { PassengerCardComponent };
//# sourceMappingURL=passenger.card.component.js.map