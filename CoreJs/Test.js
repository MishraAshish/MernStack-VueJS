//Scope, Context and Call, Apply and Bind

var person = {name: 'Marvin', age: 42, size: '2xM'};
//name = "Cyprian"; //global variable
var person1 = {name: 'Dennis', age: 21, size: '1xM'};

var sayHello = function(bio)
{
    console.log('Hello, ' + this.name);
    console.log('Age , ' + this.age);

    console.log('Bio , ' + bio);
};

var sayGoodbye = function(param1, param2, param3)
{
    console.log('Goodbye, ' + this.name);
    console.log('Size , ' + this.size);
};

//sayHello();
//sayGoodbye();

sayHello.call(person, "MernStack Trainer"); //call allows us to change the context (execution context at runtime)
//sayGoodbye.call(person);
sayGoodbye.call(person1);

//apply : is used to change the context at runtime like call but has the capablity to pass parameters in the form of array
// is widely to create delegates

var sayHelloForApply = function(addres1, address2, address3)
{
    console.log('Hello, ' + this.name);
    console.log('Age , ' + this.age);

    console.log('Address from Apply - ' + addres1);
    console.log('Address from Apply - ' + address2);
    console.log('Address from Apply - ' + address3);
};

sayHelloForApply.apply(person1, ["addres1 -sada", "address2 - dsada", "address3 -asdasda"]);