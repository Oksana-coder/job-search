/* Dynamic Object Properties */
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

/* Object Reactivity in Vue, Vue's ref & computed functions (can be used with primitives and objects) */
const { ref, computed, toRefs } = require("vue");

const person = ref({
  name: "Oksana",
});

const title = computed(() => person.value.name + " the Great");
console.log(title.value);

person.value.name = "Alexander";
console.log(title.value);

/* Object Reactivity in Vue, Vue's reactive function (can be used only with objects) */
const { reactive } = require("vue");

const personOne = reactive({
  name: "Oksana",
});

const titleOne = computed(() => personOne.name + " the Great");
console.log(titleOne.value);

personOne.name = "Alexander";
console.log(titleOne.value);

/* Multiple levels of Reactivity in Vue */
const { computed, reactive } = require("vue");

const personTwo = reactive({
  firstName: "Oksana",
  lastName: "Palamarchuk",
});

const titleTwo = computed(
  () => `${personTwo.firstName} ${personTwo.lastName} the Great`
);
const titleTwoLength = computed(() => titleTwo.value.length);
console.log(titleTwo.value);
console.log(titleTwoLength.value);

personTwo.firstName = "Alexander";
console.log(titleTwo.value);
console.log(titleTwoLength.value);

personTwo.lastName = "First";
console.log(titleTwo.value);
console.log(titleTwoLength.value);

/* Destructuring Problems and Vue's toRef function */
const { computed, reactive, toRef, toRefs } = require("vue");

const personThree = reactive({
  firstName: "Oksana",
  lastName: "Palamarchuk",
});

// const { firstName, lastName } = personThree;
// Destructuring gives us the original values (primitives) and we lose the reactivity; Below is the the solution to this problem.

// const firstName = toRef(personThree, "firstName");
// const lastName = toRef(personThree, "lastName");
// More elegant solution is below.

const { firstName, lastName } = toRefs(person); // accepts only a reactive object, doesn't accept a plain one

const titleThree = computed(
  () => `${firstName.value} ${lastName.value} the Great`
);

personThree.firstName = "Alexander";
console.log(titleThree.value);

personThree.lastName = "First";
console.log(titleThree.value);
