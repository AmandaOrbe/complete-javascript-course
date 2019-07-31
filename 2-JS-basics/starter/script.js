// Variables and data types
/*
var firstName = 'Amanda';
var LastName = 'Orbe';
var age = 27;
var fullAge = true;
console.log(firstName );

var job;
console.log(job);

job = "teacher";
console.log(job);

*/
// Single Line comment
/* Multiple
    line
    comment
*/

/***************

Variable Mutation and Type Coercion

*/

// Type Coercion

/*var firstName = 'Amanda';
var age = 27;

console.log(firstName + " " + age);

var job, isMarried;
job = 'Teacher';
isMarried = true;

console.log( firstName + ' is a ' + age + 'year old ' + job+ 'Is he Married?' + isMarried);

// Variable Mutation


age = "twenty eight";


var lastName = prompt("what is your last Name ?");
console.log(firstName + " " + lastName);

*/



/***************

Basic Operators

*/

/*var now, yearJohn, yearMark;
now = 2018;

yearMark = now - 33;
yearJohn = now - 28;

console.log(yearJohn);




*/

/********************************************
Operator Precedence
*/


/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula:
 BMI = mass / height^2 = mass / (height * height).
  (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/
/*


*/


/*

//1. Store Mark's and John's mass and height in variables


var heightJohn, massJohn, heightMark, massMark;
heightJohn = 1.95;
massJohn = 88;
heightMark = 1.77;
massMark = 75;

//2. Calculate both their BMIs

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);


//3. Create a boolean variable containing information about whether Mark has a higher BMI than John.

var isMarkFatter = BMIMark > BMIJohn;


//4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").


console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkFatter);
console.log(BMIJohn);
console.log(BMIMark);


*/

/******************************************
If else statements
*/


/*var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
  console.log(firstName +  'is Married!' );
} else {
  console.log(firstName +  'is Single :(' );
}


var isMarried = true;



if (isMarried){
  console.log(firstName +  'is Married!' );
} else {
  console.log(firstName +  'is Single :(' );
}


*/



/******************************************
Ternary Oerator and switch statement
*/
/*
var firstName = 'John';
var age = 16

age > 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

var drink = age > 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks '+ drink );





var job = 'instructor';

switch (job){
  case 'teacher' :
  case 'instructor' :
    console.log("John teaches kids how to code");
    break
  case 'driver' :
    console.log("John drives an uber in Lisbon");
    break
  case 'model' :
    console.log('John poses for magazines');
    break
  default:
    console.log('John does something else');
}


switch (true){
  case age < 13 :
    console.log(firstName + ' is a boy.');
    break
  case age >= 13 && age < 20 :
     console.log(firstName + ' is a teenager.');
    break
  case age >= 20 && age < 30 :
    console.log(firstName + ' is a young man.');
    break
  default:
    console.log(firstName + ' is a man.');
}

*/








/**************************************
Truthy and Falsy Values and Equality Operators
*/

/*var height;
height = [];

if (height || height === 0) {
  console.log('variable is declared');
} else {
  console.log('variable is NOT declared');
}
*/


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams.
 In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀

/**/


//1. Calculate the average score for each team

// var johnsTeamResults = [200, 120, 103]
// var mikesTeamResults = [197, 134, 105]
// var marysTeamResults = [197, 134, 105]


// var johnsTeamAverage = (johnsTeamResults[0] + johnsTeamResults[1] + johnsTeamResults[2])/ 3;
// var mikesTeamAverage = (mikesTeamResults[0] + mikesTeamResults[1] + mikesTeamResults[2])/ 3;
// var marysTeamAverage = (marysTeamResults[0] + marysTeamResults[1] + marysTeamResults[2])/ 3;


// console.log(johnsTeamAverage, mikesTeamAverage, marysTeamAverage)


 // 2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

// johnsTeamAverage > mikesTeamAverage ?  console.log('on average John\'s Team won, their average score was ' + johnsTeamAverage) : console.log('on average Mike\'s Team won, their average score was ' + mikesTeamAverage);

// console.log('on average ' + winnerTeam + " won" );

/*
switch (true){
  case johnsTeamAverage > mikesTeamAverage  &&  johnsTeamAverage > marysTeamAverage :
    console.log('on average John\'s Team won, their average score was ' + johnsTeamAverage)
    break
  case mikesTeamAverage > johnsTeamAverage &&  mikesTeamAverage > marysTeamAverage :
    console.log('on average Mike\'s Team won, their average score was ' + mikesTeamAverage);
    break
  case marysTeamAverage > johnsTeamAverage &&  marysTeamAverage > mikesTeamAverage :
    console.log('on average Mary\'s Team won, their average score was ' + marysTeamAverage);
    break
  case marysTeamAverage > johnsTeamAverage &&  marysTeamAverage === mikesTeamAverage:
    console.log('There was a draw of ' + mikesTeamAverage + " between Mary and Mike");
    break
  case marysTeamAverage > mikesTeamAverage &&  marysTeamAverage === johnsTeamAverage:
    console.log('There was a draw of ' + maryTeamAverage + " between Mary and john");
    break
  case johnTseamAverage > mikesTeamAverage &&  mikesTeamAverage === johnsTeamAverage:
    console.log('There was a draw of ' + johnTeamAverage  + " between Mike and john");
    break

}



*/


/****************************************************
Functions

*/

/*function calculateAge(birthYear){
  return 2019 - birthYear;
};

var ageJohn = calculateAge(1991);
var ageMary = calculateAge(1969);
var ageAmanda = calculateAge(1992);

console.log(ageJohn, ageAmanda, ageMary);





function yearsUntilRetirement(year, firstName){
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0){
    console.log(firstName + ' retires in ' + retirement ' years.');
  } else {
    console.log(firstName + 'is retired');
  }

}

yearsUntilRetirement(1992, 'lucy');*/





/****************************************************
Function Expressions

*/





/*var whatDoYouDo = function(job, firstName){
  switch (job){
    case 'teacher' :
    case 'instructor' :
      return firstName + " teaches kids how to code";
  case 'driver' :
      return firstName + " drives an uber in Lisbon";
  case 'model' :
    return firstName + ' poses for magazines';
  default:
    return firstName + ' does something else';
  }
};



console.log(whatDoYouDo('teacher', 'John'))
*/





/****************************************************
Arrays

*/




/*var names = ['John', 'Mark', 'Jane']
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);


//chage data in array
names[1] = 'Ben';

names[5] = "Mary";

console.log(names);
// names would be ["John", "Ben", "Jane", empty × 2, "Mary"]


names[names.length] = "Mary";
//appends at the end


var john = ['John', 27, false, 'teacher'];



john.push('blue');
// adds element at the end of the array

john.unshift('Mr');
// adds element at the end of the array

john.pop();
//removes element of the end

john.shift();
//removes element of the beggining

john.index0f(27);
//returns index of the element in the array, if it's not in the array, it returns -1
// useful to check if an element is in an array


var isDesigner = john.index0f('designer') === -1 ? 'John is NOT a designer' : 'John is a designer' ;

console.log(isDesigner);

*/



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than $50,
15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/


/*var tips = []
var paidAmounts = []
var tip, paidAmount

function tipCalculator(bill){
  if (bill < 50 ){
    tip = bill * 0.2;
    paidAmount = bill * 0.2 + bill
  } else if (bill >= 50  && bill < 200){
    tip = bill * 0.15;
    paidAmount = bill * 0.15 + bill
  } else {
    tip = bill * 0.1;
    paidAmount = bill * 0.1 + bill
  }
  tips.push(tip);
  paidAmounts.push(paidAmount)
}


tipCalculator(124);
tipCalculator(48);
tipCalculator(268);

console.log(tips, paidAmounts);

*/




/*****************************
* Objects and properties
*/

/*var john = {
  firstName: 'John',
  lastName:'Smith',
  birthYear: 1990,
  family: ['Jane', 'Marc', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
};

console.log(john);

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear'
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true
console.log(john);




var jane = new Object();

jane.name = 'Jane';
jane.birthYear = 1990;
jane['lastName'] = 'Smith';
console.log(jane);

*/



/*****************************
* Objects and methods
*/


/*var john = {
  firstName: 'John',
  lastName:'Smith',
  birthYear: 1990,
  family: ['Jane', 'Marc', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function(){
   this.age = 2018 - this.birthYear;
  }
};

//And Execute the function!!!

john.calcAge();


//
console.log(john);
*/





/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs.
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/



//1. For each of them, create an object with properties for their full name, mass, and height


/*var john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 85,
  height: 1.95,
  calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}

var mark = {
  firstName: 'Mark',
  lastName: 'Twain',
  mass: 57,
  height: 1.74,
  calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
}
//2. Then, add a method to each object to calculate the BMI.
//Save the BMI to the object and also return it from the method.






//3. In the end, log to the console who has the highest BMI,
//together with the full name and the respective BMI.
//Don't forget they might have the same BMI.


function whoHighestBMI(firstPerson, secondPerson){
  if (firstPerson.calcBMI() > secondPerson.calcBMI()){
    console.log( firstPerson.firstName + " BMI is the highest, it's " + firstPerson.BMI);
  } else if (secondPerson.BMI > firstPerson.BMI){
    console.log (secondPerson.firstName + " BMI is the highest, it's " + secondPerson.BMI);
  } else {
    console.log("there is a draw");
  }
};


whoHighestBMI(john, mark);*/




/*****************************
* Loops and iterators
*/




// for (var i = 0; i < 10; i++ ){
//   console.log(i);
// }



// var john = ["John", "Ben", "Jane", 'bob', "Mary"]

// for (var i = 0; i < john.length; i++ ){
//   console.log(john[i]);
// }



/*var i = 0
while ( i < john.length){
  console.log(john[i]);
  i++
}

*/

/*
var john = ["John", "Ben", 1990, false, "Mary"]

for (var i = john.length - 1 ; i >= 0 ; i-- ){

  console.log(john[i]);
}


var john = ["John", "Ben", 1990, false, "Mary"]

for (var i = 0; i < john.length; i++ ){
  if (typeof john[i] !== 'string') break;
  console.log(john[i]);
}

*/
/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants.
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50,
 15% when the bill is between $50 and $200,
 and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip).
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


/*1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations

*/

var john = {
  billValues: [124, 48, 268, 180, 42],
  tips: [],
  paidBills: [],
  calcTip: function(){
    for (var i = 0 ; i < this.billValues.length ; i++){
      var percentage;
      var bill = this.billValues[i];
      if (bill < 50 ){
        percentage = 0.2;
      } else if (bill >= 50  && bill < 200){
        percentage = 0.15;
      } else {
        percentage = 0.1;
      };
      this.tips[i] = bill * percentage;
      this.paidBills[i] = this.tips[i] + bill;
    }
  }
};

john.calcTip()
console.log(john.tips);
console.log(john.tips.length);
console.log(john.paidBills);
console.log(john.paidBills.length);



//Mark's Family
// 5. Implement the same functionality as before, this time using Mark's tipping rules
/*6. Create a function (not a method) to calculate the average of a given array of tips.
HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)

*/


var mark = {
  billValues: [77, 365, 110, 45],
  tips: [],
  paidBills: [],
  calcTip: function(){
    for (var i = 0 ; i < this.billValues.length ; i++){
      if (this.billValues[i] < 100 ){
        this.tips[i] = this.billValues[i] * 0.2;
      } else if (this.billValues[i] >= 100  && this.billValues[i] < 300){
        this.tips[i] = this.billValues[i] * 0.10;
      } else {
        this.tips[i] = this.billValues[i] * 0.25;
      };
      this.paidBills[i] = this.tips[i] + this.billValues[i];
    }
  }
};

mark.calcTip()
console.log(mark.tips);
console.log(mark.tips.length);
console.log(mark.paidBills);
console.log(mark.paidBills.length);




function averageTip(tips){
  var sum = 0;
  for( var i = 0 ; i < tips.length; i++){
    sum += tips[i];
  }
   return  sum / tips.length;

}





mark.average = averageTip(mark.tips);
console.log(mark);

john.average = averageTip(john.tips);
console.log(john);



// var johnAverage = averageTip(john.tips);
// console.log(johnAverage);











