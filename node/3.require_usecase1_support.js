console.log('Excuting the required file');

var invisible=function(){
console.log('this file will be used as the require file');
}

exports.message = " I am a message ";
exports.say = function(){console.log(exports.message);
}