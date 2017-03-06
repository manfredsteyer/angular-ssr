import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
var AsyncCityValidatorDirective = AsyncCityValidatorDirective_1 = (function () {
    function AsyncCityValidatorDirective() {
    }
    AsyncCityValidatorDirective.prototype.validate = function (ctrl) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                if (ctrl.value === 'Graz' || ctrl.value === 'Hamburg') {
                    resolve({});
                    return;
                }
                resolve({ 'async-city': false });
            }, 100);
        });
    };
    return AsyncCityValidatorDirective;
}());
AsyncCityValidatorDirective = AsyncCityValidatorDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[flightAsyncCity]',
        providers: [
            {
                provide: NG_ASYNC_VALIDATORS,
                useExisting: AsyncCityValidatorDirective_1,
                multi: true
            }
        ]
    })
], AsyncCityValidatorDirective);
export { AsyncCityValidatorDirective };
var AsyncCityValidatorDirective_1;
//# sourceMappingURL=async-city.validator.js.map