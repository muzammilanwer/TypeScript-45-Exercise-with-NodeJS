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

//Inform that only two guests can be invited for dinner
console.log("Ufortunatelt, the new dinner table wont arrive on time, so I can only Invite two guest for dinner with me");

//Using While loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I can't invite you to dinner`);
}

//Sending a invitations to the last two guest on the list
console.log("Invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckiest ${lasttwo}, you are still invited to dinner`));

//Removing last two guest
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);

