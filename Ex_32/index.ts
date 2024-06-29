// List of current usernames
let current_users: string[] = ['muzammil', 'eric', 'wisha', 'sarah', 'sadaf'];

// List of new usernames
let new_users: string[] = ['muzammil', 'jim', 'wisha', 'sally', 'SADAF'];

// Loop through the new_users list
new_users.forEach((new_user) => {
  // Convert both the new username and the current usernames to lowercase for case-insensitive comparison
  let username_lowercase = new_user.toLowerCase();
  let is_username_taken = current_users.some((current_user) => current_user.toLowerCase() === username_lowercase);

  if (is_username_taken) {
    console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
  } else {
    console.log(`Great, ${new_user} is available!`);
  }
});