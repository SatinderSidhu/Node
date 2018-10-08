// purpose : define template for objects

// how to instantiate a class 
// accessibilityModifier objectName= new className(optional parameters)

class Person {
    constructor(name)
    {this.name=name;}
}

class Students extends Person {
    constructor(name, level)
        {
        super(name);
         this.level=level;
        }

        greet()
        {
            console.log(`Hello ${this.name} are you on level ${this.level}`);
        }
}

const v1= new Person('satinder');
const v2 =new Students('Papa',10);

console.log(v1);
console.log(v2);
v2.greet();