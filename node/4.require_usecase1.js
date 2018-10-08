// use case 1 - Include the modules defined in separate files. It reads the javascript files, execute the file and then return the exports object

// following file includes the code
var example = require('./require_usecase1_support.js');

example.say();
