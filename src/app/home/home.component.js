import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var HomeComponent = (function () {
    function HomeComponent(route) {
        this.route = route;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.needLogin = (p['needLogin'] === 'true');
        });
    };
    return HomeComponent;
}());
HomeComponent = tslib_1.__decorate([
    Component({
        templateUrl: './home.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map