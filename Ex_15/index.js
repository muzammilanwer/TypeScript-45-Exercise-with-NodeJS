var guestList = ["SirKamran", "SirAmeen", "SirDaniyal", "SirZia"];
var cantDinner = guestList[2];
console.log(cantDinner, "will not come for dinner");
guestList.splice(2, 1, "Sir Mubashir");
guestList.forEach(function (Guest) { return console.log("Assalam u alaikum, ".concat(Guest, " Would you like to Dinner with me? ")); });
