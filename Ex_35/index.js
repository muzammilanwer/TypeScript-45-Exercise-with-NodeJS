// List of animals that have a common characteristic (can make great pets)
var animals = ['dog', 'cat', 'bird'];
// Use a for loop to print a statement about each animal
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i], " would make a great pet."));
}
// Additional sentence outside the for loop stating what these animals have in common
console.log('Any of these animals would make a great pet!');