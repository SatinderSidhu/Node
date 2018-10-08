// to MAP the property names of module or object so that proerties can be used directly. 
// use ? 
// left hand side should be object = right hand side should be objectname

// Option 1 - Explain in detail 
const PIa = Math.PI;
 const Ea = Math.E;
 const SQRT2a = Math.SQRT2

 console.log(PIa,Ea,SQRT2a);

 // Option 2 - Destructure the content 
 const {PI,E,SQRT2}= Math
 console.log(PI,E,SQRT2);

 // following is the syntac for destructring stuff
 // const { property to access} = source function
 // 