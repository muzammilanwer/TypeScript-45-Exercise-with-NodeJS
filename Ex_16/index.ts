// Creating a Guest list Array
let guestList = ["SirKamran","SirAmeen","SirDaniyal","SirZia"];

// Print message who can't come for a dinner
let cantDinner = guestList[2];

console.log(cantDinner,"will not come for dinner!");

// Remove  Sir Dainyal and Add Sir Mubashir
guestList.splice(2,1,"SirMubashir");

// Print message of Bigger table
console.log("Good News! We have a found a Bigger table for dinner");

// Adding a new guest in a starting point of array
guestList.unshift("SirHamza");

//Adding a new guest in ending point of array
guestList.push("SirAsharib");

//Get a middleIndex of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest in the middle of array
guestList.splice(middleIndex,0,"Zafarabbas");

//Print message of Updated List
console.log("Updated List of Our Guests");

// Sending a invitation message to our guests 
guestList.forEach(oneGuest => console.log(`Assalam u alaikum, ${oneGuest} Would you like to dinner with me?`));