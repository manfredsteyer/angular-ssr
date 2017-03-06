import * as tslib_1 from "tslib";
import { Directive, ViewContainerRef, Input, HostListener, Renderer, ComponentFactoryResolver, Injector } from '@angular/core';
import { TooltipComponent } from './tooltip.component';
var Tooltip2Directive = (function () {
    function Tooltip2Directive(viewContainer, renderer, injector, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.renderer = renderer;
        this.injector = injector;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    Tooltip2Directive.prototype.handleMouseover = function ($event) {
        var compFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
        var textNode = document.createTextNode(this.message);
        this.componentRef = this.viewContainer.createComponent(compFactory, null, this.injector, [[textNode]]);
        var nativeElement = this.componentRef.location.nativeElement;
        var left = $event.target.offsetLeft + 'px';
        var top = ($event.target.offsetTop + $event.target.offsetHeight + 5) + 'px';
        this.renderer.setElementStyle(nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(nativeElement, 'left', left);
        this.renderer.setElementStyle(nativeElement, 'top', top);
        this.renderer.setElementStyle(nativeElement, 'width', '200px');
    };
    Tooltip2Directive.prototype.handleMouseout = function () {
        this.componentRef.destroy();
    };
    return Tooltip2Directive;
}());
tslib_1.__decorate([
    Input('flightTooltip2'),
    tslib_1.__metadata("design:type", String)
], Tooltip2Directive.prototype, "message", void 0);
tslib_1.__decorate([
    HostListener('mouseover', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], Tooltip2Directive.prototype, "handleMouseover", null);
tslib_1.__decorate([
    HostListener('mouseout'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], Tooltip2Directive.prototype, "handleMouseout", null);
Tooltip2Directive = tslib_1.__decorate([
    Directive({
        selector: '[flightTooltip2]'
    }),
    tslib_1.__metadata("design:paramtypes", [ViewContainerRef,
        Renderer,
        Injector,
        ComponentFactoryResolver])
], Tooltip2Directive);
export { Tooltip2Directive };
//# sourceMappingURL=tooltip2.directive.js.map