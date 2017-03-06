var MultistopValidator = (function () {
    function MultistopValidator() {
    }
    MultistopValidator.validate = function (formArray) {
        if (formArray.length < 2) {
            return {};
        }
        for (var i = 1; i < formArray.length; i++) {
            var lastValue = formArray.at(i - 1).get('city').value;
            var thisValue = formArray.at(i).get('city').value;
            if (lastValue === thisValue) {
                return {
                    multistop: true
                };
            }
        }
        return {};
    };
    return MultistopValidator;
}());
export { MultistopValidator };
//# sourceMappingURL=multistop-validator.js.map