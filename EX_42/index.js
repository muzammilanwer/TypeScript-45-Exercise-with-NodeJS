// Array of magician's names
var magicians = ['David Copperfield', 'Dynamo', 'Penn and Teller'];
// Function to modify the array of magicians
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great ".concat(magicians[i]);
    }
}
// Function to print the name of each magician
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the functions
make_great(magicians);
show_magicians(magicians);
