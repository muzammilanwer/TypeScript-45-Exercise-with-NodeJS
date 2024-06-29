// Array of magician's names
let magicians: string[] = ['David Copperfield', 'Dynamo', 'Penn and Teller'];

// Function to modify the array of magicians
function make_great(magicians: string[]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `The Great ${magicians[i]}`;
  }
}

// Function to print the name of each magician
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Call the functions
make_great(magicians);
show_magicians(magicians);