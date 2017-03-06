import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter, Input, HostListener, ElementRef, Renderer } from '@angular/core';
var FlightClickWithWarningDirective = (function () {
    function FlightClickWithWarningDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.warning = 'Are you sure?';
        this.flightClickWithWarning = new EventEmitter();
    }
    FlightClickWithWarningDirective.prototype.ngOnInit = function () {
        // Warnung: Direkter DOM-Zugriff!
        // this.elementRef.nativeElement.setAttribute('class', 'btn btn-danger');
        // Indirekter DOM-Zugriff über Renderer
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'class', 'btn btn-danger');
    };
    FlightClickWithWarningDirective.prototype.handleClick = function ($event) {
        console.log('handleClick', $event);
        if (confirm(this.warning)) {
            this.flightClickWithWarning.emit();
        }
    };
    return FlightClickWithWarningDirective;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], FlightClickWithWarningDirective.prototype, "warning", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], FlightClickWithWarningDirective.prototype, "flightClickWithWarning", void 0);
tslib_1.__decorate([
    HostListener('click', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FlightClickWithWarningDirective.prototype, "handleClick", null);
FlightClickWithWarningDirective = tslib_1.__decorate([
    Directive({
        selector: '[flightClickWithWarning]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer])
], FlightClickWithWarningDirective);
export { FlightClickWithWarningDirective };
//# sourceMappingURL=flight-click-with-warning.directive.js.map