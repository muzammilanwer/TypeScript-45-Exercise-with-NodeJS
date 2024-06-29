//Making a Array of countried and print in orignal order
let countriesToVisit: string[] = ["Saudia Arabia", "Turkey", "UnitedKingdom", "Switzerland"];
console.log("Orignal Order:", countriesToVisit);

//Print the Array in Alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//Show that the array is still in its orignal order
console.log("Still in Orignal Order:", countriesToVisit);

//Print the array in Reversed order without modifying the actual list
console.log("Reverse Order:", [...countriesToVisit].reverse());

//Show that the array is still in its orignal order
console.log("Still in Orignal Order:", countriesToVisit);

// I have changed the orignal array order now!
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to orignal order
console.log("Back to Orignal Order", countriesToVisit.reverse());

// Print the array to show that its order has been changed in ALphabetical Order
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// I have changed the orignal array order now in reverse order again
console.log("Orignal Array Reversed:", countriesToVisit.reverse());


