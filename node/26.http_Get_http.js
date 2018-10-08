// purpose : read the data from an API
var https = require("http");

const apiUrl="http://m.punjabimaa.com/api/article?articleTypeId=1&monthId=1&yearId=2016&writerId=126";

readApi();

function getCurrentDateTime()
{
var currentdate = new Date(); 
var datetime = "Current DateTime: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
               return datetime;
}
// get the data 
function readApi()
{
// a secret about the interpolation, you can only use the scalar variables, can not call the function to get the data.

    const timeasOfNow=getCurrentDateTime();
    console.log(`API function called:  ${timeasOfNow}`);
    let chunkCounter=0;

    https.get(apiUrl,
      (res)=>{
        console.log(`API got the response  :  ${timeasOfNow}`);

        let data = '';

        // A chunk of data has been recieved.
        res.on('data', (chunk) => {
          data += chunk;
          var chunkSize = chunk.length;
          console.log(` some more data camefor chunck ${chunkCounter} at ${timeasOfNow}:  `);
          console.log(` chunk size  ${chunkSize}:  `);
          console.log(`   `);
          chunkCounter++;
if (chunkCounter==200)
          console.log(` chunk data  ${chunk}:  `);
        });

        
        res.on('end',()=>{
          console.log(` Date from server ${timeasOfNow}:  `);
        });
      });
}

