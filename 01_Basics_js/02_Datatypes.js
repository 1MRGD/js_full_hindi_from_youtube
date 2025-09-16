"use strict" // Treat all the js code as updated as the Newer Version 



// alert("Hello") // we are using Node js Not using Browser


/*alert("Hello") doesn’t work in Node.js because:

alert() is a browser-specific function that shows a popup message in a web page.

Node.js runs outside of a browser (on your computer, like a server), 
so it doesn’t have a DOM or any browser-specific APIs like alert, document, window, etc. */

//======================================================================================================================================================================================


console.log(3 +
    3
) ;   // code readeability should be high


console.log("GD");



// let name = "GD"
// let age = 20
// let isLoggedIn = false 
// let state;

// number => 2 to power 53 
//bigint 
//string => ""
//boolean => true/false
//null =>standalone value 
//undefined  


/*
Primitive data types are the basic building blocks and are stored directly by value.
They include:

String – used for text. Example: "Hello"

Number – used for numbers, both integers and decimals. Example: 42, 3.14

BigInt – used for very large numbers beyond the safe number limit. Example: 123n

Boolean – used for true or false values. Example: true, false

Undefined – means a variable is declared but no value is assigned yet.

Null – represents an intentional empty value.

Symbol – a unique value often used as a key for object properties.

Non-primitive (reference) data types are more complex and are stored by reference (they point to memory locations).
They include:

Object – a collection of key-value pairs.

Array – a special kind of object used to store lists of values.

Function – blocks of code that can be reused.

Other objects like Date, Map, Set, WeakMap, WeakSet, and Promise which are built-in for special purposes. 
*/


let name = "Ashish";       // String
let age = 21;              // Number
let bigNumber = 123456789012345678901234567890n; // BigInt
let isStudent = true;      // Boolean
let nothing = null;        // Null
let notAssigned;           // Undefined
let id = Symbol("id");     // Symbol



console.log(typeof name);  // "string"
console.log(typeof bigNumber); // "bigint"
// console.log(typeof user);  // "object"
console.log(typeof greet); // "function"















