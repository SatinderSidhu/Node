// purpose : bring the values of an array into some variables, and make another array
// filter out some properties

// these are shallow copies, only the top level properties are copied, not the inside one

// another way to do it.
const a1array=[11,22,33,44,55];
const [a,b,...rest] =a1array;

// so see this rest is the array 
console.log(a,b,rest);

// so see this rest is the array combined 
console.log(a,b,...rest);


// make a new array 
const bx =[...rest];
console.log(bx);