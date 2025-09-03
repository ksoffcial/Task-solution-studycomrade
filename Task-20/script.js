// . get the value of the first element in an array that has value greater than 20

const arr = [10, 15,20, 25, 30, 5];

const result = arr.find(num => num > 20);
console.log(result);


// get the value of the first element in an array that has value less than 20
const result2  = arr.find(num => num < 20);
console.log(result2);

//  check element is odd or even in an array [90, 89, 56, 45]

const arr2 =[90, 89, 56, 45];

arr2.forEach(num =>{
    if(num % 2 === 0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
})