import { Component, Input, OnInit, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'flight-date-component',
    templateUrl: './date.component.html'
})
export class DateComponent implements OnInit, OnChanges {

    @Input() date: string;
    @Output() dateChange = new EventEmitter<string>();

    day;
    month;
    year;
    hour;
    minute;

    constructor() {
        console.debug('date in constructor', this.date);
    }

    ngOnInit() {
        console.debug('date in ngOnInit', this.date);
    }

    ngOnChanges(change) {
        console.debug('date in ngOnChanges', this.date);
        // if(change.date) { ... }

        let date = new Date(this.date);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        this.year = date.getFullYear();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
    }

    apply() {
        let date = new Date(this.year, this.month - 1, this.day, this.hour, this.minute);
        this.dateChange.next(date.toISOString());
    }
}
