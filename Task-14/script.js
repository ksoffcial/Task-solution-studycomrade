// Create parameterized method/function to multiply 3 numbers

function getMultiply(a, b, c) {
    console.log(a * b * c);
}

getMultiply(2, 3, 4);

//  create parameterized method to divide 2 numbers

function getdiv(a, b) {
    console.log(a / b)
}
getdiv(10, 5);

// 3. create a method to add background color to div element

let div = document.querySelector(".div");
let color = true;
div.addEventListener("click", () => {
    if (color == true) {
        div.style.background = "blue";
        color = false;
    } else {
        color = true;
        div.style.background = "black";
    }
})

let div2 = document.querySelector(".div2");

let r = Math.ceil(Math.random()*255);
let g = Math.ceil(Math.random()*255);
let b = Math.ceil(Math.random()*255);

div2.style.background = `rgb(${r},${g},${b})` ;

console.log(`${r},${g},${b}`)
