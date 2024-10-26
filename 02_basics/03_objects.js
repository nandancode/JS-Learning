//singleton
//objects.create


//object literal

const mySym = Symbol("key1")

const JsUser = {
    name : "Abhinandan",
    "full name" : "Abhinandan Singh",
    email :"singh.abhinandan1503@gmail.com",
    age : 27,
    isLoggedin : false,
    lastLoggedIn : ["Monday","tuesday"],
    // mySym : "mykey1"
    [mySym] : "myKey1"
}

// console.log(JsUser.age)
// console.log(JsUser["age"])
// //console.log(JsUser.fullname) this is incorrect
// console.log(JsUser["full name"])
// //console.log(JsUser.mySym)
// console.log(JsUser[mySym])

// console.log(JsUser)


//Object.freeze is used to not change the values of any object property

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello user ${this.name}`)
}


// console.log(JsUser.greeting)
// console.log(JsUser.greetingTwo)
// the above returns reference to functions

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())