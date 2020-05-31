// const names: Array<string> = []; // string[]
// names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('done');
//   }, 2000);
// });

function merge<T extends object, U extends object>(a: T, b: U) {
  // constraint T, U to be an object
  return Object.assign(a, b);
}

const mergeObj = merge(
  { name: 'Maxi', hobbies: ['swimming, jogging'] },

  { age: 30 }
);
console.log(mergeObj);

interface Lengthy {
  length: number;
}
// another Generic function
function countAndDescription<T extends Lengthy>(element: T): [T, string] {
  let desc = 'Got no value';
  if (element.length === 1) {
    desc = 'Got 1 element ';
  } else if (element.length > 1) {
    desc = `Got ${element.length}  elements`;
  }
  return [element, desc];
}

console.log(countAndDescription('Hello there'));
