console.log(' Starting thread for 1000 milli second')
setTimeout(()=>{
    console.log('  Just completed the 1 sec, 4 more to go ')
    },1000);


    console.log(' Starting thread for 1000 2000')
setTimeout(()=>{
    console.log('  Just completed the 2 sec, 4 more to go ')
    },2000);

console.log(' Starting thread for 1000 4*1000')

setTimeout(()=>{
console.log('  Just completed the timeOut')
},4*1000);

setTimeout(()=>{
    console.log('  Just completed the 3 sec, 4 more to go ')
    },3000);
    setTimeout(secondtimer,5000);

        setTimeout(secondtimer,6000);

            setTimeout(secondtimer,7000);

            function secondtimer()
            {
                console.log(' Completed another second  ');
                }