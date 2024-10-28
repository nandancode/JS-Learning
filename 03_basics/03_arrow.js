const user = {
    username : "nandan",
    price : 100,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()

// user.username = "Abhinandan"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "Arijit"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "Ararvind"
//     console.log(this.username)
// }

// chai()


// const chai = () => {
//     let username = "raj"
//     // console.log(this.username)
//     console.log(this)
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3,4))


