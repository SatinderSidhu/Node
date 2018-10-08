// Clear the timer created by setTimeout
const showMe = (name) => {
console.log(" Hello after "+ name + " seconds");}

console.log(" Setting the time for 4 second ");
const timer1= setTimeout(showMe,4*1000,4);

console.log("  Setting the time for 1 second ");
const timer2= setTimeout(showMe,1*1000,1);

console.log(" Clearing the timer for 4 second");
clearTimeout(timer1)
 