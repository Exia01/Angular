// 1
// let myNum: Number;
// // changed to number
// myNum = 0;

// myNum = 9;

// 2 
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 // added 9 as a string 
 console.log(sayHello("9!"));

 //3

 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name? //type null?
 console.log(fullName("Jimbo", "Jones", null));

 //4
 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
//  function graduate(ninja: Student){
//     return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
//  }
//  const christine = {
//     firstName: "Christine",
//     lastName: "Yang",
//     belts: 2
//  }
//  const jay = {
//     firstName: "Jay",
//     lastName: "Patel",
//     belts: 4 // this was missing the s
//  }
//  // This seems to work fine:
//  console.log(graduate(christine));
//  // This one has problems:
//  console.log(graduate(jay));
 
 //5 
 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("Shane", "John");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = { 
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing",
 }

 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));
 

 //6 
 var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x ,y => x * y;
console.log(multiply(4));
var math = (x, y) => let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
