# shiny js - javascript features you may not know you need yet

`let {personName, animal: {animalName}} = obj`

- destructuring

```js
// list matching
const [a, , b] = [1, 2, 3];

// object matching
const obj = { a: 3, b: 45, c: 11 };

const { a, b, c } = obj;

// Can be used in parameter position
function g({ name: x }) {
  console.log(x);
}
g({ name: 5 });

// Fail-soft destructuring
const [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
const [a = 1] = [];
a === 1;
```

- rest and spread

```js
function f(x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15;
function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6;
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1, 2, 3]) == 6;
```

- pass by value vs pass by reference - spreads and refs

- let and const - discussion

- [for of loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [underscore](https://underscorejs.org/#)
- [lodash](https://lodash.com/)
