// # datatypes-summary.js
// # Summary of Data Types in JavaScript 

// # Primitive Data Types

// 7 Types of Data in JavaScript
// =============================
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (ES2015)
// 7. BigInt (ES2020)

const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const Another_id = Symbol('123')

console.log(id === Another_id) // false

const bigNumber = 1234567890123456789012345678901234567890n

// # Non-Primitive Data Type / Reference Data Type
// =============================
// 1. Object
// 2. Array
// 3. Function


const heros = ['shaktiman', 'kriss', 'Flying Jaat'] // Array
let myobj = {  
    name: "gd",    
    age: 20,
}

const myFunction = function() {
    console.log("Hello World")
}



// **************************************************


// Stack (Primitve) , Heap  (Non-Primitve) 


let MyIg_Name = "gd" // Stack

let anotherName = MyIg_Name // Stack
anotherName = "new gd"

console.log(MyIg_Name) // gd
console.log(anotherName) // new gd


let user  = {
    email: "gd@example.com",
    upi : "gd@okicici"
}
 

let user2 = user // Heap

user2.email = "newgd@example.com"

console.log(user.email) // newgd@example.com
console.log(user2.email) // newgd@example.com