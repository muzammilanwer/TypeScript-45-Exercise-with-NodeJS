// Array of magician's names
let magicians: string[] = ['David Copperfield', 'Dynamo', 'Penn and Teller'];

// Function to modify the array of magicians
function make_great(magicians: string[]) {
  const greatMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
    greatMagicians[i] = `The Great ${magicians[i]}`;
  }
  return greatMagicians;
}

// Function to print the name of each magician
function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Call the functions
const greatMagicians: string[] = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);