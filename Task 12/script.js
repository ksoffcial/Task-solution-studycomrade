// extract first five letters from a string
let str = "matlabi duniya";
console.log(str.slice(0,5))

// get the length of a string and make it uppercase
console.log(str.length);
console.log(str.toUpperCase());

// take a string, make it lowercase and trim it
let str2 = " biji jdo ";
console.log(str2);
console.log(str2.toLocaleLowerCase());
console.log(str2.trim());

// replace specified word in a string
let newstr = str.replace("matlabi","jalim");
console.log(newstr)

//  random statements in implicit coercion e.g. (89 + 'hello' + 90 / 9)
console.log(89+'hello'+90/9)