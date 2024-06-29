// Array of magician's names
var magicians = ['David Copperfield', ' Dynamo', 'Penn and Teller'];
// Function to print the name of each magician
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Call the function
show_magicians(magicians);
