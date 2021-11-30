console.log('Hello World');

let person = {

    name:'Asmita',
    age: 30
};

//person.name = 'john'

person["name"] = 'Mary';

console.log(person.name);


let selectedcolors = ['red','blue'];
selectedcolors[2] = 1;
console.log(selectedcolors.length);

function greet(name)
{
    console.log("Hello " +name);
}


function square(number)
{
return number * number;

}
let number = square(3);
console.log(number);
greet('Asmita');
