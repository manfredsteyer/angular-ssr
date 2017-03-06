import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, Renderer } from '@angular/core';
var E2eLocatorDirective = (function () {
    function E2eLocatorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(E2eLocatorDirective.prototype, "flightE2eLocator", {
        set: function (flightE2eLocator) {
            this.renderer.setElementAttribute(this.el.nativeElement, 'flightE2eLocator', flightE2eLocator);
        },
        enumerable: true,
        configurable: true
    });
    return E2eLocatorDirective;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String),
    tslib_1.__metadata("design:paramtypes", [String])
], E2eLocatorDirective.prototype, "flightE2eLocator", null);
E2eLocatorDirective = tslib_1.__decorate([
    Directive({ selector: '[flightE2eLocator]' }),
    tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer])
], E2eLocatorDirective);
export { E2eLocatorDirective };
//# sourceMappingURL=e2e-locator.directive.js.map