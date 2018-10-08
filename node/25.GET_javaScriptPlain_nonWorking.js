// purpose : read the data from an API
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const apiUrl="http://m.punjabimaa.com/api/article?articleTypeId=1&monthId=1&yearId=2016&writerId=126";

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

    var req = new XMLHttpRequest();

    // Option  # 1: Quick way 
    req.open("GET", apiUrl)

  //  req.onload(()=>{
    //       console.log(`API onLoadStarted :  ${getCurrentDateTime}`);
   // });
   // req.onload(()=>{
     //   console.log(`API onLoadEnd:  ${getCurrentDateTime}`);
      //  console.log(req.response);
    //});

   // req.onload(()=>{
     //   console.log(`API onLoad:  ${getCurrentDateTime}`);
   // });

   console.log(req.response);
   
    //req.setRequestHeader("accept","Application/json");
    //req.setRequestHeader("content-type","application/json");
    //req.apiUrl = this.apiUrl;
}

// display the data when it comes back no   

// display the size of the data recieved 

readApi();