import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var CityValidatorDirective = CityValidatorDirective_1 = (function () {
    function CityValidatorDirective() {
    }
    CityValidatorDirective.prototype.validate = function (c) {
        var formGroup = c.root;
        var otherValueCtrl = formGroup.controls['to'];
        if (!otherValueCtrl) {
            return {};
        }
        var otherValue = otherValueCtrl.value;
        if (otherValue === c.value) {
            return {
                city: 'rundflug'
            };
        }
        if (!this.city) {
            return {};
        }
        var allowed = this.city.split(','); // ['Graz', 'Hamburg', 'Wien', 'Frankfurt'];
        if (allowed.indexOf(c.value) === -1) {
            return {
                city: true
            };
        }
        return {};
    };
    return CityValidatorDirective;
}());
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CityValidatorDirective.prototype, "city", void 0);
CityValidatorDirective = CityValidatorDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[flightCity]',
        providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: CityValidatorDirective_1,
                multi: true
            }
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CityValidatorDirective);
export { CityValidatorDirective };
var CityValidatorDirective_1;
//# sourceMappingURL=city.validator.js.map