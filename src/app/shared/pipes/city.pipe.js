import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var CityPipe = (function () {
    function CityPipe() {
    }
    CityPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fmt = args[0]; // short, long
        var short, long;
        switch (value) {
            case 'Graz':
                long = 'Flughafen Graz Thalerhof';
                short = 'GRZ';
                break;
            case 'Hamburg':
                long = 'Airport Hamburg Fuhlsbüttl Helmut Schmidt';
                short = 'HAM';
                break;
            default:
                long = short = 'ROM';
        }
        if (fmt === 'short') {
            return short;
        }
        return long;
    };
    return CityPipe;
}());
CityPipe = tslib_1.__decorate([
    Pipe({
        name: 'flightCity',
        pure: true
    })
], CityPipe);
export { CityPipe };
//# sourceMappingURL=city.pipe.js.map