// Define the array of usernames
var usernames = ['john', 'eric', 'admin', 'sarah', 'jane'];
// Loop through the array and print greetings
usernames.forEach(function (username) {
    if (username === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
