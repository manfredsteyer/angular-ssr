"use strict";
var city_pipe_1 = require("./city.pipe");
describe('CityPipe', function () {
    var cityPipe = new city_pipe_1.CityPipe();
    it('should transform "Graz" to long "Flughafen Graz Thalerhof"', function () {
        expect(cityPipe.transform('Graz')).toBe('Flughafen Graz Thalerhof');
    });
    it('should transform "Graz" to short "GRZ" when second parameter is short', function () {
        expect(cityPipe.transform('Graz', 'short')).toBe('GRZ');
    });
    it('should transform a not existing city to "ROM"', function () {
        expect(cityPipe.transform('Angular City')).toBe('ROM');
    });
});
//# sourceMappingURL=city.pipe.spec.js.map