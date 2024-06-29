// Array of favorite pizza names
var favoritePizzas = ['pepperoni', 'hawaiian', 'meat lovers'];
// Use a for loop to print the name of each pizza with a sentence
for (var i = 0; i < favoritePizzas.length; i++) {
    console.log("I like ".concat(favoritePizzas[i], " pizza."));
}
// Additional sentence outside the for loop
console.log('I really love pizza!');
