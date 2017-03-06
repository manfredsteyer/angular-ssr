import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var TooltipComponent = (function () {
    function TooltipComponent() {
    }
    return TooltipComponent;
}());
TooltipComponent = tslib_1.__decorate([
    Component({
        selector: 'flight-tooltip',
        template: "\n        <div class=\"tooltip-bg\">\n            <b>Tipp:</b>\n            <ng-content></ng-content>\n        </div>\n    ",
        styles: ["\n        .tooltip-bg {\n            background-color: yellow; \n            border: solid 2px darkkhaki\n        }\n    "]
    })
], TooltipComponent);
export { TooltipComponent };
//# sourceMappingURL=tooltip.component.js.map