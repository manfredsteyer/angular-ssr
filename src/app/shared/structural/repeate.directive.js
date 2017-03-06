import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var RepeateDirective = (function () {
    function RepeateDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(RepeateDirective.prototype, "flightRepeateOf", {
        set: function (items) {
            this.viewContainer.clear();
            var i = 0;
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                i++;
                var context = {
                    $implicit: item,
                    index: i - 1,
                    odd: (i % 2 === 1)
                };
                this.viewContainer
                    .createEmbeddedView(this.templateRef, context);
            }
        },
        enumerable: true,
        configurable: true
    });
    return RepeateDirective;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array),
    tslib_1.__metadata("design:paramtypes", [Array])
], RepeateDirective.prototype, "flightRepeateOf", null);
RepeateDirective = tslib_1.__decorate([
    Directive({
        selector: '[flightRepeate]'
    }),
    tslib_1.__metadata("design:paramtypes", [TemplateRef,
        ViewContainerRef])
], RepeateDirective);
export { RepeateDirective };
//# sourceMappingURL=repeate.directive.js.map