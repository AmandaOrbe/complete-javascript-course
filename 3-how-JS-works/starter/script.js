// var name = 'John'

// function first(){
//   var a = 'hello';
//   second(a);
//   console.log(  a + name)
// }

// function second(a){
//   var b = 'dude';
//   third();
//   console.log( a + b + name)
// }

// function third(){
//   var c = 'LOL';
//   console.log(c + name)
// }


// first();


///////////////////////////////////////
// Lecture: Hoisting


//Functions

/*calculateAge(1990);

function calculateAge(year){
  console.log(2019 - year);
}

 var retirement = function(year){
  console.log(65 - (2019 - year))
 }


retirement(1990);

//Variables



console.log(age)
var age = 27;

function foo(){
  var age = 51;
  console.log(age);
}

foo();
console.log(age)

*/

///////////////////////////////////////
// Lecture: Scoping








// First scoping example


/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain
/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword


// console.log(this);
// calculateAge(1985)

// function calculateAge(year){
//   console.log(2019 - year);
//   console.log(this);
// }

var john = {
  name: 'john',
  yearOfBirth: 1990,
  calculateAge: function(){
    console.log(this);
    console.log(2019 - this.yearOfBirth);
    /*function innerFunction(){
      console.log(this);
    }
    innerFunction();*/
  }
}

john.calculateAge();


var mike = {
  name: 'mike',
  yearOfBirth: 1984
}

mike.calculateAge = john.calculateAge
// we are just assigning the value, not calling the method, that's why we don't use parenthesis

mike.calculateAge()








