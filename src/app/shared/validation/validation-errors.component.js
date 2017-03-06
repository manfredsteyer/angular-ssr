import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var ValidationErrorsComponent = (function () {
    function ValidationErrorsComponent() {
    }
    return ValidationErrorsComponent;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ValidationErrorsComponent.prototype, "errors", void 0);
ValidationErrorsComponent = tslib_1.__decorate([
    Component({
        selector: 'flight-validation-errors',
        template: "\n        <div *ngIf=\"errors && errors.required\">\n            This field is required\n        </div>\n        <div *ngIf=\"errors && errors.minlength\">\n            Please enter at least {{ errors.minlength.expected }} characters\n        </div>\n        <div *ngIf=\"errors && errors.city\">\n            This city is now allowed\n        </div>\n    "
    })
], ValidationErrorsComponent);
export { ValidationErrorsComponent };
//# sourceMappingURL=validation-errors.component.js.map