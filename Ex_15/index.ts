let guestList = ["SirKamran", "SirAmeen", "SirDaniyal", "SirZia"];

let cantDinner = guestList[2];

console.log(cantDinner, "will not come for dinner");

guestList.splice(2,1, "Sir Mubashir");

guestList.forEach(Guest =>console.log(`Assalam u alaikum, ${Guest} Would you like to Dinner with me? `));