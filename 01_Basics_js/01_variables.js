const rollId = 41
let accEmail ="ashish@gmail.com"
var accPass = 12344
 
accEmail = "gd@gmail.com" //  By Default let 

let personContact ; // If we Dont inisitalise a value of the variable the by default it comes under "undefined"

// rollId = 11 // By Using Const We Cannnot Modify
// console.log(rollID) // for This We Cannot Print This 

console.log(rollId)
 
accEmail = "Gd@gmail.com" //By Using Const We Can Modify 

console.log(accEmail) 

accPass = 898889 //By Using Const We Can Modify

console.log(accPass)

console.table([accEmail,accPass,rollId,personContact])

/*
prefer Not to Use Var 
because of issues in Block Scope and functional Scope 
*/