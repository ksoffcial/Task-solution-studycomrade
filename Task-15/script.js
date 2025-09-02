//  . given number is multiple of 3 or not e.g.10900

let number = 10900;

if(number/3 === 0){
    console.log("yes, 10900 is the multiple of 3");
}else{
    console.log("not a multiple of 3")
}

// check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not

let str = "i am learning js ";

if(str.includes("js")){
    console.log("yes, js exist in i am learning js ")
}
else{
    console.log("not exist")
}


// calculate complex interest ((p/r )* t) / 100 ): take principle, rate and time from user

let principle = prompt("Enter the principle");
let rate = prompt("Rate of the interest");
let time = prompt("How much time taken");


let intAmt = (((principle/rate)*time)/100);
console.log(intAmt)