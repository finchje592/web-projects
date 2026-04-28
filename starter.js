// First and last name
// Current date
// Convert Traditional Functions to Arrow Functions

// TODO 1: Rewrite each traditional function as an arrow function
// TODO 2: Then call each function and make sure the function works!

// Converts kilometers to miles
// Traditional function
// function convertToMiles(kilometers) {
//   return kilometers * 0.621371;
// }
 

// Calculates perimeter of a rectangle
// Traditional function
// function calcRectPerimeter(length, width) {
//   return 2 * (length + width);
// }

// Builds a product description using a template string
// Traditional function
//  function describeProduct(name, price) {
//   return `The ${name} costs $${price.toFixed(2)}.`;
//  }



// TODO 3: REWRITE YOUR FUNCTIONS AS ARROW FUNCTIONS BELOW THIS LINE


 
const convertToMiles = (kilometers)=> {
  return kilometers * 0.621371;
}
//call function
convertToMiles (50);


const describeProduct = (guitar, price)=> {
  return `The ${guitar} costs ${price.toFixed(2)}.`
}
 console.log(describeProduct('Strat', 1500));



const showUserProfile = (name, age, city) => {
 return `${name} is ${age} and lives in ${city}.`;

}
 console.log(showUserProfile('Bob', 'twenty', 'traverse'));
// TODO 4: Use console.log() to display each function's output





















