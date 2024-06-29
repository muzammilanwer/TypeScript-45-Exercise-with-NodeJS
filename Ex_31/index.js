var userNames = ["Faizan", "Hamza", "Muzammil", "Umair", "Farooq"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need some users!");
}
else {
    // Loop through the array and print greetings
    userNames.forEach(function (username) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    });
}
