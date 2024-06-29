// Function to describe a sandwich
function describe_sandwich(...items: string[]) {
    console.log(`You ordered a sandwich with ${items.join(', ')}.`);
  }
  
  // Call the function three times with different numbers of arguments
  describe_sandwich('turkey');
  describe_sandwich('roast beef', 'cheddar cheese');
  describe_sandwich('ham', 'lettuce', 'tomato', 'mayo');