/* Dynamic Oblect Properties */
const favoriteFood = "sushi";

const goodFoods = {
  [favoriteFood]: true,
};

console.log(goodFoods);

/* JS Sets (ES6) */
// Arrays => order
// Objects => association
// Set => uniqueness

const numbers = new Set();
numbers.add(5);
numbers.add(10);
numbers.add(15);

numbers.add(5);
numbers.add(15);

numbers.add(25);

console.log(numbers);
