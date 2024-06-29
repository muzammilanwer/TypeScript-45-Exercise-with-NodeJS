// Function to describe a sandwich
function describe_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("You ordered a sandwich with ".concat(items.join(', '), "."));
}
// Call the function three times with different numbers of arguments
describe_sandwich('turkey');
describe_sandwich('roast beef', 'cheddar cheese');
describe_sandwich('ham', 'lettuce', 'tomato', 'mayo');
