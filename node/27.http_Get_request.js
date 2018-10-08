// install the npm package 
// npm install request@2.81.0

// WARNINING - I don't think it works without HTTPS 

// get more info https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html

// purpose : read the data from an API
const request = require('request');

// define some global variables 
const apiUrhttp="http://m.punjabimaa.com/api/article?articleTypeId=1&monthId=1&yearId=2016&writerId=126";
const apiUrlhttps="https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const timeasOfNow=getCurrentDateTime();

// debugging 
    console.log(`API function called:  ${timeasOfNow}`);

request(
    apiUrlhttps,
    { json: true }, // options
    iAmCallBack // return call backl
    );

function iAmCallBack(err, res, body) 
 {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
  };

  var  iAmAlsoCallBack =(err, res, body) =>
 {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
  };

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