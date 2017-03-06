import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, ElementRef, NgZone } from '@angular/core';
var FlightCardComponent = (function () {
    function FlightCardComponent(zone, element) {
        this.zone = zone;
        this.element = element;
        this.selectedItemChange = new EventEmitter();
    }
    FlightCardComponent.prototype.select = function () {
        this.selectedItemChange.emit(this.item);
    };
    FlightCardComponent.prototype.check = function () {
        this.blink();
        return null;
    };
    FlightCardComponent.prototype.blink = function () {
        // Vorsicht: Direkter DOM-Zugriff !!!
        var _this = this;
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                _this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
            }, 1000);
        });
    };
    return FlightCardComponent;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FlightCardComponent.prototype, "item", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedItem", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], FlightCardComponent.prototype, "selectedItemChange", void 0);
FlightCardComponent = tslib_1.__decorate([
    Component({
        selector: 'flight-card',
        templateUrl: './flight-card.component.html',
    }),
    tslib_1.__metadata("design:paramtypes", [NgZone, ElementRef])
], FlightCardComponent);
export { FlightCardComponent };
//# sourceMappingURL=flight.card.component.js.map