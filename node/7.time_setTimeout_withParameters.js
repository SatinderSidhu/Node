console.log(' Starting thread for 1000 milli second')
function showMe(name) {
    console.log(" hello " + name);
}

var them = function showThem(name) { console.log(" hello " + name); }

setTimeout(showMe, 1000, "Sukhmani");
setTimeout(them, 3000, "Jasleen");

