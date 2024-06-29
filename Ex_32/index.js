// List of current usernames
var current_users = ['muzammil', 'eric', 'wisha', 'sarah', 'sadaf'];
// List of new usernames
var new_users = ['muzammil', 'jim', 'wisha', 'sally', 'SADAF'];
// Loop through the new_users list
new_users.forEach(function (new_user) {
    // Convert both the new username and the current usernames to lowercase for case-insensitive comparison
    var username_lowercase = new_user.toLowerCase();
    var is_username_taken = current_users.some(function (current_user) { return current_user.toLowerCase() === username_lowercase; });
    if (is_username_taken) {
        console.log("Sorry, ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("Great, ".concat(new_user, " is available!"));
    }
});
