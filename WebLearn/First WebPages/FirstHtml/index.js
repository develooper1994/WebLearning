// Comment
console.log("alsdfjnasdlkj");

let name="bla bla bla"
console.log(name);

// sin
const frequency = 50  // hz
let time = 1
let ss = Math.sin(2*Math.PI*frequency*time)
console.log(ss);

let ud = undefined;
let nn = null;
console.log(String(typeof(ud))+" "+typeof(nn))

// object
let name1 = 'Selçuk';
let age = 25;
let person = {
    name: 'Mustafa',
    age: 25
}
console.log(person);

person.name = 'Bayım';
console.log(person.name);

person['name'] = 'Bakan';
console.log(person.name);

// array
let selectedColors = ['red', 'blue'];
selectedColors[2] = Math.E;
console.log(selectedColors.length);

// functions
let number = 1
function greet(name, lastName) {
    console.log('Greetings ' + name + ' ' + lastName);
}

greet('Mustafa')

