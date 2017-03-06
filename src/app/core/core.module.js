import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { LeaveComponentGuard } from '../shared/deactivation/leave-component-guard';
import { CustomPreloadingStrategy } from '../shared/preload/custom-preloading.strategy';
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = tslib_1.__decorate([
    NgModule({
        imports: [],
        declarations: [],
        providers: [
            LeaveComponentGuard,
            CustomPreloadingStrategy,
        ],
        exports: []
    })
], CoreModule);
export { CoreModule };
//# sourceMappingURL=core.module.js.map