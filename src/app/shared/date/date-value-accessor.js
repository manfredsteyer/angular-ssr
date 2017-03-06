import * as tslib_1 from "tslib";
import { Directive, Renderer, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var DateValueAccessorDirective = DateValueAccessorDirective_1 = (function () {
    function DateValueAccessorDirective(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    DateValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    DateValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    DateValueAccessorDirective.prototype.blur = function () {
        this.onTouched();
    };
    // Parser: View --> Ctrl
    DateValueAccessorDirective.prototype.input = function (value) {
        // Write back to model
        if (value) {
            value = value.split(/\./);
            value = value[2] + '-' + value[1] + '-' + value[0];
        }
        this.onChange(value);
    };
    // Formatter: Ctrl --> View
    DateValueAccessorDirective.prototype.writeValue = function (value) {
        // Write to view
        if (value) {
            var date_1 = new Date(value);
            value =
                date_1.getDate() + '.'
                    + (date_1.getMonth() + 1) + '.'
                    + date_1.getFullYear();
        }
        var normalizedValue = (value) ? value : '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
    };
    return DateValueAccessorDirective;
}());
DateValueAccessorDirective = DateValueAccessorDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[flightDate]',
        providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(function () { return DateValueAccessorDirective_1; }),
                multi: true
            }]
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer, ElementRef])
], DateValueAccessorDirective);
export { DateValueAccessorDirective };
var DateValueAccessorDirective_1;
//# sourceMappingURL=date-value-accessor.js.map