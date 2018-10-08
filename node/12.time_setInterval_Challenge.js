// Print Hello every second, 5 times & then print done

const showMe = () => {
    console.log(" Hello ");}

const Done = () => {
    console.log(" Done ");
 clearInterval(timer1);
}
            

//console.log(" Setting the repeat timer for 1 second ");
const timer1= setInterval(showMe,1*1000);

// console.log("  Setting the one time process ");
const timer2= setTimeout(Done,5*1000,1);


