import { Component, Input } from '@angular/core';
@Component({
    selector: 'flight-validation-errors',
    template: `
        <div *ngIf="errors && errors.required">
            This field is required
        </div>
        <div *ngIf="errors && errors.minlength">
            Please enter at least {{ errors.minlength.expected }} characters
        </div>
        <div *ngIf="errors && errors.city">
            This city is now allowed
        </div>
    `
})
export class ValidationErrorsComponent {
    @Input() errors: any;
}
