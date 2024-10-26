const myArr = [1, 2, 3]
const myArr2 = [4, 5]

// myArr.push(myArr2)
// console.log(myArr)

// myArr3 = myArr.concat(myArr2)

// console.log(myArr3)


// myArr3 = [...myArr, ...myArr2]
// console.log(myArr3)


const anotherArray = [1, 2, 3, [4, 5], 6, 7, [8, 9, [10, 11], 12]]

// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray)

console.log(Array.isArray("Abhinandan"))
console.log(Array.from("Abhinandan"))
console.log(Array.from({name : "Abhinandan"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))



