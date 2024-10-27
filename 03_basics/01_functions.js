function sayMyName (){
    console.log("N")
    console.log("A")
    console.log("N")
    console.log("D")
    console.log("A")
    console.log("N")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// addTwoNumbers(3, 4)


function addTwoNumbers(number1, number2){
    const result =  number1 + number2
    return result
}

// console.log(addTwoNumbers(3, 4))

function userLoggedInMessage(username = 'nandan'){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} is logged in`
}

// console.log(userLoggedInMessage("Abhinandan"))

function calculateCartprice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartprice(10,20, 30, 40, 50))


const User = {
    name : "nandan",
    price : 50
}

function printObejct(getObject){
    console.log(`Hi ${getObject.name}, you are paying ${getObject.price}`)
}

// printObejct(User)

printObejct({
    name : "Abhinandan",
    price : 100
})