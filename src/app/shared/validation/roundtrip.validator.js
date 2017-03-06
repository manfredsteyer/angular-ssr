import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var RoundTripDirective = RoundTripDirective_1 = (function () {
    function RoundTripDirective() {
    }
    RoundTripDirective.prototype.validate = function (control) {
        var formGroup = control;
        var fromCtrl = formGroup.controls['from'];
        var toCtrl = formGroup.controls['to'];
        if (!fromCtrl || !toCtrl) {
            return {};
        }
        var from = fromCtrl.value;
        var to = toCtrl.value;
        if (from === to) {
            return {
                'round-trip': {
                    city: from
                }
            };
        }
        return {};
    };
    return RoundTripDirective;
}());
RoundTripDirective = RoundTripDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[flightRoundTrip]',
        providers: [{ provide: NG_VALIDATORS, useExisting: RoundTripDirective_1, multi: true }]
    })
], RoundTripDirective);
export { RoundTripDirective };
var RoundTripDirective_1;
//# sourceMappingURL=roundtrip.validator.js.map