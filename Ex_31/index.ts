let userNames: string[] = ["Faizan", "Hamza", "Muzammil", "Umair", "Farooq"];
userNames = [];

if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  // Loop through the array and print greetings
  userNames.forEach((username) => {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  });
}
