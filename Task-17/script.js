//   Display 3 cards in a row through js

let main = document.querySelector(".container");


let product = [
    {
        name:"laptop",
        price:"40,000",
        desc:"This is the first selling laptop"
    },
    {
        name:"iphone 16 pro",
        price:"90000",
        desc:"It has very unique features"
    },
    {
        name:"Zebronic keybords",
        price:"999",
        desc:"very comfortable to use this "
    }
];

 
product.map((item)=>{
    let divTag = document.createElement("div");
    divTag.classList.add("card")
    divTag.innerHTML = `
             <h1>${item.name}</h1>
            <h3>Price:- ${item.price}</h3>
            <p>${item.desc}</p>
    
    `
    main.appendChild(divTag);
})