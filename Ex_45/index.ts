// Function to create a car object
function create_car(manufacturer: string, model: string, ...extras: [string, string][]): object {
    const car = { manufacturer, model };
    for (const [key, value] of extras) {
      car[key] = value;
    }
    return car;
  }
  
  // Call the function with required and optional information
  const car = create_car(
    'Toyota',
    'Corolla',
    ['color', 'silver'],
    ['feature', 'sunroof']
  );
  
  // Print the car object
  console.log(car);