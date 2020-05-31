// const names: Array<string> = []; // string[]
// names[0].split(' ');
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('done');
//   }, 2000);
// });
function merge(a, b) {
    // constraint T, U to be an object
    return Object.assign(a, b);
}
var mergeObj = merge({ name: 'Maxi', hobbies: ['swimming, jogging'] }, { age: 30 });
console.log(mergeObj);
