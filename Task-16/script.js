// display even numbers upto n number (ask user for number)
// let ulTag = document.querySelector("ul")

// let n = prompt("Enter number");

// for(let i=0; i<=n; i=i+2){
//    let liTag = document.createElement("li");
//    ulTag.appendChild(liTag);
//    liTag.innerText = i;
// }


// ask user for the input, whether char is vowel or consonant

// let alpha = prompt("Enter your char");

// if(alpha == "a" || alpha == "e" || alpha == "i" || alpha=="o" || alpha=="u"){
//     console.log(alpha, "is vowel")

// }
// else{
//     console.log(alpha,"is consonant ")
// }


// count of even and odd number from 1 to 999

let evenCount = 0;
for(let i=2; i<=999; i=i+2){
    evenCount++;
}
console.log(evenCount);



let oddCount = 0;
for(let i=1; i<=999; i=i+2){
    oddCount++;
}
console.log(oddCount);


// . count occurrence of a particular character in a string (hello: count of l is 2):


let str = "hello";

let countOfL = 0;
for( let char of str){
    // console.log(char)
    if(char == "l"){
        countOfL++;
    }
}
console.log(countOfL);


//  sum and average of array elements [1, 9, 8];

let arr = [1,9,8];

let sum=0;

for(let ele of arr){
    sum = sum+ele;
}
console.log("sum of arr", sum);

let avg = sum / arr.length;
console.log("avg of arr", avg)


// largest number in an array (do with loops)

let arr3 = [10,25,63,78,99];

let largNum = Math.max(...arr3);
console.log("Largest num in arr3",largNum);