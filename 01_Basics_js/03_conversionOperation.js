let Score = 33
let Score1 = "33abc"
let Score2 =  null

console.log(typeof Score);//number
console.log(typeof (Score)); //number


let valueInNumber = Number(Score)
console.log(typeof Score);//number
console.log(typeof valueInNumber);  //number
console.log(valueInNumber) //33

let valueInNumber_1 = Number(Score1)
console.log(typeof Score1);//string
console.log(typeof valueInNumber_1); //number
console.log(valueInNumber_1) //NaN

let valueInNumber_2 = Number(Score2)
console.log(typeof Score2);//object
console.log(typeof valueInNumber_2); //number
console.log(valueInNumber_2) //0


//"33" => 33
//"33abc" => Nan
// true=>1 ; false=>0 

//let isLoggedIn = 1 //true
//let isLoggedIn = "GD" //true


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);











