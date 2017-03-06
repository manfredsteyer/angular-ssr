import * as tslib_1 from "tslib";
import { Directive, ViewContainerRef, TemplateRef, Input, HostListener, Renderer } from '@angular/core';
var TooltipDirective = (function () {
    function TooltipDirective(viewContainer, renderer) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
    }
    TooltipDirective.prototype.handleMouseover = function ($event) {
        this.embeddedViewRef = this.viewContainer.createEmbeddedView(this.template);
        var nativeElement = this.embeddedViewRef.rootNodes.find(function (n) { return n.nodeType === 1; });
        if (!nativeElement) {
            return;
        }
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    TooltipDirective.prototype.handleMouseout = function () {
        this.embeddedViewRef.destroy();
    };
    return TooltipDirective;
}());
tslib_1.__decorate([
    Input('flightTooltip'),
    tslib_1.__metadata("design:type", TemplateRef)
], TooltipDirective.prototype, "template", void 0);
tslib_1.__decorate([
    HostListener('mouseover', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], TooltipDirective.prototype, "handleMouseover", null);
tslib_1.__decorate([
    HostListener('mouseout'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], TooltipDirective.prototype, "handleMouseout", null);
TooltipDirective = tslib_1.__decorate([
    Directive({
        selector: '[flightTooltip]'
    }),
    tslib_1.__metadata("design:paramtypes", [ViewContainerRef, Renderer])
], TooltipDirective);
export { TooltipDirective };
//# sourceMappingURL=tooltip.directive.js.map