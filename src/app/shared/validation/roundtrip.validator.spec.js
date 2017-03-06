"use strict";
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var roundtrip_validator_1 = require("./roundtrip.validator");
var DummyComponent = (function () {
    function DummyComponent() {
    }
    return DummyComponent;
}());
DummyComponent = __decorate([
    core_1.Component({
        template: "\n<form #f=\"ngForm\" flightRoundTrip>\n        <input [(ngModel)]=\"from\" name=\"from\">\n        <input [(ngModel)]=\"to\" name=\"to\">\n</form>\n"
    })
], DummyComponent);
var fixture;
var rootFormGroup;
var fromInput;
var toInput;
var compInstance;
describe('RoundTripDirective', function () {
    beforeEach(testing_1.async(function () {
        fixture = testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule],
            declarations: [roundtrip_validator_1.RoundTripDirective, DummyComponent]
        }).createComponent(DummyComponent);
        fixture.detectChanges();
        var inputs = fixture.debugElement.queryAll(platform_browser_1.By.css('input'));
        fromInput = inputs[0].nativeElement;
        toInput = inputs[1].nativeElement;
        compInstance = fixture.componentInstance;
        var form = fixture.debugElement.query(platform_browser_1.By.directive(roundtrip_validator_1.RoundTripDirective));
        // Zugang zur lokalen Variable #f welche die oberste FormGroup wiederspiegelt
        rootFormGroup = form.references['f'];
    }));
    it('should raise error if from and to city are the same location', function () {
        // Initial sind beide Input Felder leer weshalb round-trip einen Fehler wirft
        expect(rootFormGroup.control.hasError('round-trip')).toBe(true);
        expect(rootFormGroup.control.valid).toBe(false);
        fromInput.value = 'Graz';
        fromInput.dispatchEvent(new Event('input'));
        expect(rootFormGroup.control.hasError('round-trip')).toBe(false);
        expect(rootFormGroup.control.valid).toBe(true);
        toInput.value = 'Graz';
        toInput.dispatchEvent(new Event('input'));
        expect(rootFormGroup.control.hasError('round-trip')).toBe(true);
        expect(rootFormGroup.control.valid).toBe(false);
    });
    it('should get error object', function () {
        fromInput.value = 'Graz';
        fromInput.dispatchEvent(new Event('input'));
        expect(rootFormGroup.control.hasError('round-trip')).toBe(false);
        expect(rootFormGroup.control.valid).toBe(true);
        expect(rootFormGroup.control.errors).toBe(null);
        toInput.value = 'Graz';
        toInput.dispatchEvent(new Event('input'));
        expect(rootFormGroup.control.hasError('round-trip')).toBe(true);
        expect(rootFormGroup.control.valid).toBe(false);
        expect(rootFormGroup.control.errors).toEqual({
            'round-trip': {
                city: 'Graz'
            }
        });
    });
});
//# sourceMappingURL=roundtrip.validator.spec.js.map