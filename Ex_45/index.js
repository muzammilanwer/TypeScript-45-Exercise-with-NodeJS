// Function to create a car object
function create_car(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var _b = extras_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function with required and optional information
var car = create_car('Toyota', 'Corolla', ['color', 'silver'], ['feature', 'sunroof']);
// Print the car object
console.log(car);
