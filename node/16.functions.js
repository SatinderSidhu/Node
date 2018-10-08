// 

this.id ="hey this is my my ID";
this.name =" and ofcourse this is my name";

console.log(this);

// simple function
function callMe()
{
    console.log("I am being called inside the CallMe function");
}

// function assigned to a deligate
// if we use this in this onem, it ill take the left hand side LHS as the value inside the function (use the caller)
const c2= function callMe2()
{
    console.log("I am being called inside the CallMe 2 function", this);
}

// when using this in thisa way, it will take onluy the scope
const c3 = () => {
    console.log("I am being called inside the CallMe 3 function", this);
}


callMe();
c2();
c3();
        