// Define an interface for the object
interface ItemObject {
    name: string;
    quantity: number;
    price: number;
  }
  
  // Create an object containing the item
  const itemObject: ItemObject = {
    name: 'Laptop',
    quantity: 2,
    price: 100000,
  };
  
  // Log the object to the console
  console.log(itemObject);