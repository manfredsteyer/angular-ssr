import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var LeaveComponentGuard = (function () {
    function LeaveComponentGuard() {
    }
    LeaveComponentGuard.prototype.canDeactivate = function (component, route, state) {
        return component.canDeactivate();
    };
    return LeaveComponentGuard;
}());
LeaveComponentGuard = tslib_1.__decorate([
    Injectable()
], LeaveComponentGuard);
export { LeaveComponentGuard };
//# sourceMappingURL=leave-component-guard.js.map