import { Directive, Renderer, ElementRef, Self, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
    selector: '[flightDate]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateValueAccessorDirective), // tslint:disable-line
        multi: true}]
})
export class DateValueAccessorDirective implements ControlValueAccessor {

    onChange = (_: any) => {};
    onTouched = () => {};

    constructor(private _renderer: Renderer, private _elementRef: ElementRef) {}

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }


    blur() {
        this.onTouched();
    }

    // Parser: View --> Ctrl
    input(value) {

        // Write back to model
        if (value) {
            value = value.split(/\./);
            value = value[2] + '-' + value[1] + '-' + value[0];
        }

        this.onChange(value);
    }

    // Formatter: Ctrl --> View
    writeValue(value: any): void {

        // Write to view
        if (value) {
            let date = new Date(value);

            value =
                date.getDate() + '.'
                + (date.getMonth() + 1) + '.'
                + date.getFullYear();
        }

        let normalizedValue = (value) ? value : '';
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);

    }

}
