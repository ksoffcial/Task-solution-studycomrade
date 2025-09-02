// Array and objects

//  create an object for animal, car
const cow = {
    name: "jjdujs",
    color: "red",
}

const car = {
    name: "BMW",
    founder: "Franz",
    color: "carbon black"
}

//  reverse a string (use array method)

let str = "matlabi duniya";


//  find the highest and lowest value in array

let arr = [20, 79, 87, 99, 121];

console.log(Math.min(...arr));
console.log(Math.max(...arr));


let para1 = document.querySelector('#item1');
// let para2 = document.querySelector('#item2');
// let para3 = document.querySelector('#item3');
let cars = ["BMW", "Audi", "kia", "Hyndai"];

// para1.innerHTML=cars[0];
// para2.innerHTML=cars[1];
// para3.innerHTML=cars[3];

cars.forEach((Elem, idx) => {
    let newEle = document.createElement("li");
    newEle.textContent = Elem;
    para1.appendChild(newEle);
})