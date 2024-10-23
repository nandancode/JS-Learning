"use strict"

let score = "33abc"

// console.log(typeof score)

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

/*
it will work fine if score contains all numeric. if string is present it will be NaN. for boolean it will be 1 or 0. for null, it will be 0. for undefined it will be undefine. but note that after conversion the typeof will always be number.
*/


let isLogged = -9

let booleanIsLogged = Boolean(isLogged)

console.log(booleanIsLogged)


/*
anything other than 0 will be true.
empty string will be false, rest true
*/

let str1 = "hello"
let str2 = " Abhinandan"

console.log(str1 + str2)