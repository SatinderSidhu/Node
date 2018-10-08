const iamdynamic="name";

const PI = Math.PI;

// declare an object 
const hey=
 {
     p1:10,
     p2:20,
     f1() {return 5}, // define functions in normal way
     f2: () => {return 6}, // define functions in the arrow fuction 
     [iamdynamic] :30, // this is a dynamic variable name, the value of iamdynamic will become the property name
     PI
 }

 console.log(hey);

 console.log(hey.f1());
 
 console.log(hey.f2());
 