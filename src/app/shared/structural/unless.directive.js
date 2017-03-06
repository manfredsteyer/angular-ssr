import * as tslib_1 from "tslib";
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
var UnlessDirective = (function () {
    function UnlessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(UnlessDirective.prototype, "flightUnless", {
        set: function (condition) {
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    return UnlessDirective;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], UnlessDirective.prototype, "flightUnless", null);
UnlessDirective = tslib_1.__decorate([
    Directive({
        selector: '[flightUnless]'
    }),
    tslib_1.__metadata("design:paramtypes", [TemplateRef,
        ViewContainerRef])
], UnlessDirective);
export { UnlessDirective };
//# sourceMappingURL=unless.directive.js.map