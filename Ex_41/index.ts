// Array of magician's names
let magicians: string[] = ['David Copperfield', ' Dynamo', 'Penn and Teller'];

// Function to print the name of each magician
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Call the function
show_magicians(magicians);