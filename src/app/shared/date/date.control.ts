import { Component } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
    selector: 'flight-date-control',
    templateUrl: './date.control.html'
})
export class DateControlComponent
implements ControlValueAccessor {

    day: number;
    month: number;
    year: number;
    hour: number;
    minute: number;

    constructor(private c: NgControl) {
        c.valueAccessor = this;
    }

    writeValue(value: any) {
        this.splitDate(value);
    }

    onChange = (_) => {};
    onTouched = () => {};

    registerOnChange(fn): void { this.onChange = fn; }
    registerOnTouched(fn): void { this.onTouched = fn; }


    splitDate(dateString) {
        let date = new Date(dateString);

        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    }

    apply() {

        let date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);

        this.onChange(date.toISOString());
        this.onTouched();
    }

}
