import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
var DateComponent = (function () {
    function DateComponent() {
        this.dateChange = new EventEmitter();
        console.debug('date in constructor', this.date);
    }
    DateComponent.prototype.ngOnInit = function () {
        console.debug('date in ngOnInit', this.date);
    };
    DateComponent.prototype.ngOnChanges = function (change) {
        console.debug('date in ngOnChanges', this.date);
        // if(change.date) { ... }
        var date = new Date(this.date);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    };
    DateComponent.prototype.apply = function () {
        var date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.dateChange.next(date.toISOString());
    };
    return DateComponent;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], DateComponent.prototype, "date", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], DateComponent.prototype, "dateChange", void 0);
DateComponent = tslib_1.__decorate([
    Component({
        selector: 'flight-date-component',
        templateUrl: './date.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DateComponent);
export { DateComponent };
//# sourceMappingURL=date.component.js.map