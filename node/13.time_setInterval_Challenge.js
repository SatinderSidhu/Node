// Print Hello every second, 5 times & then print done

counter =1

const printMe = (count) => {

     timer1=setInterval(process, 1*1000,count);
}


process=(totalCount)=>{
    console.log(" Hello " + counter);

    counter+=1;
    if (counter>totalCount)
            {
                console.log(" Done ");
           
             
              clearInterval(timer1);
            }
        }

            
printMe(5);



